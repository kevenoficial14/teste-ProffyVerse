// Inicialização e configuração
document.addEventListener('DOMContentLoaded', function() {
    // Simulação de dados
    initializeData();

    // Navegação principal
    setupNavigation();

    // Dashboard (já visível por padrão)
    
    // Planos de Aula
    setupLessonPlans();

    // Notas e Frequência
    setupGradesAndAttendance();

    // Agenda
    setupCalendar();

    // Atividades Interativas
    setupInteractiveActivities();

    // Comunidade
    setupCommunity();

    // Cursos
    setupCourses();

    // Biblioteca
    setupLibrary();

    // Compartilhamento
    setupSharing();

    // Blog
    setupBlog();
});

// Dados simulados
function initializeData() {
    // Verifica se já existe dados no localStorage
    if (!localStorage.getItem('proffyverse_data')) {
        const initialData = {
            // Usuário logado
            currentUser: {
                id: 1,
                name: 'João Paulo Silva',
                email: 'professor@proffyverse.com',
                role: 'professor',
                avatar: 'JP'
            },
            
            // Planos de aula
            lessonPlans: [
                {
                    id: 1,
                    title: 'Equações do 2º Grau',
                    subject: 'matematica',
                    grade: '9',
                    duration: 50,
                    lastEdit: '2023-08-10',
                    objectives: 'Compreender e resolver equações do segundo grau utilizando a fórmula de Bhaskara.',
                    content: '<p>1. Introdução às equações do segundo grau</p><p>2. Fórmula de Bhaskara</p><p>3. Exercícios práticos</p><p>4. Aplicações no cotidiano</p>',
                    resources: 'Livro didático, quadro, folhas de exercícios, calculadora',
                    evaluation: 'Exercícios resolvidos em sala e lista de problemas para casa'
                },
                {
                    id: 2,
                    title: 'Revolução Industrial',
                    subject: 'historia',
                    grade: '8',
                    duration: 100,
                    lastEdit: '2023-08-05',
                    objectives: 'Analisar as causas e consequências da Revolução Industrial para a sociedade moderna.',
                    content: '<p>1. Contexto histórico da Revolução Industrial</p><p>2. Principais invenções e suas consequências</p><p>3. Impactos sociais e econômicos</p><p>4. Debate sobre as mudanças na sociedade</p>',
                    resources: 'Apresentação de slides, documentário, textos de apoio',
                    evaluation: 'Participação no debate e produção de texto reflexivo'
                },
                {
                    id: 3,
                    title: 'Sistema Solar',
                    subject: 'ciencias',
                    grade: '7',
                    duration: 50,
                    lastEdit: '2023-08-08',
                    objectives: 'Reconhecer os planetas do sistema solar e suas características principais.',
                    content: '<p>1. Composição do Sistema Solar</p><p>2. Características dos planetas</p><p>3. Movimentos de rotação e translação</p><p>4. Exercício de fixação</p>',
                    resources: 'Modelo do Sistema Solar, vídeo educativo, mapa conceitual',
                    evaluation: 'Construção de maquete em grupos'
                }
            ],
            
            // Turmas, alunos e notas
            classes: {
                '9A': {
                    name: '9º Ano A',
                    students: [
                        { id: 1, name: 'Ana Beatriz', grades: { prova1: 8.5, trabalho: 9.0, prova2: 7.5, participacao: 10 }, attendance: [true, true, false, true, true, true] },
                        { id: 2, name: 'Bruno Carvalho', grades: { prova1: 7.0, trabalho: 8.5, prova2: 6.5, participacao: 8 }, attendance: [true, true, true, true, false, true] },
                        { id: 3, name: 'Carlos Eduardo', grades: { prova1: 9.0, trabalho: 10, prova2: 8.5, participacao: 9 }, attendance: [true, true, true, true, true, true] },
                        { id: 4, name: 'Daniela Ferreira', grades: { prova1: 6.5, trabalho: 7.0, prova2: 7.0, participacao: 7 }, attendance: [true, false, true, true, true, false] },
                        { id: 5, name: 'Eduardo Gomes', grades: { prova1: 8.0, trabalho: 7.5, prova2: 8.0, participacao: 8 }, attendance: [true, true, true, false, true, true] },
                        { id: 6, name: 'Fernanda Henrique', grades: { prova1: 9.5, trabalho: 9.0, prova2: 9.0, participacao: 10 }, attendance: [true, true, true, true, true, true] },
                        { id: 7, name: 'Gabriel Inocêncio', grades: { prova1: 7.5, trabalho: 8.0, prova2: 7.0, participacao: 9 }, attendance: [true, true, false, true, true, true] },
                        { id: 8, name: 'Helena Jardim', grades: { prova1: 8.5, trabalho: 9.5, prova2: 8.0, participacao: 9 }, attendance: [true, true, true, true, true, false] },
                        { id: 9, name: 'Igor Kovalski', grades: { prova1: 6.0, trabalho: 7.0, prova2: 6.5, participacao: 7 }, attendance: [false, true, false, true, false, true] },
                        { id: 10, name: 'Juliana Lima', grades: { prova1: 9.0, trabalho: 8.5, prova2: 9.5, participacao: 10 }, attendance: [true, true, true, true, true, true] }
                    ]
                },
                '8B': {
                    name: '8º Ano B',
                    students: [
                        { id: 11, name: 'Leonardo Moura', grades: { prova1: 7.5, trabalho: 8.0, prova2: 7.0, participacao: 8 }, attendance: [true, true, true, false, true, true] },
                        { id: 12, name: 'Mariana Neves', grades: { prova1: 9.0, trabalho: 9.5, prova2: 8.5, participacao: 10 }, attendance: [true, true, true, true, true, true] },
                        { id: 13, name: 'Nelson Oliveira', grades: { prova1: 6.5, trabalho: 7.0, prova2: 6.0, participacao: 7 }, attendance: [false, true, false, true, true, false] }
                    ]
                },
                '7C': {
                    name: '7º Ano C',
                    students: [
                        { id: 14, name: 'Paula Queiroz', grades: { prova1: 8.0, trabalho: 7.5, prova2: 8.5, participacao: 9 }, attendance: [true, true, true, true, true, true] },
                        { id: 15, name: 'Roberto Santos', grades: { prova1: 7.0, trabalho: 8.0, prova2: 7.5, participacao: 8 }, attendance: [true, false, true, true, false, true] }
                    ]
                }
            },
            
            // Eventos do calendário
            events: [
                {
                    id: 1,
                    title: 'Aula: Equações do 2º Grau',
                    start: '2023-08-22T10:00:00',
                    end: '2023-08-22T11:30:00',
                    className: '9A',
                    location: 'Sala 12',
                    description: 'Revisão geral para a prova bimestral'
                },
                {
                    id: 2,
                    title: 'Aula: Revolução Industrial',
                    start: '2023-08-22T13:30:00',
                    end: '2023-08-22T15:00:00',
                    className: '8B',
                    location: 'Sala 8',
                    description: 'Apresentação de trabalhos pelos alunos'
                },
                {
                    id: 3,
                    title: 'Aula: Sistema Solar',
                    start: '2023-08-23T08:00:00',
                    end: '2023-08-23T09:30:00',
                    className: '7C',
                    location: 'Laboratório 2',
                    description: 'Atividade prática com maquetes'
                },
                {
                    id: 4,
                    title: 'Reunião de Pais',
                    start: '2023-08-26T18:00:00',
                    end: '2023-08-26T21:00:00',
                    className: '',
                    location: 'Auditório',
                    description: 'Reunião bimestral de pais e mestres'
                },
                {
                    id: 5,
                    title: 'Prova de Matemática',
                    start: '2023-08-29T10:00:00',
                    end: '2023-08-29T11:30:00',
                    className: '9A',
                    location: 'Sala 12',
                    description: 'Avaliação bimestral'
                }
            ],
            // Outros dados utilizados pelo sistema
            interactiveActivities: [],
            communityPosts: [],
            courses: [],
            resources: [],
            userUploads: [],
            blogArticles: []
        };
        
        localStorage.setItem('proffyverse_data', JSON.stringify(initialData));
    }
}

