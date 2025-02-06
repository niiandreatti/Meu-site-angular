import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <div class="container">
        <h1>WEMONE</h1>
        <nav>
          <a href="#about" class="active">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      padding: 20px 0;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
    }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h1 {
      font-family: 'Cinzel', serif;
      font-size: 1.8rem;
      color: var(--text-color);
      position: relative;
    }
    h1::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--primary-color);
    }
    nav a {
      margin-left: 30px;
      text-decoration: none;
      color: var(--text-color);
      transition: color 0.3s ease;
      font-size: 0.9rem;
      letter-spacing: 1px;
    }
    nav a:hover, nav a.active {
      color: var(--primary-color);
    }
  `]
})
class HeaderComponent {}

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="about">
      <div class="container">
        <div class="content">
          <h2 class="section-title">About</h2>
          <div class="about-grid">
            <div class="about-text">
              <p>
                Olá! Sou Nicolas Andreatti, estudante de Análise e Desenvolvimento de Sistemas na Unicamp. 
                Apaixonado por tecnologia, adoro criar soluções que agregam valor e transformam ideias em realidade.
              </p>
              <a href="#contact" class="btn">CONTACT ME</a>
            </div>
            <div class="about-stats">
              <div class="stat">
                <div class="stat-number">3+</div>
                <div class="stat-label">Years Experience</div>
              </div>
              <div class="stat">
                <div class="stat-number">20+</div>
                <div class="stat-label">Projects Completed</div>
              </div>
              <div class="stat">
                <div class="stat-number">10+</div>
                <div class="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background: var(--background-color);
      position: relative;
      overflow: hidden;
    }
    .content {
      position: relative;
      z-index: 2;
    }
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      align-items: center;
    }
    .about-text {
      font-size: 1.2rem;
      color: var(--text-secondary);
    }
    .about-text p {
      margin-bottom: 30px;
    }
    .about-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    .stat {
      background: var(--card-bg);
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      transition: transform 0.3s ease;
    }
    .stat:hover {
      transform: translateY(-5px);
      background: var(--card-hover);
    }
    .stat-number {
      font-size: 2rem;
      color: var(--primary-color);
      font-weight: bold;
      margin-bottom: 5px;
    }
    .stat-label {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
  `]
})
class AboutComponent {}

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="experience">
      <div class="container">
        <h2 class="section-title">Experience</h2>
        <div class="experience-grid">
          <div class="experience-card">
            <div class="card-header">
              <h3>Elosgate – Soluções Financeiras</h3>
              <span class="period">2023 - Present</span>
            </div>
            <div class="card-body">
              <p>
                Atuei no desenvolvimento e manutenção de aplicativos de máquinas de cartão, 
                utilizando tecnologias como SQL Server, Power BI, Excel, Python, Java e Kotlin. 
                Trabalhei em análises de dados, geração de relatórios e otimização de processos.
              </p>
            </div>
            <div class="tech-stack">
              <span>SQL</span>
              <span>Python</span>
              <span>Java</span>
              <span>Kotlin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience-grid {
      display: grid;
      gap: 30px;
    }
    .experience-card {
      background: var(--card-bg);
      padding: 30px;
      border-radius: 15px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: transform 0.3s ease;
    }
    .experience-card:hover {
      transform: translateY(-5px);
    }
    .card-header {
      margin-bottom: 20px;
    }
    .card-header h3 {
      color: var(--primary-color);
      font-size: 1.5rem;
      margin-bottom: 5px;
    }
    .period {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
    .tech-stack {
      margin-top: 20px;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .tech-stack span {
      background: rgba(0, 162, 255, 0.1);
      color: var(--primary-color);
      padding: 5px 15px;
      border-radius: 15px;
      font-size: 0.9rem;
    }
  `]
})
class ExperienceComponent {}

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="projects">
      <div class="container">
        <h2 class="section-title">Projects</h2>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-image"></div>
            <div class="project-content">
              <h3>Cadastro de Cliente</h3>
              <p>Sistema para cadastro e gerenciamento de informações de clientes, utilizando Python e Tkinter.</p>
              <a href="#" class="btn">View Project</a>
            </div>
          </div>
          <div class="project-card">
            <div class="project-image"></div>
            <div class="project-content">
              <h3>Website Pelegrini</h3>
              <p>Website responsivo criado para a empresa Pelegrini, com design moderno e estrutura funcional.</p>
              <a href="#" class="btn">View Project</a>
            </div>
          </div>
          <div class="project-card">
            <div class="project-image"></div>
            <div class="project-content">
              <h3>Sistema de Gerenciamento</h3>
              <p>Sistema desenvolvido em Java para gestão de funcionários, com funcionalidades para cadastro e controle.</p>
              <a href="#" class="btn">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
    }
    .project-card {
      background: var(--card-bg);
      border-radius: 15px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: transform 0.3s ease;
    }
    .project-card:hover {
      transform: translateY(-5px);
    }
    .project-image {
      height: 200px;
      background: linear-gradient(45deg, #00a2ff20, #00a2ff10);
      position: relative;
    }
    .project-content {
      padding: 30px;
    }
    .project-content h3 {
      color: var(--primary-color);
      margin-bottom: 15px;
      font-size: 1.3rem;
    }
    .project-content p {
      color: var(--text-secondary);
      margin-bottom: 20px;
      font-size: 0.95rem;
    }
  `]
})
class ProjectsComponent {}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title">Contact</h2>
        <div class="contact-container">
          <div class="contact-info">
            <h3>Let's work together</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello</p>
            <div class="contact-details">
              <div class="detail">
                <span class="label">Email:</span>
                <span class="value">contact@nicolasandreatti.com</span>
              </div>
              <div class="detail">
                <span class="label">Location:</span>
                <span class="value">São Paulo, Brazil</span>
              </div>
            </div>
          </div>
          <form class="contact-form" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" [(ngModel)]="formData.name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" [(ngModel)]="formData.email" name="email" required>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" [(ngModel)]="formData.message" name="message" required></textarea>
            </div>
            <button type="submit" class="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      align-items: start;
    }
    .contact-info {
      background: var(--card-bg);
      padding: 40px;
      border-radius: 15px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .contact-info h3 {
      font-size: 1.8rem;
      margin-bottom: 20px;
      color: var(--primary-color);
    }
    .contact-info p {
      color: var(--text-secondary);
      margin-bottom: 30px;
    }
    .contact-details {
      display: grid;
      gap: 20px;
    }
    .detail {
      display: grid;
      gap: 5px;
    }
    .label {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
    .value {
      color: var(--text-color);
    }
    .contact-form {
      background: var(--card-bg);
      padding: 40px;
      border-radius: 15px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .form-group {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 10px;
      color: var(--text-secondary);
    }
    input, textarea {
      width: 100%;
      padding: 12px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      color: var(--text-color);
    }
    textarea {
      height: 150px;
      resize: vertical;
    }
    input:focus, textarea:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  `]
})
class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form Data:', this.formData);
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent],
  template: `
    <app-header></app-header>
    <main>
      <app-about></app-about>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-contact></app-contact>
    </main>
  `
})
class App {}

bootstrapApplication(App);