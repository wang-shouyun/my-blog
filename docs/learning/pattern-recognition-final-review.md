# 模式识别期末复习（课件/手写复习资料精细整理）

> 这份整理严格依据你上传的《模式识别期末复习.pdf》展开，只在原有复习提纲基础上做结构化梳理与细化说明，方便你直接复习、背诵和整理到博客中。资料内容覆盖了：基本概念、贝叶斯决策、Fisher 线性判别、感知器与 LMS、最近邻与 K 近邻、分级聚类、参数估计，以及若干典型题。:contentReference[oaicite:0]{index=0}

---

## 一、模式识别基础概念

### 1. 模式

复习资料中首先给出“模式”的含义：  
一些特征标准的有序组合，或者说是反映某一事物若干性质的特征集合。也就是说，模式不是单个特征，而是多个特征按照一定方式组合后的整体描述。:contentReference[oaicite:1]{index=1}

### 2. 模式分类

模式分类是指：  
把反映事物某个特征的若干特征集合，按照一定规则分到不同类别中去。  
它强调的是“根据特征进行归类”。:contentReference[oaicite:2]{index=2}

### 3. 模式识别

复习资料给出的模式识别定义是：  
根据某一模式的若干特征向量或样本，对该模式的类别作出判定。  
也就是说，模式识别关注的是：

- 已经有一个待识别对象
- 已经提取出它的特征
- 需要根据这些特征判断它属于哪一类。:contentReference[oaicite:3]{index=3}

### 4. 模式识别系统

资料中指出，模式识别系统主要包括：

- 输入 \(x\)
- 模型
- 学习算法
- 输出类别

其中“模型”负责建立从输入到类别输出之间的关系；“学习算法”负责根据样本去调整模型参数。并且资料特别强调：

> 目前主流的机器学习算法主要属于统计学习方法，也可以称为模式识别。:contentReference[oaicite:4]{index=4}

这说明本课程的很多内容，本质上都可以放在“统计模式识别”的框架中理解。

---

## 二、贝叶斯决策基础

这一部分是第一页手写资料中的核心内容之一。它围绕：

- 贝叶斯公式
- 最小错误率贝叶斯决策
- 判别规则的等价形式

展开。:contentReference[oaicite:5]{index=5}

### 1. 贝叶斯决策使用的两个前提

资料中明确写出：

1. 各类总体的概率分布已知  
2. 类别数是一定的

也就是说，贝叶斯决策研究的是一种理想情况：  
假设总体分布结构已经知道，只需要根据概率信息进行最优决策。:contentReference[oaicite:6]{index=6}

### 2. 贝叶斯公式

资料给出多类形式的贝叶斯公式：

$$
P(\omega_i|x)=\frac{p(x|\omega_i)P(\omega_i)}{\sum_{j=1}^{c} p(x|\omega_j)P(\omega_j)},
\qquad i=1,2,\dots,c
$$

这个公式表达的是：

- \(P(\omega_i)\)：先验概率
- \(p(x|\omega_i)\)：类条件概率密度
- \(P(\omega_i|x)\)：后验概率

其本质是：

> 利用样本特征 \(x\)，把原来的先验判断修正为后验判断。:contentReference[oaicite:7]{index=7}

### 3. 基于最小错误率的贝叶斯决策

资料给出最核心规则：

如果

$$
P(\omega_i|x)=\max_j P(\omega_j|x)
$$

则判

$$
x\in \omega_i
$$

这就是说：

> 让样本归入后验概率最大的那一类。:contentReference[oaicite:8]{index=8}

### 4. 等价形式

因为在对不同类别比较时，分母

$$
\sum_{j=1}^{c} p(x|\omega_j)P(\omega_j)
$$

对同一个样本 \(x\) 来说是公共项，所以可以忽略。于是资料给出等价规则：

$$
p(x|\omega_i)P(\omega_i)=\max_j p(x|\omega_j)P(\omega_j)
\Rightarrow x\in\omega_i
$$

这也是考试最常用的判别形式。:contentReference[oaicite:9]{index=9}

### 5. 两类情况下的比值判别形式

资料在第一页右侧还给出了两类问题的等价写法，即通过比较概率密度比值与先验概率比值来决定类别。其本质仍然是：

> 比较两类后验概率大小。:contentReference[oaicite:10]{index=10}

### 6. 对数形式

资料中进一步写出了对数形式：

$$
h(x)=-\ln l(x)
$$

并将其转化为关于：

