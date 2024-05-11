export const validateDomain = (domain: string): boolean => {
  const domainPattern = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)$/;
  return domainPattern.test(domain);
};

export const validateEmail = (email: string): boolean => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

export const validatePassword = (password: string): boolean => {
  return true;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  return password.length >= 8 && hasUppercase && hasLowercase && hasDigit;
};

export const validatePhoneNumber = (phoneNumber: string): boolean => {
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
  const phonePattern = /^\d{7,}$/;
  return phonePattern.test(cleanedPhoneNumber);
};

export const validateUrl = (url: string): boolean => {
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  return urlPattern.test(url);
};
