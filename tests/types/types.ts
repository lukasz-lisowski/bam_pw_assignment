export type ContactUsForm = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  company: string;
  phoneNumber: string;
  topic: Topic;
  message: string;
};

export type Topic = 'info' | 'pr' | 'investor_relations' | 'campus_recruiting' | 'employment_verification';
