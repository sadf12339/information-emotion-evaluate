// 问卷问题数据
const questions = [
    // FOMO 错失焦虑症问题
    {
        id: 1,
        type: 'FOMO',
        question: '当你看到朋友在社交媒体上分享有趣活动的照片时，你会感到不安或后悔没有参加吗？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    {
        id: 2,
        type: 'FOMO',
        question: '你会因为担心错过重要信息而频繁查看社交媒体或消息应用吗？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    {
        id: 3,
        type: 'FOMO',
        question: '当你无法参加聚会或活动时，你会不断查看活动相关的动态更新吗？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    {
        id: 4,
        type: 'FOMO',
        question: '你是否曾经因为害怕错过而接受了自己并不感兴趣的邀请？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    
    // Doomscrolling 末日刷屏症问题
    {
        id: 5,
        type: 'Doomscrolling',
        question: '你会不自觉地持续刷新新闻或社交媒体，即使看到的大多是负面内容？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    {
        id: 6,
        type: 'Doomscrolling',
        question: '即使感到心情低落，你仍然无法停止浏览负面新闻吗？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    {
        id: 7,
        type: 'Doomscrolling',
        question: '你是否会在睡前花费大量时间阅读让人担忧的新闻或信息？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    {
        id: 8,
        type: 'Doomscrolling',
        question: '你是否注意到自己在感到压力时会更频繁地查看负面新闻？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    
    // Comparison Spiral 比较漩涡症问题
    {
        id: 9,
        type: 'ComparisonSpiral',
        question: '你是否经常将自己的生活与社交媒体上他人展示的生活进行比较？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    {
        id: 10,
        type: 'ComparisonSpiral',
        question: '看到他人的成功或美好生活，你会感到自己的生活不够好吗？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    {
        id: 11,
        type: 'ComparisonSpiral',
        question: '你是否曾经因为觉得自己的成就不如他人而感到沮丧？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    {
        id: 12,
        type: 'ComparisonSpiral',
        question: '你会避免在社交媒体上分享自己的生活，因为担心不如他人精彩吗？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    
    // Notification Brain 通知脑问题
    {
        id: 13,
        type: 'NotificationBrain',
        question: '手机一收到通知，你就会立即查看，无论正在做什么？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    {
        id: 14,
        type: 'NotificationBrain',
        question: '你会因为担心错过通知而频繁查看手机吗？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    {
        id: 15,
        type: 'NotificationBrain',
        question: '即使在重要会议或活动中，你也会忍不住查看手机通知吗？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    {
        id: 16,
        type: 'NotificationBrain',
        question: '你是否曾经因为查看通知而打断了与朋友或家人的重要对话？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    
    // 通用问题（用于综合评估）
    {
        id: 17,
        type: 'General',
        question: '你是否感到自己对社交媒体或数字设备的使用已经影响到了日常生活？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    {
        id: 18,
        type: 'General',
        question: '你是否尝试过减少使用社交媒体或数字设备，但发现很难坚持？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    {
        id: 19,
        type: 'General',
        question: '当你无法使用手机或互联网时，你会感到焦虑或不安吗？',
        options: [
            { text: '从不', value: 0 },
            { text: '偶尔', value: 1 },
            { text: '经常', value: 2 },
            { text: '总是', value: 3 }
        ]
    },
    {
        id: 20,
        type: 'General',
        question: '你认为自己的心理健康状况如何？',
        options: [
            { text: '非常好', value: 0 },
            { text: '良好', value: 1 },
            { text: '一般', value: 2 },
            { text: '较差', value: 3 }
        ]
    }
];

// 结果类型定义
const resultTypes = {
    FOMO: {
        name: 'FOMO 错失焦虑症',
        description: '你可能患有FOMO(错失焦虑症)，总担心自己错过了什么好玩的活动或重要信息。',
        symptoms: [
            '频繁查看社交媒体以了解他人动态',
            '害怕错过聚会或活动邀请',
            '即使不想参加也接受邀请以避免错过',
            '看到他人活动照片感到焦虑或遗憾'
        ],
        advice: [
            '尝试设定社交媒体使用时间限制',
            '专注于当下活动，减少对他人生活的关注',
            '学会接受有些事情你确实会错过',
            '培养自我满足感，不依赖外部活动获得快乐'
        ],
        icon: 'fa-calendar-times-o',
        color: '#EC4899'
    },
    Doomscrolling: {
        name: 'Doomscrolling 末日刷屏症',
        description: '你可能患有Doomscrolling(末日刷屏症)，忍不住不停地刷负面新闻，即使这让你感到焦虑。',
        symptoms: [
            '持续查看负面新闻，难以停止',
            '即使感到不安也继续浏览',
            '睡前花费大量时间阅读令人担忧的内容',
            '压力大时查看负面新闻的频率增加'
        ],
        advice: [
            '设置每日新闻阅读时间限制',
            '关注积极正面的新闻来源',
            '睡前一小时避免查看新闻',
            '当感到焦虑时，尝试深呼吸或冥想'
        ],
        icon: 'fa-newspaper-o',
        color: '#EF4444'
    },
    ComparisonSpiral: {
        name: 'Comparison Spiral 比较漩涡症',
        description: '你可能患有Comparison Spiral(比较漩涡症)，在社交媒体上不自觉地将自己与他人比较，导致自我形象贬低。',
        symptoms: [
            '频繁将自己与社交媒体上的他人比较',
            '看到他人成功感到自己不足',
            '因为觉得生活不够精彩而避免分享',
            '比较后感到沮丧或自卑'
        ],
        advice: [
            '记住社交媒体上展示的往往是他人的高光时刻',
            '关注自己的成就和进步',
            '定期进行感恩练习',
            '考虑减少社交媒体使用时间'
        ],
        icon: 'fa-balance-scale',
        color: '#F59E0B'
    },
    NotificationBrain: {
        name: 'Notification Brain 通知脑',
        description: '你可能患有Notification Brain(通知脑)，手机一震动或一亮屏，就必须立刻查看。',
        symptoms: [
            '立即查看所有通知',
            '频繁检查手机是否有新消息',
            '在重要场合也忍不住查看通知',
            '因为查看通知而打断面对面交流'
        ],
        advice: [
            '开启勿扰模式，定时查看通知',
            '关闭非必要应用的通知',
            '吃饭、开会等场合将手机调至静音',
            '练习专注当下，减少分心'
        ],
        icon: 'fa-bell',
        color: '#10B981'
    },
    Normal: {
        name: '正常',
        description: '您的心理很健康！你能够合理使用数字设备，不会被它们过度影响情绪和生活。',
        symptoms: [
            '能够控制社交媒体使用时间',
            '不会频繁与他人进行比较',
            '不会因为错过信息而焦虑',
            '能够专注于现实生活和面对面交流'
        ],
        advice: [
            '继续保持健康的数字设备使用习惯',
            '定期进行数字排毒，给自己一些离线时间',
            '关注自己的心理健康，及时调整状态',
            '分享你的健康习惯，帮助他人'
        ],
        icon: 'fa-smile-o',
        color: '#4F46E5'
    }
};

// 问卷状态变量
let currentQuestionIndex = 0;
let answers = [];
let showResults = false;

// DOM 元素
const loadingEl = document.getElementById('loading');
const questionsContainerEl = document.getElementById('questions-container');
const questionContentEl = document.getElementById('question-content');
const progressTextEl = document.getElementById('progress-text');
const progressPercentageEl = document.getElementById('progress-percentage');
const progressBarEl = document.getElementById('progress-bar');
const prevBtnEl = document.getElementById('prev-btn');
const nextBtnEl = document.getElementById('next-btn');
const submitBtnEl = document.getElementById('submit-btn');
const resultContainerEl = document.getElementById('result-container');
const resultContentEl = document.getElementById('result-content');
const restartBtnEl = document.getElementById('restart-btn');
const questionnaireEl = document.getElementById('questionnaire');

// 初始化问卷
function initQuestionnaire() {
    // 隐藏加载状态，显示问卷
    setTimeout(() => {
        loadingEl.classList.add('hidden');
        questionsContainerEl.classList.remove('hidden');
        renderCurrentQuestion();
    }, 1000); // 添加小延迟以显示加载动画
}

// 渲染当前问题
function renderCurrentQuestion() {
    if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        
        // 添加切换动画
        questionContentEl.style.opacity = '0';
        questionContentEl.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            // 清空当前问题内容
            questionContentEl.innerHTML = '';
            
            // 创建问题标题
            const questionNumber = currentQuestionIndex + 1;
            const questionTitleEl = document.createElement('h3');
            questionTitleEl.className = 'text-xl md:text-2xl font-semibold mb-6';
            questionTitleEl.textContent = `${questionNumber}. ${question.question}`;
            questionContentEl.appendChild(questionTitleEl);
            
            // 创建选项容器
            const optionsContainerEl = document.createElement('div');
            optionsContainerEl.className = 'space-y-4';
            
            // 创建每个选项
            question.options.forEach((option, index) => {
                const optionWrapperEl = document.createElement('div');
                optionWrapperEl.className = 'relative';
                
                const optionInputEl = document.createElement('input');
                optionInputEl.type = 'radio';
                optionInputEl.name = `question-${question.id}`;
                optionInputEl.id = `option-${question.id}-${index}`;
                optionInputEl.value = option.value;
                optionInputEl.className = 'sr-only peer';
                
                // 添加change事件监听器，确保选择选项时保存答案
                optionInputEl.addEventListener('change', saveCurrentAnswer);
                
                // 检查是否有已保存的答案
                if (answers[currentQuestionIndex] !== undefined && answers[currentQuestionIndex] == option.value) {
                    optionInputEl.checked = true;
                }
                
                const optionLabelEl = document.createElement('label');
                optionLabelEl.htmlFor = `option-${question.id}-${index}`;
                optionLabelEl.className = 'block w-full p-4 border rounded-lg border-gray-200 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary option-hover cursor-pointer flex items-center transform transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]';
                
                const radioIndicatorEl = document.createElement('div');
                radioIndicatorEl.className = 'w-5 h-5 rounded-full border border-gray-300 mr-3 flex items-center justify-center peer-checked:border-primary transition-all duration-200';
                
                const radioInnerEl = document.createElement('div');
                radioInnerEl.className = 'w-3 h-3 rounded-full bg-primary scale-0 peer-checked:scale-100 transition-transform duration-200';
                radioIndicatorEl.appendChild(radioInnerEl);
                
                const optionTextEl = document.createTextNode(option.text);
                
                optionLabelEl.appendChild(radioIndicatorEl);
                optionLabelEl.appendChild(optionTextEl);
                optionWrapperEl.appendChild(optionInputEl);
                optionWrapperEl.appendChild(optionLabelEl);
                optionsContainerEl.appendChild(optionWrapperEl);
                
                // 添加选项的渐入动画
                optionWrapperEl.style.opacity = '0';
                optionWrapperEl.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    optionWrapperEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    optionWrapperEl.style.opacity = '1';
                    optionWrapperEl.style.transform = 'translateY(0)';
                }, 100 + (index * 100));
            });
            
            questionContentEl.appendChild(optionsContainerEl);
            
            // 恢复显示
            questionContentEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            questionContentEl.style.opacity = '1';
            questionContentEl.style.transform = 'translateX(0)';
            
            // 更新进度条
            updateProgress();
            
            // 更新导航按钮状态
            updateNavigationButtons();
        }, 300);
    }
}

