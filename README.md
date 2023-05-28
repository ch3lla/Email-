# Nodemailer Email Sender

This web application allows you to send emails using Nodemailer with OAuth2 authentication and Google Cloud Platform.

## Prerequisites

Before running the application, ensure you have the following:

- Node.js installed on your machine
- Gmail account with OAuth2 credentials
- Google Cloud Platform project

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/your-repo.git
   ```

2. Install the dependencies:

   ```shell
   npm install
   ```

3. Set up the environment variables:

   - Create a `.env` file in the root directory.
   - Add the following variables to the `.env` file:

     ```
     MAIL_USERNAME=your-email@gmail.com
     MAIL_PASSWORD=your-email-password
     OAUTH_CLIENTID=your-client-id
     OAUTH_CLIENT_SECRET=your-client-secret
     OAUTH_REFRESH_TOKEN=your-refresh-token
     ```

   - Replace the values with your actual Gmail account credentials and OAuth2 information.

4. Configure the Google Cloud Platform project:

   - Create a new project on Google Cloud Platform.
   - Enable the Gmail API for your project.
   - Set up OAuth2 credentials in the Google Cloud Console.
   - Add the authorized redirect URI for your application (e.g., `http://localhost:3000/auth/google/callback`).

5. Start the application:

   ```shell
   npm start
   ```

   The application will be running at `http://localhost:3000`.

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Fill out the email form with the recipient's email address, subject, and message.
3. Click the "Send Email" button.
4. If the email is sent successfully, you will see a success message.
5. Check the recipient's email inbox to verify the email.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your proposed changes.

## Acknowledgements

This project was built using the following technologies:

- Node.js - JavaScript runtime
- Nodemailer - Email sending library
- Express - Web application framework
- Google Cloud Platform - Cloud services provider

## Contact

For any inquiries or issues, please contact [your-name](chukwumaemmanuella03@gmail.com).
