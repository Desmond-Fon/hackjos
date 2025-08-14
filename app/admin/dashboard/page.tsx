"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../utils/supabase";
import DetailModal from "../../components/admin/DetailModal";

type ApplicantData = {
  id: string;
  full_name: string;
  email: string;
  phone_number: string;
  category: string;
  created_at: string;
  [key: string]: any;
};

type TabType = "applicants" | "attendees" | "contacts";

type SortField = "full_name" | "email" | "category" | "created_at";
type SortDirection = "asc" | "desc";

interface TableConfig {
  headers: string[];
  fields: string[];
  searchFields: string[];
}

const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const router = useRouter();
  
  // State management
  const [activeTab, setActiveTab] = useState<TabType>("applicants");
  const [applicants, setApplicants] = useState<ApplicantData[]>([]);
  const [attendees, setAttendees] = useState<ApplicantData[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Enhanced functionality state
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<SortField>("created_at");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  
  // Modal state
  const [selectedItem, setSelectedItem] = useState<ApplicantData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"applicant" | "attendee" | "contact">("applicant");

  // Table configurations
  const tableConfigs: Record<TabType, TableConfig> = {
    applicants: {
      headers: ["Name", "Email", "Phone", "Category", "Skill", "Has Team", "Date"],
      fields: ["full_name", "email", "phone_number", "category", "skill", "has_team", "created_at"],
      searchFields: ["full_name", "email", "category", "skill"]
    },
    attendees: {
      headers: ["Name", "Email", "Phone", "Category", "Organization", "Profession", "Date"],
      fields: ["full_name", "email", "phone_number", "category", "organization", "profession", "created_at"],
      searchFields: ["full_name", "email", "category", "organization", "profession"]
    },
    contacts: {
      headers: ["Name", "Email", "Message", "Date"],
      fields: ["full_name", "email", "message", "created_at"],
      searchFields: ["full_name", "email", "message"]
    }
  };

  // Fetch data with error handling and retry logic
  const fetchData = useCallback(async (retryCount = 0) => {
    setLoading(true);
    setError(null);

    try {
      const [applicantsResult, attendeesResult, contactsResult] = await Promise.allSettled([
        supabase.from("participant_applications").select("*").order("created_at", { ascending: false }),
        supabase.from("attendee_registrations").select("*").order("created_at", { ascending: false }),
        supabase.from("contact_submissions").select("*").order("created_at", { ascending: false })
      ]);

      // Handle applicants
      if (applicantsResult.status === "fulfilled" && !applicantsResult.value.error) {
        setApplicants(applicantsResult.value.data || []);
      } else {
        console.error("Error fetching applicants:", applicantsResult);
      }

      // Handle attendees
      if (attendeesResult.status === "fulfilled" && !attendeesResult.value.error) {
        setAttendees(attendeesResult.value.data || []);
      } else {
        console.error("Error fetching attendees:", attendeesResult);
      }

      // Handle contacts
      if (contactsResult.status === "fulfilled" && !contactsResult.value.error) {
        setContacts(contactsResult.value.data || []);
      } else {
        console.error("Error fetching contacts:", contactsResult);
      }

      // Check if all failed
      const allFailed = [applicantsResult, attendeesResult, contactsResult].every(
        result => result.status === "rejected" || (result.status === "fulfilled" && result.value.error)
      );

      if (allFailed && retryCount < 3) {
        setTimeout(() => fetchData(retryCount + 1), 1000 * (retryCount + 1));
        return;
      } else if (allFailed) {
        setError("Failed to load data after multiple attempts. Please refresh the page.");
      }

    } catch (err: any) {
      console.error("Unexpected error fetching data:", err);
      if (retryCount < 3) {
        setTimeout(() => fetchData(retryCount + 1), 1000 * (retryCount + 1));
      } else {
        setError(err.message || "An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Get current data based on active tab
  const getCurrentData = useCallback(() => {
    switch (activeTab) {
      case "applicants": return applicants;
      case "attendees": return attendees;
      case "contacts": return contacts;
      default: return [];
    }
  }, [activeTab, applicants, attendees, contacts]);

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    const data = getCurrentData();
    const config = tableConfigs[activeTab];

    // Filter by search term
    let filtered = data;
    if (searchTerm) {
      filtered = data.filter(item =>
        config.searchFields.some(field =>
          String(item[field] || "").toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Sort data
    const sorted = [...filtered].sort((a, b) => {
      const aValue = a[sortField] || "";
      const bValue = b[sortField] || "";
      
      let comparison = 0;
      if (sortField === "created_at") {
        comparison = new Date(aValue).getTime() - new Date(bValue).getTime();
      } else {
        comparison = String(aValue).localeCompare(String(bValue));
      }
      
      return sortDirection === "desc" ? -comparison : comparison;
    });

    return sorted;
  }, [getCurrentData, activeTab, searchTerm, sortField, sortDirection, tableConfigs]);

  // Pagination
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedData, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);

  // Handlers
  const handleLogout = async () => {
    try {
      await signOut();
      router.push("/admin");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSearchTerm("");
    setSelectedItems(new Set());
  };

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
    setCurrentPage(1);
  };

  const handleSelectItem = (id: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedItems.size === paginatedData.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(paginatedData.map(item => item.id)));
    }
  };

  const showDetails = (item: ApplicantData, type: TabType) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    setModalType(type === "applicants" ? "applicant" : type === "attendees" ? "attendee" : "contact");
  };

  const renderTableCell = (item: ApplicantData, field: string) => {
    switch (field) {
      case "has_team":
        return item.has_team ? "Yes" : "No";
      case "created_at":
        return new Date(item.created_at).toLocaleDateString();
      case "message":
        const message = item.message || "";
        return message.length > 50 ? `${message.substring(0, 50)}...` : message;
      default:
        return item[field] || "-";
    }
  };

  const renderTable = () => {
    if (loading) {
      return (
        <div className="py-20 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
          <p className="mt-4 text-gray-600">Loading data...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="py-20 text-center">
          <div className="text-red-500 mb-4">{error}</div>
          <button
            onClick={() => fetchData()}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Retry
          </button>
        </div>
      );
    }

    if (filteredAndSortedData.length === 0) {
      return (
        <div className="py-20 text-center">
          <p className="text-gray-500">
            {searchTerm ? `No results found for "${searchTerm}"` : "No data found."}
          </p>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="mt-2 text-green-600 hover:text-green-800"
            >
              Clear search
            </button>
          )}
        </div>
      );
    }

    const config = tableConfigs[activeTab];

    return (
      <>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-50 text-gray-700">
                <th className="py-3 px-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedItems.size === paginatedData.length && paginatedData.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                </th>
                {config.headers.map((header, index) => {
                  const field = config.fields[index] as SortField;
                  const canSort = ["full_name", "email", "category", "created_at"].includes(field);
                  
                  return (
                    <th key={header} className="py-3 px-4 text-left">
                      {canSort ? (
                        <button
                          onClick={() => handleSort(field)}
                          className="flex items-center space-x-1 hover:text-green-600 transition-colors"
                        >
                          <span>{header}</span>
                          {sortField === field && (
                            <span className="text-xs">
                              {sortDirection === "asc" ? "↑" : "↓"}
                            </span>
                          )}
                        </button>
                      ) : (
                        header
                      )}
                    </th>
                  );
                })}
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedData.map((item) => (
                <tr
                  key={item.id}
                  className={`hover:bg-gray-50 transition-colors ${
                    selectedItems.has(item.id) ? "bg-green-50" : ""
                  }`}
                >
                  <td className="py-4 px-4">
                    <input
                      type="checkbox"
                      checked={selectedItems.has(item.id)}
                      onChange={() => handleSelectItem(item.id)}
                      className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                  </td>
                  {config.fields.map((field) => (
                    <td key={field} className="py-4 px-4 text-sm text-gray-900">
                      {renderTableCell(item, field)}
                    </td>
                  ))}
                  <td className="py-4 px-4">
                    <button
                      onClick={() => showDetails(item, activeTab)}
                      className="text-green-600 hover:text-green-800 transition-colors font-medium"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">
                  Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredAndSortedData.length)} of {filteredAndSortedData.length} results
                </span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="border border-gray-300 rounded px-2 py-1 text-sm"
                >
                  <option value={5}>5 per page</option>
                  <option value={10}>10 per page</option>
                  <option value={25}>25 per page</option>
                  <option value={50}>50 per page</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                
                <div className="flex items-center space-x-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNum = currentPage <= 3 ? i + 1 : currentPage - 2 + i;
                    if (pageNum > totalPages) return null;
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-1 text-sm rounded ${
                          currentPage === pageNum
                            ? "bg-green-600 text-white"
                            : "border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-sm text-gray-600 mt-1">
              Manage hackathon applications and event registrations
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm">
              Logged in as <span className="font-medium">{user?.email}</span>
            </span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Tab Navigation with enhanced styling */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { key: "applicants", label: "Hackathon Applicants", count: applicants.length },
              { key: "attendees", label: "Event Attendees", count: attendees.length },
              { key: "contacts", label: "Contact Submissions", count: contacts.length }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key as TabType)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.key
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Enhanced Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1 max-w-md">
              <label htmlFor="search" className="sr-only">Search</label>
              <input
                id="search"
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            {selectedItems.size > 0 && (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  {selectedItems.size} item(s) selected
                </span>
                <button
                  onClick={() => setSelectedItems(new Set())}
                  className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
                >
                  Clear selection
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            {renderTable()}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-auto py-6 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} HackJos Admin Dashboard. All rights reserved.
        </div>
      </footer>
      
      <DetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedItem ? `${selectedItem.full_name}'s Details` : ""}
        data={selectedItem}
        type={modalType}
      />
    </div>
  );
};

export default AdminDashboard;