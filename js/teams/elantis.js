/* ==========================================================================
   Elantis team (Cardiometabolic Division) — induction modules and quiz bank
   --------------------------------------------------------------------------
   Source: "Induction Training Product Presentations\for managerial portal\elantis"
   (induction training Elantis.pptx, Admit, Dilgem.pptx, 2. Emdagan.pptx,
   Emdagan Training Manual.pdf, Diasar.pptx, CCBs.pptx, Bivolol.pptx,
   Xell*.pptx, Lipoproteins & Xell.pptx) and the latest literature
   "Elantis Literatures brochures Oct-26" — taglines, strengths and claims
   follow the Oct-26 brochures where older decks differ.

   Portfolio (Oct-26): Admit, Emdagan / Emdagan Plus, Dilgem, Diasar,
   Bivolol, Xell. (Oritide is not in the current portfolio.)

   - modules  : shown IN THIS ORDER (each unlocks after the previous one is
                read and its quiz attempted). HTML allowed.
   - questions: `module` links a question to its module; `answer` is the
                0-based index of the correct option. Keep 10+ per module.
   Module ids are stored in managers' progress — don't rename them once
   managers have started; add new modules with new ids.
   ========================================================================== */
(function () {
const modules = [
  /* ------------------------------------------------------------------ 1 */
  {
    id: "m1",
    title: "Welcome to Shaigan & the Elantis Portfolio",
    summary: "The company, the Cardiometabolic Division and the six Elantis brands.",
    body: `
      <figure><img src="assets/img/elantis/portfolio.jpg" alt="Shaigan Cardiometabolic Division portfolio: Diasar, Emdagan, Admit, Xell, Bivolol and Dilgem with their taglines and strengths" loading="lazy">
      <figcaption>The Cardiometabolic Division — "Together in Care, Committed to Better Outcomes"</figcaption></figure>

      <h3>About Shaigan</h3>
      <p><strong>Shaigan Pharmaceuticals (Pvt.) Ltd</strong> was established in <strong>1993</strong> in Pakistan. Its
      state-of-the-art manufacturing facility produces and develops life-saving drugs of different therapeutic classes.
      Shaigan has grown to become one of the leading pharmaceutical companies in Pakistan — a large producer and
      manufacturer of life-saving drugs, with exports to other countries of the Asia-Pacific region.</p>

      <h3>The Elantis team — Cardiometabolic Division</h3>
      <p>Elantis promotes Shaigan's <strong>cardiometabolic</strong> portfolio: medicines for <strong>diabetes</strong>,
      <strong>hypertension</strong> and <strong>high cholesterol</strong> — conditions that very often occur together in the
      same patient. The division's promise is <em>"Together in Care, Committed to Better Outcomes"</em>, built on three pillars:
      <strong>evidence-based solutions</strong>, <strong>improving patient outcomes</strong> and <strong>innovation for a healthier future</strong>.</p>

      <h3>The six Elantis brands</h3>
      <table>
        <tr><th>Brand</th><th>Molecule</th><th>Strengths</th><th>Tagline</th></tr>
        <tr><td><strong>Admit</strong></td><td>Sitagliptin / Sitagliptin + Metformin</td><td>50 mg; 50/500 mg; 50/1000 mg</td><td>Together in Care</td></tr>
        <tr><td><strong>Emdagan</strong> / <strong>Emdagan Plus</strong></td><td>Empagliflozin / Empagliflozin + Metformin HCl</td><td>10, 25 mg; 12.5/500, 12.5/1000 mg</td><td>Stronger Control</td></tr>
        <tr><td><strong>Dilgem</strong></td><td>Glimepiride</td><td>1, 2, 3, 4 mg</td><td>Desired Balance in Diabetes Management</td></tr>
        <tr><td><strong>Diasar</strong></td><td>Amlodipine + Valsartan</td><td>5/80, 5/160, 10/160 mg</td><td>Dual Impact for Better Control</td></tr>
        <tr><td><strong>Bivolol</strong></td><td>Nebivolol</td><td>2.5, 5, 10 mg</td><td>Bring Back to the Normal</td></tr>
        <tr><td><strong>Xell</strong></td><td>Rosuvastatin</td><td>5, 10, 20 mg</td><td>Protecting Every Heart</td></tr>
      </table>

      <h3>How the portfolio fits together</h3>
      <ul>
        <li><strong>Diabetes:</strong> Admit (DPP-4 inhibitor ± metformin), Emdagan (SGLT2 inhibitor ± metformin) and Dilgem (sulfonylurea) — three different mechanisms, so a diabetologist or physician can use Elantis brands at every step of therapy.</li>
        <li><strong>Hypertension:</strong> Diasar (CCB + ARB combination) and Bivolol (third-generation, vasodilating beta-blocker).</li>
        <li><strong>Cholesterol / cardiovascular protection:</strong> Xell (high-intensity statin).</li>
      </ul>
      <p>Your key customers are <strong>diabetologists, endocrinologists, cardiologists, consultant physicians, nephrologists and GPs</strong>
      who treat patients with diabetes, high blood pressure and heart disease.</p>

      <h3>How this induction works</h3>
      <p>Modules 2 and 3 cover the science (diabetes; heart, kidneys and blood pressure). Modules 4–9 cover each brand.
      Modules open one at a time — finish each module and its quiz to unlock the next.</p>
    `
  },

  /* ------------------------------------------------------------------ 2 */
  {
    id: "m2",
    title: "Science Background: Diabetes Mellitus",
    summary: "Insulin and glucagon, types of diabetes, diagnosis and oral treatments.",
    body: `
      <h3>The pancreas — insulin and glucagon</h3>
      <p>The pancreas lies behind the stomach and has both <strong>exocrine</strong> tissue (digestive enzymes — lipase, amylase,
      protease) and <strong>endocrine</strong> tissue, the <strong>islets of Langerhans</strong>, which contain two key cell types:</p>
      <ul>
        <li><strong>Beta (β) cells</strong> produce <strong>insulin</strong>, which <em>lowers</em> blood glucose after a meal. Insulin moves glucose from the blood into muscle and other cells to be used for energy (ATP), and helps the liver store glucose as glycogen. Cells cannot use glucose without insulin.</li>
        <li><strong>Alpha (α) cells</strong> produce <strong>glucagon</strong>, which <em>raises</em> blood glucose by making the liver break down stored glycogen into glucose.</li>
      </ul>
      <p>In a healthy person insulin and glucagon stay in balance, keeping blood glucose normal.</p>

      <h3>What is diabetes?</h3>
      <p><strong>Diabetes mellitus</strong> is a metabolic disease of persistently high blood sugar (hyperglycaemia) caused by
      defects in <strong>insulin secretion, insulin action, or both</strong> — the pancreas doesn't make enough insulin and/or the
      body's cells don't respond properly to it. Over time high glucose damages the small blood vessels of the
      <strong>heart, eyes, kidneys and nerves</strong>.</p>
      <ul>
        <li><strong>Type 1</strong> — autoimmune; the body attacks the pancreas, which makes little or no insulin. Insulin injections are essential (insulin-dependent).</li>
        <li><strong>Type 2</strong> — the commonest type; the pancreas makes some insulin but not enough, or the cells are <strong>resistant</strong> to it (non-insulin-dependent).</li>
        <li><strong>Gestational</strong> — high glucose first appearing during pregnancy (especially the third trimester); usually disappears after delivery.</li>
      </ul>

      <h3>The diabetes challenge in Pakistan</h3>
      <p>The latest Elantis literature highlights the scale of the problem: diabetes affects <strong>33.4 million adults</strong> in
      Pakistan (Emdagan brochure), a prevalence of <strong>31.4%</strong> — one of the highest rates (Admit brochure).</p>

      <h3>Symptoms — the "3 P's" and more</h3>
      <p><strong>Polyuria</strong> (excessive urination), <strong>polydipsia</strong> (unquenchable thirst) and <strong>polyphagia</strong>
      (increased appetite), plus weight loss, tiredness, tingling or numbness in hands and feet, blurred vision, frequent
      infections and slow-healing wounds. Some patients have no symptoms at all.</p>

      <h3>Diagnosis</h3>
      <ul>
        <li><strong>Fasting blood glucose:</strong> normal ≤ 100 mg/dL.</li>
        <li><strong>2-hour post-meal (postprandial):</strong> normally below 140 mg/dL (age 50 and younger).</li>
        <li><strong>HbA1c</strong> (glycated haemoglobin) shows the average blood sugar over the past <strong>2–3 months</strong>:
          normal 4%–5.6%; 5.7%–6.4% = increased risk; <strong>6.5% or higher = diabetes</strong>. The treatment goal for most diabetics is
          <strong>HbA1c below 7%</strong>.</li>
      </ul>

      <h3>Oral anti-diabetic classes</h3>
      <table>
        <tr><th>Class</th><th>How it works</th><th>Elantis brand</th></tr>
        <tr><td>Biguanides (metformin)</td><td>Reduces glucose released by the liver; improves insulin sensitivity</td><td>In Admit and Emdagan Plus combinations</td></tr>
        <tr><td>Sulfonylureas</td><td>Stimulate the pancreas to release more insulin</td><td><strong>Dilgem</strong> (glimepiride)</td></tr>
        <tr><td>DPP-4 inhibitors (gliptins)</td><td>Raise insulin after meals and lower glucose made by the body</td><td><strong>Admit</strong> (sitagliptin)</td></tr>
        <tr><td>SGLT2 inhibitors (gliflozins)</td><td>Make the kidneys pass excess glucose out in the urine</td><td><strong>Emdagan</strong> (empagliflozin)</td></tr>
        <tr><td>Thiazolidinediones (e.g. pioglitazone)</td><td>Make the body more sensitive to insulin</td><td>—</td></tr>
        <tr><td>Meglitinides; alpha-glucosidase inhibitors</td><td>Short-acting insulin release; slow carbohydrate absorption</td><td>—</td></tr>
      </table>

      <h3>Metformin — three mechanisms</h3>
      <ol>
        <li>Reduces <strong>hepatic glucose production</strong> by inhibiting gluconeogenesis and glycogenolysis.</li>
        <li>In muscle, increases <strong>insulin sensitivity</strong>, improving peripheral glucose uptake and use.</li>
        <li><strong>Delays intestinal glucose absorption.</strong></li>
      </ol>

      <h3>Incretins — the gut's signal to the pancreas</h3>
      <p>After a meal the gut releases <strong>incretin</strong> hormones — <strong>GLP-1</strong> (glucagon-like peptide-1) and
      <strong>GIP</strong> (glucose-dependent insulinotropic polypeptide). They stimulate insulin release from β-cells, and GLP-1 also
      suppresses glucagon from α-cells, slows gastric emptying and promotes early satiety. About <strong>70–80% of the insulin</strong>
      released after a meal is due to incretins. Their effect is <strong>glucose-dependent</strong> — they act mainly when glucose is high.
      But the enzyme <strong>DPP-4</strong> (dipeptidyl peptidase-4) inactivates GLP-1 within <strong>1–2 minutes</strong>, and the incretin
      effect is diminished in type 2 diabetes.</p>
    `
  },

  /* ------------------------------------------------------------------ 3 */
  {
    id: "m3",
    title: "Science Background: Heart, Kidneys & Blood Pressure",
    summary: "How the heart and kidneys work, heart failure, hypertension and the RAAS.",
    body: `
      <h3>The heart — a pump and pipes</h3>
      <p>The heart has <strong>four chambers</strong> — right atrium, right ventricle, left atrium and left ventricle — and four valves
      (tricuspid, pulmonary, mitral/bicuspid and aortic). It pumps <strong>deoxygenated blood to the lungs</strong> and
      <strong>oxygenated blood to the body</strong>. The heart wall has three layers: epicardium, myocardium (cardiac muscle) and endocardium.
      Arteries carry blood away from the heart; veins return it. A normal adult <strong>heart rate</strong> is
      <strong>60–100 beats per minute</strong>.</p>

      <h3>Ejection fraction and heart failure</h3>
      <p><strong>Ejection fraction (EF)</strong> is the share of blood pumped out of a filled ventricle with each heartbeat
      (American Heart Association):</p>
      <table>
        <tr><th>Left ventricular EF</th><th>Meaning</th></tr>
        <tr><td>50%–70%</td><td>Normal</td></tr>
        <tr><td>41%–49%</td><td>Mildly reduced</td></tr>
        <tr><td>40% or less</td><td>Reduced</td></tr>
      </table>
      <ul>
        <li><strong>HFpEF</strong> — heart failure with <em>preserved</em> ejection fraction: the heart pumps a normal amount per beat (EF usually above 50%).</li>
        <li><strong>HFrEF</strong> — heart failure with <em>reduced</em> ejection fraction: weakened muscle pumps much less per beat (EF usually below 40%).</li>
      </ul>
      <p>Causes of low EF include cardiomyopathy, a heart attack that damaged the muscle, valve problems and long-term
      uncontrolled high blood pressure.</p>

      <h3>The kidneys</h3>
      <p>The kidneys filter blood and make urine, maintaining the body's internal balance (<strong>homeostasis</strong>). Their
      functions include excreting wastes such as urea and uric acid, <strong>regulating blood pressure</strong>, secreting hormones such as
      <strong>erythropoietin</strong> (which stimulates red-blood-cell production) and maintaining acid–base and fluid balance.</p>
      <p>The <strong>nephron</strong> is the basic structural and functional unit of the kidney — each kidney has roughly
      <strong>800,000 to 1.5 million</strong> of them. Urine is formed in four steps: <strong>filtration</strong> (at the glomerulus, into
      Bowman's capsule), <strong>reabsorption</strong>, <strong>secretion</strong> and <strong>excretion</strong>. The proximal tubule is where most
      filtered glucose is reabsorbed — the site where Emdagan acts.</p>

      <h3>Hypertension — the "silent killer"</h3>
      <p>Blood pressure is the force of blood against the artery walls, written as <strong>systolic/diastolic</strong> (e.g. 110/70):
      systolic is the pressure when the heart beats; diastolic is the pressure between beats. Normal is <strong>below 120/80</strong>.
      High blood pressure makes the heart work harder and damages the arteries, raising the risk of heart disease, kidney
      disease and stroke. It often causes <strong>no symptoms</strong> for years — hence "the silent killer"; about
      <strong>1 in 5</strong> people with high blood pressure don't know they have it.</p>

      <h3>The renin–angiotensin–aldosterone system (RAAS)</h3>
      <p>When blood pressure or kidney blood flow falls, the kidney releases <strong>renin</strong>. Renin converts angiotensinogen
      (from the liver) to angiotensin I, which <strong>ACE</strong> converts to <strong>angiotensin II</strong>. Acting on
      <strong>AT1 receptors</strong>, angiotensin II causes <strong>vasoconstriction</strong>, <strong>aldosterone release</strong> (salt and
      water retention) and <strong>sympathetic activation</strong> — all raising blood pressure. ARBs such as valsartan block this at
      the AT1 receptor.</p>

      <h3>Antihypertensive treatment options</h3>
      <p>Calcium channel blockers (CCBs), angiotensin receptor blockers (ARBs), beta-blockers, ACE inhibitors, diuretics and
      alpha-blockers. Hypertension is multifactorial: <strong>at least 2 drugs</strong> are often needed, and <strong>8 out of 10</strong>
      patients need multiple drugs to reach their BP goal.</p>
      <p><strong>JNC-8 guideline goals:</strong> age ≥ 60 years (no diabetes/CKD) — below <strong>150/90</strong>; age &lt; 60, or any age with
      diabetes or chronic kidney disease — below <strong>140/90</strong>. Patients with CKD should receive an ACE inhibitor or ARB.</p>
      <p><strong>Why control matters:</strong> a <strong>5 mmHg</strong> fall in systolic pressure reduces coronary heart disease by
      <strong>9%</strong> and stroke by <strong>14%</strong>. Uncontrolled hypertension damages the heart, brain, blood vessels, kidneys and eyes.</p>
    `
  },

  /* ------------------------------------------------------------------ 4 */
  {
    id: "m4",
    title: "Admit (Sitagliptin / Sitagliptin + Metformin)",
    summary: "Together in Care — the DPP-4 inhibitor for effective glycaemic control with confidence.",
    body: `
      <figure><img src="assets/img/elantis/admit.jpg" alt="Admit brochure: Together in Care — effective HbA1c reduction, established cardiovascular safety, weight-neutral, low hypoglycaemia risk" loading="lazy">
      <figcaption>Admit — "Together in Care"</figcaption></figure>

      <h3>Strengths &amp; packs</h3>
      <ul>
        <li><strong>Admit-50</strong> — sitagliptin 50 mg</li>
        <li><strong>Admit-50/500</strong> — sitagliptin 50 mg + metformin HCl 500 mg</li>
        <li><strong>Admit-50/1000</strong> — sitagliptin 50 mg + metformin HCl 1000 mg</li>
      </ul>
      <p>Positioning line: <strong>"For Effective Glycemic Control with Confidence."</strong></p>

      <h3>Mechanism of action</h3>
      <p><strong>Sitagliptin</strong> is a selective inhibitor of the enzyme <strong>DPP-4</strong>. Normally DPP-4 rapidly breaks down the
      incretins GLP-1 and GIP. By blocking DPP-4, sitagliptin keeps incretins active for longer, giving
      <strong>glucose-dependent</strong> insulin secretion from the pancreas and <strong>less glucagon</strong> — so the liver makes less glucose.
      This corrects the insulin : glucagon imbalance of type 2 diabetes and improves islet (β- and α-cell) function.</p>

      <h3>Sitagliptin + metformin — the 3 core defects</h3>
      <table>
        <tr><th>Core defect of type 2 diabetes</th><th>Addressed by</th></tr>
        <tr><td>β-cell dysfunction</td><td>Sitagliptin — improves β-cell function, increases insulin synthesis and release</td></tr>
        <tr><td>Insulin resistance</td><td>Metformin — insulin-sensitising</td></tr>
        <tr><td>Hepatic glucose overproduction</td><td>Both — sitagliptin by suppressing glucagon; metformin by reducing gluconeogenesis and glycogenolysis</td></tr>
      </table>

      <h3>Indications</h3>
      <p>As an adjunct to diet and exercise to improve glycaemic control in adults with type 2 diabetes — as monotherapy, or
      when not adequately controlled on metformin or sitagliptin alone, or in patients already taking sitagliptin and
      metformin as separate tablets. <strong>Not</strong> for type 1 diabetes or diabetic ketoacidosis.</p>

      <h3>Dosage</h3>
      <ul>
        <li><strong>Admit combination (Oct-26 brochure):</strong> adults — <strong>1 tablet twice daily with meals</strong>, titrated on glycaemic response and tolerability.</li>
        <li><strong>Sitagliptin:</strong> the usual recommended dose is <strong>100 mg once daily</strong> (with or without food).</li>
        <li><strong>Renal adjustment:</strong> mild impairment — no change; moderate (CrCl 30 to &lt;50 mL/min) — <strong>50 mg once daily</strong>; severe (CrCl &lt;30) or end-stage renal disease — <strong>25 mg once daily</strong>. Check renal function before starting and periodically.</li>
      </ul>

      <h3>Pharmacokinetics</h3>
      <p>Bioavailability: sitagliptin <strong>~87%</strong>, metformin ~50–60%. Both are excreted <strong>mainly unchanged in the urine</strong>
      (about 79% of sitagliptin).</p>

      <h3>Safety</h3>
      <ul>
        <li>Overall adverse reactions and discontinuation similar to placebo.</li>
        <li><strong>Hypoglycaemia similar to placebo (1.2% vs 0.9%)</strong> when not used with insulin or insulin secretagogues (e.g. sulfonylureas).</li>
        <li>GI effects vs placebo: abdominal pain 2.3% vs 2.1%, nausea 1.4% vs 0.6%, diarrhoea 3.0% vs 2.3%.</li>
        <li>No contraindications listed for sitagliptin itself; dose adjustment in renal impairment.</li>
      </ul>

      <h3>Key detailing messages (Oct-26 brochure)</h3>
      <ul>
        <li><strong>Effective HbA1c reduction</strong> — complementary action for significant, sustained HbA1c improvement (up to 2% reduction).</li>
        <li><strong>Established cardiovascular safety</strong> — demonstrated in T2DM with established ASCVD (TECOS trial).</li>
        <li><strong>Weight-neutral profile</strong> — effective control without promoting weight gain.</li>
        <li><strong>Low hypoglycaemia risk</strong> when used without insulin or insulin secretagogues.</li>
        <li>DPP-4 advantages: once-daily convenience, no oedema or heart-failure signal, no loss of bone density, well tolerated, effective across all ages and BMI ranges.</li>
      </ul>
    `
  },

  /* ------------------------------------------------------------------ 5 */
  {
    id: "m5",
    title: "Emdagan & Emdagan Plus (Empagliflozin ± Metformin)",
    summary: "Stronger Control — the SGLT2 inhibitor with heart and kidney protection.",
    body: `
      <figure><img src="assets/img/elantis/emdagan.jpg" alt="Emdagan brochure: better glycaemic control, proven cardiovascular and renal protection, weight management, trusted safety" loading="lazy">
      <figcaption>Emdagan — "Stronger Control Today, A Healthier Pakistan Tomorrow"</figcaption></figure>

      <h3>Strengths</h3>
      <ul>
        <li><strong>Emdagan 10</strong> and <strong>Emdagan 25</strong> — empagliflozin 10 mg, 25 mg</li>
        <li><strong>Emdagan Plus 12.5/500</strong> and <strong>12.5/1000</strong> — empagliflozin 12.5 mg + metformin HCl 500 mg / 1000 mg</li>
      </ul>
      <p>Positioning line: <strong>"Powerful Combination. Proven Benefits. Better Outcomes."</strong></p>

      <h3>Mechanism of action — working through the kidney</h3>
      <p>The kidneys filter glucose into the urine-forming fluid and then reabsorb it. About <strong>90%</strong> of filtered glucose is
      reabsorbed by <strong>SGLT2</strong> (sodium-glucose co-transporter-2) in the <strong>proximal tubule</strong>, and about 10% by SGLT1.
      <strong>Empagliflozin inhibits SGLT2</strong>, reducing the kidney's reabsorption of glucose so the excess is
      <strong>excreted in the urine</strong>. This lowers blood glucose <strong>independently of insulin</strong>, and also
      <strong>aids weight loss</strong> and <strong>lowers blood pressure</strong>.</p>
      <p>In Emdagan Plus, <strong>metformin</strong> adds reduced hepatic glucose production, reduced intestinal glucose absorption and
      improved insulin sensitivity.</p>

      <h3>Pharmacokinetics (empagliflozin)</h3>
      <table>
        <tr><th>Half-life</th><td>12.4 hours</td></tr>
        <tr><th>Bioavailability</th><td>60%</td></tr>
        <tr><th>Protein binding</th><td>86.2%</td></tr>
        <tr><th>Elimination</th><td>Renal excretion</td></tr>
      </table>

      <h3>Recommended dose (training deck)</h3>
      <ul>
        <li><strong>Heart failure:</strong> 10 mg or 25 mg daily</li>
        <li><strong>Heart failure + diabetes:</strong> 25 mg daily</li>
        <li><strong>Diabetes (combination):</strong> Emdagan Plus strengths; may be taken with or without food</li>
      </ul>

      <h3>Key detailing messages (Oct-26 brochure)</h3>
      <ul>
        <li><strong>Better glycaemic control</strong> — significantly lowers blood glucose and helps maintain HbA1c targets.</li>
        <li><strong>Proven cardiovascular protection</strong> — reduces the risk of major CV events and supports heart health.</li>
        <li><strong>Proven renal protection</strong> — slows progression of kidney disease and reduces the risk of renal outcomes (EMPA-KIDNEY trial).</li>
        <li><strong>Weight management</strong> — promotes weight loss and helps maintain a healthy weight.</li>
        <li><strong>Trusted safety profile</strong> — well tolerated, with a proven safety profile for long-term use.</li>
      </ul>
      <p>Because Emdagan protects the <strong>heart and kidneys</strong> as well as lowering glucose, it is relevant to
      <strong>cardiologists and nephrologists</strong>, not only diabetologists.</p>
    `
  },

  /* ------------------------------------------------------------------ 6 */
  {
    id: "m6",
    title: "Dilgem (Glimepiride)",
    summary: "Desired Balance in Diabetes Management — the sulfonylurea in the Elantis range.",
    body: `
      <h3>Strengths</h3>
      <p><strong>Dilgem</strong> (glimepiride) tablets: <strong>1 mg, 2 mg, 3 mg and 4 mg</strong>. The flexible strengths allow the dose to be
      matched to each patient's glucose response. Tagline: <em>"Desired Balance in Diabetes Management."</em></p>

      <h3>Sulfonylureas — what they do</h3>
      <p>Sulfonylureas stimulate the pancreas to <strong>release more insulin</strong>, both right after a meal and then over several
      hours. They work only if the β-cells can still make insulin, which is why they are used in <strong>type 2</strong> (not type 1)
      diabetes.</p>

      <h3>Mechanism of action — step by step</h3>
      <ol>
        <li>The sulfonylurea binds to the <strong>SUR1</strong> part of the <strong>ATP-sensitive potassium (K<sub>ATP</sub>) channel</strong> on the membrane of pancreatic β-cells.</li>
        <li>This closes the channel, stopping the outward flow of potassium (K⁺) that normally keeps the cell polarised.</li>
        <li>The cell membrane <strong>depolarises</strong> (becomes more positive).</li>
        <li>Depolarisation opens <strong>voltage-gated calcium (Ca²⁺) channels</strong>; calcium flows in.</li>
        <li>The rise in intracellular calcium triggers <strong>insulin release</strong>, and blood glucose falls.</li>
      </ol>

      <h3>Indications</h3>
      <ul>
        <li>Management of <strong>hyperglycaemia in type 2 diabetes</strong>.</li>
        <li>Can be given as <strong>monotherapy</strong>, in <strong>combination with other oral anti-diabetics</strong> (e.g. metformin), or <strong>with insulin</strong>.</li>
      </ul>

      <h3>Points to remember</h3>
      <ul>
        <li>Because sulfonylureas increase insulin release regardless of the glucose level, <strong>hypoglycaemia</strong> is the key risk to discuss — especially when combined with other glucose-lowering drugs. (The Admit literature notes that sitagliptin's low hypoglycaemia risk applies when used <em>without</em> insulin secretagogues such as sulfonylureas.)</li>
        <li>Glimepiride and metformin are a widely used combination; glimepiride + pioglitazone is another.</li>
        <li>Within Elantis, Dilgem complements Admit and Emdagan: three different mechanisms — <strong>insulin release</strong> (Dilgem), <strong>incretin enhancement</strong> (Admit) and <strong>urinary glucose excretion</strong> (Emdagan).</li>
      </ul>
    `
  },

  /* ------------------------------------------------------------------ 7 */
  {
    id: "m7",
    title: "Diasar (Amlodipine + Valsartan)",
    summary: "Dual Impact for Better Control — powerful CCB + ARB combination for superior BP control.",
    body: `
      <figure><img src="assets/img/elantis/diasar.jpg" alt="Diasar brochure: Dual Impact for Better Control — effective BP control, 91.5% achieve BP goal, up to 75% reduction in amlodipine ankle oedema, once daily" loading="lazy">
      <figcaption>Diasar — "Dual Impact for Better Control"</figcaption></figure>

      <h3>Strengths &amp; dosage</h3>
      <table>
        <tr><th>Situation</th><th>Diasar dose</th></tr>
        <tr><td>Start</td><td><strong>5/80 mg</strong> once daily</td></tr>
        <tr><td>Uncontrolled BP</td><td><strong>5/160 mg</strong> once daily</td></tr>
        <tr><td>Uncontrolled BP</td><td><strong>10/160 mg</strong> once daily</td></tr>
      </table>
      <p>(amlodipine mg / valsartan mg). Packs of 2 × 7 tablets. Positioning line: <strong>"Powerful Combination for Superior BP Control."</strong></p>

      <h3>Component 1 — Amlodipine (calcium channel blocker)</h3>
      <p>CCBs block <strong>L-type calcium channels</strong> in vascular smooth muscle and heart muscle. With less calcium entering,
      arteries relax (<strong>vasodilation</strong>), peripheral resistance falls and <strong>blood pressure drops</strong>; the heart's work and
      oxygen demand also fall.</p>
      <ul>
        <li>Two classes: <strong>dihydropyridines</strong> (names end in "<strong>-dipine</strong>": amlodipine, nifedipine, felodipine, nicardipine, nimodipine) act mainly on blood vessels; <strong>non-dihydropyridines</strong> — phenylalkylamines (<strong>verapamil</strong>) and benzothiazepines (<strong>diltiazem</strong>) — act more on the heart.</li>
        <li>CCBs are <strong>first-line antihypertensives</strong> and are also used for angina.</li>
        <li>Amlodipine PK: T-max <strong>6–12 h</strong>; bioavailability 64–90%; ~93% protein-bound; ~90% metabolised in the liver; long half-life of <strong>30–50 h</strong>; steady state after 7–8 days.</li>
        <li>Classic CCB side effects: dizziness, headache, flushing, and <strong>peripheral (ankle) oedema</strong>.</li>
      </ul>

      <h3>Component 2 — Valsartan (angiotensin receptor blocker)</h3>
      <p>Valsartan <strong>selectively blocks angiotensin II at the AT1 receptor</strong> (in vascular smooth muscle and the adrenal gland),
      preventing vasoconstriction, aldosterone release and sympathetic activation. It is used for high blood pressure,
      heart failure and diabetic kidney disease.</p>
      <ul>
        <li>Valsartan PK: T-max <strong>2–4 h</strong>; absolute bioavailability about <strong>25%</strong>; <strong>95%</strong> protein-bound (mainly albumin); eliminated mainly in faeces (~83%) and urine (~13%), largely unchanged; can be taken with or without food.</li>
        <li>ARB side effects: <strong>hyperkalaemia</strong> (potassium retention from lower aldosterone), impaired renal function, dizziness; angioedema very rare.</li>
      </ul>
      <p>With Diasar, peak levels of valsartan and amlodipine are reached in about <strong>3</strong> and <strong>6–8 hours</strong> respectively.</p>

      <h3>Indications</h3>
      <ul>
        <li>Hypertension <strong>not adequately controlled on monotherapy</strong>.</li>
        <li><strong>Initial therapy</strong> in newly diagnosed patients likely to need more than one drug to reach BP goal.</li>
        <li>Patients already taking amlodipine and valsartan separately can switch to Diasar at the same doses for convenience.</li>
      </ul>

      <h3>Evidence &amp; key detailing messages</h3>
      <ul>
        <li><strong>Effective BP control across all grades</strong> of hypertension — systolic reductions of about <strong>20, 30 and 43 mmHg</strong> in mild, moderate and severe hypertension.</li>
        <li><strong>91.5% of hypertensive patients achieve BP goal</strong> (Oct-26 brochure); "9 out of 10 patients reach BP goal &lt;140/90" in diabetic and non-diabetic patients.</li>
        <li><strong>Up to 75% reduction of amlodipine-induced ankle oedema</strong> — valsartan offsets amlodipine's oedema (oedema incidence 23% with amlodipine alone vs 6.8% with amlodipine/valsartan).</li>
        <li><strong>CV risk reduction</strong> — significant reduction in cardiovascular risk for better patient outcomes.</li>
        <li><strong>Once-daily dosing</strong> for better compliance.</li>
        <li>Amlodipine/valsartan as initial therapy is supported by the British Hypertension Society, American Heart Association and NICE; ESH-ESC lists ARB + CCB as a preferred combination.</li>
      </ul>
    `
  },

  /* ------------------------------------------------------------------ 8 */
  {
    id: "m8",
    title: "Bivolol (Nebivolol)",
    summary: "Bring Back to the Normal — the third-generation, vasodilating beta-blocker.",
    body: `
      <h3>Strengths</h3>
      <p><strong>Bivolol</strong> (nebivolol) film-coated tablets: <strong>2.5 mg, 5 mg and 10 mg</strong>. Tagline:
      <em>"Bring Back to the Normal."</em></p>

      <h3>Three generations of beta-blockers</h3>
      <table>
        <tr><th>Generation</th><th>Type</th><th>Examples</th></tr>
        <tr><td>First</td><td>Non-selective</td><td>Propranolol, nadolol, timolol, sotalol</td></tr>
        <tr><td>Second</td><td>β1-selective</td><td>Atenolol, bisoprolol, metoprolol, acebutolol</td></tr>
        <tr><td><strong>Third</strong></td><td><strong>Vasodilatory</strong></td><td>Non-selective: carvedilol, labetalol · β1-selective: <strong>nebivolol</strong>, betaxolol</td></tr>
      </table>
      <p>Nebivolol is a <strong>third-generation, β1-selective, vasodilating</strong> beta-blocker.</p>

      <h3>Mechanism of action — dual</h3>
      <ul>
        <li><strong>β1 blockade:</strong> slows the heart rate and reduces cardiac output, lowering blood pressure and reducing the heart's work.</li>
        <li><strong>β3 agonist activity:</strong> stimulates <strong>endothelial nitric oxide synthase</strong>, increasing <strong>nitric oxide</strong> → <strong>vasodilation</strong> and lower peripheral vascular resistance, while stroke volume and ejection fraction are maintained.</li>
      </ul>
      <p>Outcome: <strong>reduced cardiac work</strong>, with benefits on vascular remodelling, myocardial hypertrophy and the kidney.</p>

      <h3>Indications</h3>
      <p>Hypertension, angina, arrhythmias, anxiety, hyperthyroidism, migraine prevention and essential tremor.</p>

      <h3>Dosage</h3>
      <ul>
        <li><strong>Hypertension:</strong> 5 mg once daily, with or without meals. Elderly and renal dysfunction: <strong>2.5 mg once daily</strong>.</li>
        <li><strong>Congestive heart failure:</strong> 2.5–5 mg; maximum <strong>10 mg per day</strong>.</li>
        <li><strong>Angina:</strong> 5 mg once daily.</li>
      </ul>

      <h3>Pharmacokinetics</h3>
      <ul>
        <li>The active isomer (d-nebivolol) has a half-life of about <strong>12 hours</strong> in extensive CYP2D6 metabolisers and about 19 hours in poor metabolisers.</li>
        <li>T-max <strong>1.5–4 hours</strong>; bioavailability 12–96% (extensive to poor CYP2D6 metabolisers); protein binding <strong>98%</strong>.</li>
        <li><strong>Food does not affect</strong> its pharmacokinetics. Excretion: 38% urine, 44% faeces.</li>
      </ul>

      <h3>Safety</h3>
      <ul>
        <li><strong>Side effects:</strong> headache, dizziness, tiredness, nausea/diarrhoea, slow heartbeat, sleep difficulty, tingling in the limbs.</li>
        <li><strong>Contraindications:</strong> acute heart failure, AV block, <strong>bradycardia</strong>, cardiogenic shock, sick sinus syndrome, hepatic disease, acute bronchospasm, pregnancy, children.</li>
        <li>Pregnancy category <strong>C</strong>.</li>
      </ul>
    `
  },

  /* ------------------------------------------------------------------ 9 */
  {
    id: "m9",
    title: "Xell (Rosuvastatin) & Cholesterol",
    summary: "Protecting Every Heart — lipids, atherosclerosis and the high-intensity statin.",
    body: `
      <figure><img src="assets/img/elantis/xell.jpg" alt="Xell brochure: Protecting Every Heart — AHA/ACC guideline-recommended, LDL-C reduction of 50% or more, proven CV protection, once daily" loading="lazy">
      <figcaption>Xell — "Tackling the Silent Risk, Protecting Every Heart"</figcaption></figure>

      <h3>Cholesterol and lipoproteins</h3>
      <p>Cholesterol is a waxy, fat-like substance found in every cell. The body needs it to build cell walls, insulate nerves,
      make bile, vitamin D and hormones (including sex hormones), and support immunity and tissue repair — and the liver
      makes all the cholesterol the body needs. Cholesterol travels in the blood inside <strong>lipoproteins</strong>:</p>
      <ul>
        <li><strong>LDL — "bad" cholesterol:</strong> high levels build up cholesterol in the arteries. LDL below 100 mg/dL is ideal; 100–129 close to ideal; 130–159 borderline high; 190 or higher very high.</li>
        <li><strong>HDL — "good" cholesterol:</strong> carries cholesterol back to the liver; higher is better. Below 40 mg/dL is a major risk; above 60 means lower risk.</li>
        <li><strong>Triglycerides:</strong> below 150 mg/dL normal; 150–199 mildly high; 200–499 high; 500 or more very high.</li>
      </ul>
      <p><strong>Primary hypercholesterolaemia</strong> is a genetic condition raising LDL. <strong>Mixed dyslipidaemia</strong> means raised LDL and
      triglycerides, often with low HDL.</p>

      <h3>Why it matters</h3>
      <p>High cholesterol usually has <strong>no symptoms</strong> — the "silent risk". Plaque (cholesterol, fat, calcium) builds up inside
      arteries — <strong>atherosclerosis</strong> — narrowing them and causing coronary artery disease, carotid and peripheral artery
      disease, chronic kidney disease and acute coronary syndrome (heart attack, unstable angina). Cardiovascular disease
      causes about one-third of deaths worldwide.</p>
      <ul>
        <li>Each <strong>1% fall in LDL-C</strong> reduces coronary heart disease (CHD) risk by about <strong>1%</strong>; each <strong>1% rise in HDL-C</strong> reduces it by about <strong>3%</strong>.</li>
        <li>A <strong>10%</strong> reduction in total cholesterol gives a <strong>15%</strong> fall in CHD deaths and 11% fall in total deaths. <strong>LDL-C is the primary target.</strong></li>
        <li>Modifiable risk factors: smoking, dyslipidaemia, raised BP, diabetes, obesity, diet, inactivity, excess alcohol. Non-modifiable: personal or family history of CHD, age, gender.</li>
      </ul>

      <h3>Mechanism of action</h3>
      <p>Statins are <strong>selective, competitive inhibitors of HMG-CoA reductase</strong> — the <strong>rate-limiting enzyme</strong> that converts
      HMG-CoA to mevalonate, an early step in the liver's cholesterol production. Less cholesterol is made in the liver, so liver
      cells put more <strong>LDL receptors</strong> on their surface and clear more LDL from the blood. Statins are the most effective class
      for lowering LDL: <strong>LDL ↓ 18–55%</strong>, <strong>HDL ↑ 5–15%</strong>, <strong>triglycerides ↓ 7–30%</strong>.</p>

      <h3>Why rosuvastatin?</h3>
      <table>
        <tr><th></th><th>Rosuvastatin</th><th>Atorvastatin</th><th>Simvastatin</th></tr>
        <tr><td>Enzyme potency (IC50, nM — lower is stronger)</td><td><strong>5.4</strong></td><td>8.2</td><td>11.2</td></tr>
        <tr><td>Metabolised by CYP3A4</td><td><strong>No</strong></td><td>Yes</td><td>Yes</td></tr>
        <tr><td>Half-life (hours)</td><td><strong>19</strong></td><td>14</td><td>1–2</td></tr>
      </table>
      <p>Rosuvastatin is <strong>hydrophilic</strong> and <strong>selective for the liver</strong>, with limited CYP450 metabolism and so
      <strong>minimal potential for drug interactions</strong>. It has been approved in 73 countries and used in over 5 million patients.</p>

      <h3>Xell — product profile</h3>
      <ul>
        <li><strong>Strengths:</strong> Xell-5, Xell-10, Xell-20 (rosuvastatin 5, 10, 20 mg), 1 × 10 tablets.</li>
        <li><strong>Pharmacokinetics:</strong> peak levels in <strong>3–5 hours</strong>; bioavailability ~<strong>20%</strong>; <strong>88%</strong> protein-bound; excreted mainly in the <strong>faeces (90%)</strong>; half-life ~<strong>19 hours</strong>.</li>
        <li><strong>Dosage:</strong> 5–40 mg once daily; usual <strong>starting dose 10 mg</strong>; consider a <strong>20 mg</strong> start for LDL-C &gt; 190 mg/dL or aggressive targets. Can be taken <strong>at any time of day, with or without food</strong>.</li>
        <li><strong>Indications:</strong> primary hypercholesterolaemia and mixed dyslipidaemia; raised triglycerides; homozygous familial hypercholesterolaemia (as an adjunct); slowing atherosclerosis; preventing major CV events in high-risk patients.</li>
        <li><strong>Contraindications:</strong> hypersensitivity; <strong>active liver disease</strong> or unexplained persistently raised transaminases; pregnancy and lactation.</li>
        <li><strong>Interactions:</strong> coumarin anticoagulants, gemfibrozil, antacids, niacin. <strong>Adverse effects:</strong> myopathy, raised liver enzymes.</li>
      </ul>

      <h3>Key detailing messages (Oct-26 brochure)</h3>
      <ul>
        <li><strong>AHA/ACC guideline-recommended therapy</strong> — first-line high-intensity statin for ASCVD and severe hypercholesterolaemia.</li>
        <li><strong>Potent LDL-C reduction</strong> — high-intensity rosuvastatin lowers LDL-C by <strong>≥ 50%</strong> to reach guideline targets.</li>
        <li><strong>Proven cardiovascular protection</strong> — significantly reduces heart attack, stroke and coronary revascularisation in high-risk patients.</li>
        <li><strong>Once-daily powerful control</strong> — sustained lipid lowering with convenient once-daily dosing.</li>
      </ul>
    `
  }
];

const questions = [
  /* ---- m1 Company & portfolio */
  { module: "m1", q: "In which year was Shaigan Pharmaceuticals established?",
    options: ["1983", "1993", "2003", "2013"], answer: 1 },
  { module: "m1", q: "Which division does the Elantis team belong to?",
    options: ["Dermatology Division", "Cardiometabolic Division", "Women's Health Division", "Anti-infective Division"], answer: 1 },
  { module: "m1", q: "What is the Cardiometabolic Division's tagline?",
    options: ["Together in Care, Committed to Better Outcomes", "Healthy Life, Healthy Stomach", "Ultimate Care", "Happy Tummy"], answer: 0 },
  { module: "m1", q: "Which brand's tagline is \"Protecting Every Heart\"?",
    options: ["Diasar", "Bivolol", "Xell", "Admit"], answer: 2 },
  { module: "m1", q: "Which brand's tagline is \"Dual Impact for Better Control\"?",
    options: ["Diasar", "Emdagan", "Dilgem", "Xell"], answer: 0 },
  { module: "m1", q: "Which brand's tagline is \"Together in Care\"?",
    options: ["Admit", "Bivolol", "Xell", "Diasar"], answer: 0 },
  { module: "m1", q: "Which brand's tagline is \"Bring Back to the Normal\"?",
    options: ["Dilgem", "Bivolol", "Emdagan", "Admit"], answer: 1 },
  { module: "m1", q: "Dilgem's tagline is…",
    options: ["Stronger Control", "Desired Balance in Diabetes Management", "Protecting Every Heart", "Dual Impact for Better Control"], answer: 1 },
  { module: "m1", q: "Which Elantis brand contains glimepiride?",
    options: ["Admit", "Emdagan", "Dilgem", "Diasar"], answer: 2 },
  { module: "m1", q: "Which pair of Elantis brands is used mainly for hypertension?",
    options: ["Admit and Emdagan", "Diasar and Bivolol", "Xell and Dilgem", "Emdagan and Xell"], answer: 1 },
  { module: "m1", q: "What are the strengths of Bivolol?",
    options: ["1, 2, 3, 4 mg", "2.5, 5, 10 mg", "5, 10, 20 mg", "10, 25 mg"], answer: 1 },
  { module: "m1", q: "What are the strengths of Xell?",
    options: ["5, 10, 20 mg", "2.5, 5, 10 mg", "10, 25 mg", "50, 100 mg"], answer: 0 },

  /* ---- m2 Diabetes */
  { module: "m2", q: "Which pancreatic cells produce insulin?",
    options: ["Alpha cells", "Beta cells", "Acinar cells", "Delta cells only"], answer: 1 },
  { module: "m2", q: "What does glucagon do?",
    options: ["Lowers blood glucose", "Raises blood glucose by breaking down liver glycogen", "Digests fat", "Blocks DPP-4"], answer: 1 },
  { module: "m2", q: "Type 1 diabetes is best described as…",
    options: ["Insulin resistance with some insulin production", "An autoimmune condition where the pancreas makes little or no insulin", "Diabetes only in pregnancy", "A side effect of statins"], answer: 1 },
  { module: "m2", q: "HbA1c reflects the average blood glucose over the past…",
    options: ["24 hours", "1 week", "2–3 months", "1 year"], answer: 2 },
  { module: "m2", q: "An HbA1c of what level or higher indicates diabetes?",
    options: ["5.0%", "5.7%", "6.5%", "9.0%"], answer: 2 },
  { module: "m2", q: "What is the usual HbA1c treatment goal for diabetics?",
    options: ["Below 5%", "Below 7%", "Below 10%", "Above 8%"], answer: 1 },
  { module: "m2", q: "The \"3 P's\" of diabetes are…",
    options: ["Polyuria, polydipsia, polyphagia", "Pain, pallor, pulselessness", "Pressure, pulse, perfusion", "Protein, potassium, phosphate"], answer: 0 },
  { module: "m2", q: "According to the Emdagan brochure, how many adults in Pakistan have diabetes?",
    options: ["3.3 million", "13.4 million", "33.4 million", "93 million"], answer: 2 },
  { module: "m2", q: "Which are the two main incretin hormones?",
    options: ["Insulin and glucagon", "GLP-1 and GIP", "Renin and angiotensin", "Cortisol and adrenaline"], answer: 1 },
  { module: "m2", q: "Which enzyme rapidly inactivates GLP-1 (within 1–2 minutes)?",
    options: ["HMG-CoA reductase", "DPP-4", "ACE", "Carbonic anhydrase"], answer: 1 },
  { module: "m2", q: "Which is NOT one of metformin's three mechanisms?",
    options: ["Reducing hepatic glucose production", "Increasing insulin sensitivity in muscle", "Delaying intestinal glucose absorption", "Forcing the pancreas to release insulin"], answer: 3 },
  { module: "m2", q: "About what share of post-meal insulin release is due to incretins?",
    options: ["5–10%", "20–30%", "70–80%", "100%"], answer: 2 },

  /* ---- m3 Heart, kidneys, BP */
  { module: "m3", q: "How many chambers does the heart have?",
    options: ["Two", "Three", "Four", "Six"], answer: 2 },
  { module: "m3", q: "A normal left-ventricular ejection fraction is…",
    options: ["10–20%", "30–40%", "50–70%", "90–100%"], answer: 2 },
  { module: "m3", q: "HFrEF stands for heart failure with…",
    options: ["Raised ejection fraction", "Reduced ejection fraction", "Renal ejection failure", "Rapid early filling"], answer: 1 },
  { module: "m3", q: "What is the basic structural and functional unit of the kidney?",
    options: ["Neuron", "Nephron", "Alveolus", "Hepatocyte"], answer: 1 },
  { module: "m3", q: "Which hormone made by the kidney stimulates red-blood-cell production?",
    options: ["Insulin", "Erythropoietin", "Aldosterone", "Glucagon"], answer: 1 },
  { module: "m3", q: "Normal blood pressure is below…",
    options: ["100/60", "120/80", "140/90", "160/100"], answer: 1 },
  { module: "m3", q: "Why is hypertension called \"the silent killer\"?",
    options: ["It only occurs at night", "It often causes no symptoms for years", "It cannot be measured", "It only affects the elderly"], answer: 1 },
  { module: "m3", q: "Angiotensin II acting on AT1 receptors causes…",
    options: ["Vasodilation and lower BP", "Vasoconstriction, aldosterone release and sympathetic activation", "Insulin release", "Glucose excretion"], answer: 1 },
  { module: "m3", q: "How many hypertensive patients need multiple drugs to reach their BP goal?",
    options: ["1 out of 10", "3 out of 10", "8 out of 10", "All"], answer: 2 },
  { module: "m3", q: "A 5 mmHg fall in systolic BP reduces stroke by about…",
    options: ["1%", "5%", "14%", "50%"], answer: 2 },
  { module: "m3", q: "Under JNC-8, the BP goal for patients with diabetes or CKD is below…",
    options: ["120/80", "130/85", "140/90", "160/100"], answer: 2 },
  { module: "m3", q: "Which enzyme released by the kidney starts the RAAS cascade?",
    options: ["Renin", "Pepsin", "Lipase", "DPP-4"], answer: 0 },

  /* ---- m4 Admit */
  { module: "m4", q: "Sitagliptin belongs to which class?",
    options: ["SGLT2 inhibitor", "DPP-4 inhibitor", "Sulfonylurea", "Statin"], answer: 1 },
  { module: "m4", q: "What strengths of Admit are available?",
    options: ["25 mg and 100 mg", "50 mg, 50/500 mg and 50/1000 mg", "10 mg and 25 mg", "1, 2, 3, 4 mg"], answer: 1 },
  { module: "m4", q: "The Admit combination dose in the Oct-26 brochure is…",
    options: ["1 tablet once weekly", "1 tablet twice daily with meals", "2 tablets at bedtime", "1 tablet every 8 hours fasting"], answer: 1 },
  { module: "m4", q: "What is the usual recommended daily dose of sitagliptin?",
    options: ["25 mg", "50 mg", "100 mg", "500 mg"], answer: 2 },
  { module: "m4", q: "In moderate renal impairment (CrCl 30 to <50 mL/min), sitagliptin should be given at…",
    options: ["100 mg once daily", "50 mg once daily", "25 mg once daily", "It is contraindicated"], answer: 1 },
  { module: "m4", q: "Hypoglycaemia with sitagliptin vs placebo was…",
    options: ["1.2% vs 0.9% — similar", "20% vs 1%", "50% vs 10%", "Never studied"], answer: 0 },
  { module: "m4", q: "Which trial supports Admit's established cardiovascular safety?",
    options: ["TECOS", "EMPA-KIDNEY", "JUPITER", "UKPDS"], answer: 0 },
  { module: "m4", q: "Which core defect of type 2 diabetes does metformin mainly address in Admit?",
    options: ["β-cell dysfunction", "Insulin resistance", "Low incretin release", "Kidney glucose reabsorption"], answer: 1 },
  { module: "m4", q: "How does sitagliptin reduce hepatic glucose overproduction?",
    options: ["By suppressing glucagon from alpha cells", "By blocking SGLT2", "By closing K-ATP channels", "By inhibiting HMG-CoA reductase"], answer: 0 },
  { module: "m4", q: "What is the effect of Admit on body weight?",
    options: ["Causes weight gain", "Weight-neutral", "Causes severe weight loss", "Causes fluid retention"], answer: 1 },
  { module: "m4", q: "What is the bioavailability of sitagliptin?",
    options: ["~20%", "~50%", "~87%", "100%"], answer: 2 },
  { module: "m4", q: "Admit should NOT be used for…",
    options: ["Type 2 diabetes", "Type 1 diabetes or diabetic ketoacidosis", "Patients on metformin", "Elderly patients"], answer: 1 },

  /* ---- m5 Emdagan */
  { module: "m5", q: "Empagliflozin inhibits which transporter?",
    options: ["SGLT2 in the proximal tubule", "DPP-4", "The proton pump", "The AT1 receptor"], answer: 0 },
  { module: "m5", q: "About what share of filtered glucose is reabsorbed by SGLT2?",
    options: ["10%", "50%", "90%", "100%"], answer: 2 },
  { module: "m5", q: "How does Emdagan lower blood glucose?",
    options: ["By increasing insulin release", "By increasing glucose excretion in the urine", "By slowing gastric emptying", "By blocking glucagon receptors"], answer: 1 },
  { module: "m5", q: "What are the Emdagan Plus strengths?",
    options: ["5/500 and 5/1000 mg", "12.5/500 and 12.5/1000 mg", "50/500 and 50/1000 mg", "25/850 mg"], answer: 1 },
  { module: "m5", q: "What is the half-life of empagliflozin?",
    options: ["1.5 hours", "6 hours", "12.4 hours", "48 hours"], answer: 2 },
  { module: "m5", q: "Which trial supports Emdagan's renal protection message?",
    options: ["TECOS", "EMPA-KIDNEY", "JNC-8", "ALLHAT"], answer: 1 },
  { module: "m5", q: "Besides lowering glucose, SGLT2 inhibition also…",
    options: ["Causes weight gain", "Aids weight loss and lowers blood pressure", "Raises LDL", "Raises heart rate"], answer: 1 },
  { module: "m5", q: "What is the recommended empagliflozin dose for heart failure with diabetes?",
    options: ["5 mg", "10 mg", "25 mg", "50 mg"], answer: 2 },
  { module: "m5", q: "What is the protein binding of empagliflozin?",
    options: ["20%", "48%", "86.2%", "99%"], answer: 2 },
  { module: "m5", q: "Which is one of Emdagan's five brochure benefits?",
    options: ["Proven renal protection", "Antibacterial action", "Acid suppression", "Bronchodilation"], answer: 0 },
  { module: "m5", q: "What is Emdagan's positioning line?",
    options: ["Powerful Combination. Proven Benefits. Better Outcomes.", "For Effective Glycemic Control with Confidence", "Powerful Combination for Superior BP Control", "The Indispensable"], answer: 0 },

  /* ---- m6 Dilgem */
  { module: "m6", q: "Glimepiride belongs to which class?",
    options: ["DPP-4 inhibitor", "Sulfonylurea", "Biguanide", "SGLT2 inhibitor"], answer: 1 },
  { module: "m6", q: "What strengths of Dilgem are available?",
    options: ["1, 2, 3 and 4 mg", "5, 10 and 20 mg", "2.5, 5 and 10 mg", "50 and 100 mg"], answer: 0 },
  { module: "m6", q: "Sulfonylureas bind to which channel on β-cells?",
    options: ["ATP-sensitive potassium (K-ATP) channel", "Sodium-glucose co-transporter", "L-type calcium channel in arteries", "Chloride channel"], answer: 0 },
  { module: "m6", q: "Closing the K-ATP channel leads to…",
    options: ["Hyperpolarisation and less insulin", "Depolarisation, calcium entry and insulin release", "Glucose excretion in urine", "Glucagon release"], answer: 1 },
  { module: "m6", q: "Which ion's rise inside the β-cell directly triggers insulin release?",
    options: ["Sodium", "Calcium", "Chloride", "Hydrogen"], answer: 1 },
  { module: "m6", q: "Dilgem is indicated for…",
    options: ["Hyperglycaemia in type 2 diabetes", "Type 1 diabetes alone", "Hypertension", "High cholesterol"], answer: 0 },
  { module: "m6", q: "Glimepiride can be given…",
    options: ["Only as monotherapy", "As monotherapy, with other oral anti-diabetics, or with insulin", "Only with insulin", "Only by injection"], answer: 1 },
  { module: "m6", q: "What is the key side effect to discuss with sulfonylureas?",
    options: ["Hypoglycaemia", "Cough", "Ankle oedema", "Hyperkalaemia"], answer: 0 },
  { module: "m6", q: "Sulfonylureas work only if…",
    options: ["The kidneys are failing", "β-cells can still produce insulin", "The patient also takes insulin", "Blood pressure is high"], answer: 1 },
  { module: "m6", q: "Which receptor subunit of the K-ATP channel do sulfonylureas bind?",
    options: ["SUR1", "AT1", "β1", "GLP-1R"], answer: 0 },

  /* ---- m7 Diasar */
  { module: "m7", q: "Diasar combines…",
    options: ["Amlodipine + valsartan", "Nebivolol + amlodipine", "Valsartan + hydrochlorothiazide", "Sitagliptin + metformin"], answer: 0 },
  { module: "m7", q: "What is the recommended starting dose of Diasar?",
    options: ["5/80 mg once daily", "10/160 mg twice daily", "5/160 mg twice daily", "10/320 mg once daily"], answer: 0 },
  { module: "m7", q: "What share of hypertensive patients achieve BP goal with Diasar (Oct-26 brochure)?",
    options: ["50%", "75%", "91.5%", "100%"], answer: 2 },
  { module: "m7", q: "Diasar reduces amlodipine-induced ankle oedema by up to…",
    options: ["10%", "25%", "75%", "100%"], answer: 2 },
  { module: "m7", q: "Valsartan works by…",
    options: ["Blocking angiotensin II at the AT1 receptor", "Blocking L-type calcium channels", "Inhibiting ACE", "Blocking β1 receptors"], answer: 0 },
  { module: "m7", q: "Dihydropyridine CCBs can be recognised by the suffix…",
    options: ["-olol", "-sartan", "-dipine", "-gliptin"], answer: 2 },
  { module: "m7", q: "Which is a non-dihydropyridine CCB?",
    options: ["Amlodipine", "Nifedipine", "Verapamil", "Felodipine"], answer: 2 },
  { module: "m7", q: "What is the elimination half-life of amlodipine?",
    options: ["2–4 hours", "12 hours", "30–50 hours", "7 days"], answer: 2 },
  { module: "m7", q: "Which ARB side effect results from reduced aldosterone?",
    options: ["Hypokalaemia", "Hyperkalaemia", "Hypoglycaemia", "Bradycardia"], answer: 1 },
  { module: "m7", q: "Diasar is indicated when…",
    options: ["BP is inadequately controlled on monotherapy, or as initial therapy when more than one drug is likely to be needed", "Only for type 2 diabetes", "Only after a heart attack", "Only in children"], answer: 0 },
  { module: "m7", q: "Diasar 10/160 mg is used for…",
    options: ["Starting therapy in all patients", "Uncontrolled BP", "Hypotension", "Heart rate control"], answer: 1 },
  { module: "m7", q: "What is the absolute bioavailability of valsartan?",
    options: ["About 25%", "About 64%", "About 87%", "100%"], answer: 0 },

  /* ---- m8 Bivolol */
  { module: "m8", q: "Nebivolol is a beta-blocker of which generation?",
    options: ["First (non-selective)", "Second (β1-selective only)", "Third (vasodilatory)", "It is not a beta-blocker"], answer: 2 },
  { module: "m8", q: "Nebivolol's vasodilating effect comes from…",
    options: ["β3 agonism increasing nitric oxide", "Calcium channel blockade", "ACE inhibition", "Diuretic action"], answer: 0 },
  { module: "m8", q: "What is the usual Bivolol dose for hypertension?",
    options: ["2.5 mg twice daily", "5 mg once daily", "10 mg three times daily", "20 mg once daily"], answer: 1 },
  { module: "m8", q: "What dose of Bivolol is recommended for elderly patients or those with renal dysfunction?",
    options: ["2.5 mg once daily", "5 mg twice daily", "10 mg once daily", "Contraindicated"], answer: 0 },
  { module: "m8", q: "What is the maximum daily nebivolol dose in congestive heart failure?",
    options: ["5 mg", "10 mg", "20 mg", "40 mg"], answer: 1 },
  { module: "m8", q: "Which is a contraindication to nebivolol?",
    options: ["Bradycardia", "Hypertension", "Angina", "Migraine"], answer: 0 },
  { module: "m8", q: "What is the protein binding of nebivolol?",
    options: ["48%", "75%", "88%", "98%"], answer: 3 },
  { module: "m8", q: "Does food affect the pharmacokinetics of nebivolol?",
    options: ["Yes — it must be taken fasting", "No", "Yes — it must be taken with fatty food", "Only at night"], answer: 1 },
  { module: "m8", q: "Which of these is a second-generation (β1-selective) beta-blocker?",
    options: ["Propranolol", "Bisoprolol", "Carvedilol", "Nebivolol"], answer: 1 },
  { module: "m8", q: "The d-nebivolol half-life in extensive CYP2D6 metabolisers is about…",
    options: ["2 hours", "12 hours", "48 hours", "7 days"], answer: 1 },
  { module: "m8", q: "Which is NOT an indication listed for Bivolol?",
    options: ["Hypertension", "Angina", "Migraine prevention", "Type 1 diabetes"], answer: 3 },

  /* ---- m9 Xell */
  { module: "m9", q: "Rosuvastatin inhibits which enzyme?",
    options: ["HMG-CoA reductase", "DPP-4", "ACE", "Cyclo-oxygenase"], answer: 0 },
  { module: "m9", q: "Which is called the \"bad\" cholesterol?",
    options: ["HDL", "LDL", "Triglycerides", "Apoprotein A"], answer: 1 },
  { module: "m9", q: "An HDL level below what value is a major risk?",
    options: ["40 mg/dL", "60 mg/dL", "100 mg/dL", "150 mg/dL"], answer: 0 },
  { module: "m9", q: "A 1% increase in HDL-C reduces coronary heart disease risk by about…",
    options: ["1%", "3%", "10%", "30%"], answer: 1 },
  { module: "m9", q: "By how much does high-intensity rosuvastatin lower LDL-C (Oct-26 brochure)?",
    options: ["≥ 10%", "≥ 25%", "≥ 50%", "≥ 90%"], answer: 2 },
  { module: "m9", q: "What is the usual starting dose of Xell?",
    options: ["5 mg", "10 mg", "40 mg", "80 mg"], answer: 1 },
  { module: "m9", q: "When should Xell be taken?",
    options: ["Only at bedtime", "Any time of day, with or without food", "Only before breakfast fasting", "Twice daily with meals"], answer: 1 },
  { module: "m9", q: "Unlike atorvastatin and simvastatin, rosuvastatin is…",
    options: ["Not metabolised by CYP3A4", "Short-acting (1–2 h half-life)", "Taken by injection", "Excreted only in urine"], answer: 0 },
  { module: "m9", q: "What is the half-life of rosuvastatin?",
    options: ["1–2 hours", "About 19 hours", "About 72 hours", "About 7 days"], answer: 1 },
  { module: "m9", q: "Which is a contraindication to Xell?",
    options: ["Active liver disease", "Diabetes", "Hypertension", "Age over 60"], answer: 0 },
  { module: "m9", q: "Rosuvastatin is excreted mainly in the…",
    options: ["Urine (90%)", "Faeces (90%)", "Breath", "Sweat"], answer: 1 },
  { module: "m9", q: "What are the Xell strengths?",
    options: ["5, 10 and 20 mg", "10, 20 and 80 mg", "2.5 and 5 mg", "40 mg only"], answer: 0 },
  { module: "m9", q: "Plaque building up inside arteries is called…",
    options: ["Atherosclerosis", "Arrhythmia", "Anaemia", "Angioedema"], answer: 0 }
];

window.K1Content.register("Elantis", { modules, questions });
})();
