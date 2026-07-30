// ===================== QUIZ DATA =====================
const quizData = [
    {
        question: "Какая планета Солнечной системы самая большая?",
        answers: ["Сатурн", "Юпитер", "Нептун"],
        correct: 1,
        description: '🪐 <strong>Юпитер</strong> — настоящий гигант! Его масса в 318 раз больше массы Земли, а диаметр составляет около 140 000 км. Внутри Юпитера могли бы поместиться более 1300 планет размером с Землю! Кроме того, у Юпитера есть знаменитое Большое Красное Пятно — ураган, бушующий уже более 350 лет.'
    },
    {
        question: "Сколько костей в теле взрослого человека?",
        answers: ["206", "300", "180"],
        correct: 0,
        description: '🦴 В теле взрослого человека <strong>206 костей</strong>. Интересно, что у новорождённого их около 270, но со временем многие срастаются. Самая маленькая кость — стремечко в ухе (всего 3 мм), а самая большая — бедренная кость, которая может выдержать нагрузку до 1,5 тонн!'
    },
    {
        question: "Какой химический элемент обозначается символом 'Au'?",
        answers: ["Серебро", "Алюминий", "Золото"],
        correct: 2,
        description: '✨ <strong>Au</strong> — это символ золота, от латинского <em>Aurum</em>, что означает «жёлтый». Золото — один из первых металлов, известных человечеству. Оно настолько пластично, что из 1 грамма можно вытянуть нить длиной 2,4 км! Всё золото, когда-либо добытое, поместилось бы в куб со стороной всего 21 метр.'
    },
    {
        question: "Какое животное является самым быстрым на Земле?",
        answers: ["Гепард", "Антилопа", "Ястреб"],
        correct: 0,
        description: '🐆 <strong>Гепард</strong> — абсолютный рекордсмен скорости среди наземных животных! Он разгоняется до <strong>120 км/ч</strong> всего за 3 секунды — быстрее, чем большинство спортивных автомобилей. Однако бежать на такой скорости он может лишь около 30 секунд, после чего ему нужен отдых.'
    },
    {
        question: "В каком году человек впервые побывал на Луне?",
        answers: ["1965", "1969", "1972"],
        correct: 1,
        description: '🌕 <strong>20 июля 1969 года</strong> астронавт Нил Армстронг стал первым человеком, ступившим на поверхность Луны в рамках миссии «Аполлон-11». Его знаменитая фраза: «Это один маленький шаг для человека, но гигантский скачок для всего человечества» — вошла в историю навсегда.'
    },
    {
        question: "Какой океан является самым глубоким?",
        answers: ["Атлантический", "Индийский", "Тихий"],
        correct: 2,
        description: '🌊 <strong>Тихий океан</strong> — не только самый большой, но и самый глубокий на планете. Его максимальная глубина в Марианской впадине достигает <strong>10 994 метра</strong> — это глубже, чем высота Эвереста! Тихий океан занимает площадь 165,25 млн км² — это больше, чем вся суша Земли.'
    },
    {
        question: "Какая страна подарила миру пиццу?",
        answers: ["Франция", "Испания", "Италия"],
        correct: 2,
        description: '🍕 <strong>Италия</strong> — родина пиццы! Классическая пицца «Маргарита» была создана в 1889 году неаполитанским пекарем Рафаэле Эспозито в честь королевы Маргариты Савойской. Цвета пиццы (томаты, моцарелла, базилик) символизировали итальянский флаг. Сегодня в мире съедается около 3 миллиардов пицц в год!'
    },
    {
        question: "Сколько цветов в радуге?",
        answers: ["5", "7", "9"],
        correct: 1,
        description: '🌈 В радуге <strong>7 цветов</strong>: красный, оранжевый, жёлтый, зелёный, голубой, синий и фиолетовый. Радуга возникает из-за преломления солнечного света в каплях воды. Интересный факт: с высоты (например, из самолёта) радуга выглядит как полный круг, а не дуга!'
    },
    {
        question: "Какой газ составляет большую часть атмосферы Земли?",
        answers: ["Кислород", "Азот", "Углекислый газ"],
        correct: 1,
        description: '💨 <strong>Азот</strong> составляет около <strong>78%</strong> атмосферы Земли, кислород — примерно 21%, а оставшийся 1% — это аргон, углекислый газ и другие газы. Азот играет важнейшую роль в жизни: он входит в состав белков и ДНК всех живых организмов на планете.'
    },
    {
        question: "Какое самое большое животное на Земле?",
        answers: ["Африканский слон", "Синий кит", "Гигантский кальмар"],
        correct: 1,
        description: '🐋 <strong>Синий кит</strong> — самое большое животное, когда-либо жившее на Земле! Его длина может достигать <strong>33 метров</strong>, а вес — до 150 тонн. Сердце синего кита размером с автомобиль, а его язык весит столько же, сколько слон. Детёныш синего кита прибавляет около 90 кг в день!'
    }
];

