// Welcome to the Data Extraction Script! 🚀
// This script uses the power of Regular Expressions (regex) to extract specific data types from a block of text.
// Let's dive into the magic of regex and extract some data! 🪄

// ==================================================
// Step 1: Define Regex Patterns for Each Data Type
// ==================================================
const regexPatterns = {
    email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, // Matches email addresses like user@example.com
    url: /https?:\/\/[^\s]+/g, // Matches URLs starting with http or https
    phone: /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g, // Matches phone numbers like (123) 456-7890 or 123-456-7890
    creditCard: /\b(?:\d{4}[- ]?){3}\d{4}\b/g, // Matches credit card numbers like 1234-5678-9012-3456 or 1234 5678 9012 3456
    time24: /\b([01]?[0-9]|2[0-3]):[0-5][0-9]\b/g, // Matches 24-hour time format like 14:30
    time12: /\b(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)\b/g, // Matches 12-hour time format like 2:30 PM
    htmlTags: /<[^>]+>/g, // Matches HTML tags like <p>, <div class="example">, or <img src="image.jpg">
    hashtags: /#[a-zA-Z0-9_]+/g, // Matches hashtags like #example or #ThisIsAHashtag
    currency: /\$\d{1,3}(,\d{3})*(\.\d{2})?/g // Matches currency amounts like $19.99 or $1,234.56
};

// ==================================================
// Step 2: Create a Function to Extract Data Using Regex
// ==================================================
function extractData(text, pattern) {
    // This function takes a block of text and a regex pattern,
    // then returns an array of all matches found in the text.
    const matches = text.match(pattern);
    return matches ? matches : []; // If no matches are found, return an empty array.
}

// ==================================================
// Step 3: Define a Sample Text to Test the Regex Patterns
// ==================================================

const sampleText = `
  Email: user@example.com, firstname.lastname@company.co.uk
  Phone: (123) 456-7890, 123-456-7890, 123.456.7890
  URL: https://www.example.com, https://subdomain.example.org/page
  Credit Card: 1234 5678 9012 3456, 1234-5678-9012-3456
  Time: 14:30, 2:30 PM
  HTML: <p>Paragraph</p>, <div class="example">Content</div>, <img src="image.jpg" alt="description">
  Hashtags: #example, #ThisIsAHashtag
  Currency: $19.99, $1,234.56
`;

// ==================================================
// Step 4: Extract Data Using the Regex Patterns
// ==================================================
const emails = extractData(sampleText, regexPatterns.email); // Extract email addresses
const urls = extractData(sampleText, regexPatterns.url); // Extract URLs
const phones = extractData(sampleText, regexPatterns.phone); // Extract phone numbers
const creditCards = extractData(sampleText, regexPatterns.creditCard); // Extract credit card numbers
const time24 = extractData(sampleText, regexPatterns.time24); // Extract 24-hour time
const time12 = extractData(sampleText, regexPatterns.time12); // Extract 12-hour time
const htmlTags = extractData(sampleText, regexPatterns.htmlTags); // Extract HTML tags
const hashtags = extractData(sampleText, regexPatterns.hashtags); // Extract hashtags
const currency = extractData(sampleText, regexPatterns.currency); // Extract currency amounts

// ==================================================
// Step 5: Display the Extracted Data
// ==================================================
console.log("🚀 Extracted Emails:", emails);
console.log("🌐 Extracted URLs:", urls);
console.log("📞 Extracted Phone Numbers:", phones);
console.log("💳 Extracted Credit Card Numbers:", creditCards);
console.log("⏰ Extracted 24-Hour Time:", time24);
console.log("🕒 Extracted 12-Hour Time:", time12);
console.log("🖥️ Extracted HTML Tags:", htmlTags);
console.log("🏷️ Extracted Hashtags:", hashtags);
console.log("💰 Extracted Currency Amounts:", currency);

// ==================================================
// Step 6: Celebrate! 🎉
// ==================================================
console.log("\n🎉 Congratulations! You've successfully extracted all the required data types using regex!");