- \(-\ln p(x|\omega_1)\)
- \(-\ln P(\omega_1)\)
- \(+\ln p(x|\omega_2)\)
- \(+\ln P(\omega_2)\)

的线性组合不等式。  
它的意义在于：

- 把乘法关系转成加法关系
- 更方便分析和计算。:contentReference[oaicite:11]{index=11}

---

## 三、最小风险贝叶斯决策

第二页最上方补充了最小风险决策的一个关键结论：:contentReference[oaicite:12]{index=12}

> 最小风险贝叶斯决策是一种令各种错误造成的风险最小化的决策。  
> 在 0-1 损失下，最小风险决策等价于最小错误率决策。

这句话要这样理解：

- 最小错误率：只关心“错没错”
- 最小风险：不仅关心错没错，还关心“错的代价大不大”

当损失函数取 0-1 损失时：

- 判对损失为 0
- 判错损失为 1

此时“风险”就退化为“错误率”，因此二者一致。:contentReference[oaicite:13]{index=13}

---

## 四、Fisher 线性判别

第二页主体内容是 Fisher 线性判别。复习资料把它整理得非常紧凑，核心围绕：

- 投影思想
- 类内离散度
- 类间离散度
- Fisher 准则函数
- 最优投影方向
- 阈值选取

展开。:contentReference[oaicite:14]{index=14}

### 1. 基本思想

资料一开始写出：

$$
y=\omega^T x
$$

即把高维样本 \(x\) 沿某个方向 \(\omega\) 投影到一维直线上。  
这样，原本高维分类问题就转化成一维上的判别问题。:contentReference[oaicite:15]{index=15}

### 2. 原始空间中的统计量

#### （1）均值向量

对第 \(i\) 类样本：

$$
m_i=\frac{1}{N_i}\sum_{\omega_i} x,\qquad i=1,2
$$

表示该类样本在原始空间中的中心位置。:contentReference[oaicite:16]{index=16}

#### （2）类内离散度矩阵

资料给出：

$$
S_i=\sum_{\omega_i}(x-m_i)(x-m_i)^T,\qquad i=1,2
$$

总类内离散度矩阵：

$$
S_w=S_1+S_2
$$

若考虑先验概率，则还可写成加权形式：

$$
S_w=P(\omega_1)S_1+P(\omega_2)S_2
$$

资料注明：

- \(S_w\) 为半正定阵
- 当样本充分多时，通常可逆。:contentReference[oaicite:17]{index=17}

#### （3）类间离散度矩阵

资料给出：

$$
S_b=(m_1-m_2)(m_1-m_2)^T
$$

若考虑先验概率，还可写成：

$$
S_b=P(\omega_1)P(\omega_2)(m_1-m_2)(m_1-m_2)^T
$$

它度量的是两类中心之间的分离程度。:contentReference[oaicite:18]{index=18}

### 3. 投影空间中的统计量

资料在第二页下半部分给出投影后的均值与离散度。

#### （1）投影均值

$$
\tilde m_i=\frac{1}{N_i}\sum_{\omega_i} y,\qquad i=1,2
$$

#### （2）投影类内离散度

$$
\tilde S_i^2=\sum_{\omega_i}(y-\tilde m_i)^2,\qquad i=1,2
$$

总投影类内离散度：

$$
\tilde S_w=\tilde S_1^2+\tilde S_2^2
$$

这一步说明 Fisher 判别的目标是在投影空间中让：

- 类间均值差尽量大
- 类内离散度尽量小。:contentReference[oaicite:19]{index=19}

### 4. Fisher 准则函数

资料给出 Fisher 准则：

$$
J_F(\omega)=\frac{(\tilde m_1-\tilde m_2)^2}{\tilde S_1^2+\tilde S_2^2}
$$

并进一步写成：

$$
J_F(\omega)=\frac{\omega^T S_b \omega}{\omega^T S_w \omega}
$$

这就是 Fisher 线性判别的核心准则函数。  
它的含义是：

- 分子大：两类中心投影后分得远
- 分母小：每类投影后内部更集中

所以最优方向应满足：

> 让该比值尽可能大。:contentReference[oaicite:20]{index=20}

### 5. 最优方向

资料给出最优投影方向为：

$$
\omega^*=S_w^{-1}(m_1-m_2)
$$

这是 Fisher 线性判别最重要的结论。  
它说明最优方向由两类中心差向量和类内离散度共同决定。:contentReference[oaicite:21]{index=21}

### 6. 投影阈值的选取

资料在第二页最后给出三种常见阈值：

