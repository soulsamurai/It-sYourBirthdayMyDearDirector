// ============================================================
//  QUIZ DATA — 16 ВОПРОСОВ
//  Добавьте videoUrl / imageUrl для каждого вопроса
// ============================================================
const quizData = [
    {
        question: "Какой предмет в лапах держит Настина панда?",
        answers: ["Плетка", "Книга", "Мяч", "Пицца"],
        correct: 0,
        description: '🐼 <strong>Плетка</strong> — по очевидным причинам!',
        videoUrl: "videos/Видео-Илья.MP4"
    },
    {
        question: "У кого был самый долгий обед в истории SD?",
        answers: ["Даша Черепинская", "Влад Мишуков", "Вова Балахнин", "Егор Крылов"],
        correct: 0,
        description: '🍽️ <strong>Даша Черепинская</strong> — ушла на обед и одновременно с кампании.',
        videoUrl: "videos/Видео-Юрий.mp4"
    },
    {
        question: "Какую серию книг планирует прочесть Настя (на момент создания страницы Confluence)?",
        answers: ["Песнь Льда и Пламени", "Гарри Поттер", "Властелин колец", "Рыжий кот по имени Боб"],
        correct: 0,
        description: '📚 <strong>Песнь Льда и Пламени</strong> — серия, лёгшая в основу «Игры престолов».',
        videoUrl: "videos/Видео-Дмитрий.mp4"
    },
    {
        question: "Какой сериал пересматривала Настя в соответствии с информацией на странице Confluence?",
        answers: ["Теория большого взрыва", "Детство Шелдона", "Друзья", "Счастливы вместе"],
        correct: 0,
        description: '📺 <strong>Большой взрыв</strong> — «Счастливы вместе» тоже неплох!',
        videoUrl: "videos/Видео-пацан.mp4"
    },
    {
        question: "Сколько стоит маленькое комбо в столовой «Мечта»?",
        answers: ["Бесплатно по связям", "100 000", "320", "120"],
        correct: 2,
        description: '🍱 <strong>320 ₽</strong> — зарплатный кешбек 1:1 по карте МТС Деньги.',
        videoUrl: "videos/Видео-Денис.mp4"
    },
    {
        question: "Выберите любимое хобби Насти",
        answers: ["Коллекционирование", "Ходить в Бык с мужем", "Рисование раскрасок", "Всё вышеперечисленное"],
        correct: 3,
        description: '🎨 <strong>Всё вышеперечисленное!</strong> 100 фарфоровых кукол в коллекции — это сильно.',
        videoUrl: "videos/Видео-Вероника.mp4"
    },
    {
        question: "Что Настя с мужем нашли, когда гуляли по Москве?",
        answers: ["Кузнечика", "Аленький цветочек", "Красную панду", "Куклу"],
        correct: 2,
        description: '🐼 <strong>Красную панду</strong> — судьбоносная встреча!',
        videoUrl: "videos/Видео-Александр.mp4"
    },
    {
        question: "Какое самое популярное слово-паразит у сотрудников ГПД?",
        answers: ["«тя»", "«ну»", "«типа»", "«как бы»"],
        correct: 0,
        description: '💬 <strong>«тя»</strong> — слово разработано Владом Мишуковым и часто встречается в лексиконе ГПД.',
        videoUrl: "videos/Видео-Влад.mp4"
    },
    {
        question: "Где родилась Настя?",
        answers: ["Алма-Ата", "Владимир", "Технопарк", "Калининград"],
        correct: 0,
        description: '🌍 <strong>Алма-Ата</strong> — слава богу, правильный ответ это не Технопарк!',
        //videoUrl: "videos/Видео-.mp4"
    },
    {
        question: "Сколько человек пополнили ряды группы Предоставления доступов с 2025 года?",
        answers: ["2", "5", "3", "4"],
        correct: 3,
        description: ' Надеемся, что начальник никого не забыл 🤣',
        videoUrl: "videos/Видео-Егор.mp4"
    },
    {
        question: "Кто такие вымышленные сказочные существа, которые питаются янтарной энергией и приносят людям счастье и добро, и являются неофициальным символом Калининграда?",
        answers: ["Домовые", "Сотрудники предоставления доступов", "Хомлины", "Гномы"],
        correct: 2,
        description: '✨ <strong>Хомлины</strong> — вы же не выбрали вариант про сотрудников предоставления доступов, верно?',
        videoUrl: "videos/Видео-Алексей.mp4"
    },
    {
        question: "Какое количество нецензурной брани было зафиксировано ИБ в переписке Влада и Олега в MM?",
        answers: ["100 000+", "4", "10 000+", "3 000+"],
        correct: 3,
        description: '🔥 <strong>3 000+</strong> — рекорд, который надеемся никто не побьёт и не будет пробовать.',
        videoUrl: "videos/Видео-Михаил.mp4"
    },
    {
        question: "Как зовут персонажа на фото?",
        answers: ["Олег", "Влад", "Темур", "Карл"],
        correct: 3,
        description: '👴 <strong>Дедушка Карл</strong> — самый первый и самый старший сказочный персонаж-хомлин в Калининграде.',
        imageUrl: "Homlin/Хомлин.jpg",
        videoUrl: "videos/Видео-Ксения.mp4"
    },
    {
        question: "Сколько грамот программы признания Насти, как лучшего сотрудника ГО, находятся на полке в рядах ServiceDesk?",
        answers: ["3", "4", "6", "10"],
        correct: 1,
        description: 'Абсолютный рекорд числа грамот на полке в Москве 🥳',
        videoUrl: "videos/Видео-Катя.mp4"
    },
    {
        question: "Руководителя какого отдела не смогла уволить система IDM?",
        answers: ["Отдел администрирования пользователей", "Отдел сопровождения пользователей", "Отдел управления правами", "Группа Предоставление доступов"],
        correct: 2,
        description: '🎯 <strong>Отдел управления правами</strong> — зумеры называют такой феномен friendly fire: огонь по своим.',
        videoUrl: "videos/Видео-Олег.mp4"
    },
    {
        question: "Как зовут котиков Насти?",
        answers: ["Вакса и Веста", "Степан Степаныч и Пикси", "Фур-фур и Мур-мур", "Барсик и Мурзик"],
        correct: 0,
        description: '🐱 <strong>Вакса и Веста</strong> — настоящие имена. Фур-фур и Барсик — это ласковые клички.',
        videoUrl: "videos/Видео-Даша.mp4"
    },
    {
        question: "Чей это рабочий стол?",
        answers: ["Влад", "Темур", "Вероника", "Олег"],
        correct: 3,
        description: '🦮 <strong>Точно не Влад</strong>  – сильно чисто',
        imageUrl: "Homlin/фото1.jpg",
        videoUrl: "videos/Видео-Роман.mp4"
    },
    {
        question: "Назовите имя устройства Германовой Анастасии.",
        answers: ["MSK-MOB-123456", "TOM-CSPKO-1488", "MSK-140798", "MAC-500000"],
        correct: 2,
        description: '💻 <strong>MSK-140798</strong> — откуда у вас эта информация?!',
        videoUrl: "videos/Видео - Алина.mp4"
    },
    {
        question: "Любимый вид удалённых рабочих столов у Насти.",
        answers: ["TS-столы", "WS-столы", "DEV-столы", "CC-столы"],
        correct: 2,
        description: '🖥️ <strong>DEV-столы</strong> — Серж, я больше не выдам тебе DEV-стол, чтобы что-то протестировать!',
        videoUrl: "videos/Видео-Серж.mp4"
    },
    {
        question: "Определи сотрудника по скриншоту видео в MTS-Link.",
        answers: ["Олег", "Даша", "Темур", "Катя"],
        correct: 2,
        description: '❗ <strong>Главное </strong> — не смотреть в монитор Сержа (помогает с VPN)',
        imageUrl: "Homlin/Силует.png",
        //videoUrl: "videos/Видео-.mp4"
    }
];

