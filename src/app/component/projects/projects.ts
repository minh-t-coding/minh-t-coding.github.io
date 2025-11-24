import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects',
    imports: [CommonModule],
    templateUrl: './projects.html',
    styleUrl: './projects.css',
})
export class Projects {
    projects: Project[] = PROJECTS;

    activeView: 'web' | 'games' = 'web';

    setView(view: 'web' | 'games') {
        this.activeView = view;
    }

    get filteredProjects() {
        return this.projects.filter((p) => p.category === this.activeView);
    }
}
