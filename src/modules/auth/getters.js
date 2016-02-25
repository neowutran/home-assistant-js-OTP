
export const isValidating = [
  'authAttempt',
//  'otpAttempt',
  'isValidating',
];

export const isInvalidAttempt = [
  'authAttempt',
 // 'otpAttempt',
  'isInvalid',
];

export const attemptErrorMessage = [
  'authAttempt',
//  'otpAttempt',
  'errorMessage',
];

export const rememberAuth = [
  'rememberAuth',
];

export const attemptAuthInfo = [
  ['authAttempt', 'authToken'],
  ['authAttempt', 'host'],
  (authToken, host) => ({ authToken, host }),
];

export const attemptOtpInfo = [
  ['otpAttempt', 'otp'],
  ['otpAttempt', 'host'],
  (otp, host) => ({ otp, host }),
];

export const currentAuthToken = [
  'authCurrent',
  'authToken',
];

export const currentOtp = [
  'otpCurrent',
  'otp',
];

export const currentOtpInfo = [
  currentOtp,
  ['otpCurrent', 'host'],
  (otp, host) => ({ otp, host }),
];


export const currentAuthInfo = [
  currentAuthToken,
  ['authCurrent', 'host'],
  (authToken, host) => ({ authToken, host }),
];

export const authToken = [
  isValidating,
  ['authAttempt', 'authToken'],
  ['authCurrent', 'authToken'],
  (isValidating_, attemptToken_, currentToken_) =>
    isValidating_ ? attemptToken_ : currentToken_,
];

export const otp = [
  isValidating,
  ['otpAttempt', 'otp'],
  ['otpCurrent', 'otp'],
  (isValidating_, attemptToken_, currentToken_) =>
    isValidating_ ? attemptToken_ : currentToken_,
];



export const authInfo = [
  isValidating,
  attemptAuthInfo,
  currentAuthInfo,
  (isValidating_, attemptAuthInfo_, currentAuthInfo_) =>
    isValidating_ ? attemptAuthInfo_ : currentAuthInfo_,
];


export const otpInfo = [
  isValidating,
  attemptOtpInfo,
  currentOtpInfo,
  (isValidating_, attemptOtpInfo_, currentOtpInfo_) =>
    isValidating_ ? attemptOtpInfo_ : currentOtpInfo_,
];