// Função para obter dados do localStorage
function getData() {
    return JSON.parse(localStorage.getItem('proffyverse_data'));
}

// Função para atualizar dados no localStorage
function updateData(newData) {
    localStorage.setItem('proffyverse_data', JSON.stringify(newData));
}

// Configuração da navegação
function setupNavigation() {
    // Menu do usuário
    const userMenuBtn = document.getElementById('userMenuBtn');
    const userMenuDropdown = document.getElementById('userMenuDropdown');
    
    userMenuBtn.addEventListener('click', function() {
        userMenuDropdown.classList.toggle('hidden');
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        if (!userMenuBtn.contains(event.target) && !userMenuDropdown.contains(event.target)) {
            userMenuDropdown.classList.add('hidden');
        }
    });
    
    // Menu mobile
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Navegação entre seções
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Esconder todas as seções
            sections.forEach(section => {
                section.classList.add('hidden');
            });
            
            // Remover classe ativa de todos os links
            navLinks.forEach(navLink => {
                navLink.classList.remove('text-primary');
                navLink.classList.add('text-gray-700', 'dark:text-gray-300');
            });
            
            // Mostrar a seção correspondente
            const sectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            targetSection.classList.remove('hidden');
            
            // Marcar o link como ativo
            this.classList.remove('text-gray-700', 'dark:text-gray-300');
            this.classList.add('text-primary');
            
            // Fechar menu mobile se aberto
            mobileMenu.classList.add('hidden');
            
            // Se for rolar para a seção de agenda, inicializar o calendário
            if (sectionId === 'agenda') {
                initializeCalendar();
            }
        });
    });
    
    // Links rápidos do dashboard
    const quickLinks = document.querySelectorAll('#dashboard a[data-section]');
    
    quickLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Esconder todas as seções
            sections.forEach(section => {
                section.classList.add('hidden');
            });
            
            // Remover classe ativa de todos os links
            navLinks.forEach(navLink => {
                navLink.classList.remove('text-primary');
                navLink.classList.add('text-gray-700', 'dark:text-gray-300');
            });
            
            // Mostrar a seção correspondente
            const sectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            targetSection.classList.remove('hidden');
            
            // Marcar o link na navegação como ativo
            const correspondingNavLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
            if (correspondingNavLink) {
                correspondingNavLink.classList.remove('text-gray-700', 'dark:text-gray-300');
                correspondingNavLink.classList.add('text-primary');
            }
            
            // Se for rolar para a seção de agenda, inicializar o calendário
            if (sectionId === 'agenda') {
                initializeCalendar();
            }
        });
    });
}

