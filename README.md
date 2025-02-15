## Regex Data Extraction

This tool uses regular expressions to extract various data types from text input. It's designed to identify and extract common data patterns including emails, URLs, phone numbers, and more.

The tool can extract the following data types:
- 📧 Email addresses (e.g., user@example.com, firstname.lastname@company.co.uk)
- 🔗 URLs (e.g., https://www.example.com, https://subdomain.example.org/page)
- 📞 Phone numbers (multiple formats: (123) 456-7890, 123.456.7890, 123-456-7890)
- 💳 Credit card numbers (format: XXXX XXXX XXXX XXXX)
- ⏰ Time (12/24-hour formats: 14:30, 2:30 PM)
- 🏷️ HTML tags (e.g., div, p, img)
- #️⃣ Hashtags (e.g., #example, #ThisIsAHashtag)
- 💰 Currency amounts (e.g., $19.99, $1,234.56)

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/AgertuD/alu_regex-data-extraction-AgertuD.git
   ```
2. Navigate to the project directory:
   ```sh
   cd alu_regex-data-extraction-AgertuD
   ```
3. Open `index.js` in a code editor.
4. Run the script using Node.js:
   ```sh
   node index.js
   ```

## Edge Case Handling

The implementation ensures correct extraction by handling:

Various email domain formats (e.g., .com, .co.uk)

Different phone number formats ((123) 456-7890, 123-456-7890)

Time formats with and without AM/PM

Valid URL structures with http and https

## Developer Details

Developer: Agertu Diriba

GitHub Repo: alu_regex-data-extraction-Agertu