// ============================================================
//  WISHES (balloon pop)
// ============================================================
const wishes = [
    
];

// ============================================================
//  BALLOON PHOTOS — ЗАМЕНИТЕ НА СВОИ
//  Положите JPEG в папку balloons/ и раскомментируйте пути
// ============================================================
const balloonPhotoPaths = [
     "balloons/Вероника-голова.png",
     "balloons/Влад-голова.png",
     "balloons/Олег-голова.png",
     "balloons/Темур-голова.png",
     "balloons/Даша-голова.png",
];

// ============================================================
//  STATE
// ============================================================
let currentPage = 'welcome';
let correctTotal = 0;
let wrongTotal = 0;
let totalAttempts = 0; // total wrong attempts across all questions
let wishIndex = 0;

// ============================================================
//  PAGE NAVIGATION
// ============================================================
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById('page-' + id);
    if (page) {
        page.classList.add('active');
        page.style.animation = 'none';
        page.offsetHeight;
        page.style.animation = '';
    }
    currentPage = id;
    window.scrollTo({ top: 0 });
}

function startQuiz() {
    showPage('q0');
}

function goToQuestion(i) {
    if (i < quizData.length) {
        showPage('q' + i);
    } else {
        showResultPage();
    }
}

// ============================================================
//  BUILD QUESTION PAGES
// ============================================================
function buildQuestionPages() {
    document.querySelectorAll('.page.question-page').forEach(p => p.remove());
    const resultPage = document.getElementById('page-result');

    quizData.forEach((q, i) => {
        const page = document.createElement('div');
        page.className = 'page question-page';
        page.id = `page-q${i}`;
        page.innerHTML = `
            <div class="question-page-content">
                <div class="q-top-bar">
                    <div class="q-top-info">
                        <span>Вопрос ${i + 1} / ${quizData.length}</span>
                        <div class="q-score">
                            <span>✅ <span class="js-correct">0</span></span>
                            <span>❌ <span class="js-wrong">0</span></span>
                        </div>
                    </div>
                    <div class="q-progress-track">
                        <div class="q-progress-fill js-progress" style="width:${(i / quizData.length) * 100}%"></div>
                    </div>
                </div>

                <div class="q-card" id="qcard-${i}">
                    <div class="q-number-badge">Вопрос ${i + 1}</div>
                    <div class="q-text">${q.question}</div>
                    ${q.imageUrl ? `
                    <div class="q-image-wrap">
                        <img class="q-image" src="${q.imageUrl}" alt="Изображение к вопросу ${i + 1}">
                    </div>` : ''}
                    <div class="q-answers" id="qanswers-${i}">
                        ${q.answers.map((a, j) => `
                            <button class="q-answer-btn" data-q="${i}" data-a="${j}">${a}</button>
                        `).join('')}
                    </div>
                    <div class="q-attempts" id="qattempts-${i}">
                        Попыток: <span class="attempts-count">0</span>
                    </div>
                    <div class="q-description" id="qdesc-${i}">${q.description}</div>
                </div>

                <div class="q-actions">
                    <button class="q-video-btn" id="qvideo-${i}" data-video-index="${i}">
                        🎬 К просмотру
                    </button>
                    <button class="q-next-btn" id="qnext-${i}">
                        ${i < quizData.length - 1 ? 'Следующий вопрос →' : 'Показать результат 🏆'}
                    </button>
                </div>

                <!-- Video frame placeholder for question ${i + 1} -->
                <div class="q-video-frame" id="qvideoframe-${i}">
                    <div class="video-frame-container" id="qvideocontainer-${i}">
                        <!-- Video will be inserted here -->
                        <div class="video-placeholder">
                            <span class="video-placeholder-icon">🎬</span>
                            <span class="video-placeholder-text">Видео для вопроса ${i + 1}</span>
                            <span class="video-placeholder-hint">URL не указан</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        resultPage.parentNode.insertBefore(page, resultPage);

        // Bind answer buttons
        page.querySelectorAll('.q-answer-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                handleAnswer(parseInt(btn.dataset.q), parseInt(btn.dataset.a), btn);
            });
        });

        // Bind next button
        page.querySelector('.q-next-btn').addEventListener('click', () => {
            goToQuestion(i + 1);
        });

        // Bind video button — toggles video frame on the same page
        page.querySelector('.q-video-btn').addEventListener('click', () => {
            toggleVideoFrame(i);
        });
    });
}

// ============================================================
//  HANDLE ANSWER — multi-attempt until correct
// ============================================================
function handleAnswer(qIndex, aIndex, btn) {
    const card = document.getElementById(`qcard-${qIndex}`);
    const desc = document.getElementById(`qdesc-${qIndex}`);
    const nextBtn = document.getElementById(`qnext-${qIndex}`);
    const videoBtn = document.getElementById(`qvideo-${qIndex}`);
    const attemptsEl = document.querySelector(`#qattempts-${qIndex} .attempts-count`);
    const isCorrect = aIndex === quizData[qIndex].correct;

    // Already answered correctly? Ignore
    if (card.dataset.completed) return;
    // This button already tried? Ignore
    if (btn.classList.contains('wrong') || btn.classList.contains('correct')) return;

    if (isCorrect) {
        // ✅ Correct!
        btn.classList.add('correct');
        card.classList.add('correct-glow');
        card.dataset.completed = '1';
        correctTotal++;
        desc.classList.add('visible');
        spawnEmojiAt(card, '🎉');
        launchConfettiBurst();

        // Disable all other buttons
        document.querySelectorAll(`#qanswers-${qIndex} .q-answer-btn`).forEach(b => {
            if (!b.classList.contains('correct')) b.classList.add('disabled');
        });

        // Show ONLY video button — next appears after watching video
        videoBtn.classList.add('visible');

        updateAllScores();
    } else {
        // ❌ Wrong — disable this button, allow retrying others
        btn.classList.add('wrong');
        wrongTotal++;
        totalAttempts++;

        // Update attempts counter for this question
        let qAttempts = parseInt(card.dataset.attempts || '0') + 1;
        card.dataset.attempts = qAttempts;
        attemptsEl.textContent = qAttempts;

        spawnEmojiAt(btn, '😢');
        updateAllScores();
    }
}

function updateAllScores() {
    document.querySelectorAll('.js-correct').forEach(el => el.textContent = correctTotal);
    document.querySelectorAll('.js-wrong').forEach(el => el.textContent = wrongTotal);
}

// ============================================================
//  VIDEO FRAME (inline on each question page)
// ============================================================
function toggleVideoFrame(qIndex) {
    const frame = document.getElementById(`qvideoframe-${qIndex}`);
    const container = document.getElementById(`qvideocontainer-${qIndex}`);
    const btn = document.getElementById(`qvideo-${qIndex}`);
    const url = quizData[qIndex].videoUrl || '';

    // Toggle visibility
    if (frame.classList.contains('visible')) {
        frame.classList.remove('visible');
        btn.innerHTML = '🎬 К просмотру';
        // Clear video to stop playback
        const placeholder = container.querySelector('.video-placeholder');
        if (!placeholder) {
            container.innerHTML = `
                <div class="video-placeholder">
                    <span class="video-placeholder-icon">🎬</span>
                    <span class="video-placeholder-text">Видео для вопроса ${qIndex + 1}</span>
                    <span class="video-placeholder-hint">${url ? 'Нажмите для воспроизведения' : 'URL не указан'}</span>
                </div>
            `;
        }
        // Video was watched — now show "Next question" button
        const nextBtn = document.getElementById(`qnext-${qIndex}`);
        nextBtn.classList.add('visible');
        return;
    }

    // Show frame
    frame.classList.add('visible');
    btn.innerHTML = '✕ Скрыть видео';

    // Scroll to the video frame smoothly
    setTimeout(() => {
        frame.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);

    // If URL is provided, load the video
    if (url) {
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            let embedUrl = url;
            if (url.includes('watch?v=')) {
                embedUrl = url.replace('watch?v=', 'embed/');
            } else if (url.includes('youtu.be/')) {
                embedUrl = url.replace('youtu.be/', 'www.youtube.com/embed/');
            }
            container.innerHTML = `<iframe src="${embedUrl}?autoplay=1" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
        } else if (url.includes('vimeo.com')) {
            const vimeoId = url.split('/').pop();
            container.innerHTML = `<iframe src="https://player.vimeo.com/video/${vimeoId}?autoplay=1" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
        } else {
            container.innerHTML = `<video src="${url}" controls autoplay></video>`;
        }
    }
    // If no URL — placeholder remains visible
}

// ============================================================
//  RESULT PAGE
// ============================================================
function showResultPage() {
    document.getElementById('resultScore').textContent = `${correctTotal} / ${quizData.length}`;
    
    const pct = (correctTotal / quizData.length) * 100;
    let text = '', emoji = '🏆';
    if (pct === 100) { text = 'Идеально! Ты настоящий гений!'; emoji = '🏆'; }
    else if (pct >= 80) { text = 'Отличный результат!'; emoji = '🌟'; }
    else if (pct >= 60) { text = 'Хорошо! Но можно лучше!'; emoji = '👍'; }
    else if (pct >= 40) { text = 'Неплохо, но стоит подучить!'; emoji = '🤔'; }
    else { text = 'Попробуй ещё раз!'; emoji = '📚'; }
    
    if (wrongTotal > 0) {
        text += ` Ошибок: ${wrongTotal}`;
    }
    
    document.getElementById('resultText').textContent = text;
    document.querySelector('#page-result .result-emoji').textContent = emoji;
    
    showPage('result');
    launchConfettiBurst();
    setTimeout(launchConfettiBurst, 400);
    setTimeout(launchConfettiBurst, 800);
}

function restartQuiz() {
    correctTotal = 0;
    wrongTotal = 0;
    totalAttempts = 0;
    wishIndex = 0;
    buildQuestionPages();
    showPage('welcome');
}

function spawnEmojiAt(el, emoji) {
    const rect = el.getBoundingClientRect();
    const d = document.createElement('div');
    d.className = 'floating-emoji';
    d.textContent = emoji;
    d.style.left = (rect.left + rect.width / 2 - 16) + 'px';
    d.style.top = (rect.top + 20) + 'px';
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 1500);
}

// ============================================================
//  WISH MODAL
// ============================================================
let wishConfettiPieces = [];
let wishConfettiAnimating = false;

function initWishCanvas() {
    const c = document.getElementById('wishConfettiCanvas');
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    return c;
}

function animateWishConfetti() {
    const c = document.getElementById('wishConfettiCanvas');
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
    wishConfettiPieces = wishConfettiPieces.filter(p => {
        const alive = p.update();
        if (alive) p.draw(ctx);
        return alive;
    });
    if (wishConfettiPieces.length > 0) {
        requestAnimationFrame(animateWishConfetti);
    } else {
        wishConfettiAnimating = false;
    }
}

function startWishLoop() {
    if (!wishConfettiAnimating) {
        wishConfettiAnimating = true;
        animateWishConfetti();
    }
}

function burstWishConfetti() {
    const c = initWishCanvas();
    const w = c.width, h = c.height;
    const pts = [[w*.5,h*.08],[w*.15,h*.25],[w*.85,h*.25],[w*.3,h*.1],[w*.7,h*.1]];
    pts.forEach(([px,py]) => {
        for (let i = 0; i < 45; i++) wishConfettiPieces.push(new Confetti(px+(Math.random()-.5)*60, py, true));
    });
    setTimeout(() => {
        for (let i = 0; i < 70; i++) wishConfettiPieces.push(new Confetti(w*.5+(Math.random()-.5)*200, h*.05, true));
        startWishLoop();
    }, 350);
    setTimeout(() => {
        [[w*.05,h*.35],[w*.95,h*.35]].forEach(([px,py]) => {
            for (let i = 0; i < 40; i++) wishConfettiPieces.push(new Confetti(px, py, true));
        });
    }, 700);
    startWishLoop();
}

function showWish(wish) {
    const overlay = document.getElementById('wishOverlay');
    document.getElementById('wishText').textContent = wish.text;
    document.getElementById('wishEmojiTop').textContent = wish.emoji || '🎉';

    const pw = document.getElementById('wishPhotoWrapper');
    const img = document.getElementById('wishPhoto');
    pw.classList.remove('no-photo');
    img.style.display = 'block';
    img.src = wish.photo;
    img.onerror = () => {
        pw.classList.add('no-photo');
        let fb = pw.querySelector('.photo-fallback');
        if (!fb) { fb = document.createElement('span'); fb.className = 'photo-fallback'; pw.appendChild(fb); }
        fb.textContent = '🎂';
        img.style.display = 'none';
    };

    overlay.classList.add('active');
    burstWishConfetti();

    document.getElementById('wishContinueBtn').onclick = () => {
        overlay.classList.remove('active');
        wishConfettiPieces = [];
        const c = document.getElementById('wishConfettiCanvas');
        c.getContext('2d').clearRect(0, 0, c.width, c.height);
    };
}

// ============================================================
//  CONFETTI (background)
// ============================================================
const bgCanvas = document.getElementById('bgCanvas');
const bgCtx = bgCanvas.getContext('2d');
let confettiPieces = [];
const confettiColors = ['#ff6ec7','#ffd700','#00e5ff','#ff5252','#69f0ae','#ab47bc','#ff9100','#448aff'];

function resizeBg() {
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
}
resizeBg();

class Confetti {
    constructor(x, y, burst) {
        this.x = x ?? Math.random() * bgCanvas.width;
        this.y = y ?? -20;
        this.w = Math.random() * 10 + 5;
        this.h = Math.random() * 6 + 3;
        this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        this.vx = burst ? (Math.random() - 0.5) * 12 : (Math.random() - 0.5) * 2;
        this.vy = burst ? (Math.random() * -10 - 2) : (Math.random() * 1.5 + 0.5);
        this.gravity = 0.15;
        this.rotation = Math.random() * 360;
        this.rotSpeed = (Math.random() - 0.5) * 10;
        this.opacity = 1;
        this.life = burst ? 130 : 300;
    }
    update() {
        this.x += this.vx; this.vy += this.gravity; this.y += this.vy;
        this.rotation += this.rotSpeed; this.life--;
        if (this.life < 30) this.opacity = this.life / 30;
        return this.life > 0;
    }
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.w/2, -this.h/2, this.w, this.h);
        ctx.restore();
    }
}