// 更新进度条
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressTextEl.textContent = `进度: ${currentQuestionIndex + 1}/${questions.length}`;
    progressPercentageEl.textContent = `${Math.round(progress)}%`;
    progressBarEl.style.width = `${progress}%`;
}

// 更新导航按钮状态
function updateNavigationButtons() {
    // 上一题按钮
    if (currentQuestionIndex === 0) {
        prevBtnEl.classList.add('hidden');
    } else {
        prevBtnEl.classList.remove('hidden');
        prevBtnEl.disabled = false;
    }
    
    // 下一题和提交按钮
    if (currentQuestionIndex === questions.length - 1) {
        nextBtnEl.classList.add('hidden');
        submitBtnEl.classList.remove('hidden');
        // 检查是否已回答当前问题
        const hasAnswered = answers[currentQuestionIndex] !== undefined;
        submitBtnEl.disabled = !hasAnswered;
    } else {
        nextBtnEl.classList.remove('hidden');
        submitBtnEl.classList.add('hidden');
        // 检查是否已回答当前问题
        const hasAnswered = answers[currentQuestionIndex] !== undefined;
        nextBtnEl.disabled = !hasAnswered;
    }
}

// 保存当前答案
function saveCurrentAnswer() {
    const question = questions[currentQuestionIndex];
    const selectedOption = document.querySelector(`input[name="question-${question.id}"]:checked`);
    
    if (selectedOption) {
        answers[currentQuestionIndex] = parseInt(selectedOption.value);
        // 启用下一题/提交按钮
        if (currentQuestionIndex === questions.length - 1) {
            submitBtnEl.disabled = false;
        } else {
            nextBtnEl.disabled = false;
        }
    }
}

