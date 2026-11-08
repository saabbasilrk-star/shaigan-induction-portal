/* ==========================================================================
   Medix team — induction modules and quiz bank
   --------------------------------------------------------------------------
   Source: "Induction Training Product Presentations\Medix"
   (Artho.pptx, 1. Artho - MoA.pptx, 2. Famot.pptx, FAMOT REFRESHER-26.pptx,
   Famot I.V Training Slides.pptx, 3. Pegalin.pptx, Shaigans_Laxa-P.pptx,
   Medix * MoA decks) and the latest literature available in
   "1. Shaigan Pharma\Literatures" (Artho Q1-2023, Famot "Gold Standard",
   Pegalin Q1-2023) — themes, slogans and claims follow that literature.

   Portfolio: Artho 50 / Artho Plus, Famot, Pegalin, Laxa-P.

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
    title: "Welcome & the Medix Portfolio",
    summary: "The four Medix brands, their themes and how they fit together.",
    body: `
      <p>Welcome to the <strong>Medix</strong> team of <strong>Shaigan Pharmaceuticals</strong>. As a First Line Manager you will
      coach your Territory Managers on these brands every day, so you need to know each one thoroughly — composition,
      mechanism, indications, dosing and the message on its current literature.</p>

      <h3>The Medix portfolio</h3>
      <table>
        <tr><th>Brand</th><th>Composition</th><th>Forms / strengths</th><th>Theme</th></tr>
        <tr><td><strong>Artho 50</strong> / <strong>Artho Plus</strong></td><td>Diclofenac sodium 50 / 75 mg + Misoprostol 200 mcg</td><td>Tablets, 2 × 10</td><td><em>Relief with Innovation</em> — Advance Repetab Technology</td></tr>
        <tr><td><strong>Famot</strong></td><td>Famotidine (H2-receptor antagonist)</td><td>20 mg &amp; 40 mg tablets; 10 mg/5 ml suspension; 40 mg/5 ml dry suspension; 40 mg/4 ml I.V.</td><td><em>The Gold Standard</em></td></tr>
        <tr><td><strong>Pegalin</strong></td><td>Pregabalin</td><td>50, 75, 100, 150, 300 mg capsules</td><td><em>Treat Deep</em></td></tr>
        <tr><td><strong>Laxa-P</strong></td><td>Prunus (prune) juice extract — natural sorbitol + fibre</td><td>Syrup</td><td><em>Natural Laxative for Gut &amp; Intestinal Health</em></td></tr>
      </table>

      <h3>How the brands fit together</h3>
      <ul>
        <li><strong>Pain:</strong> <strong>Artho</strong> treats inflammatory and musculoskeletal pain with built-in stomach protection;
          <strong>Pegalin</strong> treats nerve (neuropathic) pain that ordinary painkillers don't reach. Orthopaedic surgeons,
          physicians, neurologists, diabetologists and GPs see both.</li>
        <li><strong>Gut:</strong> <strong>Famot</strong> controls stomach acid (heartburn, dyspepsia, ulcers, GERD, and in hospital via I.V.);
          <strong>Laxa-P</strong> gently relieves constipation. Gastroenterologists, physicians, surgeons, gynaecologists,
          paediatricians and GPs are key customers.</li>
        <li>Famot is also a natural partner for patients taking NSAIDs — it is "a preferred choice in NSAID-induced acidity".</li>
      </ul>

      <h3>How this induction works</h3>
      <p>Modules 2 and 3 cover the science (pain, prostaglandins and NSAIDs; the digestive system and stomach acid).
      Modules 4–7 cover each brand. Modules open one at a time — finish each module and its quiz to unlock the next.</p>
    `
  },

  /* ------------------------------------------------------------------ 2 */
  {
    id: "m2",
    title: "Science Background: Pain, Prostaglandins & NSAIDs",
    summary: "What prostaglandins do, how NSAIDs work and why they harm the stomach.",
    body: `
      <h3>Prostaglandins — good and bad</h3>
      <p>When tissue is injured, <strong>arachidonic acid</strong> is released from cell membranes and converted by the enzyme
      <strong>cyclo-oxygenase (COX)</strong> into <strong>prostaglandins</strong>. They have several jobs:</p>
      <ul>
        <li><strong>In the stomach</strong> they regulate acid production and maintain the <strong>mucus lining</strong> that stops the stomach from digesting itself.</li>
        <li><strong>In platelets</strong> they help platelets stick together to start <strong>blood clotting</strong> in wounds.</li>
        <li><strong>At injured tissue</strong> they are released by the immune system and cause <strong>pain and inflammation</strong>.</li>
        <li><strong>In the hypothalamus</strong> (the brain's temperature centre) they raise body temperature — <strong>fever</strong>.</li>
      </ul>

      <h3>COX-1 and COX-2</h3>
      <table>
        <tr><th>COX-1 → "protective" prostaglandins</th><th>COX-2 → "inflammatory" prostaglandins</th></tr>
        <tr><td>Stomach protection; blood clotting on injury; kidney blood flow</td><td>Pain, inflammation and fever</td></tr>
      </table>

      <h3>How NSAIDs work — and their problem</h3>
      <p>NSAIDs such as <strong>diclofenac</strong> block <strong>both COX enzymes</strong>, reducing prostaglandins throughout the body. This
      relieves <strong>pain, inflammation and fever</strong>. But because the prostaglandins that <strong>protect the stomach</strong> and support
      <strong>platelets</strong> are also reduced, NSAIDs can cause <strong>upset stomach, ulcers and bleeding</strong>.
      "NSAIDs cause gastrointestinal complications" is the problem Artho is designed to solve.</p>

      <h3>The solution: replace the protection</h3>
      <p>Adding a <strong>synthetic prostaglandin</strong> — <strong>misoprostol</strong> — to the NSAID gives back the stomach protection the
      NSAID takes away, while the NSAID still relieves pain. That is the idea behind <strong>Artho</strong>.</p>

      <h3>Painful conditions you will detail for</h3>
      <ul>
        <li><strong>Osteoarthritis</strong> — degenerative wear of joint cartilage, usually after 40, weight-bearing joints.</li>
        <li><strong>Rheumatoid arthritis</strong> — autoimmune, symmetrical inflammation starting in small joints.</li>
        <li><strong>Ankylosing spondylitis</strong> — inflammatory arthritis of the spine.</li>
        <li><strong>Low back pain</strong>, neck/shoulder pain, <strong>emergency/trauma</strong> and post-operative pain, dysmenorrhoea.</li>
        <li><strong>Acute pain</strong> lasts less than 3 months; <strong>chronic pain</strong> more than 3 months.</li>
      </ul>
    `
  },

  /* ------------------------------------------------------------------ 3 */
  {
    id: "m3",
    title: "Science Background: Digestive System & Stomach Acid",
    summary: "The GI tract, histamine and acid, and the acid disorders Famot treats.",
    body: `
      <h3>The digestive system</h3>
      <p>The digestive system is a group of organs that converts food into energy and nutrients. Food passes along the
      <strong>alimentary canal (GI tract)</strong>:</p>
      <ul>
        <li><strong>Mouth</strong> — chewing (mechanical digestion) and saliva (chemical digestion).</li>
        <li><strong>Oesophagus</strong> — a muscular tube that pushes food to the stomach by waves of contraction called <strong>peristalsis</strong>.</li>
        <li><strong>Stomach</strong> — thick muscular walls mash food into <strong>chyme</strong>; its lining makes strong digestive juices (acid and pepsin).</li>
        <li><strong>Small intestine</strong> — nutrients are absorbed into the blood.</li>
        <li><strong>Large intestine</strong> — absorbs water and electrolytes and forms stool; the <strong>rectum</strong> stores stool until evacuation.</li>
        <li><strong>Accessory organs:</strong> salivary glands, <strong>liver</strong> (stores and releases nutrients), <strong>gall bladder</strong> (bile) and <strong>pancreas</strong> (digestive enzymes).</li>
      </ul>

      <h3>Histamine and acid</h3>
      <p>Histamine is a potent mediator released from mast cells. It acts on two receptor types:</p>
      <ul>
        <li><strong>H1 receptors</strong> — stimulate mucous membranes (nasal, salivary) and sensory nerve endings, and dilate capillaries.</li>
        <li><strong>H2 receptors</strong> — on the <strong>parietal cells</strong> of the stomach; stimulating them <strong>increases gastric acid (HCl)</strong> secretion.</li>
      </ul>
      <p>Blocking H2 receptors therefore reduces acid — this is how <strong>H2-receptor antagonists (H2RAs)</strong> such as famotidine work.</p>

      <h3>Acid-related disorders</h3>
      <ul>
        <li><strong>Peptic ulcer</strong> — a lesion in the lining of the stomach or upper small intestine caused by acid and pepsin. Symptoms: abdominal discomfort, stomach pain, nausea, loss of appetite. Causes: <strong>Helicobacter pylori</strong>, <strong>NSAIDs</strong>, improper diet.</li>
        <li><strong>GERD</strong> (gastro-oesophageal reflux disease) — failure of the <strong>lower oesophageal sphincter</strong>; heartburn, acid reflux, chest pain. Obesity is a risk factor.</li>
        <li><strong>Dyspepsia</strong> — indigestion: belly pain, fullness, nausea, gas.</li>
        <li><strong>Duodenal ulcer</strong> — ulcer in the first part of the small intestine.</li>
        <li><strong>Zollinger-Ellison syndrome</strong> — tumours (gastrinomas) in the pancreas or duodenum release large amounts of <strong>gastrin</strong>, causing very high acid production.</li>
      </ul>

      <h3>Antacids vs acid suppressants</h3>
      <p>Antacids only neutralise acid already made and act briefly. They also have side effects: <strong>magnesium</strong> brands may
      cause diarrhoea, <strong>calcium or aluminium</strong> brands constipation; calcium brands rarely cause kidney stones; large amounts of
      aluminium antacids risk calcium loss and weak bones (osteoporosis). Acid suppressants such as Famot reduce the acid the
      stomach makes, for much longer.</p>
    `
  },

  /* ------------------------------------------------------------------ 4 */
  {
    id: "m4",
    title: "Artho 50 & Artho Plus (Diclofenac + Misoprostol)",
    summary: "Relief with Innovation — NSAID pain relief with built-in stomach protection.",
    body: `
      <figure><img src="assets/img/medix/artho-indications.jpg" alt="Artho literature: Artho 50 and Artho Plus — indicated in osteoarthritis, rheumatoid arthritis, emergency/trauma, low back pain and ankylosing spondylitis" loading="lazy">
      <figcaption>Artho 50 / Artho Plus — indicated in painful conditions</figcaption></figure>

      <h3>Composition</h3>
      <ul>
        <li><strong>Artho 50</strong> — diclofenac sodium 50 mg + misoprostol 200 mcg</li>
        <li><strong>Artho Plus</strong> — diclofenac sodium 75 mg + misoprostol 200 mcg</li>
      </ul>
      <p>Packs of 2 × 10 tablets. Category: analgesic. Theme: <em>"Relief with Innovation."</em></p>

      <h3>Advance Repetab Technology — right ingredient at the right place</h3>
      <p>Each Artho tablet has an <strong>enteric-coated diclofenac core</strong> with <strong>misoprostol</strong> around it, giving
      <strong>sequential release</strong>: misoprostol acts first to protect the GI mucosa, while diclofenac is released past the stomach for
      pain management.</p>

      <h3>Mechanism of action</h3>
      <ul>
        <li><strong>Diclofenac</strong> (NSAID) blocks COX-1 and COX-2, reducing prostaglandins — so <strong>inflammation, pain and fever</strong> are reduced.</li>
        <li><strong>Misoprostol</strong> is a synthetic analogue of <strong>prostaglandin E1</strong>. It replaces the protection the NSAID removes:
          <ul>
            <li>increases gastric <strong>mucus</strong> production</li>
            <li>reduces gastric <strong>acid</strong> (binds prostaglandin receptors on parietal cells, lowering proton-pump activity)</li>
            <li>increases <strong>mucosal blood flow</strong></li>
            <li>increases <strong>duodenal bicarbonate</strong> secretion</li>
          </ul>
        </li>
      </ul>

      <h3>Indications &amp; dosage</h3>
      <p><strong>Osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, low back pain, emergency/trauma</strong> (current
      literature); also neck/shoulder pain, post-operative pain, dysmenorrhoea, headaches and fibromyalgia (training deck).
      <strong>Dose: twice or three times daily depending on the severity of pain.</strong></p>

      <h3>Pharmacokinetics</h3>
      <table>
        <tr><th></th><th>Diclofenac</th><th>Misoprostol</th></tr>
        <tr><td>T-max</td><td>1–4 h</td><td>20 min</td></tr>
        <tr><td>Half-life</td><td>2 h</td><td>30 min</td></tr>
        <tr><td>Bioavailability</td><td>65%</td><td>54%</td></tr>
        <tr><td>Protein binding</td><td>99.5%</td><td>90%</td></tr>
      </table>
      <p>Excretion: 65% urine, 35% bile.</p>

      <h3>Safety</h3>
      <ul>
        <li><strong>Contra-indicated in pregnancy</strong>; caution in breastfeeding.</li>
        <li>Side effects: GI ulcers, diarrhoea, nausea, dyspepsia, flatulence, post-menopausal vaginal bleeding.</li>
        <li>No dose adjustment in hepatic impairment; use a <strong>low dose in renal impairment</strong>.</li>
      </ul>

      <h3>Evidence (current literature)</h3>
      <figure><img src="assets/img/medix/artho-evidence.jpg" alt="Artho literature: Relief with Innovation — misoprostol reduced serious NSAID-induced upper GI complications by 40%; NSAID plus misoprostol lowers risk of heart attack 44%, acute kidney failure 34%, stroke 25%" loading="lazy">
      <figcaption>Artho — "Relief with Innovation"</figcaption></figure>
      <ul>
        <li>Misoprostol <strong>reduced serious NSAID-induced upper GI complications by 40%</strong>.</li>
        <li>NSAID plus misoprostol significantly reduces risk: <strong>44% lower risk of heart attack</strong>, <strong>34% lower risk of acute kidney failure</strong>, <strong>25% lower risk of stroke</strong> (American College of Cardiology).</li>
      </ul>
    `
  },

  /* ------------------------------------------------------------------ 5 */
  {
    id: "m5",
    title: "Famot (Famotidine) — Oral & I.V.",
    summary: "The Gold Standard — longer and stronger acid suppression.",
    body: `
      <figure><img src="assets/img/medix/famot-claims.jpg" alt="Famot literature: The Gold Standard — longer and superior acid suppression than antacids, relieves and prevents heartburn, preferred choice in NSAID-induced acidity, longer acid control in GERD with PPIs; complete range" loading="lazy">
      <figcaption>Famot — "The Gold Standard"</figcaption></figure>

      <h3>The complete Famot range</h3>
      <p><strong>Famot 20 mg</strong> and <strong>Famot 40 mg</strong> tablets, <strong>10 mg/5 ml suspension</strong>, <strong>40 mg/5 ml dry suspension</strong>
      and <strong>40 mg/4 ml I.V. injection</strong>. Theme: <em>"The Gold Standard."</em> Positioning: <em>"When acid becomes a problem,
      your patient suffers from heartburn &amp; dyspepsia."</em></p>

      <h3>H2-receptor antagonists</h3>
      <table>
        <tr><th>Generation</th><th>Molecule</th></tr>
        <tr><td>First</td><td>Cimetidine</td></tr>
        <tr><td>Second</td><td>Ranitidine</td></tr>
        <tr><td><strong>Third</strong></td><td><strong>Famotidine</strong></td></tr>
      </table>

      <h3>Mechanism of action</h3>
      <p>Famotidine is a <strong>specific, competitive H2-receptor antagonist</strong> on the parietal cells. By blocking histamine at the base
      of the parietal cell it reduces hydrogen-ion production, cutting <strong>HCl production by up to 60%</strong> and inhibiting gastric juice,
      including acid and pepsin. Famotidine is <strong>20–50 times more potent than cimetidine</strong> and <strong>3–20 times more potent than
      ranitidine</strong>, with about <strong>30% longer duration of action than ranitidine</strong>.</p>

      <h3>Pharmacokinetics</h3>
      <table>
        <tr><th></th><th>Cimetidine</th><th>Ranitidine</th><th>Famotidine</th></tr>
        <tr><td>Bioavailability</td><td>60–70%</td><td>50%</td><td>40–50%</td></tr>
        <tr><td>Half-life</td><td>2 h</td><td>2.5–3 h</td><td>3 h</td></tr>
        <tr><td>Peak level</td><td>45–90 min</td><td>2–3 h</td><td>1–3 h</td></tr>
        <tr><td>Acid suppression in 24 h</td><td>60%</td><td>70%</td><td>70%</td></tr>
      </table>
      <p>Famotidine is rapidly absorbed, and <strong>food does not affect</strong> its bioavailability. Protein binding is low (15–20%);
      metabolised in the liver; excreted mainly in urine (65–70%).</p>

      <h3>Oral dosage</h3>
      <table>
        <tr><th>Indication</th><th>Dose</th><th>Duration</th><th>Maintenance</th></tr>
        <tr><td>Duodenal ulcer</td><td>40 mg once daily</td><td>4 weeks</td><td>20 mg once daily</td></tr>
        <tr><td>Gastric ulcer</td><td>40 mg once daily</td><td>4–8 weeks</td><td>20 mg once daily</td></tr>
        <tr><td>GERD</td><td>20/40 mg twice daily</td><td>4–8 weeks</td><td>20 mg once daily</td></tr>
        <tr><td>Heartburn &amp; dyspepsia</td><td>20 mg once daily</td><td>4 weeks</td><td>20 mg once daily</td></tr>
      </table>

      <h3>Famot I.V.</h3>
      <ul>
        <li>For <strong>hospitalised patients</strong> with pathological hypersecretory conditions (e.g. Zollinger-Ellison syndrome) or intractable ulcers, and for patients who <strong>cannot take oral medication</strong>.</li>
        <li><strong>Dose: 20 mg every 12 hours</strong>; switch to oral as soon as the acute situation is controlled.</li>
        <li>Useful before prolonged surgery, caesarean section and in obese patients, who are at risk of gastric regurgitation and <strong>aspiration pneumonia</strong> — raising gastric pH and reducing gastric volume.</li>
        <li>Storage: <strong>2–8 °C</strong>, protect from light, do not freeze. Diluted solutions should be used within 24 hours. Compatible with water for injection, 0.9% saline, 5%/10% dextrose, lactated Ringer's and 5% sodium bicarbonate.</li>
      </ul>

      <h3>Safety &amp; special populations</h3>
      <ul>
        <li>Contra-indication: hypersensitivity to famotidine.</li>
        <li><strong>No significant drug interactions</strong> — it does not interfere with the cytochrome P450 system (warfarin, theophylline, phenytoin, diazepam were tested).</li>
        <li>Pregnancy <strong>category B</strong>. Famotidine is secreted in breast milk — stop the drug or stop nursing.</li>
        <li>Moderate/severe renal insufficiency: <strong>halve the dose or prolong the interval to 36–48 hours</strong>.</li>
        <li>Exclude gastric malignancy before treating a gastric ulcer.</li>
      </ul>

      <h3>Famot key messages (current literature)</h3>
      <figure><img src="assets/img/medix/famot-quality.jpg" alt="Famot literature: 9 hours of acid suppression vs 1 hour for antacids; antacid side effects; European pre-mixed excipients, high-tech manufacturing, disintegration under 30 minutes, tested by ISO 17025 accredited lab" loading="lazy">
      <figcaption>Famot — longer acid suppression and quality manufacturing</figcaption></figure>
      <ul>
        <li><strong>Longer &amp; superior acid suppression than conventional antacids</strong> — about <strong>9 hours vs 1 hour</strong>.</li>
        <li><strong>Relieves &amp; prevents heartburn</strong> associated with acid indigestion and sour stomach.</li>
        <li><strong>A preferred choice in NSAID-induced acidity.</strong></li>
        <li><strong>Longer acid control in GERD patients along with PPIs.</strong></li>
        <li><strong>The best material with quality manufacturing:</strong> European pre-mixed excipients, high-tech manufacturing, disintegration time under 30 minutes, tested by an <strong>ISO 17025</strong> accredited lab.</li>
        <li>Small tablet — easy to swallow; fast action; safe in pregnancy (category B).</li>
      </ul>
    `
  },

  /* ------------------------------------------------------------------ 6 */
  {
    id: "m6",
    title: "Pegalin (Pregabalin)",
    summary: "Treat Deep — first-line treatment for neuropathic pain.",
    body: `
      <figure><img src="assets/img/medix/pegalin-claims.jpg" alt="Pegalin literature: Treat Deep — 2-4 times more potent analgesic than gabapentin; first line in neuropathic pain; low back pain and spinal cord injury; fibromyalgia; adjunct in epilepsy; 50, 75, 100, 150, 300 mg; starting dose 50 mg TDS or 75 mg BID, max 600 mg/day" loading="lazy">
      <figcaption>Pegalin — "Treat Deep"</figcaption></figure>

      <h3>Strengths</h3>
      <p><strong>Pegalin 50, 75, 100, 150 and 300 mg</strong> capsules (2 × 7). Theme: <em>"Treat Deep."</em></p>

      <h3>Nerves and neuropathic pain</h3>
      <p>The <strong>neuron</strong> is the basic unit of the nervous system (the brain has about 100 billion). Neurons pass signals across a
      <strong>synapse</strong> by releasing neurotransmitters, which are then removed by re-uptake or destroyed by enzymes. In
      <strong>neuropathic pain</strong> the nerve itself is damaged and becomes <strong>hyper-excited</strong>:</p>
      <ul>
        <li><strong>Peripheral neuropathy</strong> — tingling, numbness, weakness, and stabbing, throbbing or burning pain (causes include shingles, vitamin deficiency, autoimmune disease, cancer drugs, antibiotics).</li>
        <li><strong>Diabetic peripheral neuropathy (DPN)</strong> — injury to the small blood vessels supplying nerves; numbness, tingling and sharp pain in the feet, weakness, loss of balance. The literature notes that <strong>metformin exposure may worsen peripheral neuropathy</strong> in type 2 diabetes.</li>
        <li><strong>Post-herpetic neuralgia (PHN)</strong> — persistent pain after <strong>shingles</strong> (varicella-zoster virus).</li>
        <li><strong>Fibromyalgia</strong> — widespread body pain; <strong>sciatica</strong> — pain along the sciatic nerve from the lower back down the leg.</li>
      </ul>

      <h3>Mechanism of action</h3>
      <p>Pregabalin binds the <strong>α2δ (alpha-2-delta) subunit of voltage-gated calcium channels</strong> in the CNS. This changes the
      channel's shape, <strong>reduces calcium influx</strong> and so <strong>reduces release of excitatory neurotransmitters</strong> — glutamate,
      noradrenaline and substance P — returning the neuron to a normal state. It also <strong>raises GABA</strong> by increasing glutamic acid
      decarboxylase activity. The result: <strong>analgesic, anti-epileptic and anxiolytic</strong> actions.</p>

      <h3>Pregabalin vs gabapentin vs duloxetine</h3>
      <table>
        <tr><th></th><th>Gabapentin</th><th>Pregabalin</th><th>Duloxetine</th></tr>
        <tr><td>Binding to α2δ</td><td>Binds</td><td><strong>6–10 times stronger</strong></td><td>Not confirmed</td></tr>
        <tr><td>Bioavailability</td><td>33–66%</td><td><strong>&gt; 90% at all doses</strong></td><td>60%</td></tr>
        <tr><td>Pharmacokinetics</td><td>Non-linear</td><td><strong>Linear</strong> (proportional to dose)</td><td>Linear</td></tr>
        <tr><td>T-max</td><td>3–4 h</td><td><strong>1.3 h</strong></td><td>4–5 h</td></tr>
        <tr><td>Steady state</td><td>7–9 days</td><td><strong>1 day</strong></td><td>5–6 days</td></tr>
        <tr><td>Dose range</td><td>1800–3600 mg/day</td><td>150–600 mg/day</td><td>20–60 mg</td></tr>
      </table>
      <p>Pregabalin is hardly metabolised, is <strong>excreted by the kidneys</strong>, does not bind plasma proteins and has a
      <strong>6.3-hour</strong> half-life.</p>

      <h3>Dosage</h3>
      <p><strong>Starting dose: 50 mg three times daily or 75 mg twice daily; maximum 600 mg/day</strong> (current literature).</p>
      <table>
        <tr><th>Indication</th><th>Recommended dose/day</th><th>Maximum/day</th></tr>
        <tr><td>Diabetic peripheral neuropathy</td><td>300 mg</td><td>600 mg</td></tr>
        <tr><td>Post-herpetic neuralgia</td><td>150–300 mg</td><td>600 mg</td></tr>
        <tr><td>Fibromyalgia</td><td>300–450 mg</td><td>450 mg</td></tr>
        <tr><td>Seizures (adjunct)</td><td>150–600 mg</td><td>600 mg</td></tr>
      </table>

      <h3>Safety</h3>
      <ul>
        <li>Side effects: drowsiness, dizziness, increased appetite and weight gain, dry mouth, constipation, swollen arms/legs, fatigue, difficulty concentrating, unsteadiness.</li>
        <li>Interactions: <strong>opioids, benzodiazepines, barbiturates and alcohol</strong> (added sedation).</li>
        <li>Renally excreted — reduce the dose in renal impairment; taper gradually when stopping.</li>
      </ul>

      <h3>Pegalin key messages &amp; evidence (current literature)</h3>
      <figure><img src="assets/img/medix/pegalin-evidence.jpg" alt="Pegalin evidence: first line in neuropathic pain per AAN, EFNS, IASP, ADA and FDA; pain reduction 54% vs 37% for gabapentin at 12 weeks in DPNP/PHN; fibromyalgia 42% (300 mg) and 50% (450 mg); low back pain VAS reduction 17.7 with pregabalin plus celecoxib vs 5.6 with celecoxib" loading="lazy">
      <figcaption>Pegalin — guidelines and clinical evidence</figcaption></figure>
      <ul>
        <li><strong>2–4 times more potent analgesic than gabapentin.</strong></li>
        <li><strong>1st-line treatment for neuropathic pain</strong> due to peripheral neuropathies — recommended by the American Academy of Neurology, EFNS, IASP and the American Diabetes Association; FDA-approved for central neuropathic pain with spinal cord injury.</li>
        <li><strong>Established efficacy in low back pain &amp; spinal cord injury nerve pain</strong> — <strong>3 times superior</strong> low back pain reduction when combined with NSAIDs (VAS reduction 17.7 with pregabalin + celecoxib vs 5.6 with celecoxib alone).</li>
        <li><strong>Significantly reduces pain in fibromyalgia</strong> — <strong>42%</strong> at 300 mg and <strong>50%</strong> at 450 mg.</li>
        <li><strong>DPNP / PHN:</strong> pain severity reduced by <strong>54%</strong> with pregabalin vs <strong>37%</strong> with gabapentin at 12 weeks.</li>
        <li><strong>Adjunctive therapy in epilepsy.</strong></li>
      </ul>
    `
  },

  /* ------------------------------------------------------------------ 7 */
  {
    id: "m7",
    title: "Laxa-P (Prunus Juice Extract Syrup)",
    summary: "Natural laxative for gut & intestinal health.",
    body: `
      <p><strong>Shaigan's Laxa-P Syrup</strong> — <em>Prunus juice extract: natural laxative for gut &amp; intestinal health.</em>
      Laxa-P is a natural <strong>osmotic laxative</strong> made from <strong>Prunus domestica (prune)</strong> extract, which naturally contains
      <strong>sorbitol</strong>, <strong>dietary fibre</strong> and bioactive compounds that support bowel regularity. It is a fruit-based
      constipation reliever suitable for adults and children (age-wise dosing).</p>

      <h3>The large intestine and peristalsis</h3>
      <p><strong>Peristalsis</strong> is the wave-like movement of gut smooth muscle that moves food forward. In the <strong>large intestine</strong>,
      water and salts are absorbed from undigested waste, fluid balance is maintained, electrolytes (sodium, chloride) are
      reabsorbed, and waste is compacted into <strong>stool</strong>, which is stored in the rectum.</p>

      <h3>Constipation</h3>
      <p>Difficulty passing stools or infrequent bowel movements. Key symptoms: <strong>fewer than 3 bowel movements a week</strong>, hard, dry
      or lumpy stools, straining, a feeling of incomplete emptying, and bloating or abdominal discomfort.</p>
      <ul>
        <li><strong>Causes:</strong> low-fibre diet, not drinking enough water, ignoring the urge, physical inactivity, medicines (iron, opioids, antacids), and conditions such as diabetes, IBS and pregnancy.</li>
        <li><strong>Types:</strong> functional/chronic (the most common — diet, lifestyle, slow bowel), medication-induced, and secondary (e.g. hypothyroidism, neurological disease).</li>
      </ul>

      <h3>Treatment</h3>
      <ol>
        <li><strong>Lifestyle &amp; diet (first line):</strong> fibre <strong>25–35 g/day</strong> (prunes, apples, vegetables, whole grains, ispaghol); water <strong>2–3 litres/day</strong>; <strong>20–30 minutes</strong> of walking daily; a regular toilet routine (same time daily, ideally after breakfast; don't ignore the urge; raise the knees with a foot stool).</li>
        <li><strong>Laxatives:</strong> <strong>osmotic</strong> laxatives pull water into the bowel to soften stool — lactulose, PEG/macrogol, milk of magnesia, and <strong>prune juice (natural sorbitol)</strong>. <strong>Stimulant</strong> laxatives (senna, bisacodyl) are for occasional use only.</li>
        <li><strong>Special situations:</strong> pregnancy — fibre, prunes, water, psyllium (lactulose or PEG if needed; avoid regular stimulant laxatives). Children — fluids, fruit, <strong>prune juice</strong> (PEG or lactulose if needed; avoid enemas unless a doctor advises). Elderly — fibre + water; PEG for regular use.</li>
      </ol>

      <h3>How Laxa-P works</h3>
      <ul>
        <li><strong>Osmotic effect:</strong> natural <strong>sorbitol</strong> is not fully absorbed, so it draws water into the intestine and <strong>softens the stool</strong>.</li>
        <li><strong>Increases stool bulk:</strong> prune <strong>fibre</strong> adds volume, triggering bowel movement.</li>
        <li><strong>Stimulates motility:</strong> mild natural stimulation of peristalsis improves transit time.</li>
        <li><strong>Gentle:</strong> works without cramping or irritation; can be used short- or longer-term.</li>
      </ul>

      <h3>Dosage</h3>
      <table>
        <tr><th>Age group</th><th>Recommended dose</th><th>Note</th></tr>
        <tr><td>Children (5–10 years)</td><td><strong>10 ml/day</strong></td><td>Adjust based on response</td></tr>
        <tr><td>Adults</td><td><strong>30 ml/day</strong></td><td>High fibre + sorbitol improves motility</td></tr>
      </table>
      <p><strong>Onset of action: 8–12 hours.</strong> Suitable for long-term use (daily for weeks or months); generally considered safe in
      pregnancy as a natural fruit extract; pleasant fruity taste; very good safety profile.</p>

      <h3>Extra benefits</h3>
      <ul>
        <li>Prevents constipation, supports regular elimination, reduces bloating and abdominal discomfort.</li>
        <li><strong>Prebiotic:</strong> dietary fibre nourishes beneficial gut bacteria, supporting digestion, nutrient absorption and immunity.</li>
        <li><strong>Cholesterol-lowering action:</strong> soluble fibre binds cholesterol in the gut, reducing its absorption and promoting its excretion — supporting heart health.</li>
        <li>Contains antioxidants; plant-based; ideal for long-term gut-health management.</li>
      </ul>
    `
  }
];