// Planos de Aula
function setupLessonPlans() {
    const data = getData();
    const lessonPlansList = document.getElementById('lesson-plans-list');
    const createLessonPlanBtn = document.getElementById('createLessonPlanBtn');
    const lessonPlanModal = document.getElementById('lessonPlanModal');
    const cancelLessonPlanBtn = document.getElementById('cancelLessonPlanBtn');
    const saveLessonPlanBtn = document.getElementById('saveLessonPlanBtn');
    const lessonPlanForm = document.getElementById('lessonPlanForm');
    const planContent = document.getElementById('planContent');
    const planContentHidden = document.getElementById('planContentHidden');
    
    // Carregar lista de planos
    function loadLessonPlans() {
        lessonPlansList.innerHTML = '';
        
        data.lessonPlans.forEach(plan => {
            const lastEditDate = new Date(plan.lastEdit);
            const formattedDate = lastEditDate.toLocaleDateString('pt-BR');
            
            // Mapear nome da disciplina
            let subjectName = 'Disciplina';
            switch(plan.subject) {
                case 'matematica': subjectName = 'Matemática'; break;
                case 'portugues': subjectName = 'Português'; break;
                case 'ciencias': subjectName = 'Ciências'; break;
                case 'historia': subjectName = 'História'; break;
                case 'geografia': subjectName = 'Geografia'; break;
                case 'ingles': subjectName = 'Inglês'; break;
                case 'artes': subjectName = 'Artes'; break;
                case 'educacao-fisica': subjectName = 'Educação Física'; break;
            }
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="text-sm font-medium text-gray-900 dark:text-white">${plan.title}</div>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-700 dark:text-gray-300">${subjectName}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-700 dark:text-gray-300">${plan.grade}º Ano</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-700 dark:text-gray-300">${plan.duration} min</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-700 dark:text-gray-300">${formattedDate}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button class="text-primary hover:text-secondary mr-3 edit-plan" data-id="${plan.id}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="text-red-600 hover:text-red-800 delete-plan" data-id="${plan.id}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            `;
            
            lessonPlansList.appendChild(row);
        });
        
        // Adicionar eventos para editar e excluir
        document.querySelectorAll('.edit-plan').forEach(btn => {
            btn.addEventListener('click', function() {
                const planId = parseInt(this.getAttribute('data-id'));
                openEditPlanModal(planId);
            });
        });
        
        document.querySelectorAll('.delete-plan').forEach(btn => {
            btn.addEventListener('click', function() {
                const planId = parseInt(this.getAttribute('data-id'));
                deletePlan(planId);
            });
        });
    }
    
    // Abrir modal para criar novo plano
    createLessonPlanBtn.addEventListener('click', function() {
        document.getElementById('lessonPlanTitle').textContent = 'Novo Plano de Aula';
        lessonPlanForm.reset();
        planContent.innerHTML = '';
        lessonPlanModal.classList.remove('hidden');
        
        // Remover ID do plano se existir
        if (lessonPlanForm.hasAttribute('data-plan-id')) {
            lessonPlanForm.removeAttribute('data-plan-id');
        }
    });
    
    // Fechar modal
    cancelLessonPlanBtn.addEventListener('click', function() {
        lessonPlanModal.classList.add('hidden');
    });
    
    // Abrir modal para editar plano
    function openEditPlanModal(planId) {
        const plan = data.lessonPlans.find(p => p.id === planId);
        if (plan) {
            document.getElementById('lessonPlanTitle').textContent = 'Editar Plano de Aula';
            
            document.getElementById('planTitle').value = plan.title;
            document.getElementById('planSubject').value = plan.subject;
            document.getElementById('planGrade').value = plan.grade;
            document.getElementById('planDuration').value = plan.duration;
            document.getElementById('planObjectives').value = plan.objectives;
            planContent.innerHTML = plan.content;
            document.getElementById('planResources').value = plan.resources;
            document.getElementById('planEvaluation').value = plan.evaluation;
            
            // Armazenar ID do plano sendo editado
            lessonPlanForm.setAttribute('data-plan-id', planId);
            
            lessonPlanModal.classList.remove('hidden');
        }
    }
    
    // Salvar plano
    saveLessonPlanBtn.addEventListener('click', function() {
        // Transferir conteúdo do editor para o campo oculto
        planContentHidden.value = planContent.innerHTML;
        
        const title = document.getElementById('planTitle').value;
        const subject = document.getElementById('planSubject').value;
        const grade = document.getElementById('planGrade').value;
        const duration = parseInt(document.getElementById('planDuration').value);
        const objectives = document.getElementById('planObjectives').value;
        const content = planContent.innerHTML;
        const resources = document.getElementById('planResources').value;
        const evaluation = document.getElementById('planEvaluation').value;
        
        // Validação básica
        if (!title || !content) {
            alert('Por favor, preencha pelo menos o título e o conteúdo do plano de aula.');
            return;
        }
        
        // Verificar se é edição ou novo plano
        if (lessonPlanForm.hasAttribute('data-plan-id')) {
            // Edição
            const planId = parseInt(lessonPlanForm.getAttribute('data-plan-id'));
            const planIndex = data.lessonPlans.findIndex(p => p.id === planId);
            
            if (planIndex !== -1) {
                data.lessonPlans[planIndex] = {
                    ...data.lessonPlans[planIndex],
                    title,
                    subject,
                    grade,
                    duration,
                    lastEdit: new Date().toISOString().split('T')[0],
                    objectives,
                    content,
                    resources,
                    evaluation
                };
            }
        } else {
            // Novo plano
            const newId = data.lessonPlans.length > 0 ? Math.max(...data.lessonPlans.map(p => p.id)) + 1 : 1;
            
            data.lessonPlans.push({
                id: newId,
                title,
                subject,
                grade,
                duration,
                lastEdit: new Date().toISOString().split('T')[0],
                objectives,
                content,
                resources,
                evaluation
            });
        }
        
        // Atualizar localStorage
        updateData(data);
        
        // Recarregar lista e fechar modal
        loadLessonPlans();
        lessonPlanModal.classList.add('hidden');
    });
    
    // Excluir plano
    function deletePlan(planId) {
        if (confirm('Tem certeza que deseja excluir este plano de aula?')) {
            const planIndex = data.lessonPlans.findIndex(p => p.id === planId);
            
            if (planIndex !== -1) {
                data.lessonPlans.splice(planIndex, 1);
                
                // Atualizar localStorage
                updateData(data);
                
                // Recarregar lista
                loadLessonPlans();
            }
        }
    }
    
    // Configurar editor de texto
    document.querySelectorAll('.editor-toolbar button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const command = this.getAttribute('data-command');
            const value = this.getAttribute('data-value') || null;
            
            if (command === 'createLink') {
                const url = prompt('Insira a URL do link:');
                if (url) document.execCommand(command, false, url);
            } else if (command === 'insertImage') {
                const url = prompt('Insira a URL da imagem:');
                if (url) document.execCommand(command, false, url);
            } else {
                document.execCommand(command, false, value);
            }
            
            // Foco de volta no editor
            planContent.focus();
        });
    });
    
    // Carregar planos iniciais
    loadLessonPlans();
}

// Notas e Frequência
function setupGradesAndAttendance() {
    const data = getData();
    const loadClassBtn = document.getElementById('loadClassBtn');
    const gradesTab = document.querySelector('.grades-tab');
    const attendanceTab = document.querySelector('.attendance-tab');
    const gradesContent = document.getElementById('grades-content');
    const attendanceContent = document.getElementById('attendance-content');
    const gradesTableBody = document.getElementById('grades-table-body');
    
    // Alternar entre abas
    gradesTab.addEventListener('click', function(e) {
        e.preventDefault();
        attendanceTab.classList.remove('border-primary', 'text-primary');
        attendanceTab.classList.add('text-gray-500', 'border-transparent');
        gradesTab.classList.add('border-primary', 'text-primary');
        gradesTab.classList.remove('text-gray-500', 'border-transparent');
        
        attendanceContent.classList.add('hidden');
        gradesContent.classList.remove('hidden');
    });
    
    attendanceTab.addEventListener('click', function(e) {
        e.preventDefault();
        gradesTab.classList.remove('border-primary', 'text-primary');
        gradesTab.classList.add('text-gray-500', 'border-transparent');
        attendanceTab.classList.add('border-primary', 'text-primary');
        attendanceTab.classList.remove('text-gray-500', 'border-transparent');
        
        gradesContent.classList.add('hidden');
        attendanceContent.classList.remove('hidden');
    });
    
    // Carregar turma
    loadClassBtn.addEventListener('click', function() {
        const classId = document.getElementById('class-select').value;
        const subject = document.getElementById('subject-select').value;
        const period = document.getElementById('period-select').value;
        
        // Atualizar título
        const className = data.classes[classId].name;
        let subjectName = 'Disciplina';
        switch(subject) {
            case 'matematica': subjectName = 'Matemática'; break;
            case 'portugues': subjectName = 'Português'; break;
            case 'ciencias': subjectName = 'Ciências'; break;
            case 'historia': subjectName = 'História'; break;
            case 'geografia': subjectName = 'Geografia'; break;
        }
        
        document.querySelectorAll('#tabContent h2').forEach(h2 => {
            h2.textContent = h2.textContent.split('-')[0] + '- ' + className + ' - ' + subjectName;
        });
        
        // Carregar dados
        loadGradesTable(classId);
    });
    
    // Carregar tabela de notas
    function loadGradesTable(classId) {
        gradesTableBody.innerHTML = '';
        
        const students = data.classes[classId].students;
        
        students.forEach(student => {
            // Calcular média ponderada
            const weightedSum = (student.grades.prova1 * 3) + 
                                (student.grades.trabalho * 2) + 
                                (student.grades.prova2 * 3) + 
                                (student.grades.participacao * 2);
            const average = weightedSum / 10;
            const roundedAverage = Math.round(average * 10) / 10;
            
            // Determinar situação
            let situation, situationClass;
            if (roundedAverage >= 7) {
                situation = 'Aprovado';
                situationClass = 'text-green-600';
            } else if (roundedAverage >= 5) {
                situation = 'Recuperação';
                situationClass = 'text-yellow-600';
            } else {
                situation = 'Reprovado';
                situationClass = 'text-red-600';
            }
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900 dark:text-white">${student.name}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center">
                    <input type="number" min="0" max="10" step="0.1" class="w-16 text-center border-gray-300 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white" value="${student.grades.prova1}" data-student="${student.id}" data-activity="prova1">
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center">
                    <input type="number" min="0" max="10" step="0.1" class="w-16 text-center border-gray-300 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white" value="${student.grades.trabalho}" data-student="${student.id}" data-activity="trabalho">
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center">
                    <input type="number" min="0" max="10" step="0.1" class="w-16 text-center border-gray-300 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white" value="${student.grades.prova2}" data-student="${student.id}" data-activity="prova2">
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center">
                    <input type="number" min="0" max="10" step="0.1" class="w-16 text-center border-gray-300 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white" value="${student.grades.participacao}" data-student="${student.id}" data-activity="participacao">
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center bg-gray-100 dark:bg-gray-600">
                    <div class="text-sm font-medium text-gray-900 dark:text-white">${roundedAverage.toFixed(1)}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div class="text-sm font-medium ${situationClass}">${situation}</div>
                </td>
            `;
            
            gradesTableBody.appendChild(row);
        });
        
        // Adicionar eventos para atualizar notas
        document.querySelectorAll('#grades-table-body input').forEach(input => {
            input.addEventListener('change', function() {
                const studentId = parseInt(this.getAttribute('data-student'));
                const activity = this.getAttribute('data-activity');
                const value = parseFloat(this.value);
                
                if (isNaN(value) || value < 0 || value > 10) {
                    alert('Por favor, insira uma nota válida entre 0 e 10.');
                    return;
                }
                
                // Atualizar nota no localStorage
                const classId = document.getElementById('class-select').value;
                const studentIndex = data.classes[classId].students.findIndex(s => s.id === studentId);
                
                if (studentIndex !== -1) {
                    data.classes[classId].students[studentIndex].grades[activity] = value;
                    updateData(data);
                    
                    // Recarregar tabela para atualizar média e situação
                    loadGradesTable(classId);
                }
            });
        });
    }
}