function launchConfettiBurst(ox, oy) {
    const cx = ox ?? window.innerWidth / 2;
    const cy = oy ?? window.innerHeight / 3;
    for (let i = 0; i < 90; i++) {
        confettiPieces.push(new Confetti(cx + (Math.random()-.5)*120, cy + (Math.random()-.5)*60, true));
    }
}

// Ambient
setInterval(() => {
    if (confettiPieces.length < 150) {
        confettiPieces.push(new Confetti());
        confettiPieces.push(new Confetti());
    }
}, 250);

function animateBg() {
    bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    confettiPieces = confettiPieces.filter(c => { const a = c.update(); if (a) c.draw(bgCtx); return a; });
    requestAnimationFrame(animateBg);
}
animateBg();

// ============================================================
//  BALLOON SYSTEM
// ============================================================
const bCanvas = document.getElementById('balloonCanvas');
const bCtx = bCanvas.getContext('2d');
let balloons = [];

function resizeB() { bCanvas.width = window.innerWidth; bCanvas.height = window.innerHeight; }
resizeB();

window.addEventListener('resize', () => {
    resizeBg(); resizeB();
    const wc = document.getElementById('wishConfettiCanvas');
    if (wc) { wc.width = window.innerWidth; wc.height = window.innerHeight; }
});

