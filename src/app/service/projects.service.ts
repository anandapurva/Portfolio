import { Injectable } from '@angular/core';
import { ProjectModal } from '../models/project-modal';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects:ProjectModal[] = [
    {
      name: "Todo List App",
      summary: "A MEAN stack TodoList featuring user authentication with login and signup pages, and CRUD operations for managing tasks.",
      description:"Designed and implemented a responsive Todo List application with comprehensive user management functionalities. The application includes user authentication, registration, and login features to ensure a secure and personalized experience for each user.",
      keyFeatures:["Implemented secure user authentication using JWT (JSON Web Token) for enhanced data protection.",
      "Developed a complete CRUD (Create, Read, Update, Delete) system to manage and organize tasks within the Todo List."],
      projectLink: "2px solid red",
      projectImg:[]
    }, 
    {
      name: "Movie Recommendation System",
      summary: "Built a Movie Recommendation App with personalized suggestions using TMDb API and collaborative filtering via Streamlit UI.",
      description:"Created a Movie Recommendation App that provides personalized movie recommendations based on collaborative filtering techniques. The app fetches movie information, including titles and poster images, from The Movie Database (TMDb) API. Users can interact with a Streamlit UI to input their movie preferences and receive instant top 5 movie recommendations.",
      keyFeatures:["Implemented a collaborative filtering-based recommender system.",
      "Utilized TMDb API for fetching movie information.",
      "Developed a Streamlit UI for user-friendly movie preference input."],
      projectLink: "2px solid black",
      projectImg: []
    },
    {
      name: "Titanic",
      summary: "Analyzed Titanic data in Python using pandas, numpy, and machine learning for survival prediction.",
      description:"Conducted a comprehensive data analysis and wrangling project on the Titanic dataset using Python and libraries such as pandas and numpy. The project involves data visualization techniques with seaborn and matplotlib to gain insights into the dataset. Additionally, applied various machine learning algorithms (Random Forest, Decision Tree, k-NN, SVM, Naive Bayes) for predictive modeling of survival outcomes.",
      keyFeatures:["Data analysis and wrangling using pandas and numpy.",
      "Utilized seaborn and matplotlib for data visualization.",
      "Applied machine learning algorithms for predictive modeling."],
      projectLink: "2px solid orange",
      projectImg: []
    },
    {
      name: "Product landing page",
      summary:"The historical architect website's Product Landing Page displays products and pricing using HTML and CSS.",
      description: "The Product Landing Page serves as an online platform for a historical architect website, showcasing various architectural products with their respective price ranges. Visitors can explore the range of products offered, learn about their historical significance, and access detailed pricing information. The landing page is crafted with HTML and CSS to ensure responsiveness across diverse devices.",
      keyFeatures:["Elegant design highlighting historical architectural products.",
      "Clear product categorization and navigation.",
      "Responsive layout for seamless browsing on different screen sizes."],
      projectLink:"blue",
      projectImg: []
    },
    {
      name: "Survey Form",
      summary: "The Survey Form is an web page for student programming language preferences, crafted with HTML and CSS for a responsive design",
      description:"The Survey Form is a web page designed as a student programming language survey. It provides an interactive and user-friendly interface where students can input their preferences and opinions regarding different programming languages. The form is created using HTML and CSS, ensuring a responsive design that adapts to various screen sizes.",
      keyFeatures:["Interactive and user-friendly survey interface.",
      "Responsive design for optimal user experience on different devices.",
      "Customized form elements for collecting specific programming language preferences."],
      projectLink: "2px solid pink",
      projectImg:[]
    },
    {
      name: "Technical Documentation",
      summary: "The JavaScript technical Documentation page provides detailed insights and accessibility through a responsive HTML/CSS layout.",
      description:"The Technical Documentation page is a comprehensive resource for JavaScript documentation. It offers detailed insights into the various features, functions, and usage of JavaScript programming language. The documentation page is structured for easy navigation and understanding, with a focus on clarity and accessibility. HTML and CSS are employed to create a responsive layout, ensuring accessibility across a range of devices.",  
      keyFeatures:["Detailed and organized documentation for JavaScript.",
      "User-friendly navigation for quick access to specific topics.",
      "Responsive design to facilitate easy reading and learning on various devices."],
      projectLink: "2px solid black",
      projectImg:["../../assets/images/myPhoto.jpeg", "../../assets/images/laptop.jpg", "../../assets/images/headphone.jpg"]
    }
  
    ]

  constructor() { }

  getData() {
    return this.projects;
  }
}
