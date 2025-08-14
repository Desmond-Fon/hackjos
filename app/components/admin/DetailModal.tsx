"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { Icon } from "@iconify/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  data: Record<string, any> | null;
  type: "applicant" | "attendee" | "contact";
  onEdit?: (data: Record<string, any>) => void;
  onDelete?: (id: string) => void;
  loading?: boolean;
}

interface FieldConfig {
  key: string;
  label: string;
  type: "text" | "email" | "phone" | "boolean" | "date" | "textarea" | "url";
  fullWidth?: boolean;
  copyable?: boolean;
}

const fieldConfigs: Record<string, FieldConfig[]> = {
  applicant: [
    { key: "full_name", label: "Full Name", type: "text", copyable: true },
    { key: "email", label: "Email Address", type: "email", copyable: true },
    { key: "phone_number", label: "Phone Number", type: "phone", copyable: true },
    { key: "category", label: "Category", type: "text" },
    { key: "skill", label: "Primary Skill", type: "text" },
    { key: "has_team", label: "Has Team", type: "boolean" },
    { key: "team_members", label: "Team Members", type: "textarea", fullWidth: true },
    { key: "idea_description", label: "Project Idea Description", type: "textarea", fullWidth: true },
    { key: "github_profile", label: "GitHub Profile", type: "url", copyable: true },
    { key: "linkedin_profile", label: "LinkedIn Profile", type: "url", copyable: true },
    { key: "portfolio_url", label: "Portfolio URL", type: "url", copyable: true },
    { key: "experience_level", label: "Experience Level", type: "text" },
    { key: "motivation", label: "Motivation", type: "textarea", fullWidth: true },
    { key: "created_at", label: "Application Submitted", type: "date" },
  ],
  attendee: [
    { key: "full_name", label: "Full Name", type: "text", copyable: true },
    { key: "email", label: "Email Address", type: "email", copyable: true },
    { key: "phone_number", label: "Phone Number", type: "phone", copyable: true },
    { key: "category", label: "Attendee Category", type: "text" },
    { key: "organization", label: "Organization", type: "text" },
    { key: "profession", label: "Profession/Role", type: "text" },
    { key: "industry", label: "Industry", type: "text" },
    { key: "experience_years", label: "Years of Experience", type: "text" },
    { key: "interests", label: "Areas of Interest", type: "textarea", fullWidth: true },
    { key: "dietary_requirements", label: "Dietary Requirements", type: "textarea", fullWidth: true },
    { key: "accessibility_needs", label: "Accessibility Needs", type: "textarea", fullWidth: true },
    { key: "created_at", label: "Registration Date", type: "date" },
  ],
  contact: [
    { key: "full_name", label: "Full Name", type: "text", copyable: true },
    { key: "email", label: "Email Address", type: "email", copyable: true },
    { key: "phone_number", label: "Phone Number", type: "phone", copyable: true },
    { key: "subject", label: "Subject", type: "text" },
    { key: "message", label: "Message", type: "textarea", fullWidth: true },
    { key: "inquiry_type", label: "Inquiry Type", type: "text" },
    { key: "created_at", label: "Message Sent", type: "date" },
  ],
};

const DetailModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  data,
  type,
  onEdit,
  onDelete,
  loading = false,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [expandedFields, setExpandedFields] = useState<Set<string>>(new Set());

  // Focus management
  const focusRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    if (isOpen && focusRef.current) {
      focusRef.current.focus();
    }
  }, [isOpen]);

  // Handle escape key and outside clicks
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleClose]);

  // Copy to clipboard functionality
  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(field);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Format value based on field type
  const formatValue = (field: FieldConfig, value: any) => {
    if (value === null || value === undefined || value === "") {
      return "Not provided";
    }

    switch (field.type) {
      case "boolean":
        return value ? "Yes" : "No";
      case "date":
        return new Date(value).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
      case "email":
        return value;
      case "phone":
        return value;
      case "url":
        return value;
      case "textarea":
        return value;
      default:
        return value;
    }
  };

  // Toggle expanded state for long text fields
  const toggleExpanded = (fieldKey: string) => {
    const newExpanded = new Set(expandedFields);
    if (newExpanded.has(fieldKey)) {
      newExpanded.delete(fieldKey);
    } else {
      newExpanded.add(fieldKey);
    }
    setExpandedFields(newExpanded);
  };

  // Render field value with appropriate formatting
  const renderFieldValue = (field: FieldConfig, value: any) => {
    const formattedValue = formatValue(field, value);
    
    if (formattedValue === "Not provided") {
      return <span className="text-gray-400 italic">{formattedValue}</span>;
    }

    // Handle long text fields
    if (field.type === "textarea" && typeof formattedValue === "string" && formattedValue.length > 200) {
      const isExpanded = expandedFields.has(field.key);
      const displayText = isExpanded ? formattedValue : `${formattedValue.substring(0, 200)}...`;
      
      return (
        <div className="space-y-2">
          <p className="whitespace-pre-wrap">{displayText}</p>
          <button
            onClick={() => toggleExpanded(field.key)}
            className="text-green-600 hover:text-green-800 text-sm font-medium"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        </div>
      );
    }

    // Handle URLs
    if (field.type === "url" && formattedValue !== "Not provided") {
      return (
        <a
          href={formattedValue}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-800 underline break-all"
        >
          {formattedValue}
        </a>
      );
    }

    // Handle emails
    if (field.type === "email") {
      return (
        <a
          href={`mailto:${formattedValue}`}
          className="text-green-600 hover:text-green-800 underline"
        >
          {formattedValue}
        </a>
      );
    }

    // Handle phone numbers
    if (field.type === "phone") {
      return (
        <a
          href={`tel:${formattedValue}`}
          className="text-green-600 hover:text-green-800 underline"
        >
          {formattedValue}
        </a>
      );
    }

    return <span className="whitespace-pre-wrap break-words">{formattedValue}</span>;
  };

  if (!isOpen) return null;

  const fields = fieldConfigs[type] || [];
  const relevantFields = fields.filter(field => data && data.hasOwnProperty(field.key));

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Modal header */}
        <div className="px-6 py-4 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h3 id="modal-title" className="text-xl font-semibold text-gray-900">
                {title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {type === "applicant" && "Hackathon Application Details"}
                {type === "attendee" && "Event Registration Details"}
                {type === "contact" && "Contact Form Submission"}
              </p>
            </div>
            <button
              ref={focusRef}
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Close modal"
            >
              <Icon icon="mdi:close" className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Modal content */}
        <div className="px-6 py-6 overflow-y-auto flex-1">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
              <span className="ml-3 text-gray-600">Loading details...</span>
            </div>
          ) : data ? (
            <dl className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              {relevantFields.map((field) => (
                <div
                  key={field.key}
                  className={`${field.fullWidth ? "sm:col-span-2" : ""} ${
                    field.type === "textarea" ? "space-y-3" : "space-y-2"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <dt className="text-sm font-medium text-gray-600">
                      {field.label}
                    </dt>
                    {field.copyable && data[field.key] && (
                      <button
                        onClick={() => copyToClipboard(data[field.key], field.key)}
                        className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded"
                        title="Copy to clipboard"
                      >
                        {copied === field.key ? (
                          <Icon icon="mdi:check" className="h-4 w-4 text-green-600" />
                        ) : (
                          <Icon icon="mdi:content-copy" className="h-4 w-4" />
                        )}
                      </button>
                    )}
                  </div>
                  <dd className="text-sm text-gray-900">
                    {renderFieldValue(field, data[field.key])}
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            <div className="text-center py-12">
              <Icon icon="mdi:alert-circle-outline" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No data available</p>
            </div>
          )}
        </div>

        {/* Modal footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center flex-shrink-0">
          <div className="flex space-x-3">
            {onEdit && data && (
              <button
                onClick={() => onEdit(data)}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <Icon icon="mdi:pencil" className="h-4 w-4 mr-2 inline" />
                Edit
              </button>
            )}
            {onDelete && data?.id && (
              <button
                onClick={() => {
                  if (window.confirm("Are you sure you want to delete this item?")) {
                    onDelete(data.id);
                  }
                }}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <Icon icon="mdi:delete" className="h-4 w-4 mr-2 inline" />
                Delete
              </button>
            )}
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={handleClose}
              className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;