const balloonColors = [
    ['#ff6ec7','#c2185b'], ['#ffd700','#f9a825'], ['#69f0ae','#2e7d32'],
    ['#448aff','#1565c0'], ['#ab47bc','#6a1b9a'], ['#ff5252','#b71c1c'],
    ['#ff9100','#e65100'], ['#00e5ff','#00838f']
];

// Pre-load balloon photos
const balloonImages = [];
let balloonPhotosReady = true;

function preloadBalloonPhotos() {
    if (balloonPhotoPaths.length === 0) return;
    let loaded = 0;
    balloonPhotoPaths.forEach(src => {
        const img = new Image();
        img.onload = () => {
            balloonImages.push(img);
            loaded++;
            if (loaded === balloonPhotoPaths.length) balloonPhotosReady = true;
        };
        img.onerror = () => {
            loaded++;
            if (loaded === balloonPhotoPaths.length && balloonImages.length > 0) balloonPhotosReady = true;
        };
        img.src = src;
    });
}
preloadBalloonPhotos();
const checkReady = setInterval(() => {
    if (balloonPhotosReady) {
        clearInterval(checkReady);
        // заполнить шарики с фото
        for (let i = 0; i < 8; i++) spawnBalloon();
    }
}, 200);

class Balloon {
    constructor() {
        this.radius = Math.random() * 28 + 26;
        this.x = Math.random() * bCanvas.width;
        this.y = bCanvas.height + this.radius + Math.random() * 200;
        const cp = balloonColors[Math.floor(Math.random() * balloonColors.length)];
        this.color1 = cp[0]; this.color2 = cp[1];
        this.speed = Math.random() * 1.0 + 0.3;
        this.wobbleFreq = Math.random() * 0.02 + 0.01;
        this.wobbleOffset = Math.random() * Math.PI * 2;
        this.popped = false;
        this.popFrame = 0;
        this.popParticles = [];
        this.time = 0;
        this.img = null;
        if (balloonPhotosReady && balloonImages.length > 0) {
            this.img = balloonImages[Math.floor(Math.random() * balloonImages.length)];
        }
    }
    update() {
        if (this.popped) {
            this.popFrame++;
            this.popParticles.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += 0.2; p.life--; });
            return this.popFrame < 40;
        }
        this.time++;
        this.y -= this.speed;
        this.x += Math.sin(this.time * this.wobbleFreq + this.wobbleOffset) * 0.8;
        return this.y > -this.radius * 3;
    }
    draw(ctx) {
        if (this.popped) {
            this.popParticles.forEach(p => {
                if (p.life > 0) {
                    ctx.globalAlpha = p.life / p.maxLife;
                    ctx.fillStyle = p.color;
                    ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
                }
            });
            ctx.globalAlpha = 1;
            return;
        }
        const r = this.radius;

        if (this.img) {
            ctx.save();
            ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(this.x, this.y + r);
            ctx.quadraticCurveTo(this.x + 5, this.y + r + 25, this.x - 3, this.y + r + 50);
            ctx.stroke();
            ctx.beginPath(); ctx.arc(this.x, this.y, r, 0, Math.PI * 2); ctx.closePath(); ctx.clip();
            ctx.drawImage(this.img, this.x - r, this.y - r, r * 2, r * 2);
            ctx.restore();
            ctx.strokeStyle = '#ffd700'; ctx.lineWidth = 3;
            ctx.beginPath(); ctx.arc(this.x, this.y, r, 0, Math.PI * 2); ctx.stroke();
            ctx.fillStyle = 'rgba(255,255,255,0.15)';
            ctx.beginPath(); ctx.ellipse(this.x - r*.25, this.y - r*.3, r*.15, r*.25, -.5, 0, Math.PI*2); ctx.fill();
        } else {
            ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(this.x, this.y + r);
            ctx.quadraticCurveTo(this.x + 5, this.y + r + 25, this.x - 3, this.y + r + 50);
            ctx.stroke();
            const grad = ctx.createRadialGradient(this.x - r*.3, this.y - r*.3, r*.1, this.x, this.y, r);
            grad.addColorStop(0, this.color1); grad.addColorStop(1, this.color2);
            ctx.fillStyle = grad;
            ctx.beginPath(); ctx.ellipse(this.x, this.y, r*.85, r, 0, 0, Math.PI*2); ctx.fill();
            ctx.fillStyle = 'rgba(255,255,255,0.25)';
            ctx.beginPath(); ctx.ellipse(this.x - r*.25, this.y - r*.3, r*.18, r*.28, -.5, 0, Math.PI*2); ctx.fill();
            ctx.fillStyle = this.color2;
            ctx.beginPath(); ctx.moveTo(this.x-5,this.y+r-2); ctx.lineTo(this.x+5,this.y+r-2); ctx.lineTo(this.x,this.y+r+6); ctx.closePath(); ctx.fill();
        }
    }
    pop() {
        this.popped = true;
        for (let i = 0; i < 16; i++) {
            this.popParticles.push({
                x: this.x, y: this.y,
                vx: (Math.random()-.5)*8, vy: (Math.random()-.5)*8-2,
                size: Math.random()*5+2,
                color: Math.random()>.5 ? this.color1 : this.color2,
                life: 30+Math.random()*20, maxLife: 50
            });
        }
    }
    hitTest(mx, my) {
        if (this.popped) return false;
        const dx = mx - this.x, dy = my - this.y;
        return (dx*dx + dy*dy) < (this.radius * this.radius * 2);
    }
}