#### （1）两类投影均值中点

$$
y_0^{(1)}=\frac{\tilde m_1+\tilde m_2}{2}
$$

#### （2）按样本数加权

$$
y_0^{(2)}=\frac{N_1\tilde m_1+N_2\tilde m_2}{N_1+N_2}
$$

#### （3）含先验概率修正的阈值

资料还写出了加入先验概率修正项的阈值表达式。  
最终判别规则是：

- 若 \(y\ge y_0\)，判为一类
- 否则判为另一类。:contentReference[oaicite:22]{index=22}

---

## 五、感知准则函数与感知器学习

第三页前半部分复习的是第四章中的感知准则函数、梯度下降和单样本修正。:contentReference[oaicite:23]{index=23}

### 1. 感知准则函数

资料写成：

$$
J_p(a)=\sum_{y\in Y_{Err}}(-a^T y)
$$

其中 \(Y_{Err}\) 表示被当前权向量 \(a\) 错分的样本集合。  
这个准则函数的特点是：

- 只对错分样本惩罚
- 正确分类样本不进入误差项
- 若没有错分样本，则准则函数为 0。:contentReference[oaicite:24]{index=24}

### 2. 梯度下降更新

资料给出批处理形式的修正公式：

$$
a(k+1)=a(k)-\rho \nabla J_p(a)
$$

进一步化为：

$$
a(k+1)=a(k)+\rho\sum_{y\in Y_{Err}}y
$$

这说明：

- 每次迭代都找出当前所有错分样本
- 然后按照它们的和来修正权向量。:contentReference[oaicite:25]{index=25}

### 3. 单样本修正

资料在第三页也写出单样本情况下的修正规则：

- 若样本 \(y_k\) 被错分，则
- 直接用该样本对 \(a\) 进行一次更新

这种方式更接近在线学习的思想。:contentReference[oaicite:26]{index=26}

---

## 六、最小平方误差（LMS/MSE）方法

第三页后半部分复习的是 LMS（最小均方/最小平方误差）方法。资料中把它写成与 Fisher 判别有联系的形式。:contentReference[oaicite:27]{index=27}

### 1. 准则函数

资料写出：

$$
J_s(a)=\frac{1}{2}\|Ya-b\|^2
$$

或者展开成样本误差平方和：

$$
J_s(a)=\frac{1}{2}\sum_i (a^T y_i-b_i)^2
$$

其中：

- \(Y\) 为样本矩阵
- \(a\) 为待求权向量
- \(b\) 为理想输出向量。:contentReference[oaicite:28]{index=28}

### 2. 伪逆解

资料给出：

$$
Y^+=(Y^T Y)^{-1}Y^T
$$

于是最小二乘解为：

$$
a^*=Y^+b
$$

这就是 LMS 的解析解。:contentReference[oaicite:29]{index=29}

### 3. 与 Fisher 判别的关系

资料在页中还特别标出：

- 当 \(N\to\infty\) 时
- 某些特殊构造下
- Fisher 线性判别与最小平方误差判别会接近或一致。:contentReference[oaicite:30]{index=30}

这说明二者并非互不相关，而是存在内在联系。

### 4. 梯度下降法

资料最后给出 LMS 的自梯度下降（批处理）迭代公式，形式为：

$$
a(k+1)=a(k)-\rho Y^T(Ya-b)
$$

并标注：

- 通过调节步长 \(\rho\)
- 可以保证收敛。:contentReference[oaicite:31]{index=31}

---

## 七、最近邻法与 K 近邻法

第四页主体内容复习的是第五章中的最近邻法和 K近邻法。:contentReference[oaicite:32]{index=32}

### 1. 最近邻法

资料给出判别思想：

- 对每一类 \(\omega_i\)，计算待识样本 \(x\) 到该类样本集中最近样本的距离
- 记为 \(g_i(x)\)
- 然后取距离最小者对应类别。

可以概括成：

> 待识样本与哪一类的某个训练样本最近，就判为哪一类。:contentReference[oaicite:33]{index=33}

### 2. 最近邻法的错误率性质

资料写出最近邻法的平均错误率满足某个关于 Bayes 错误率 \(p^*\) 的上界不等式，并特别圈出：

- \(p^*\) 是 Bayes 错误率
- \(c\) 是类别数。:contentReference[oaicite:34]{index=34}

这一页最重要的结论是：

> 最近邻法虽然不是 Bayes 最优分类器，但其错误率有理论界，而且渐近性能较好。:contentReference[oaicite:35]{index=35}

