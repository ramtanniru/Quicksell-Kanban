# Kanban Board Application - Frontend Assignment

## Introduction

This is an interactive Kanban board application built with **ReactJS**. The application fetches data from a provided API and allows users to group and sort tasks based on various criteria such as **Status**, **User**, and **Priority**. It also allows sorting tasks by **Priority** and **Title**. The UI design closely follows the provided screenshots and adheres to the functionality and visual structure outlined in the assignment.

### Live Demo
[You can view here](https://quicksell-kanban-21bce9789.vercel.app/)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [API](#api)
- [Installation](#installation)
- [Usage](#usage)
- [Grouping Options](#grouping-options)
- [Sorting Options](#sorting-options)
- [State Persistence](#state-persistence)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Features

- **Dynamic Grouping**: Users can group tasks by **Status**, **User**, or **Priority**.
- **Sorting**: Tasks can be sorted by **Priority** (descending) or **Title** (ascending).
- **Responsive Design**: The application is fully responsive, providing a seamless experience across devices.
- **Pure CSS**: Styled using pure CSS without any third-party libraries (such as Bootstrap, Tailwind, etc.), ensuring lightweight and fast performance.
- **State Persistence**: User's view settings (grouping and sorting) are saved across page reloads.

## API

The application interacts with the following API for fetching task data:

- API Endpoint: `https://api.quicksell.co/v1/internal/frontend-assignment`
- The API provides task information including their **Status**, **Priority**, and **Assigned User**.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/ramtanniru/Quicksell-Kanban.git
    ```

2. Navigate to the project directory:
    ```bash
    cd frontend-kanban-board
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. The application will be running at `http://localhost:3000`.

## Usage

Once the application is running:

1. Click on the "Display" button to choose a grouping method (**Status**, **User**, or **Priority**).
2. Use the sorting options to arrange tasks by **Priority** or **Title**.
3. The Kanban board will automatically update to reflect your selections.
4. View preferences (grouping and sorting) will persist even after refreshing the page.

## Grouping Options

- **By Status**: Groups tickets based on their current status.
- **By User**: Groups tickets according to the user they are assigned to.
- **By Priority**: Groups tickets based on their priority level (Urgent, High, Medium, Low, No Priority).

## Sorting Options

- **By Priority**: Sorts the tickets in descending order of priority, from **Urgent** to **No Priority**.
- **By Title**: Sorts tickets alphabetically in ascending order based on their title.

## State Persistence

The application saves the user's current view (grouping and sorting) in **localStorage**, ensuring that the same view is displayed after a page reload.

## Dependencies

This project is built with the following dependencies:

- **ReactJS**: Frontend framework used for building user interfaces.
- **Fetch**: Used for making API requests to fetch task data.
- **localStorage**: For saving and persisting user preferences across sessions.

## Configuration

Add .env file and create constant for BACKEND_API

## Examples

Here are examples of how the application groups and sorts tasks:

- **Grouped by Status**: Tasks are grouped according to their status (Backlog, Todo, In progress, Done, Canceled).
- **Grouped by User**: Tasks are grouped by the user to whom they are assigned.
- **Grouped by Priority**: Tasks are grouped according to their priority (Urgent, High, Medium, Low, No Priority).

![Grouped by Filter](/demo/filter.png)
![Grouped by Status](/demo/status.png)
![Grouped by User](/demo/user.png)
![Grouped by Priority](/demo/priority.png)

## Contributors

- **Your Name** - Tanniru Leela Sai Ram

## License

This project is licensed under the MIT License. 
