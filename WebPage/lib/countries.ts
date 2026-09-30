export interface Country {
  code: string; // ISO 3166-1 alpha-2
  name: string;
  dialCode: string;
  flag: string;
  placeholder: string;
  lengths: number[]; // allowed national number digit lengths
  pattern?: RegExp; // validation regex for national number digits
  formatHelper?: (digits: string) => string;
  example: string;
  isPopular?: boolean;
}

export const COUNTRIES: Country[] = [
  // Popular / Key Target Markets
  {
    code: "IN",
    name: "India",
    dialCode: "+91",
    flag: "🇮🇳",
    placeholder: "98765 43210",
    lengths: [10],
    pattern: /^[6-9]\d{9}$/,
    example: "10-digit mobile starting with 6, 7, 8, or 9",
    isPopular: true,
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    dialCode: "+971",
    flag: "🇦🇪",
    placeholder: "50 123 4567",
    lengths: [9],
    pattern: /^5\d{8}$/,
    example: "9-digit mobile starting with 5 (e.g. 50 123 4567)",
    isPopular: true,
  },
  {
    code: "US",
    name: "United States",
    dialCode: "+1",
    flag: "🇺🇸",
    placeholder: "202 555 0123",
    lengths: [10],
    pattern: /^[2-9]\d{2}[2-9]\d{6}$/,
    example: "10-digit number (e.g. 202 555 0123)",
    isPopular: true,
  },
  {
    code: "GB",
    name: "United Kingdom",
    dialCode: "+44",
    flag: "🇬🇧",
    placeholder: "7911 123456",
    lengths: [10],
    pattern: /^7\d{9}$/,
    example: "10-digit mobile starting with 7",
    isPopular: true,
  },
  {
    code: "SG",
    name: "Singapore",
    dialCode: "+65",
    flag: "🇸🇬",
    placeholder: "8123 4567",
    lengths: [8],
    pattern: /^[89]\d{7}$/,
    example: "8-digit mobile starting with 8 or 9",
    isPopular: true,
  },
  {
    code: "AU",
    name: "Australia",
    dialCode: "+61",
    flag: "🇦🇺",
    placeholder: "412 345 678",
    lengths: [9],
    pattern: /^4\d{8}$/,
    example: "9-digit mobile starting with 4",
    isPopular: true,
  },
  {
    code: "CA",
    name: "Canada",
    dialCode: "+1",
    flag: "🇨🇦",
    placeholder: "416 555 0123",
    lengths: [10],
    pattern: /^[2-9]\d{2}[2-9]\d{6}$/,
    example: "10-digit number (e.g. 416 555 0123)",
    isPopular: true,
  },
  {
    code: "SA",
    name: "Saudi Arabia",
    dialCode: "+966",
    flag: "🇸🇦",
    placeholder: "50 123 4567",
    lengths: [9],
    pattern: /^5\d{8}$/,
    example: "9-digit mobile starting with 5",
    isPopular: true,
  },
  {
    code: "QA",
    name: "Qatar",
    dialCode: "+974",
    flag: "🇶🇦",
    placeholder: "3312 3456",
    lengths: [8],
    pattern: /^[3567]\d{7}$/,
    example: "8-digit number starting with 3, 5, 6, or 7",
    isPopular: true,
  },
  {
    code: "KW",
    name: "Kuwait",
    dialCode: "+965",
    flag: "🇰🇼",
    placeholder: "9123 4567",
    lengths: [8],
    pattern: /^[4569]\d{7}$/,
    example: "8-digit number starting with 4, 5, 6, or 9",
    isPopular: true,
  },
  {
    code: "OM",
    name: "Oman",
    dialCode: "+968",
    flag: "🇴🇲",
    placeholder: "9123 4567",
    lengths: [8],
    pattern: /^[79]\d{7}$/,
    example: "8-digit number starting with 7 or 9",
    isPopular: true,
  },
  {
    code: "BH",
    name: "Bahrain",
    dialCode: "+973",
    flag: "🇧🇭",
    placeholder: "3612 3456",
    lengths: [8],
    pattern: /^[36]\d{7}$/,
    example: "8-digit number starting with 3 or 6",
    isPopular: true,
  },
  {
    code: "DE",
    name: "Germany",
    dialCode: "+49",
    flag: "🇩🇪",
    placeholder: "151 23456789",
    lengths: [10, 11],
    pattern: /^1[5-7]\d{8,9}$/,
    example: "10 to 11-digit mobile starting with 15, 16, or 17",
    isPopular: true,
  },
  {
    code: "FR",
    name: "France",
    dialCode: "+33",
    flag: "🇫🇷",
    placeholder: "6 12 34 56 78",
    lengths: [9],
    pattern: /^[67]\d{8}$/,
    example: "9-digit mobile starting with 6 or 7",
    isPopular: true,
  },

  // Alphabetical World Countries
  {
    code: "AF",
    name: "Afghanistan",
    dialCode: "+93",
    flag: "🇦🇫",
    placeholder: "70 123 4567",
    lengths: [9],
    example: "9-digit phone number",
  },
  {
    code: "AT",
    name: "Austria",
    dialCode: "+43",
    flag: "🇦🇹",
    placeholder: "664 1234567",
    lengths: [10, 11],
    example: "10 to 11-digit phone number",
  },
  {
    code: "BD",
    name: "Bangladesh",
    dialCode: "+880",
    flag: "🇧🇩",
    placeholder: "1712 345678",
    lengths: [10],
    pattern: /^1[3-9]\d{8}$/,
    example: "10-digit mobile starting with 1",
  },
  {
    code: "BE",
    name: "Belgium",
    dialCode: "+32",
    flag: "🇧🇪",
    placeholder: "470 12 34 56",
    lengths: [9],
    pattern: /^4\d{8}$/,
    example: "9-digit mobile starting with 4",
  },
  {
    code: "BR",
    name: "Brazil",
    dialCode: "+55",
    flag: "🇧🇷",
    placeholder: "11 98765 4321",
    lengths: [10, 11],
    pattern: /^[1-9]{2}9?\d{8}$/,
    example: "10 or 11-digit phone number",
  },
  {
    code: "CH",
    name: "Switzerland",
    dialCode: "+41",
    flag: "🇨🇭",
    placeholder: "79 123 45 67",
    lengths: [9],
    pattern: /^7[5-9]\d{7}$/,
    example: "9-digit mobile starting with 7",
  },
  {
    code: "CN",
    name: "China",
    dialCode: "+86",
    flag: "🇨🇳",
    placeholder: "138 0000 0000",
    lengths: [11],
    pattern: /^1[3-9]\d{9}$/,
    example: "11-digit mobile starting with 1",
  },
  {
    code: "DK",
    name: "Denmark",
    dialCode: "+45",
    flag: "🇩🇰",
    placeholder: "20 12 34 56",
    lengths: [8],
    example: "8-digit phone number",
  },
  {
    code: "EG",
    name: "Egypt",
    dialCode: "+20",
    flag: "🇪🇬",
    placeholder: "10 1234 5678",
    lengths: [10],
    pattern: /^1[0125]\d{8}$/,
    example: "10-digit mobile starting with 1",
  },
  {
    code: "ES",
    name: "Spain",
    dialCode: "+34",
    flag: "🇪🇸",
    placeholder: "612 34 56 78",
    lengths: [9],
    pattern: /^[67]\d{8}$/,
    example: "9-digit mobile starting with 6 or 7",
  },
  {
    code: "FI",
    name: "Finland",
    dialCode: "+358",
    flag: "🇫🇮",
    placeholder: "40 123 4567",
    lengths: [9, 10],
    example: "9 or 10-digit phone number",
  },
  {
    code: "HK",
    name: "Hong Kong",
    dialCode: "+852",
    flag: "🇭🇰",
    placeholder: "9123 4567",
    lengths: [8],
    pattern: /^[4-9]\d{7}$/,
    example: "8-digit phone number",
  },
  {
    code: "ID",
    name: "Indonesia",
    dialCode: "+62",
    flag: "🇮🇩",
    placeholder: "812 3456 7890",
    lengths: [9, 10, 11, 12],
    pattern: /^8\d{8,11}$/,
    example: "9 to 12-digit mobile starting with 8",
  },
  {
    code: "IE",
    name: "Ireland",
    dialCode: "+353",
    flag: "🇮🇪",
    placeholder: "87 123 4567",
    lengths: [9],
    pattern: /^8[3-9]\d{7}$/,
    example: "9-digit mobile starting with 8",
  },
  {
    code: "IL",
    name: "Israel",
    dialCode: "+972",
    flag: "🇮🇱",
    placeholder: "50 123 4567",
    lengths: [9],
    pattern: /^5\d{8}$/,
    example: "9-digit mobile starting with 5",
  },
  {
    code: "IT",
    name: "Italy",
    dialCode: "+39",
    flag: "🇮🇹",
    placeholder: "320 123 4567",
    lengths: [9, 10],
    pattern: /^3\d{8,9}$/,
    example: "9 or 10-digit mobile starting with 3",
  },
  {
    code: "JP",
    name: "Japan",
    dialCode: "+81",
    flag: "🇯🇵",
    placeholder: "90 1234 5678",
    lengths: [10],
    pattern: /^[789]0\d{8}$/,
    example: "10-digit mobile starting with 70, 80, or 90",
  },
  {
    code: "KE",
    name: "Kenya",
    dialCode: "+254",
    flag: "🇰🇪",
    placeholder: "712 345678",
    lengths: [9],
    pattern: /^[17]\d{8}$/,
    example: "9-digit mobile starting with 1 or 7",
  },
  {
    code: "KR",
    name: "South Korea",
    dialCode: "+82",
    flag: "🇰🇷",
    placeholder: "10 1234 5678",
    lengths: [9, 10],
    pattern: /^10\d{7,8}$/,
    example: "9 or 10-digit mobile starting with 10",
  },
  {
    code: "LK",
    name: "Sri Lanka",
    dialCode: "+94",
    flag: "🇱🇰",
    placeholder: "71 234 5678",
    lengths: [9],
    pattern: /^7\d{8}$/,
    example: "9-digit mobile starting with 7",
  },
  {
    code: "MY",
    name: "Malaysia",
    dialCode: "+60",
    flag: "🇲🇾",
    placeholder: "12 345 6789",
    lengths: [9, 10],
    pattern: /^1\d{8,9}$/,
    example: "9 or 10-digit mobile starting with 1",
  },
  {
    code: "MX",
    name: "Mexico",
    dialCode: "+52",
    flag: "🇲🇽",
    placeholder: "55 1234 5678",
    lengths: [10],
    example: "10-digit phone number",
  },
  {
    code: "NG",
    name: "Nigeria",
    dialCode: "+234",
    flag: "🇳🇬",
    placeholder: "802 123 4567",
    lengths: [10],
    pattern: /^[789][01]\d{8}$/,
    example: "10-digit mobile",
  },
  {
    code: "NL",
    name: "Netherlands",
    dialCode: "+31",
    flag: "🇳🇱",
    placeholder: "6 12345678",
    lengths: [9],
    pattern: /^6\d{8}$/,
    example: "9-digit mobile starting with 6",
  },
  {
    code: "NO",
    name: "Norway",
    dialCode: "+47",
    flag: "🇳🇴",
    placeholder: "412 34 567",
    lengths: [8],
    pattern: /^[49]\d{7}$/,
    example: "8-digit mobile starting with 4 or 9",
  },
  {
    code: "NP",
    name: "Nepal",
    dialCode: "+977",
    flag: "🇳🇵",
    placeholder: "981 2345678",
    lengths: [10],
    pattern: /^9[78]\d{8}$/,
    example: "10-digit mobile starting with 97 or 98",
  },
  {
    code: "NZ",
    name: "New Zealand",
    dialCode: "+64",
    flag: "🇳🇿",
    placeholder: "21 123 4567",
    lengths: [8, 9, 10],
    pattern: /^2\d{7,9}$/,
    example: "8 to 10-digit mobile starting with 2",
  },
  {
    code: "PH",
    name: "Philippines",
    dialCode: "+63",
    flag: "🇵🇭",
    placeholder: "917 123 4567",
    lengths: [10],
    pattern: /^9\d{9}$/,
    example: "10-digit mobile starting with 9",
  },
  {
    code: "PK",
    name: "Pakistan",
    dialCode: "+92",
    flag: "🇵🇰",
    placeholder: "300 1234567",
    lengths: [10],
    pattern: /^3\d{9}$/,
    example: "10-digit mobile starting with 3",
  },
  {
    code: "PL",
    name: "Poland",
    dialCode: "+48",
    flag: "🇵🇱",
    placeholder: "512 345 678",
    lengths: [9],
    example: "9-digit phone number",
  },
  {
    code: "PT",
    name: "Portugal",
    dialCode: "+351",
    flag: "🇵🇹",
    placeholder: "912 345 678",
    lengths: [9],
    pattern: /^9[1236]\d{7}$/,
    example: "9-digit mobile starting with 9",
  },
  {
    code: "RU",
    name: "Russia",
    dialCode: "+7",
    flag: "🇷🇺",
    placeholder: "912 345 67 89",
    lengths: [10],
    pattern: /^9\d{9}$/,
    example: "10-digit mobile starting with 9",
  },
  {
    code: "SE",
    name: "Sweden",
    dialCode: "+46",
    flag: "🇸🇪",
    placeholder: "70 123 45 67",
    lengths: [9],
    pattern: /^7[02369]\d{7}$/,
    example: "9-digit mobile starting with 7",
  },
  {
    code: "TH",
    name: "Thailand",
    dialCode: "+66",
    flag: "🇹🇭",
    placeholder: "81 234 5678",
    lengths: [9],
    pattern: /^[689]\d{8}$/,
    example: "9-digit mobile starting with 6, 8, or 9",
  },
  {
    code: "TR",
    name: "Turkey",
    dialCode: "+90",
    flag: "🇹🇷",
    placeholder: "501 234 56 78",
    lengths: [10],
    pattern: /^5\d{9}$/,
    example: "10-digit mobile starting with 5",
  },
  {
    code: "VN",
    name: "Vietnam",
    dialCode: "+84",
    flag: "🇻🇳",
    placeholder: "91 234 5678",
    lengths: [9],
    pattern: /^[35789]\d{8}$/,
    example: "9-digit mobile starting with 3, 5, 7, 8, or 9",
  },
  {
    code: "ZA",
    name: "South Africa",
    dialCode: "+27",
    flag: "🇿🇦",
    placeholder: "71 234 5678",
    lengths: [9],
    pattern: /^[6-8]\d{8}$/,
    example: "9-digit mobile starting with 6, 7, or 8",
  },
];