// =====================================================
// 🎈 ПОЖЕЛАНИЯ ИЗ ШАРИКОВ
// Каждый шарик содержит пожелание + фото сотрудника.
// Фото берутся из папки photos/ (1.jpg, 2.jpg, ...)
// =====================================================
const wishes = [
    {
        text: "Пусть каждый день приносит тебе столько радости, сколько звёзд на небе! Ты заслуживаешь самого лучшего! 🌟",
        photo: "photos/1.jpg",   // ← замени на фото сотрудника
        emoji: "🌟"
    },
    {
        text: "Желаю тебе здоровья крепкого, как алмаз, и настроения яркого, как салют! С Днём Рождения! 💎",
        photo: "photos/2.jpg",
        emoji: "💎"
    },
    {
        text: "Пусть удача всегда будет на твоей стороне, а мечты сбываются быстрее, чем ты их загадываешь! ✨",
        photo: "photos/3.jpg",
        emoji: "✨"
    },
    {
        text: "Ты невероятный человек! Пусть этот год принесёт тебе море счастья, океан любви и вселенную возможностей! 🚀",
        photo: "photos/4.jpg",
        emoji: "🚀"
    },
    {
        text: "Желаю, чтобы каждое утро начиналось с улыбки, а каждый вечер заканчивался счастьем! Ты лучший! 😊",
        photo: "photos/5.jpg",
        emoji: "😊"
    },
    {
        text: "Пусть в жизни будет больше ярких моментов, тёплых встреч и искренних улыбок! С праздником! 🎂",
        photo: "photos/6.jpg",
        emoji: "🎂"
    },
    {
        text: "Ты как солнце — согреваешь всех вокруг! Пусть в твоей жизни всегда будет светло и тепло! ☀️",
        photo: "photos/7.jpg",
        emoji: "☀️"
    },
    {
        text: "Желаю тебе вдохновения, энергии и сил на всё, что задумано! Ты можешь всё! 💪",
        photo: "photos/8.jpg",
        emoji: "💪"
    },
    {
        text: "Пусть жизнь будет сладкой, как торт, и весёлой, как этот праздник! Обнимаем крепко! 🎉",
        photo: "photos/9.jpg",
        emoji: "🎉"
    },
    {
        text: "Ты делаешь мир лучше просто тем, что ты есть! Пусть всё сложится так, как ты мечтаешь! 🌈",
        photo: "photos/10.jpg",
        emoji: "🌈"
    }
];

let wishIndex = 0;        // which wish to show next
let quizLocked = false;   // is quiz blocked by a wish modal

let correctTotal = 0;
let wrongTotal = 0;
let answeredTotal = 0;

// ===================== BUILD QUIZ =====================
function buildQuiz() {
    const container = document.getElementById('quizContainer');
    container.innerHTML = '';
    quizData.forEach((q, i) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `card-${i}`;
        card.innerHTML = `
            <div class="question-number">Вопрос ${i + 1} / 10</div>
            <div class="question-text">${q.question}</div>
            <div class="answers" id="answers-${i}">
                ${q.answers.map((a, j) => `
                    <button class="answer-btn" onclick="selectAnswer(${i}, ${j})">${a}</button>
                `).join('')}
            </div>
            <div class="description" id="desc-${i}">${q.description}</div>
            <div class="wrong-msg" id="wrong-${i}">😔 Неправильно! Попробуй угадать в следующий раз.</div>
        `;
        container.appendChild(card);
    });
}