// 计算测试结果
function calculateResults() {
    // 初始化每种类型的分数
    const scores = {
        FOMO: 0,
        Doomscrolling: 0,
        ComparisonSpiral: 0,
        NotificationBrain: 0,
        General: 0
    };
    
    // 计算每种类型的总分
    questions.forEach((question, index) => {
        if (answers[index] !== undefined) {
            scores[question.type] += answers[index];
        }
    });
    
    // 找出最高分的类型
    let maxScore = 0;
    let primaryType = 'Normal';
    
    // 计算四大类型的总分
    const fomoScore = scores.FOMO;
    const doomScore = scores.Doomscrolling;
    const comparisonScore = scores.ComparisonSpiral;
    const notificationScore = scores.NotificationBrain;
    
    // 找出最高分的类型
    const typeScores = [
        { type: 'FOMO', score: fomoScore },
        { type: 'Doomscrolling', score: doomScore },
        { type: 'ComparisonSpiral', score: comparisonScore },
        { type: 'NotificationBrain', score: notificationScore }
    ];
    
    typeScores.forEach(item => {
        if (item.score > maxScore) {
            maxScore = item.score;
            primaryType = item.type;
        }
    });
    
    // 定义阈值：如果最高分超过6分，才判定为该类型
    // 否则判定为正常
    if (maxScore <= 6) {
        primaryType = 'Normal';
    }
    
    return {
        primaryType,
        scores: {
            FOMO: fomoScore,
            Doomscrolling: doomScore,
            ComparisonSpiral: comparisonScore,
            NotificationBrain: notificationScore,
            General: scores.General
        }
    };
}

