📦 Wabot CLI Tool
=================

Powered by `@whiskeysockets/baileys`

Developed by **Omindu Dissanayaka**

🛠️ A tool for the ease of setting up a WhatsApp bot.

Welcome to Wabot, a command-line tool to quickly set up a WhatsApp bot project! Follow these simple steps to create your project and get started.

🛠️ Installation
----------------

First, you need to install the `wabot` CLI tool. Run the following command to install it globally:

    npm install -g wabot

🚀 Creating a New Project
-------------------------

To create a new WhatsApp bot project, use the `create` command followed by your desired project name. This command will generate a new project directory with all necessary files.

    wabot create <project-name>

**Example**

    wabot create my-whatsapp-bot

This command will create a directory named `my-whatsapp-bot` with the following structure:

    my-whatsapp-bot/
    │
    ├── index.js
    ├── mongoAuthState.js
    ├── settings.js
    └── package.json

📁 Project Files
----------------

*   **index.js:** The main entry point for your WhatsApp bot. This file contains the core logic for your bot.
*   **mongoAuthState.js:** Manages authentication state using MongoDB.
*   **settings.js:** Contains configuration settings such as MongoDB URL and collection names.
*   **package.json:** Defines project dependencies and scripts. The name field in this file is set to your project name.

⚙️ Install Dependencies
-----------------------

After creating your project, navigate to the project directory and install the required dependencies:

    cd <project-name>
    npm install

🚀 Start Your Bot
-----------------

To start your WhatsApp bot, run the following command inside your project directory:

    npm start

📜 Usage
--------

*   Create a new project: `wabot create <project-name>`
*   Navigate to the project directory: `cd <project-name>`
*   Install dependencies: `npm install`
*   Start the bot: `npm start`

🌟 Need Help?
-------------

If you encounter any issues or have questions, feel free to open an issue on the GitHub repository.

Happy coding! 🚀