// Click handler for balloons — works on entire page
bCanvas.addEventListener('click', e => {
    const rect = bCanvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    for (let i = balloons.length - 1; i >= 0; i--) {
        if (balloons[i].hitTest(mx, my)) {
            balloons[i].pop();
            launchConfettiBurst(mx, my);
            if (wishIndex < wishes.length) {
                const w = wishes[wishIndex++];
                setTimeout(() => showWish(w), 300);
            }
            break;
        }
    }
});

function spawnBalloon() { 
    if (balloonImages.length === 0) return;
    if (balloons.length < 14) balloons.push(new Balloon());}
setInterval(spawnBalloon, 1200);
function initBalloonsWithPhotos() {
    if (balloonPhotosReady && balloonImages.length > 0) {
        for (let i = 0; i < 8; i++) {
            const b = new Balloon();
            // на всякий случай проверяем, что фото есть
            if (b.img) {
                b.y = Math.random() * bCanvas.height;
                balloons.push(b);
            }
        }
    } else {
        setTimeout(initBalloonsWithPhotos, 200); // проверяем каждые 200мс
    }
}
initBalloonsWithPhotos();

function animateBalloons() {
    bCtx.clearRect(0, 0, bCanvas.width, bCanvas.height);
    balloons = balloons.filter(b => { const a = b.update(); if (a) b.draw(bCtx); return a; });
    requestAnimationFrame(animateBalloons);
}
animateBalloons();

// ============================================================
//  INIT
// ============================================================
buildQuestionPages();
document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
