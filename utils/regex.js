// Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.
export const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
);

// phoneRegex validates Lithuanian phone numbers:
// - It must start with '+370' (the Lithuanian country code).
// - Followed by 8 digits (total length of 12 characters including '+').
// - Does not allow spaces, dashes, or other separators.
export const phoneRegex = new RegExp("^\\+370\\d{8}$");

// postCodeValidation validates Lithuanian postal codes:
// - It must consist of exactly 5 digits.
// - Does not allow any letters or special characters.
export const postCodeValidation = new RegExp("^\\d{5}$");