// 显示测试结果
function displayResults() {
    const results = calculateResults();
    const resultType = resultTypes[results.primaryType];
    
    // 清空结果容器
    resultContentEl.innerHTML = '';
    resultContentEl.style.opacity = '0';
    resultContentEl.style.transform = 'translateY(20px)';
    
    // 显示结果容器，隐藏问卷
    questionnaireEl.classList.add('hidden');
    resultContainerEl.classList.remove('hidden');
    
    // 设置显示结果状态
    showResults = true;
    
    // 为结果容器添加出现动画
    setTimeout(() => {
        resultContentEl.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        resultContentEl.style.opacity = '1';
        resultContentEl.style.transform = 'translateY(0)';
        
        // 创建结果卡片
        const resultCardEl = document.createElement('div');
        resultCardEl.className = 'p-6 rounded-2xl transform transition-all duration-700 hover:shadow-lg';
        resultCardEl.style.backgroundColor = `${resultType.color}15`; // 15% opacity
        
        // 创建结果图标
        const resultIconEl = document.createElement('div');
        resultIconEl.className = 'text-5xl mb-4 mx-auto w-fit';
        resultIconEl.style.color = resultType.color;
        resultIconEl.innerHTML = `<i class="fa ${resultType.icon}"></i>`;
        resultIconEl.style.transform = 'scale(0)';
        resultIconEl.style.opacity = '0';
        
        // 创建结果标题
        const resultTitleEl = document.createElement('h3');
        resultTitleEl.className = 'text-2xl md:text-3xl font-bold mb-3 text-center';
        resultTitleEl.style.color = resultType.color;
        resultTitleEl.textContent = resultType.name;
        resultTitleEl.style.opacity = '0';
        
        // 创建结果描述
        const resultDescEl = document.createElement('p');
        resultDescEl.className = 'text-lg text-gray-700 mb-6 text-center max-w-2xl mx-auto';
        resultDescEl.textContent = resultType.description;
        resultDescEl.style.opacity = '0';
        
        // 创建症状部分
        const symptomsSectionEl = document.createElement('div');
        symptomsSectionEl.className = 'mb-8 opacity-0';
        
        const symptomsTitleEl = document.createElement('h4');
        symptomsTitleEl.className = 'text-xl font-semibold mb-3 flex items-center';
        symptomsTitleEl.style.color = resultType.color;
        symptomsTitleEl.innerHTML = `<i class="fa fa-list-ul mr-2"></i> 主要表现`;
        
        const symptomsListEl = document.createElement('ul');
        symptomsListEl.className = 'list-disc pl-6 space-y-2 text-gray-700';
        
        resultType.symptoms.forEach((symptom, index) => {
            const symptomItemEl = document.createElement('li');
            symptomItemEl.textContent = symptom;
            symptomItemEl.style.opacity = '0';
            symptomItemEl.style.transform = 'translateX(-20px)';
            symptomsListEl.appendChild(symptomItemEl);
            
            // 症状项动画
            setTimeout(() => {
                symptomItemEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                symptomItemEl.style.opacity = '1';
                symptomItemEl.style.transform = 'translateX(0)';
            }, 1200 + (index * 200));
        });
        
        symptomsSectionEl.appendChild(symptomsTitleEl);
        symptomsSectionEl.appendChild(symptomsListEl);
        
        // 创建建议部分
        const adviceSectionEl = document.createElement('div');
        adviceSectionEl.className = 'mb-6 opacity-0';
        
        const adviceTitleEl = document.createElement('h4');
        adviceTitleEl.className = 'text-xl font-semibold mb-3 flex items-center';
        adviceTitleEl.style.color = resultType.color;
        adviceTitleEl.innerHTML = `<i class="fa fa-lightbulb-o mr-2"></i> 建议`;
        
        const adviceListEl = document.createElement('ul');
        adviceListEl.className = 'list-disc pl-6 space-y-2 text-gray-700';
        
        resultType.advice.forEach((advice, index) => {
            const adviceItemEl = document.createElement('li');
            adviceItemEl.textContent = advice;
            adviceItemEl.style.opacity = '0';
            adviceItemEl.style.transform = 'translateX(-20px)';
            adviceListEl.appendChild(adviceItemEl);
            
            // 建议项动画
            setTimeout(() => {
                adviceItemEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                adviceItemEl.style.opacity = '1';
                adviceItemEl.style.transform = 'translateX(0)';
            }, 1800 + (index * 200));
        });
        
        adviceSectionEl.appendChild(adviceTitleEl);
        adviceSectionEl.appendChild(adviceListEl);
        
        // 组装结果卡片
        resultCardEl.appendChild(resultIconEl);
        resultCardEl.appendChild(resultTitleEl);
        resultCardEl.appendChild(resultDescEl);
        resultCardEl.appendChild(symptomsSectionEl);
        resultCardEl.appendChild(adviceSectionEl);
        
        resultContentEl.appendChild(resultCardEl);
        
        // 显示分数详情
        const scoresSectionEl = document.createElement('div');
        scoresSectionEl.className = 'mt-8 opacity-0';
        
        const scoresTitleEl = document.createElement('h4');
        scoresTitleEl.className = 'text-xl font-semibold mb-4 text-center';
        scoresTitleEl.textContent = '详细评分';
        
        const scoresGridEl = document.createElement('div');
        scoresGridEl.className = 'grid grid-cols-1 md:grid-cols-2 gap-4';
        
        // 创建每种类型的分数条
        const scoreTypes = [
            { key: 'FOMO', name: '错失焦虑症', color: resultTypes.FOMO.color },
            { key: 'Doomscrolling', name: '末日刷屏症', color: resultTypes.Doomscrolling.color },
            { key: 'ComparisonSpiral', name: '比较漩涡症', color: resultTypes.ComparisonSpiral.color },
            { key: 'NotificationBrain', name: '通知脑', color: resultTypes.NotificationBrain.color }
        ];
        
        scoreTypes.forEach((type, index) => {
            const scoreItemEl = document.createElement('div');
            scoreItemEl.className = 'p-4 bg-gray-50 rounded-lg transform transition-all duration-500 hover:shadow-md';
            scoreItemEl.style.opacity = '0';
            scoreItemEl.style.transform = 'translateY(20px)';
            
            const scoreHeaderEl = document.createElement('div');
            scoreHeaderEl.className = 'flex justify-between mb-2';
            
            const scoreNameEl = document.createElement('span');
            scoreNameEl.className = 'font-medium';
            scoreNameEl.textContent = type.name;
            
            const scoreValueEl = document.createElement('span');
            scoreValueEl.className = 'font-semibold';
            scoreValueEl.textContent = `${results.scores[type.key]}/12`;
            
            scoreHeaderEl.appendChild(scoreNameEl);
            scoreHeaderEl.appendChild(scoreValueEl);
            
            const scoreBarContainerEl = document.createElement('div');
            scoreBarContainerEl.className = 'w-full bg-gray-200 rounded-full h-2 overflow-hidden';
            
            const scoreBarEl = document.createElement('div');
            scoreBarEl.className = 'h-2 rounded-full transition-all duration-1500 ease-out';
            scoreBarEl.style.width = '0%';
            scoreBarEl.style.backgroundColor = type.color;
            
            scoreBarContainerEl.appendChild(scoreBarEl);
            scoreItemEl.appendChild(scoreHeaderEl);
            scoreItemEl.appendChild(scoreBarContainerEl);
            scoresGridEl.appendChild(scoreItemEl);
            
            // 分数卡片动画
            setTimeout(() => {
                scoreItemEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                scoreItemEl.style.opacity = '1';
                scoreItemEl.style.transform = 'translateY(0)';
                
                // 分数条动画
                setTimeout(() => {
                    scoreBarEl.style.width = `${(results.scores[type.key] / 12) * 100}%`;
                }, 200);
            }, 2400 + (index * 150));
        });
        
        scoresSectionEl.appendChild(scoresTitleEl);
        scoresSectionEl.appendChild(scoresGridEl);
        resultContentEl.appendChild(scoresSectionEl);
        
        // 顺序动画显示各个元素
        setTimeout(() => {
            // 图标动画
            resultIconEl.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease';
            resultIconEl.style.transform = 'scale(1)';
            resultIconEl.style.opacity = '1';
            
            // 标题动画
            setTimeout(() => {
                resultTitleEl.style.transition = 'opacity 0.5s ease';
                resultTitleEl.style.opacity = '1';
                
                // 描述动画
                setTimeout(() => {
                    resultDescEl.style.transition = 'opacity 0.5s ease';
                    resultDescEl.style.opacity = '1';
                    
                    // 症状部分动画
                    setTimeout(() => {
                        symptomsSectionEl.style.transition = 'opacity 0.5s ease';
                        symptomsSectionEl.style.opacity = '1';
                        
                        // 建议部分动画
                        setTimeout(() => {
                            adviceSectionEl.style.transition = 'opacity 0.5s ease';
                            adviceSectionEl.style.opacity = '1';
                            
                            // 分数部分动画
                            setTimeout(() => {
                                scoresSectionEl.style.transition = 'opacity 0.5s ease';
                                scoresSectionEl.style.opacity = '1';
                            }, 800);
                        }, 600);
                    }, 600);
                }, 500);
            }, 400);
        }, 400);
    }, 100);
}

