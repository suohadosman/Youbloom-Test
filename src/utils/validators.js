
export const validatePhone = (number) => {
    if (!/^[0-9+]*$/.test(number)) {
      return { valid: false, error: "Only numbers allowed" };
    }
  
    if (!number.startsWith("+2547")) {
      return { valid: false, error: "Phone number must start with +2547" };
    }
  
    if (number.length !== 13) {
      return { valid: false, error: "Phone number must be exactly 13 digits" };
    }
  
    return { valid: true, error: "" };
  };
  