### 3. K 近邻法

资料下半部分给出 K近邻法：

- 判别函数写为某一类在近邻中的票数 \(g_i(x)=k_i\)
- 判别规则是：

$$
g_i(x)=\max_j k_j
\Rightarrow x\in\omega_i
$$

也就是：

> 看最近的 \(k\) 个邻居中，多数属于哪一类，就判为哪一类。:contentReference[oaicite:36]{index=36}

### 4. K 近邻法的性质

资料写出：

- 最近邻法是 K近邻法在 \(k=1\) 时的特例
- K近邻法的错误率同样存在上界分析
- 但资料也在页底写出了它存在的几个问题：

1. 存储、计算量大  
2. 只有当 \(N\to\infty\) 时，某些渐近结论才能严格成立  
3. 所有情况下都能判决，但在高风险代价场景下可能会带来较大风险。:contentReference[oaicite:37]{index=37}

---

## 八、聚类分析与系统聚类

第五、六、十一页复习的是第六章中的聚类分析和系统聚类。:contentReference[oaicite:38]{index=38}

### 1. 基本思想

资料中写出：

- 如何定义样本之间或类之间的距离？
- 何时停止聚类？

这正是聚类问题最核心的两个问题。:contentReference[oaicite:39]{index=39}

### 2. 系统聚类与动态聚类对比

资料在第五页右侧总结了：

#### 系统聚类
- 优点：可以生成树状图，便于观察样本间的层次关系
- 缺点：一旦样本归类，不可回退

#### 动态聚类
- 聚类中心、样本类别可动态调整
- 聚类准则通常定义为类内误差平方和
- 可以不断迭代修正，直到稳定。:contentReference[oaicite:40]{index=40}

这一页把第六章两大类聚类方法的差别概括得很清楚：

> 系统聚类强调“层次结构”，动态聚类强调“反复修正”。:contentReference[oaicite:41]{index=41}

### 3. 系统聚类例题

资料第五、六、十一页给出同一个六样本聚类例题，样本为：

- \(x^1=[0,3,1,2,0]\)
- \(x^2=[1,3,0,1,0]\)
- \(x^3=[3,3,0,0,1]\)
- \(x^4=[1,1,0,2,0]\)
- \(x^5=[3,2,1,2,1]\)
- \(x^6=[4,1,1,1,0]\)

然后：

1. 建立类间距离表  
2. 找最小距离类对  
3. 合并最近的两类  
4. 重新计算距离表  
5. 继续合并  
6. 最终画出系统聚类树。:contentReference[oaicite:42]{index=42}

这个例题非常重要，因为它完整体现了系统聚类法的标准流程：

> 建表 → 找最小 → 合并 → 重算 → 画树。:contentReference[oaicite:43]{index=43}

---

## 九、神经网络与过拟合问题

第七页是一页非常简短但很重要的总结，内容是“聚类、神经网络”中的网络过拟合与解决措施。:contentReference[oaicite:44]{index=44}

### 1. 过拟合的表现

资料写出：

- 隐节点过多，网络会“过拟合”
- 过拟合会削弱泛化能力。:contentReference[oaicite:45]{index=45}

这说明神经网络不能只看训练效果：

> 训练误差很低，并不一定代表对新样本也好。:contentReference[oaicite:46]{index=46}

### 2. 资料给出的解决思路

资料列出若干措施：

1. 采用两阶段网络隐层节点数经验公式  
2. 选合适的网络规模  
3. 增加训练样本数  
4. 正则化  
5. 早期停止  
6. 动态调整学习率。:contentReference[oaicite:47]{index=47}

这页虽然短，但总结性很强。  
它等于把 BP 网络训练中的“防过拟合措施”压缩成了一个考前速记清单。

---

## 十、典型 Bayes 计算题 1

第八页是一道一维两类 Bayes 决策题，资料给出了完整分析过程。:contentReference[oaicite:48]{index=48}

### 1. 已知条件

两类样本的类条件概率密度分别定义为分段函数，资料中写出：

- 第一类在区间 \(0\le x<1\) 和 \(1\le x<2\) 上取不同表达式
- 第二类在 \(1\le x<2\) 上为一次函数，在 \(2\le x\le 3\) 上为二次函数
- 先验概率为：

$$
P(\omega_1)=0.6,\qquad P(\omega_2)=0.4
$$

要求包括：

1. 求 0-1 代价下的贝叶斯判决函数  
2. 求最小错误率  
3. 判断若干指定点分别属于哪一类。:contentReference[oaicite:49]{index=49}