function selectAnswer(qIndex, aIndex) {
    if (quizLocked) return; // blocked until wish is dismissed

    const card = document.getElementById(`card-${qIndex}`);
    const btns = document.querySelectorAll(`#answers-${qIndex} .answer-btn`);
    const desc = document.getElementById(`desc-${qIndex}`);
    const wrongMsg = document.getElementById(`wrong-${qIndex}`);
    const isCorrect = aIndex === quizData[qIndex].correct;

    // Disable all buttons
    btns.forEach((btn, idx) => {
        btn.classList.add('disabled');
        btn.onclick = null;
        if (idx === quizData[qIndex].correct) {
            btn.classList.add('correct');
        }
        if (idx === aIndex && !isCorrect) {
            btn.classList.add('wrong');
        }
    });

    if (isCorrect) {
        correctTotal++;
        card.classList.add('correct-glow');
        desc.classList.add('visible');
        spawnEmoji(card, '🎉');
        launchConfettiBurst();
    } else {
        wrongTotal++;
        card.classList.add('wrong-glow');
        wrongMsg.classList.add('visible');
        spawnEmoji(card, '😢');
    }

    answeredTotal++;
    updateScore();

    if (answeredTotal === 10) {
        setTimeout(showResult, 1200);
    }
}

function updateScore() {
    document.getElementById('correctCount').textContent = correctTotal;
    document.getElementById('wrongCount').textContent = wrongTotal;
    const pct = (answeredTotal / 10) * 100;
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressLabel').textContent = `Отвечено: ${answeredTotal} / 10`;
}

function showResult() {
    document.getElementById('resultPanel').style.display = 'block';
    document.getElementById('resultScore').textContent = `${correctTotal} / 10`;
    let text = '';
    if (correctTotal === 10) text = '🏆 Идеально! Ты настоящий гений!';
    else if (correctTotal >= 8) text = '🌟 Отличный результат! Ты очень умный!';
    else if (correctTotal >= 6) text = '👍 Хорошо! Но можно ещё лучше!';
    else if (correctTotal >= 4) text = '🤔 Неплохо, но стоит подучить!';
    else text = '📚 Не расстраивайся, попробуй ещё раз!';
    document.getElementById('resultText').textContent = text;
    document.getElementById('resultPanel').scrollIntoView({ behavior: 'smooth', block: 'center' });
    launchConfettiBurst();
    setTimeout(launchConfettiBurst, 400);
    setTimeout(launchConfettiBurst, 800);
}

function restartQuiz() {
    correctTotal = 0;
    wrongTotal = 0;
    answeredTotal = 0;
    wishIndex = 0;
    updateScore();
    document.getElementById('resultPanel').style.display = 'none';
    buildQuiz();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function spawnEmoji(card, emoji) {
    const rect = card.getBoundingClientRect();
    const el = document.createElement('div');
    el.className = 'floating-emoji';
    el.textContent = emoji;
    el.style.left = (rect.left + rect.width / 2 - 16) + 'px';
    el.style.top = (rect.top + 20) + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500);
}

// ===================== WISH MODAL SYSTEM =====================
function showWish(wish) {
    const overlay = document.getElementById('wishOverlay');
    const textEl = document.getElementById('wishText');
    const emojiTop = document.getElementById('wishEmojiTop');
    const photoWrapper = document.getElementById('wishPhotoWrapper');
    const photoImg = document.getElementById('wishPhoto');
    const continueBtn = document.getElementById('wishContinueBtn');

    // Set text & emoji
    textEl.textContent = wish.text;
    emojiTop.textContent = wish.emoji || '🎉';

    // Try to load photo — if it fails, show emoji fallback
    photoWrapper.classList.remove('no-photo');
    photoImg.style.display = 'block';
    photoImg.src = wish.photo;
    photoImg.onerror = function() {
        photoWrapper.classList.add('no-photo');
        photoWrapper.setAttribute('data-fallback', '🎂');
        // Insert emoji text as fallback
        let fallbackSpan = photoWrapper.querySelector('.photo-fallback');
        if (!fallbackSpan) {
            fallbackSpan = document.createElement('span');
            fallbackSpan.className = 'photo-fallback';
            photoWrapper.appendChild(fallbackSpan);
        }
        fallbackSpan.textContent = '🎂';
        photoImg.style.display = 'none';
    };

    // Lock quiz
    quizLocked = true;
    document.getElementById('quizContainer').classList.add('quiz-locked');

    // Show overlay
    overlay.classList.add('active');

    // Fire massive confetti explosion for the wish!
    launchWishConfettiShow();

    // Continue button handler
    continueBtn.onclick = function() {
        overlay.classList.remove('active');
        quizLocked = false;
        document.getElementById('quizContainer').classList.remove('quiz-locked');
    };
}