// Default to India
export const DEFAULT_COUNTRY = COUNTRIES[0];

/**
 * Validates a national phone number according to country rules.
 */
export function validatePhoneNumber(
  rawInput: string,
  country: Country
): { isValid: boolean; error?: string; cleanDigits: string } {
  // Strip all non-digit characters
  const cleanDigits = rawInput.replace(/\D/g, "");

  if (!cleanDigits) {
    return {
      isValid: false,
      error: "Please enter your phone number.",
      cleanDigits: "",
    };
  }

  // Length check
  const allowedLengths = country.lengths || [10];
  const isLengthValid = allowedLengths.includes(cleanDigits.length);

  if (!isLengthValid) {
    if (allowedLengths.length === 1) {
      return {
        isValid: false,
        error: `Please enter a valid ${allowedLengths[0]}-digit phone number for ${country.name}.`,
        cleanDigits,
      };
    } else {
      return {
        isValid: false,
        error: `Phone number must be ${allowedLengths.join(" or ")} digits for ${country.name}.`,
        cleanDigits,
      };
    }
  }

  // Pattern check if specified
  if (country.pattern && !country.pattern.test(cleanDigits)) {
    return {
      isValid: false,
      error: country.example
        ? `Invalid number format. Expected: ${country.example}`
        : `Please enter a valid phone number for ${country.name}.`,
      cleanDigits,
    };
  }

  return {
    isValid: true,
    cleanDigits,
  };
}

/**
 * Validates email address format
 */
export function validateEmail(email: string): { isValid: boolean; error?: string } {
  const trimmed = email.trim();
  if (!trimmed) {
    return { isValid: false, error: "Please provide your email address." };
  }

  // RFC 5322 compatible email regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(trimmed)) {
    return { isValid: false, error: "Please enter a valid email address (e.g. name@example.com)." };
  }

  return { isValid: true };
}

/**
 * Validates full name
 */
export function validateName(name: string): { isValid: boolean; error?: string } {
  const trimmed = name.trim();
  if (!trimmed) {
    return { isValid: false, error: "Please provide your full name." };
  }

  if (trimmed.length < 2) {
    return { isValid: false, error: "Name must be at least 2 characters." };
  }

  // Allow letters, international latin characters, spaces, hyphens, apostrophes, and dots
  if (!/^[a-zA-Z\u00C0-\u024F\s\-'.]+$/.test(trimmed)) {
    return { isValid: false, error: "Name should only contain letters and standard characters." };
  }

  return { isValid: true };
}