### 2. 判别规则

资料通过比较：

$$
p(x|\omega_1)P(\omega_1)\quad \text{与}\quad p(x|\omega_2)P(\omega_2)
$$

得到边界点：

$$
x=\frac{8}{5}=1.6
$$

因此判别规则为：

- \(x<1.6\) 判一类
- \(x>1.6\) 判另一类。:contentReference[oaicite:50]{index=50}

### 3. 最小错误率

资料在页下半部分写出：

$$
p(e)=p(\omega_1)\int_{1.6}^{2}p(x|\omega_1)\,dx
+
p(\omega_2)\int_{0}^{1.6}p(x|\omega_2)\,dx
$$

并对其进行分段积分。  
这说明最小错误率的计算本质是：

> 把落入“错误判决区域”的概率积分起来。:contentReference[oaicite:51]{index=51}

### 4. 点分类

资料还用 \(x=1.3\) 举例，直接比较两类的后验比例或判别值，得出该点属于某一类。:contentReference[oaicite:52]{index=52}

这一页的价值在于：

- 它把“比较判别值”
- “求分界点”
- “算最小错误率”
- “做具体点分类”

四件事串在了一道题里。

---

## 十一、典型 Bayes 计算题 2：最小错误率与最小风险比较

第九页复习的是另一道典型题：比较最小错误率决策与最小风险决策。:contentReference[oaicite:53]{index=53}

### 1. 已知条件

资料给出：

$$
P(\omega_1)=0.8,\qquad P(\omega_2)=0.2
$$

并给出：

- \(p(x|\omega_1)=0.25\)
- \(p(x|\omega_2)=0.6\)

以及两种损失代价。:contentReference[oaicite:54]{index=54}

### 2. 最小错误率决策

资料先计算后验概率：

$$
P(\omega_1|x)=\frac{p(x|\omega_1)P(\omega_1)}{p(x|\omega_1)P(\omega_1)+p(x|\omega_2)P(\omega_2)}
=0.625
$$

于是：

$$
P(\omega_2|x)=0.375
$$

因此按最小错误率，应判为 \(\omega_1\)。:contentReference[oaicite:55]{index=55}

### 3. 最小风险决策

接着资料构造条件风险：

$$
R(\alpha_1|x)=\lambda_{11}P(\omega_1|x)+\lambda_{12}P(\omega_2|x)
$$

$$
R(\alpha_2|x)=\lambda_{21}P(\omega_1|x)+\lambda_{22}P(\omega_2|x)
$$

再根据数值大小比较，得出：

- 最小风险决策可能判为另一类。:contentReference[oaicite:56]{index=56}

### 4. 这一页最重要的结论

资料下半部分专门写出：

> 当 \(\lambda_{12}\) 很大时，即把某类样本误判为另一类的代价很高，则最小风险决策应当优先避免这种高代价错误。:contentReference[oaicite:57]{index=57}

所以这一页最适合记成一句话：

> **最小错误率只看“错多少”，最小风险还看“错得贵不贵”。** :contentReference[oaicite:58]{index=58}

---

## 十二、参数估计复习

第十页是参数估计的综合复习页，内容直接对应第三章。:contentReference[oaicite:59]{index=59}

### 1. 参数估计的分类

资料开头写出：

- 参数估计
- 非参数估计
- 监督样本
- 未知样本类别

并强调：

- 若总体分布已知，只是参数未知，则做参数估计
- 若总体分布未知，则做非参数估计。:contentReference[oaicite:60]{index=60}

### 2. 非参数估计的特点

资料写到：

- 总体分布未知，直接由样本估计总体分布
- 样本少时效果往往不好
- 但当样本数增多时，效果好
- 需要大量样本保证每次估计较准确。:contentReference[oaicite:61]{index=61}

这一页其实是在提醒：

> **非参数估计更灵活，但更依赖大样本。**

### 3. 均匀分布下的最大似然估计例子

资料给出均匀分布：

$$
p(x|\theta)=
\begin{cases}
\frac{1}{\theta_2-\theta_1}, & \theta_1<x<\theta_2 \\
0, & \text{其它}
\end{cases}
$$

然后构造似然函数 \(l(\theta)\)，取对数 \(H(\theta)=\ln l(\theta)\)，并指出：

- 直接求导不一定得到有意义结果
- 最终应取：

$$
\hat\theta_1=x_{\min},\qquad \hat\theta_2=x_{\max}
$$