// ===================== CONFETTI SYSTEM =====================
const bgCanvas = document.getElementById('bgCanvas');
const bgCtx = bgCanvas.getContext('2d');
let confettiPieces = [];

function resizeBg() {
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
}
resizeBg();
window.addEventListener('resize', resizeBg);

const confettiColors = ['#ff6ec7','#ffd700','#00e5ff','#ff5252','#69f0ae','#ab47bc','#ff9100','#448aff'];

class Confetti {
    constructor(x, y, burst) {
        this.x = x || Math.random() * bgCanvas.width;
        this.y = y || -20;
        this.w = Math.random() * 10 + 5;
        this.h = Math.random() * 6 + 3;
        this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        this.vx = burst ? (Math.random() - 0.5) * 12 : (Math.random() - 0.5) * 2;
        this.vy = burst ? (Math.random() * -10 - 2) : (Math.random() * 1.5 + 0.5);
        this.gravity = 0.15;
        this.rotation = Math.random() * 360;
        this.rotSpeed = (Math.random() - 0.5) * 10;
        this.opacity = 1;
        this.life = burst ? 120 : 300;
    }
    update() {
        this.x += this.vx;
        this.vy += this.gravity;
        this.y += this.vy;
        this.rotation += this.rotSpeed;
        this.life--;
        if (this.life < 30) this.opacity = this.life / 30;
        return this.life > 0;
    }
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
        ctx.restore();
    }
}

function launchConfettiBurst(originX, originY) {
    const cx = originX !== undefined ? originX : window.innerWidth / 2;
    const cy = originY !== undefined ? originY : window.innerHeight / 3;
    for (let i = 0; i < 90; i++) {
        confettiPieces.push(new Confetti(cx + (Math.random()-0.5)*120, cy + (Math.random()-0.5)*60, true));
    }
}

// Massive multi-point confetti explosion for wish modal
function launchWishConfettiShow() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    // Burst from multiple points across the screen
    const points = [
        [w * 0.2, h * 0.2],
        [w * 0.8, h * 0.2],
        [w * 0.5, h * 0.15],
        [w * 0.15, h * 0.5],
        [w * 0.85, h * 0.5],
    ];
    points.forEach(([px, py]) => {
        for (let i = 0; i < 50; i++) {
            confettiPieces.push(new Confetti(px + (Math.random()-0.5)*80, py, true));
        }
    });
    // Delayed secondary bursts for longer wow effect
    setTimeout(() => {
        for (let i = 0; i < 80; i++) {
            confettiPieces.push(new Confetti(w * 0.5 + (Math.random()-0.5)*200, h * 0.1, true));
        }
    }, 300);
    setTimeout(() => {
        const sides = [[w * 0.1, h * 0.3], [w * 0.9, h * 0.3]];
        sides.forEach(([px, py]) => {
            for (let i = 0; i < 45; i++) {
                confettiPieces.push(new Confetti(px, py, true));
            }
        });
    }, 600);
}

// Ambient confetti — more dense
setInterval(() => {
    if (confettiPieces.length < 150) {
        confettiPieces.push(new Confetti());
        confettiPieces.push(new Confetti());
    }
}, 250);

function animateBg() {
    bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    confettiPieces = confettiPieces.filter(c => {
        const alive = c.update();
        if (alive) c.draw(bgCtx);
        return alive;
    });
    requestAnimationFrame(animateBg);
}
animateBg();

// ===================== BALLOON SYSTEM =====================
const bCanvas = document.getElementById('balloonCanvas');
const bCtx = bCanvas.getContext('2d');
let balloons = [];

function resizeB() {
    bCanvas.width = window.innerWidth;
    bCanvas.height = window.innerHeight;
}
resizeB();
window.addEventListener('resize', resizeB);

const balloonColors = [
    ['#ff6ec7','#c2185b'],
    ['#ffd700','#f9a825'],
    ['#69f0ae','#2e7d32'],
    ['#448aff','#1565c0'],
    ['#ab47bc','#6a1b9a'],
    ['#ff5252','#b71c1c'],
    ['#ff9100','#e65100'],
    ['#00e5ff','#00838f']
];

