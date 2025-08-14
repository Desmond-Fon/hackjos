export interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
  createdAt?: string;
}

export interface ParticipantApplicationData {
  fullName: string;
  email: string;
  phoneNumber: string;
  category: string;
  skill: string;
  hasTeam: boolean;
  teamMembers?: string;
  ideaDescription: string;
  createdAt?: string;
}

export interface AttendeeRegistrationData {
  fullName: string;
  email: string;
  phoneNumber: string;
  category: string;
  organization: string;
  profession: string;
  createdAt?: string;
}