const questions = [
  /* ---- m1 Portfolio */
  { module: "m1", q: "Which of these is NOT a Medix brand?",
    options: ["Artho", "Famot", "Laxa-P", "Mionex"], answer: 3 },
  { module: "m1", q: "What is Famot's theme?",
    options: ["The Gold Standard", "Treat Deep", "Relief with Innovation", "Healthy Life, Healthy Stomach"], answer: 0 },
  { module: "m1", q: "What is Pegalin's theme?",
    options: ["Treat Deep", "Challenge Resolved", "The Gold Standard", "Relief with Innovation"], answer: 0 },
  { module: "m1", q: "What is Artho's theme?",
    options: ["Relief with Innovation", "The Gold Standard", "Treat Deep", "Get Set Go"], answer: 0 },
  { module: "m1", q: "Which Medix brand is a natural laxative?",
    options: ["Laxa-P", "Famot", "Artho", "Pegalin"], answer: 0 },
  { module: "m1", q: "Which Medix brand is available as an I.V. injection?",
    options: ["Famot", "Artho", "Laxa-P", "Pegalin"], answer: 0 },
  { module: "m1", q: "Which Medix brand treats neuropathic (nerve) pain?",
    options: ["Pegalin", "Artho", "Famot", "Laxa-P"], answer: 0 },
  { module: "m1", q: "What does Artho combine?",
    options: ["Diclofenac + misoprostol", "Naproxen + esomeprazole", "Famotidine + antacid", "Pregabalin + diclofenac"], answer: 0 },
  { module: "m1", q: "What are the Pegalin strengths?",
    options: ["50, 75, 100, 150, 300 mg", "82.5, 165, 330 mg", "20 and 40 mg", "7.5 and 15 mg"], answer: 0 },
  { module: "m1", q: "Laxa-P is made from…",
    options: ["Prunus (prune) juice extract", "Senna leaves", "Lactulose", "Magnesium hydroxide"], answer: 0 },

  /* ---- m2 Pain, prostaglandins & NSAIDs */
  { module: "m2", q: "Which enzyme converts arachidonic acid into prostaglandins?",
    options: ["Cyclo-oxygenase (COX)", "Proton pump", "DPP-4", "Glutamic acid decarboxylase"], answer: 0 },
  { module: "m2", q: "Prostaglandins in the stomach…",
    options: ["Regulate acid and maintain the protective mucus lining", "Cause constipation", "Destroy pepsin", "Block histamine"], answer: 0 },
  { module: "m2", q: "Prostaglandins produced in the hypothalamus cause…",
    options: ["Fever", "Constipation", "Low blood sugar", "Muscle spasm"], answer: 0 },
  { module: "m2", q: "Prostaglandins in platelets help…",
    options: ["Blood clotting in wounds", "Stomach emptying", "Insulin release", "Bone growth"], answer: 0 },
  { module: "m2", q: "Diclofenac blocks…",
    options: ["Both COX-1 and COX-2", "Only COX-1", "Only H2 receptors", "Calcium channels"], answer: 0 },
  { module: "m2", q: "Why can NSAIDs cause ulcers and bleeding?",
    options: ["They reduce the prostaglandins that protect the stomach and support platelets", "They increase mucus", "They block the proton pump", "They kill gut bacteria"], answer: 0 },
  { module: "m2", q: "Which prostaglandin is misoprostol an analogue of?",
    options: ["Prostaglandin E1", "Prostaglandin F2", "Thromboxane A2", "Prostacyclin"], answer: 0 },
  { module: "m2", q: "Acute pain lasts less than…",
    options: ["3 months", "1 week", "1 year", "1 day"], answer: 0 },
  { module: "m2", q: "Which condition is an autoimmune, symmetrical arthritis starting in small joints?",
    options: ["Rheumatoid arthritis", "Osteoarthritis", "Low back pain", "Gout"], answer: 0 },
  { module: "m2", q: "COX-2 prostaglandins are mainly responsible for…",
    options: ["Pain, inflammation and fever", "Stomach protection", "Kidney blood flow", "Blood clotting"], answer: 0 },

  /* ---- m3 Digestive system & acid */
  { module: "m3", q: "The wave-like muscle contractions that move food along the gut are called…",
    options: ["Peristalsis", "Osmosis", "Filtration", "Glycolysis"], answer: 0 },
  { module: "m3", q: "Stimulation of which histamine receptor increases gastric acid?",
    options: ["H2", "H1", "H3", "H4"], answer: 0 },
  { module: "m3", q: "Where are H2 receptors that control acid located?",
    options: ["On the parietal cells of the stomach", "In the nasal lining", "On platelets", "In the large intestine"], answer: 0 },
  { module: "m3", q: "GERD is caused by failure of the…",
    options: ["Lower oesophageal sphincter", "Pyloric valve", "Gall bladder", "Pancreas"], answer: 0 },
  { module: "m3", q: "Zollinger-Ellison syndrome is caused by tumours releasing large amounts of…",
    options: ["Gastrin", "Insulin", "Bile", "Histamine-1"], answer: 0 },
  { module: "m3", q: "Which are the main causes of peptic ulcer?",
    options: ["H. pylori, NSAIDs and improper diet", "Excess fibre and water", "Vitamin C", "Exercise"], answer: 0 },
  { module: "m3", q: "Antacids containing magnesium may cause…",
    options: ["Diarrhoea", "Constipation", "Kidney stones", "Osteoporosis"], answer: 0 },
  { module: "m3", q: "Antacids containing calcium or aluminium may cause…",
    options: ["Constipation", "Diarrhoea", "Hair loss", "Insomnia"], answer: 0 },
  { module: "m3", q: "What is the main job of the large intestine?",
    options: ["Absorbing water and forming stool", "Producing bile", "Digesting protein", "Making insulin"], answer: 0 },
  { module: "m3", q: "Which organ stores bile?",
    options: ["Gall bladder", "Pancreas", "Spleen", "Kidney"], answer: 0 },

  /* ---- m4 Artho */
  { module: "m4", q: "What does Artho Plus contain?",
    options: ["Diclofenac 75 mg + misoprostol 200 mcg", "Diclofenac 50 mg + misoprostol 200 mcg", "Diclofenac 100 mg alone", "Naproxen 500 mg + misoprostol"], answer: 0 },
  { module: "m4", q: "What does Artho 50 contain?",
    options: ["Diclofenac 50 mg + misoprostol 200 mcg", "Diclofenac 75 mg + misoprostol 200 mcg", "Misoprostol 50 mcg alone", "Famotidine 50 mg"], answer: 0 },
  { module: "m4", q: "What is Artho's tablet technology called?",
    options: ["Advance Repetab Technology", "Pelletization", "Controlled release", "Sequential pump"], answer: 0 },
  { module: "m4", q: "Which is NOT an action of misoprostol?",
    options: ["Blocking COX-2", "Increasing gastric mucus", "Reducing gastric acid", "Increasing duodenal bicarbonate"], answer: 0 },
  { module: "m4", q: "By how much did misoprostol reduce serious NSAID-induced upper GI complications?",
    options: ["40%", "10%", "75%", "90%"], answer: 0 },
  { module: "m4", q: "According to the Artho literature, NSAID plus misoprostol lowers the risk of heart attack by…",
    options: ["44%", "25%", "34%", "4%"], answer: 0 },
  { module: "m4", q: "NSAID plus misoprostol lowers the risk of acute kidney failure by…",
    options: ["34%", "44%", "25%", "60%"], answer: 0 },
  { module: "m4", q: "NSAID plus misoprostol lowers the risk of stroke by…",
    options: ["25%", "44%", "34%", "80%"], answer: 0 },
  { module: "m4", q: "What is the Artho dosing frequency?",
    options: ["Twice or three times daily depending on pain severity", "Once weekly", "Once daily at bedtime only", "Every hour"], answer: 0 },
  { module: "m4", q: "Artho is contra-indicated in…",
    options: ["Pregnancy", "Osteoarthritis", "Low back pain", "Trauma"], answer: 0 },
  { module: "m4", q: "In renal impairment, Artho should be used…",
    options: ["In a low dose", "At double dose", "Without any caution", "Only by injection"], answer: 0 },
  { module: "m4", q: "What is the half-life of misoprostol?",
    options: ["30 minutes", "2 hours", "12 hours", "3 days"], answer: 0 },

  /* ---- m5 Famot */
  { module: "m5", q: "Famotidine is which generation of H2-receptor antagonist?",
    options: ["Third", "First", "Second", "It is a PPI"], answer: 0 },
  { module: "m5", q: "Famotidine is how much more potent than ranitidine?",
    options: ["3–20 times", "20–50 times", "Equal", "100 times"], answer: 0 },
  { module: "m5", q: "Famotidine is how much more potent than cimetidine?",
    options: ["20–50 times", "3–20 times", "2 times", "Less potent"], answer: 0 },
  { module: "m5", q: "How much longer is Famot's duration of action than ranitidine?",
    options: ["About 30%", "About 3%", "About 300%", "The same"], answer: 0 },
  { module: "m5", q: "How long does Famot suppress acid compared with an antacid, per the literature?",
    options: ["9 hours vs 1 hour", "1 hour vs 9 hours", "24 hours vs 12 hours", "Equal"], answer: 0 },
  { module: "m5", q: "What is the Famot I.V. dose?",
    options: ["20 mg every 12 hours", "40 mg every 4 hours", "100 mg once daily", "10 mg once weekly"], answer: 0 },
  { module: "m5", q: "How should Famot injection be stored?",
    options: ["2–8 °C, protected from light, not frozen", "Frozen at −20 °C", "In direct sunlight", "Above 40 °C"], answer: 0 },
  { module: "m5", q: "What is the Famot dose for duodenal ulcer?",
    options: ["40 mg once daily for 4 weeks", "20 mg weekly", "80 mg three times daily", "10 mg at bedtime for 1 year"], answer: 0 },
  { module: "m5", q: "Famotidine's pregnancy category is…",
    options: ["B", "C", "D", "X"], answer: 0 },
  { module: "m5", q: "Does famotidine interfere with the cytochrome P450 system?",
    options: ["No — no significant drug interactions", "Yes — strongly", "Only with antibiotics", "Only with food"], answer: 0 },
  { module: "m5", q: "Which is a current Famot literature claim?",
    options: ["A preferred choice in NSAID-induced acidity", "Relieves neuropathic pain", "Natural laxative", "Repetab technology"], answer: 0 },
  { module: "m5", q: "Famot tablets are tested by a laboratory accredited to…",
    options: ["ISO 17025", "ISO 9001 only", "No standard", "ISO 14001"], answer: 0 },
  { module: "m5", q: "In moderate/severe renal insufficiency, famotidine should be…",
    options: ["Halved or given at 36–48-hour intervals", "Doubled", "Given every 2 hours", "Stopped forever"], answer: 0 },
  { module: "m5", q: "Famot I.V. is useful before surgery because it…",
    options: ["Raises gastric pH and reduces volume, lowering aspiration risk", "Causes sedation", "Lowers blood pressure", "Relieves nerve pain"], answer: 0 },

  /* ---- m6 Pegalin */
  { module: "m6", q: "Pregabalin binds to…",
    options: ["The α2δ subunit of voltage-gated calcium channels", "COX-2", "H2 receptors", "The proton pump"], answer: 0 },
  { module: "m6", q: "What is the Pegalin starting dose in the current literature?",
    options: ["50 mg three times daily or 75 mg twice daily", "300 mg once daily", "600 mg twice daily", "25 mg once weekly"], answer: 0 },
  { module: "m6", q: "What is the maximum daily dose of Pegalin?",
    options: ["600 mg", "300 mg", "1200 mg", "3600 mg"], answer: 0 },
  { module: "m6", q: "Pegalin is how much more potent an analgesic than gabapentin?",
    options: ["2–4 times", "Equal", "20–50 times", "Less potent"], answer: 0 },
  { module: "m6", q: "What is the bioavailability of pregabalin?",
    options: ["> 90% at all doses", "33–66%", "20%", "50%"], answer: 0 },
  { module: "m6", q: "How long does pregabalin take to reach steady state, compared with gabapentin?",
    options: ["1 day vs 7–9 days", "7–9 days vs 1 day", "1 month vs 1 week", "The same"], answer: 0 },
  { module: "m6", q: "In DPNP/PHN, pain severity at 12 weeks fell by how much with pregabalin vs gabapentin?",
    options: ["54% vs 37%", "37% vs 54%", "10% vs 5%", "Equal"], answer: 0 },
  { module: "m6", q: "In fibromyalgia, pregabalin 450 mg reduced pain by…",
    options: ["50%", "42%", "17.7%", "5.6%"], answer: 0 },
  { module: "m6", q: "In low back pain, adding pregabalin to an NSAID gives…",
    options: ["3 times superior pain reduction", "No extra benefit", "More stomach ulcers", "Constipation relief"], answer: 0 },
  { module: "m6", q: "Which drugs interact with pregabalin by adding sedation?",
    options: ["Opioids, benzodiazepines, barbiturates and alcohol", "Antacids", "Laxatives", "Vitamins"], answer: 0 },
  { module: "m6", q: "Pregabalin's pharmacokinetics are…",
    options: ["Linear — proportional to dose", "Non-linear and unpredictable", "Dependent on food", "Liver-dependent"], answer: 0 },
  { module: "m6", q: "Which organisation approved pregabalin for central neuropathic pain with spinal cord injury?",
    options: ["US FDA", "WHO", "ISO", "IQVIA"], answer: 0 },

  /* ---- m7 Laxa-P */
  { module: "m7", q: "Laxa-P is what type of laxative?",
    options: ["Natural osmotic + fibre-rich", "Stimulant", "Lubricant", "Enema"], answer: 0 },
  { module: "m7", q: "Which natural ingredient in prunes draws water into the intestine?",
    options: ["Sorbitol", "Senna", "Magnesium", "Bisacodyl"], answer: 0 },
  { module: "m7", q: "What is the Laxa-P adult dose?",
    options: ["30 ml/day", "10 ml/day", "100 ml/day", "5 ml/week"], answer: 0 },
  { module: "m7", q: "What is the Laxa-P dose for children aged 5–10?",
    options: ["10 ml/day", "30 ml/day", "60 ml/day", "Not allowed"], answer: 0 },
  { module: "m7", q: "What is Laxa-P's onset of action?",
    options: ["8–12 hours", "5 minutes", "3 days", "2 weeks"], answer: 0 },
  { module: "m7", q: "Constipation is defined as fewer than how many bowel movements a week?",
    options: ["3", "7", "1", "10"], answer: 0 },
  { module: "m7", q: "What is the recommended daily fibre intake for adults?",
    options: ["25–35 g", "5 g", "100 g", "None"], answer: 0 },
  { module: "m7", q: "Which laxatives should be used only occasionally?",
    options: ["Stimulant laxatives (senna, bisacodyl)", "Prune juice", "Fibre", "Water"], answer: 0 },
  { module: "m7", q: "How does the soluble fibre in Laxa-P help heart health?",
    options: ["It binds cholesterol in the gut and reduces its absorption", "It lowers blood pressure directly", "It thins the blood", "It blocks COX"], answer: 0 },
  { module: "m7", q: "What is the most common type of constipation?",
    options: ["Functional/chronic", "Secondary to hypothyroidism", "Medication-induced", "Congenital"], answer: 0 },
  { module: "m7", q: "Which is a common medication cause of constipation?",
    options: ["Iron, opioids and antacids", "Laxa-P", "Water", "Fibre"], answer: 0 }
];

window.K1Content.register("Medix", { modules, questions });
})();