// 重置问卷
function resetQuestionnaire() {
    // 添加淡出动画
    resultContentEl.style.opacity = '0';
    resultContentEl.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        currentQuestionIndex = 0;
        answers = [];
        showResults = false;
        
        // 隐藏结果，显示问卷
        resultContainerEl.classList.add('hidden');
        questionnaireEl.classList.remove('hidden');
        questionsContainerEl.classList.remove('hidden');
        
        // 重新渲染第一个问题
        setTimeout(() => {
            renderCurrentQuestion();
        }, 200);
    }, 500);
}

// 添加事件监听器
function addEventListeners() {
    // 选项变化时保存答案
    questionContentEl.addEventListener('change', saveCurrentAnswer);
    
    // 上一题按钮
    prevBtnEl.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            // 添加按钮点击动画
            prevBtnEl.style.transform = 'scale(0.95)';
            setTimeout(() => {
                prevBtnEl.style.transform = 'scale(1)';
                currentQuestionIndex--;
                renderCurrentQuestion();
            }, 100);
        }
    });
    
    // 下一题按钮
    nextBtnEl.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            // 添加按钮点击动画
            nextBtnEl.style.transform = 'scale(0.95)';
            setTimeout(() => {
                nextBtnEl.style.transform = 'scale(1)';
                currentQuestionIndex++;
                renderCurrentQuestion();
            }, 100);
        }
    });
    
    // 提交按钮
    submitBtnEl.addEventListener('click', () => {
        // 添加按钮点击动画
        submitBtnEl.style.transform = 'scale(0.95)';
        setTimeout(() => {
            submitBtnEl.style.transform = 'scale(1)';
            displayResults();
        }, 100);
    });
    
    // 重新测试按钮
    restartBtnEl.addEventListener('click', resetQuestionnaire);
    
    // 添加键盘导航
    document.addEventListener('keydown', (e) => {
        // 如果当前显示的是问卷而不是结果
        if (!showResults && questionsContainerEl.classList.contains('hidden') === false) {
            // 右箭头或空格键：下一题
            if ((e.key === 'ArrowRight' || e.key === ' ') && !nextBtnEl.disabled) {
                e.preventDefault();
                nextBtnEl.click();
            }
            // 左箭头：上一题
            else if (e.key === 'ArrowLeft' && !prevBtnEl.disabled) {
                e.preventDefault();
                prevBtnEl.click();
            }
            // 回车键：提交（如果在最后一题）
            else if (e.key === 'Enter' && currentQuestionIndex === questions.length - 1 && !submitBtnEl.disabled) {
                e.preventDefault();
                submitBtnEl.click();
            }
        }
        // 如果当前显示的是结果
        else if (showResults) {
            // 回车键或空格键：重新测试
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                restartBtnEl.click();
            }
        }
    });
    
    // 添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // 添加页面加载动画效果
    // 移除与DOMContentLoaded可能冲突的window.load事件，改为在initApp中处理
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease';
        document.body.style.opacity = '1';
    }, 100);
}

// 初始化应用
function initApp() {
    initQuestionnaire();
    addEventListeners();
}

// 当页面加载完成后初始化应用
window.addEventListener('DOMContentLoaded', initApp);