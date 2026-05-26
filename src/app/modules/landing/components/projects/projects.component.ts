import { Component } from '@angular/core';
import { ProjectComponent } from '../../../../shared/project/project.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DetailComponent } from '../../../../shared/detail/detail.component';
import { Project } from '../../../../models/project.model';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent, CommonModule, DetailComponent, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Bauss Software Website', subtitle: 'Designed and developed a corporate website focused on usability, performance and clear communication of services.', imageUrl: '/assets/prueba3.png', slug: 'bauss-software',
      context: 'Designed and developed the main website for a software company, focusing on translating business needs into a clear and user-friendly interface.', built: 'A responsive corporate website with structured content, reusable components and optimized layout for user navigation.', keys: [
        'Prioritized clarity over visual complexity',
        'Structured content for easy scanning',
        'Focused on responsive behaviour across devices',
        'Component-based structure for scalability'
      ], implementation: [
        'Built with Angular using reusable components and modular structure',
        'Responsive layout using SCSS',
        'Focus on performance and maintainability'
      ], result: 'Delivered a complete corporate website from scratch, improving online presence, service clarity and overall user experience through a structured and scalable frontend architecture.', role: 'Full ownership: UI/UX + Frontend Development', tech: ['Angular',
        'HTML',
        'SCSS',
        'TypeScript',
        'Figma'
      ], platform: ['Desktop', 'Mobile'], links: ['Website'], picUrl: '/assets/bauss1.png', detail1: '/assets/bauss2.png', detail2: '/assets/bauss3.png', detail3: '/assets/bauss4.png'
    },
    { title: 'MacOS9 Portfolio', subtitle: 'Interactive portfolio simulating a macOS environment with draggable windows and dynamic UI behavior', imageUrl: '/assets/prueba2.png', slug: 'macos9-portfolio', context: 'I wanted to create a portfolio that felt different from traditional websites,  using a familiar interface to improve user engagement and navigation.', built: 'An interactive portfolio that simulates a macOS 9 environment, where users  can open, close and drag windows to explore content.', keys: ['All UI assets were recreated from original screenshots and adapted into  reusable window components.', 'I focused on making interactions feel realistic, including draggable elements  and dynamic window behavior to mimic an operating system experience.'], implementation: ['Built with React using component-based architecture.', 'react-draggable for window movement', 'react-modal for reusable window structure', 'styled-components for dynamic styling', 'React Hooks (useState, useEffect) to manage UI state and initial loading behavior'], result: 'A unique and interactive portfolio experience that stands out from traditional layouts and demonstrates advanced UI handling and component reuse.', role: 'Frontend developer', tech: ['React', 'Styled Components', 'React Draggable', 'React Modal'], platform: ['Desktop only'], links: ['Live Demo', 'GitrHub Repository'], picUrl: '/assets/mac1.png', detail1: '/assets/mac2.png', detail2: '/assets/mac3.png', detail3: '/assets/mac1.png' },
    { title: 'Deannaigh Online Store', subtitle: 'Frontend for an e-commerce platform focused on product browsing, filtering and visual presentation', imageUrl: '/assets/prueba1.png', slug: 'deannaigh-online-store', context: 'Designed and developed the frontend for an online store, focusing on product presentation, browsing experience and filtering capabilities to enhance user engagement.', built: 'A visually appealing and user-friendly e-commerce frontend that allows users to browse products, apply filters and view detailed information in a structured layout.', keys: ['Focused on clear product presentation and easy navigation', 'Implemented filtering options for better product discovery', 'Used visual hierarchy to guide users through content'], implementation: ['Built with Angular using reusable components and modular design', 'SCSS for styling with a focus on visual clarity', 'TypeScript for maintainable code structure'], result: 'Delivered a complete e-commerce frontend that effectively showcases products and provides a smooth browsing experience, demonstrating strong UI/UX design principles.', role: 'UI/UX Designer + Frontend Developer', tech: ['Angular', 'SCSS', 'TypeScript', 'Figma'], platform: ['Desktop', 'Mobile'], links: ['Live Demo'], picUrl: '/assets/shop.png', detail1: '/assets/shop.png', detail2: '/assets/shop3.png', detail3: '/assets/shop2.png' },
    { title: 'Triple Triad Card Game', subtitle: 'Interactive card game implementing turn-based logic, state management and rule-based interactions', imageUrl: '/assets/prueba4.png', slug: 'triple-triad-card-game', context: 'The goal was to implement a turn-based card game system, focusing on game logic, state management and real-time interaction rather than just visual representation.', built: 'A fully functional card game inspired by Triple Triad, where players take turns placing cards on a grid, capturing opponent cards based on rule comparisons and dynamically updating game state.', keys: ['The board state is managed as a dynamic array, allowing real-time updates and efficient rendering of the game grid.', 'Card capture logic is implemented through rule-based comparisons between adjacent cards, ensuring accurate game mechanics.', 'I focused on providing clear visual and audio feedback, including ownership changes, score tracking and interaction sounds to enhance user experience.'], implementation: ['Built with Angular using a component-based architecture and structured state handling.', ' Grid-based board system using array state', ' Turn-based interaction flow', ' Rule-based capture algorithm (adjacent card comparison)', ' Dynamic state updates and re-rendering', ' Separation of concerns through services (audio, interaction handling)', ' Visual and audio feedback integration'], result: 'A fully interactive game demonstrating complex state management, rule-based logic and dynamic UI updates beyond standard application flows. ', role: 'Frontend developer', tech: ['Angular', 'Typescript', 'Component-based architecture', 'State management', 'Game logic implementation'], platform: ['Desktop only'], links: ['GitrHub Repository'], picUrl: '/assets/triple.png', detail1: '/assets/triple.png', detail2: '/assets/triple2.png', detail3: '/assets/triple3.png' },
    { title: 'NookFlare App', subtitle: 'Frontend concept for a game server hosting platform. Focused on usability and clear data representation', imageUrl: '/assets/Nookflare.png', slug: 'nookflare-app', context: 'Designed a frontend concept for a game server hosting platform, focusing on usability and clear data representation to enhance user experience.', built: 'A frontend concept that presents server hosting options, features and pricing in a clear and engaging way, using visual elements to communicate complex information effectively.', keys: ['Focused on clear communication of hosting features and pricing', 'Used visual hierarchy to guide users through content', 'Designed with scalability in mind for future feature additions'], implementation: ['Built with Angular using reusable components and modular design', 'SCSS for styling with a focus on visual clarity', 'TypeScript for maintainable code structure'], result: 'A visually appealing and user-friendly frontend concept that effectively communicates the value proposition of the hosting platform, demonstrating strong UI/UX design principles.', role: 'UI/UX Designer + Frontend Developer', tech: ['Angular', 'SCSS', 'TypeScript', 'Figma'], platform: ['Desktop', 'Mobile'], links: ['Live Demo'], picUrl: '/assets/nook1.png', detail1: '/assets/nook.png', detail2: '/assets/nook3.png', detail3: '/assets/nook4.png' },

  ];

  constructor(private route: ActivatedRoute) { }

  get selectedProjectData(): Project | null {
    const slug = this.route.snapshot.paramMap.get('slug');
    return this.projects.find(p => p.slug === slug) ?? null;
  }



}