这正对应第三章中“最大似然估计有时求极值无解，要结合分布结构判断”的结论。:contentReference[oaicite:62]{index=62}

### 4. 正态分布参数估计

页下半部分复习了正态分布参数的最大似然估计：

#### 均值估计

$$
\hat\mu=\frac{1}{N}\sum_{k=1}^{N}x_k
$$

#### 方差估计

$$
\hat\sigma^2=\frac{1}{N}\sum_{k=1}^{N}(x_k-\hat\mu)^2
$$

#### 协方差矩阵估计

$$
\hat\Sigma=\frac{1}{N}\sum_{k=1}^{N}(x_k-\hat\mu)(x_k-\hat\mu)^T
$$

资料旁边还特别标注：

- 协方差矩阵是对称矩阵
- 若要求无偏估计，分母应改为 \(N-1\)。:contentReference[oaicite:63]{index=63}

---

## 十三、身高体重 Fisher 例题

第十二页是一道典型 Fisher 线性判别算例。它对应第三章或第四章常见的“身高—体重”二维特征例题。:contentReference[oaicite:64]{index=64}

### 1. 数据组成

资料给出 10 个样本：

- 5 个男生
- 5 个女生

每个样本包含两个特征：

- 身高
- 体重。:contentReference[oaicite:65]{index=65}

### 2. 均值向量

资料首先计算：

- 全体样本均值
- 男生样本均值
- 女生样本均值

这一步的作用是确定：

- 每一类在特征空间中的中心位置。:contentReference[oaicite:66]{index=66}

### 3. 类内离散度

资料接着分别计算：

- 男生样本类内离散矩阵
- 女生样本类内离散矩阵
- 全体样本类内离散矩阵

并画出几何示意图。:contentReference[oaicite:67]{index=67}

这一页的重点不是最后结果，而是让你看到：

> Fisher 判别中的均值和类内离散矩阵，完全可以从具体数据一步步算出来。:contentReference[oaicite:68]{index=68}

---

## 十四、整份期末复习资料的主线总结

把这 12 页资料串起来，可以得到一条非常清晰的期末复习主线：

### 1. 基本概念与贝叶斯决策
从模式、模式分类、模式识别出发，进入贝叶斯公式、最小错误率决策和最小风险决策。:contentReference[oaicite:69]{index=69}

### 2. 线性分类器
围绕 Fisher 线性判别、感知准则函数、LMS 最小平方误差法展开，复习了线性分类器的主要设计方法。:contentReference[oaicite:70]{index=70}

### 3. 非线性分类器
重点回顾最近邻法与 K近邻法的分类思想及错误率性质。:contentReference[oaicite:71]{index=71}

### 4. 聚类分析
复习系统聚类的基本步骤、类间距离表构造与聚类树绘制。:contentReference[oaicite:72]{index=72}

### 5. 神经网络
补充了神经网络过拟合及防止过拟合的常见方法。:contentReference[oaicite:73]{index=73}

### 6. 参数估计
回顾了参数估计与非参数估计的区分，以及正态分布和均匀分布下的典型参数估计方法。:contentReference[oaicite:74]{index=74}

### 7. 典型题训练
通过 Bayes 判题、最小风险对比题、系统聚类题、Fisher 算例，把公式和方法串了起来。:contentReference[oaicite:75]{index=75}

---

## 十五、最该抓住的期末重点

### 必须会写
- 贝叶斯公式
- 最小错误率决策规则
- 最小风险条件风险公式
- Fisher 准则函数
- Fisher 最优方向
- 感知器修正公式
- LMS 准则函数与伪逆解
- 最近邻与 K近邻的判别思想
- 正态分布参数估计公式
- 系统聚类的操作步骤。:contentReference[oaicite:76]{index=76}

### 必须会理解
- 最小错误率与最小风险的区别
- Fisher 判别为什么要“类间远、类内紧”
- 感知器为什么只修正错分样本
- LMS 为什么适合线性不可分情形
- 最近邻法为什么简单但计算量大
- K近邻法为什么更稳
- 系统聚类为什么不可回退
- 为什么非参数估计需要更多样本
- 为什么神经网络会过拟合。:contentReference[oaicite:77]{index=77}

### 必须会做的题型
- 一维两类 Bayes 分类题
- 最小错误率与最小风险比较题
- Fisher 线性判别计算题
- 感知器/LMS 公式辨析题
- 最近邻与 K近邻概念题
- 系统聚类距离表与聚类树题
- 参数估计公式题。:contentReference[oaicite:78]{index=78}