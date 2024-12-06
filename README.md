# Week-1-Toy-Problems-Prerequisites

## Week One Challenge Overview

This project includes multiple functionalities implemented in JavaScript. It contains three main sections:

1. **Grade Calculation System**: Calculates a student's grade based on their marks.
2. **Payroll System**: Computes the net salary after deductions for PAYE, NHIF, and NSSF.
3. **Speed Detector System**: Calculates demerit points based on a vehicle’s speed.



## Table of Contents

- [Introduction](#introduction)
- [Installation Instructions](#installation-instructions)
- [Features](#features)
  - [Grade Calculation System](#grade-calculation-system)
  - [Payroll System](#payroll-system)
  - [Speed Detector System](#speed-detector-system)
- [How to Run the Project](#how-to-run-the-project)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)



## Introduction

This project demonstrates basic JavaScript programming concepts through a series of practical exercises. Each of the three sections is built using fundamental programming techniques:

- **Grade Calculation**: This system calculates a student's grade based on their marks.
- **Salary Computation**: This part calculates the net salary, factoring in tax (PAYE), health insurance (NHIF), and social security (NSSF) deductions.
- **Speed Detection**: A system that determines demerit points based on the speed of a vehicle, triggering a suspension if the points exceed a certain threshold.



## Installation Instructions

### Prerequisites

Before running the project, ensure you have the following installed on your machine:

- A modern web browser (Chrome, Firefox, Safari, etc.)
- A code editor (VS Code, Sublime Text, etc.)

### Running the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/Kohmmz/Wk1-Code-Challenge.git
   ```

2. Navigate into the project directory:

   ```bash
   cd Wk1-Code-Challenge
   ```

3. Open the `index.html` file in your browser to run the project.



## Features

### 1. Grade Calculation System

The grade calculation system prompts the user to input their marks and returns their grade based on a predefined scale. The grading system follows:

- **90-100**: A
- **80-89**: B
- **70-79**: C
- **60-69**: D
- **Below 60**: E

### 2. Payroll System

The payroll system calculates the net salary by considering the following deductions:

- **PAYE (Pay As You Earn)**: Tax deduction based on the salary range.
- **NHIF (National Hospital Insurance Fund)**: Health insurance deduction.
- **NSSF (National Social Security Fund)**: Social security contribution.

The user is prompted to enter their basic salary, and the system will calculate and display their net salary after deductions.

### 3. Speed Detector System

The speed detector system calculates demerit points based on the driver's speed. The points are awarded as follows:

- For every 5 km/h over the speed limit, 1 point is added.
- If the total points exceed or equal **12**, the license is suspended.



## How to Run the Project

To run each part of the project, simply open the `index.html` file in any modern web browser. Each system will prompt for input via `prompt()` dialogs, and display the results directly in the console.



## Technologies Used

- **HTML5**: For structuring the project.
- **CSS3**: For basic styling.
- **JavaScript (ES6)**: For implementing the core functionality.



## Contributing

If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