class Balloon {
    constructor() {
        // Bigger balloons for easier tapping on mobile
        this.radius = Math.random() * 26 + 24;
        this.x = Math.random() * bCanvas.width;
        this.y = bCanvas.height + this.radius + Math.random() * 200;
        const cp = balloonColors[Math.floor(Math.random() * balloonColors.length)];
        this.color1 = cp[0];
        this.color2 = cp[1];
        this.speed = Math.random() * 1.0 + 0.3;
        this.wobbleAmp = Math.random() * 30 + 10;
        this.wobbleFreq = Math.random() * 0.02 + 0.01;
        this.wobbleOffset = Math.random() * Math.PI * 2;
        this.popped = false;
        this.popFrame = 0;
        this.popParticles = [];
        this.time = 0;
    }
    update() {
        if (this.popped) {
            this.popFrame++;
            this.popParticles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.2;
                p.life--;
            });
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
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            });
            ctx.globalAlpha = 1;
            return;
        }
        const r = this.radius;
        // String
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y + r);
        ctx.quadraticCurveTo(this.x + 5, this.y + r + 25, this.x - 3, this.y + r + 50);
        ctx.stroke();

        // Balloon body
        const grad = ctx.createRadialGradient(this.x - r*0.3, this.y - r*0.3, r*0.1, this.x, this.y, r);
        grad.addColorStop(0, this.color1);
        grad.addColorStop(1, this.color2);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, r * 0.85, r, 0, 0, Math.PI * 2);
        ctx.fill();

        // Shine
        ctx.fillStyle = 'rgba(255,255,255,0.25)';
        ctx.beginPath();
        ctx.ellipse(this.x - r*0.25, this.y - r*0.3, r*0.18, r*0.28, -0.5, 0, Math.PI * 2);
        ctx.fill();

        // Knot
        ctx.fillStyle = this.color2;
        ctx.beginPath();
        ctx.moveTo(this.x - 5, this.y + r - 2);
        ctx.lineTo(this.x + 5, this.y + r - 2);
        ctx.lineTo(this.x, this.y + r + 6);
        ctx.closePath();
        ctx.fill();
    }
    pop() {
        this.popped = true;
        for (let i = 0; i < 14; i++) {
            this.popParticles.push({
                x: this.x,
                y: this.y,
                vx: (Math.random() - 0.5) * 8,
                vy: (Math.random() - 0.5) * 8 - 2,
                size: Math.random() * 5 + 2,
                color: Math.random() > 0.5 ? this.color1 : this.color2,
                life: 30 + Math.random() * 20,
                maxLife: 50
            });
        }
    }
    hitTest(mx, my) {
        if (this.popped) return false;
        const dx = mx - this.x;
        const dy = my - this.y;
        // Generous hit area for mobile (1.8x radius)
        return (dx*dx + dy*dy) < (this.radius * this.radius * 1.8);
    }
}

// Click / tap handler for balloons
bCanvas.addEventListener('click', (e) => {
    const rect = bCanvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    for (let i = balloons.length - 1; i >= 0; i--) {
        if (balloons[i].hitTest(mx, my)) {
            balloons[i].pop();

            // Big confetti burst right at the pop point
            launchConfettiBurst(mx, my);

            // Show wish modal with the next wish
            if (wishIndex < wishes.length) {
                const wish = wishes[wishIndex];
                wishIndex++;
                // Small delay so the pop animation plays first
                setTimeout(() => showWish(wish), 300);
            }

            break;
        }
    }
});

// Spawn balloons — fewer but bigger, slower for easier tapping
function spawnBalloon() {
    if (balloons.length < 12) {
        balloons.push(new Balloon());
    }
}
setInterval(spawnBalloon, 1500);

// Initial balloons
for (let i = 0; i < 6; i++) {
    const b = new Balloon();
    b.y = Math.random() * bCanvas.height;
    balloons.push(b);
}

function animateBalloons() {
    bCtx.clearRect(0, 0, bCanvas.width, bCanvas.height);
    balloons = balloons.filter(b => {
        const alive = b.update();
        if (alive) b.draw(bCtx);
        return alive;
    });
    requestAnimationFrame(animateBalloons);
}
animateBalloons();

// ===================== INIT =====================
buildQuiz();