// Agenda - Inicializar calendário 
function setupCalendar() {
    const createEventBtn = document.getElementById('createEventBtn');
    
    // Evento de criação ainda será implementado
    createEventBtn.addEventListener('click', function() {
        alert('Funcionalidade de criação de evento será implementada.');
    });

    // Função que será chamada quando a seção agenda for exibida
    window.initializeCalendar = function() {
        const calendarEl = document.getElementById('calendar');
        if (!calendarEl) return;
        
        // Verificar se o calendário já foi inicializado
        if (calendarEl.innerHTML !== '') return;
        
        const data = getData();
        
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            locale: 'pt-br',
            buttonText: {
                today: 'Hoje',
                month: 'Mês',
                week: 'Semana',
                day: 'Dia'
            },
            events: data.events,
            eventClick: function(info) {
                const event = data.events.find(e => e.id === parseInt(info.event.id));
                if (event) {
                    alert(`${event.title}\nLocal: ${event.location}\nTurma: ${event.className || 'N/A'}\nDescrição: ${event.description}`);
                }
            }
        });
        
        calendar.render();
    };
}

// Funções Stub para os demais módulos
// Na implementação real, essas funções teriam a lógica completa
function setupInteractiveActivities() {
    // Implementação básica para atividades interativas
}

function setupCommunity() {
    // Implementação básica para comunidade
}

function setupCourses() {
    // Implementação básica para cursos
}

function setupLibrary() {
    // Implementação básica para biblioteca
}

function setupSharing() {
    // Implementação básica para compartilhamento
}

function setupBlog() {
    // Implementação básica para blog
}
