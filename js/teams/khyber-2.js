/* ==========================================================================
   Khyber-2 team — induction modules and quiz bank
   --------------------------------------------------------------------------
   Source: "Induction Training Product Presentations\Khyber - 2"
   (ESSO.ppt, JOVIT.ppt, JOVIT updated 10may24.pptx, Mits.pptx,
   Pegalin CR training.pptx, zeespa training.PPT, glucosamine.docx) and the
   current literature in "Literatures" — themes, slogans, strengths and
   claims follow that literature; older slogans from the decks and the old
   "Detailing Literatures" are deliberately not used.

   Portfolio: Esso-20, Jovit, Mits, Pegalin-CR, Zeespa.

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
    title: "Welcome & the Khyber-2 Portfolio",
    summary: "The five Khyber-2 brands, their current themes and how they fit together.",
    body: `
      <p>Welcome to the <strong>Khyber-2</strong> team of <strong>Shaigan Pharmaceuticals</strong>. As a First Line Manager
      you will coach your Territory Managers on these brands every day, so you need to know each one thoroughly — its
      composition, how it works, who it is for, how it is dosed, and the message on its <strong>current literature</strong>.
      This induction uses only the latest literature themes and slogans.</p>

      <h3>The Khyber-2 portfolio</h3>
      <table>
        <tr><th>Brand</th><th>Composition</th><th>Strengths / pack</th><th>Theme</th></tr>
        <tr><td><strong>Mits</strong></td><td>Meloxicam (preferential COX-2 NSAID)</td><td>Mits 7.5 mg; <strong>Mits DS</strong> 15 mg (2 × 10 tablets)</td><td><em>Get Set Go</em></td></tr>
        <tr><td><strong>Jovit</strong></td><td>Glucosamine sulphate 500 mg + Chondroitin sulphate 400 mg</td><td>2 × 10 tablets</td><td><em>Number 1 Formula — For Joint Vitality</em></td></tr>
        <tr><td><strong>Pegalin-CR</strong></td><td>Pregabalin extended-release</td><td>82.5, 165, 330 mg (1 × 10 tablets)</td><td><em>Challenge Resolved</em></td></tr>
        <tr><td><strong>Esso-20</strong></td><td>Esomeprazole 20 mg (PPI)</td><td>Esso 20 and Esso 40 capsules (1 × 14)</td><td><em>Healthy Life, Healthy Stomach</em> — "Pioneer in Pelletization"</td></tr>
        <tr><td><strong>Zeespa</strong></td><td>Mebeverine hydrochloride 135 mg (antispasmodic)</td><td>3 × 10 tablets</td><td><em>Make Life eZee</em> — "Zeespa ON"</td></tr>
      </table>

      <h3>How the brands fit together</h3>
      <ul>
        <li><strong>Joints and pain:</strong> <strong>Mits</strong> relieves pain and inflammation; <strong>Jovit</strong> supports the cartilage of the ageing joint;
          <strong>Pegalin-CR</strong> treats nerve (neuropathic) pain that ordinary painkillers don't reach. Orthopaedic surgeons,
          rheumatologists, physicians and GPs see all three.</li>
        <li><strong>Stomach and gut:</strong> <strong>Esso-20</strong> controls stomach acid — including protecting the stomach of patients taking NSAIDs
          such as Mits — and <strong>Zeespa</strong> relieves gut spasm and abdominal pain. Gastroenterologists, physicians, surgeons and GPs
          are the key customers.</li>
      </ul>

      <h3>How this induction works</h3>
      <p>Modules 2 and 3 cover the science (joints, pain and NSAIDs; stomach acid and PPIs). Modules 4–8 cover each brand.
      Modules open one at a time — finish each module and its quiz to unlock the next.</p>
    `
  },

  /* ------------------------------------------------------------------ 2 */
  {
    id: "m2",
    title: "Science Background: Joints, Arthritis & NSAIDs",
    summary: "Cartilage, osteoarthritis vs rheumatoid arthritis, pain and the COX pathway.",
    body: `
      <h3>Joints and cartilage</h3>
      <p>A joint is where two or more bones meet. <strong>Synovial joints</strong> — knee, hip, wrist — allow the most movement;
      their <strong>synovial fluid</strong> reduces friction, absorbs shock and carries nutrients.</p>
      <p><strong>Cartilage</strong> is a connective tissue made of cells called <strong>chondrocytes</strong> in a matrix strengthened by
      collagen fibres. It gives support without being as rigid as bone and <strong>cushions</strong> the joint. Cartilage is
      <strong>avascular</strong> — it has no blood vessels (nor lymphatics or nerves), so nutrients reach it by diffusion and its
      metabolism and repair are slow. Its matrix is built from <strong>proteoglycans</strong> and <strong>glycosaminoglycans (GAGs)</strong>.</p>

      <h3>Osteoarthritis (OA)</h3>
      <p>OA is a <strong>degenerative joint disease of the cartilage</strong>: pain, swelling and loss of motion, and in the long term
      loss of the joint's normal shape. It happens when the <strong>breakdown of cartilage proteoglycans exceeds their synthesis</strong>.
      It affects fingers, neck, back, knees and hips. Causes include being overweight, ageing, joint injury, sports,
      muscle imbalance and heredity.</p>
      <p>Knee OA starts to appear early: signs are seen in about <strong>5% of people aged 35–54</strong> and <strong>30% of those aged 45–65</strong>
      (World Journal of Orthopedics, 2017).</p>

      <table>
        <tr><th>Osteoarthritis</th><th>Rheumatoid arthritis (RA)</th></tr>
        <tr><td>Degenerative ("wear and tear") disease of cartilage</td><td>Autoimmune, systemic disease</td></tr>
        <tr><td>Usually begins after age 40; develops slowly</td><td>Can begin after 25; often develops within weeks or months</td></tr>
        <tr><td>Often one side; weight-bearing joints</td><td>Symmetrical; starts in small joints</td></tr>
        <tr><td>Little inflammation; no general sickness</td><td>Inflamed joints; fatigue, weight loss, fever</td></tr>
      </table>
      <p>Other painful conditions you will detail for: <strong>ankylosing spondylitis</strong> (arthritis of the spine),
      <strong>low back pain (dorsalgia)</strong>, <strong>neck pain</strong> and <strong>primary dysmenorrhoea</strong> (painful periods).</p>

      <h3>Acute vs chronic pain</h3>
      <p><strong>Acute pain</strong> starts suddenly and lasts less than 3 months; <strong>chronic pain</strong> lasts more than 3 months
      (e.g. OA, RA, ankylosing spondylitis).</p>

      <h3>NSAIDs and the COX pathway</h3>
      <p>After tissue injury, <strong>arachidonic acid</strong> released from cell membranes is converted by the enzyme
      <strong>cyclo-oxygenase (COX)</strong> into <strong>prostaglandins</strong>, which cause pain, inflammation and fever.
      Non-steroidal anti-inflammatory drugs (NSAIDs) block COX. There are two forms:</p>
      <table>
        <tr><th>COX-1</th><th>COX-2</th></tr>
        <tr><td>Found in the <strong>stomach, kidney and platelets</strong>; its prostaglandins <strong>protect the stomach lining</strong>, regulate gastric acid and <strong>keep blood flowing to the kidney</strong></td>
            <td>Found in macrophages, leukocytes and fibroblasts; its prostaglandins drive <strong>inflammation, pain and fever</strong></td></tr>
      </table>
      <p>Blocking COX-2 gives the benefit; blocking COX-1 causes the side effects — <strong>dyspepsia, peptic ulcers and GI
      bleeding</strong>, and reduced kidney blood flow. Conventional NSAIDs (diclofenac, ibuprofen, piroxicam, naproxen) block both.
      An NSAID that is <strong>more selective for COX-2</strong> — like meloxicam — keeps the pain relief with less GI and renal harm.
      Patients who need regular NSAIDs and are at GI risk may also need a <strong>PPI</strong> such as Esso.</p>
    `
  },

  /* ------------------------------------------------------------------ 3 */
  {
    id: "m3",
    title: "Science Background: Stomach Acid & PPIs",
    summary: "How the stomach makes acid, how PPIs stop it, and acid peptic disorders.",
    body: `
      <h3>Gastric secretions</h3>
      <p>Gastric juice is a mixture of water, <strong>hydrochloric acid (HCl)</strong>, electrolytes, mucus and pepsin. A protective
      <strong>mucus lining</strong> stops the acid from damaging the stomach wall.</p>

      <h3>How the parietal cell makes acid</h3>
      <ol>
        <li>CO₂ from the blood enters the <strong>parietal cell</strong> and reacts with water to form carbonic acid; the enzyme
          <strong>carbonic anhydrase</strong> splits it into bicarbonate and a hydrogen ion (H⁺).</li>
        <li>Receptors for <strong>gastrin, acetylcholine and histamine-2</strong> on the parietal cell, when stimulated, raise cAMP and
          calcium inside the cell and switch on the <strong>proton pump (H⁺/K⁺-ATPase)</strong>.</li>
        <li>The proton pump pushes H⁺ into the stomach; chloride follows, and H⁺ + Cl⁻ form <strong>HCl</strong>.</li>
      </ol>

      <h3>Proton pump inhibitors (PPIs)</h3>
      <p>A PPI <strong>binds to and blocks the proton pump</strong>. Because the pump is the <strong>final step</strong> of acid secretion,
      PPIs reduce acid whichever receptor is driving it. The aim is to keep <strong>intragastric pH above 4</strong>.</p>

      <h3>Acid peptic disorders (APDs)</h3>
      <ul>
        <li><strong>Gastro-oesophageal reflux disease (GERD)</strong> and <strong>oesophagitis</strong></li>
        <li><strong>Gastric ulcer</strong> (stomach) and <strong>duodenal ulcer</strong></li>
        <li>Main causes of ulcers: <strong>NSAIDs</strong> (by blocking protective prostaglandins) and <strong>Helicobacter pylori</strong>.</li>
      </ul>

      <h3>Lifestyle advice</h3>
      <p>Lifestyle changes alone help about 20% of patients: lose weight and exercise, stop smoking, eat smaller meals,
      avoid fatty and spicy food, chocolate, alcohol, citrus juices and cola, avoid eating for 2 hours before lying down,
      and raise the head of the bed by 6–8 inches. The Esso literature reflects this — balanced meals, exercise, good
      sleep and a healthy stomach.</p>
    `
  },

  /* ------------------------------------------------------------------ 4 */
  {
    id: "m4",
    title: "Mits & Mits DS (Meloxicam)",
    summary: "Get Set Go — significant pain relief with superior GI safety.",
    body: `
      <figure><img src="assets/img/khyber-2/mits.jpg" alt="Mits literature: Get Set Go — significant pain relief in OA, RA, dorsalgia, neck pain and dysmenorrhoea; superior GI safety vs piroxicam, diclofenac and naproxen" loading="lazy">
      <figcaption>Mits — "Get Set Go"</figcaption></figure>

      <h3>Strengths</h3>
      <p><strong>Mits 7.5 mg</strong> and <strong>Mits DS 15 mg</strong> (meloxicam), packs of 2 × 10 tablets. Theme: <em>"Get Set Go."</em></p>

      <h3>Mechanism of action</h3>
      <p>Meloxicam is an NSAID with <strong>analgesic, anti-inflammatory and antipyretic</strong> action. It inhibits prostaglandin
      synthesis and is <strong>more selective for COX-2</strong> than COX-1 — so it relieves pain and inflammation while sparing much of
      the COX-1 protection of the stomach and kidney.</p>

      <h3>Pharmacokinetics</h3>
      <table>
        <tr><th>Bioavailability</th><td>89%</td></tr>
        <tr><th>Peak level (C-max)</th><td>3–4 hours</td></tr>
        <tr><th>Protein binding</th><td>99%</td></tr>
        <tr><th>Concentration in synovial fluid</th><td>40–50% of plasma — it reaches the joint</td></tr>
        <tr><th>Half-life</th><td><strong>20 hours</strong> — allows once-daily dosing</td></tr>
        <tr><th>Excretion</th><td>Urine and faeces</td></tr>
      </table>

      <h3>Indications &amp; dosage</h3>
      <table>
        <tr><th>Indication</th><th>Dose</th></tr>
        <tr><td>Osteoarthritis</td><td>7.5–15 mg once daily</td></tr>
        <tr><td>Rheumatoid arthritis</td><td>15 mg once daily</td></tr>
        <tr><td>Ankylosing spondylitis</td><td>15 mg once daily</td></tr>
        <tr><td>Low back pain</td><td>7.5 mg twice daily</td></tr>
        <tr><td>Primary dysmenorrhoea</td><td>7.5 mg once daily</td></tr>
      </table>
      <p>Maximum recommended dose: <strong>30 mg/day</strong>. The current literature highlights significant pain relief in
      <strong>osteoarthritis, rheumatoid arthritis, dorsalgia (back pain), neck pain and primary dysmenorrhoea</strong>.</p>

      <h3>Special populations &amp; safety</h3>
      <ul>
        <li>No dose adjustment in <strong>mild–moderate renal or hepatic impairment</strong> (meloxicam can occasionally raise ALT).</li>
        <li>Elderly (65+): use with caution, as with any NSAID.</li>
        <li>Pregnancy <strong>category C</strong> — not recommended; not recommended in breastfeeding.</li>
        <li>Side effects: GI disturbance, allergic reactions. Contraindicated in known hypersensitivity to any NSAID.</li>
      </ul>

      <h3>Superior GI safety — the evidence</h3>
      <p>GI adverse effects in OA and RA patients (n = 6,129, 180 days; British Journal of Rheumatology):</p>
      <table>
        <tr><th>NSAID</th><th>GI adverse effects</th></tr>
        <tr><td><strong>Meloxicam 15 mg</strong></td><td><strong>19%</strong></td></tr>
        <tr><td>Piroxicam 20 mg</td><td>25%</td></tr>
        <tr><td>Diclofenac 100 mg SR</td><td>27%</td></tr>
        <tr><td>Naproxen 750–1000 mg</td><td>37%</td></tr>
      </table>

      <h3>Mits offers (current literature)</h3>
      <ul>
        <li><strong>Remarkable efficacy in chronic pain management</strong></li>
        <li><strong>Superior GI safety in long-term use</strong></li>
        <li>Plus: once-daily dosing for compliance, better renal safety than conventional NSAIDs, and economical.</li>
      </ul>
    `
  },

  /* ------------------------------------------------------------------ 5 */
  {
    id: "m5",
    title: "Jovit (Glucosamine + Chondroitin)",
    summary: "Number 1 Formula — For Joint Vitality.",
    body: `
      <figure><img src="assets/img/khyber-2/jovit.jpg" alt="Jovit literature: Number 1 Formula — most prescribed brand in Pakistan for knee and hip OA; 78% satisfied, 69% pain relief; halal-certified source" loading="lazy">
      <figcaption>Jovit — "Number 1 Formula, For Joint Vitality"</figcaption></figure>

      <h3>Composition</h3>
      <p>Each tablet: <strong>glucosamine sulphate 500 mg + chondroitin sulphate 400 mg</strong> (2 × 10 tablets). Category: cartilage
      supplement. Theme: <em>"Number 1 Formula — For Joint Vitality."</em></p>

      <h3>Glucosamine</h3>
      <ul>
        <li>An <strong>amino sugar</strong> (made in the body from glucose and the amino acid glutamine) and the <strong>building block of glycosaminoglycans (GAGs)</strong> — the major component of joint cartilage.</li>
        <li>The body uses it to make cartilage, tendons and ligaments. Healthy people make their own, but <strong>older people need supplemental glucosamine</strong>.</li>
        <li>Forms: glucosamine <strong>sulphate</strong> (most common), hydrochloride, hydroiodide. Sources: shellfish shells (chitin) or chemical synthesis.</li>
        <li><strong>Mechanism:</strong> stimulates synthesis of GAGs and proteoglycans for the cartilage matrix — countering the imbalance in OA where breakdown exceeds synthesis — relieving pain and swelling and slowing progression. Glucosamine sulphate also improves the lubricating properties of synovial fluid.</li>
      </ul>

      <h3>Chondroitin</h3>
      <ul>
        <li>A naturally occurring <strong>glycosaminoglycan</strong> and a main constituent of proteoglycans; supplements raise chondroitin levels in cartilage.</li>
        <li>Attracts water into cartilage, acting as a <strong>shock absorber</strong> and bringing nutrients to the avascular cartilage.</li>
        <li><strong>Mechanism:</strong> anti-inflammatory; stimulates proteoglycan synthesis; reduces the catabolic (breakdown) activity of chondrocytes by inhibiting proteolytic enzymes, nitric oxide and other cartilage-damaging substances.</li>
      </ul>
      <p>Together they <strong>regenerate</strong> (improve cartilage-cell synthesis), <strong>protect</strong> (inhibit degradative enzymes) and reduce
      <strong>inflammation</strong> (joint pain and synovitis).</p>

      <h3>Pharmacokinetics</h3>
      <table>
        <tr><th></th><th>Glucosamine</th><th>Chondroitin</th></tr>
        <tr><td>Absorption</td><td>90%</td><td>24%</td></tr>
        <tr><td>Bioavailability</td><td>26% (75% first-pass liver metabolism)</td><td>13%</td></tr>
        <tr><td>T-max</td><td>1.5 h</td><td>2–6 h</td></tr>
        <tr><td>Half-life</td><td>15 h</td><td>Dose-dependent</td></tr>
        <tr><td>Excretion</td><td>~40% urine, 2% faeces, rest via the lungs</td><td>—</td></tr>
      </table>

      <h3>Indications &amp; dosage</h3>
      <ul>
        <li><strong>Osteoarthritis</strong> (knee and hip), <strong>tendonitis</strong>, <strong>bursitis</strong>; reduces pain, improves mobility and supports healthy joints.</li>
        <li><strong>One tablet three times a day for 6 months</strong>. No dose adjustment in hepatic or renal impairment. Children: insufficient data.</li>
      </ul>

      <h3>Safety</h3>
      <ul>
        <li>Generally safe in clinical studies. <strong>Contraindicated in shellfish allergy</strong> and hypersensitivity to any ingredient.</li>
        <li>Side effects: nausea, vomiting, diarrhoea, upset stomach, headache. Not studied in pregnancy/lactation.</li>
        <li>Short-term use at the recommended dose did not affect insulin sensitivity or glucose metabolism in studies.</li>
      </ul>

      <h3>Evidence</h3>
      <ul>
        <li><strong>Knee and hip OA</strong> (World Journal of Orthopedics, 2023; n = 1,102, 180 days): <strong>78%</strong> of patients were satisfied with treatment and <strong>69%</strong> got relief from pain.</li>
        <li><strong>GAIT trial</strong> (NEJM, 2006; 1,583 patients with knee OA): in <strong>moderate-to-severe pain</strong>, glucosamine + chondroitin gave a response in <strong>79%</strong> vs 54% with placebo.</li>
        <li>Long-term glucosamine sulphate (3 years, The Lancet 2001): no average joint-space narrowing vs progressive narrowing with placebo.</li>
      </ul>

      <h3>Jovit key messages (current literature)</h3>
      <ul>
        <li><strong>The most prescribed brand in Pakistan for knee &amp; hip osteoarthritis.</strong></li>
        <li><strong>A pharmaceutical registered brand</strong> with superior efficacy and standards over nutraceutical brands.</li>
        <li>Glucosamine and chondroitin from a <strong>halal-certified source</strong>.</li>
      </ul>
    `
  },

  /* ------------------------------------------------------------------ 6 */
  {
    id: "m6",
    title: "Pegalin-CR (Pregabalin Extended-Release)",
    summary: "Challenge Resolved — once-daily neuropathic pain control without the conventional side-effect burden.",
    body: `
      <figure><img src="assets/img/khyber-2/pegalin-cr.jpg" alt="Pegalin-CR literature: Challenge Resolved — once-daily dosing, efficacy and safety, cost-effective; 82.5, 165 and 330 mg" loading="lazy">
      <figcaption>Pegalin-CR — "Challenge Resolved"</figcaption></figure>

      <h3>The challenge</h3>
      <p>Conventional (immediate-release) pregabalin must be taken two or more times a day and often causes
      <strong>dizziness, sleepiness, fatigue and muscle tenderness</strong>. The Pegalin-CR literature presents these as the pieces of
      the puzzle that Pegalin-CR resolves — hence <em>"Challenge Resolved."</em></p>

      <h3>Neuropathic pain conditions</h3>
      <ul>
        <li><strong>Peripheral neuropathy</strong> — tingling, numbness, weakness, and stabbing, throbbing or burning pain.</li>
        <li><strong>Diabetic peripheral neuropathy (DPN)</strong> — nerve damage from diabetes injuring the small vessels supplying the nerves; numbness, tingling and sharp pain in the feet.</li>
        <li><strong>Post-herpetic neuralgia (PHN)</strong> — persistent nerve pain after <strong>shingles</strong> (varicella-zoster virus).</li>
        <li><strong>Fibromyalgia</strong> — widespread body pain; <strong>sciatica</strong> — pain along the sciatic nerve from the lower back down the leg.</li>
      </ul>

      <h3>Mechanism of action</h3>
      <p>In neuropathic pain the nerve cell is <strong>hyper-excited</strong>. Pregabalin binds the <strong>α2δ subunit of voltage-gated calcium
      channels</strong> in the central nervous system, which reduces calcium entry and so <strong>reduces the release of excitatory
      neurotransmitters</strong> — glutamate, noradrenaline and substance P — returning the neuron to a normal state. It also
      raises inhibitory <strong>GABA</strong> by increasing glutamic acid decarboxylase activity.</p>

      <h3>Controlled vs immediate release</h3>
      <table>
        <tr><th></th><th>Pegalin-CR</th><th>Conventional pregabalin</th></tr>
        <tr><td>Half-life</td><td>≈ 6.3 h</td><td>≈ 6.3 h (same)</td></tr>
        <tr><td>Peak (T-max)</td><td><strong>≈ 8 h</strong></td><td>≈ 3 h</td></tr>
        <tr><td>Dosing</td><td><strong>Once daily</strong></td><td>Two or more times daily</td></tr>
      </table>
      <p>The CR tablet changes the <strong>rate of absorption</strong>, not the half-life, giving steady plasma levels and once-daily dosing.</p>

      <h3>Strengths &amp; dosing</h3>
      <p><strong>82.5 mg, 165 mg and 330 mg</strong> extended-release tablets (1 × 10). For pregabalin: start 150 mg/day; usual
      DPN dose 300 mg/day (max 600); PHN 150–300 mg/day (max 600); fibromyalgia 300–450 mg/day (max 450). Taper gradually
      when stopping.</p>

      <h3>Pegalin-CR key messages (current literature)</h3>
      <ul>
        <li><strong>Once-daily dosing</strong> — convenience.</li>
        <li><strong>Efficacy &amp; safety</strong> — consistent plasma concentrations improve compliance and efficacy; <strong>fewer daytime side effects such as dizziness and drowsiness</strong>, allowing higher dosage; better reduction of mean daily pain scores than conventional pregabalin.</li>
        <li><strong>Cost-effective</strong> — convenience with cost-effectiveness.</li>
      </ul>
    `
  },

  /* ------------------------------------------------------------------ 7 */
  {
    id: "m7",
    title: "Esso-20 (Esomeprazole 20 mg)",
    summary: "Healthy Life, Healthy Stomach — Pioneer in Pelletization.",
    body: `
      <figure><img src="assets/img/khyber-2/esso20.jpg" alt="Esso literature: Healthy Life Healthy Stomach — Pioneer in Pelletization; uniform pellets, precise dosing, quick dissolution; Esso 20 and Esso 40" loading="lazy">
      <figcaption>Esso — "Healthy Life, Healthy Stomach"</figcaption></figure>

      <h3>Strengths</h3>
      <p><strong>Esso 20</strong> (esomeprazole 20 mg) and <strong>Esso 40</strong> (40 mg) capsules, 1 × 14, in a <strong>tamper-proof</strong> pack.
      Khyber-2 promotes <strong>Esso-20</strong>. Theme: <em>"Healthy Life, Healthy Stomach."</em></p>

      <h3>Pioneer in Pelletization</h3>
      <p>Esso capsules contain esomeprazole <strong>pellets</strong> made in Shaigan's <strong>in-house pelletization facility</strong>:</p>
      <ul>
        <li><strong>Uniform size of pellets</strong> (standardised mesh size)</li>
        <li><strong>Precise dosing guaranteed</strong></li>
        <li><strong>Quick dissolution, rapid absorption</strong></li>
      </ul>

      <h3>Mechanism &amp; the S-isomer advantage</h3>
      <p>Esomeprazole inhibits the <strong>H⁺/K⁺-ATPase (proton pump)</strong> in the parietal cell — the final step of acid secretion.
      It is the <strong>S-isomer of omeprazole</strong>, with lower first-pass metabolism and clearance, better delivery to the site of
      action and inhibition of <strong>more proton pumps</strong>. Bioavailability is up to <strong>90%</strong> (vs 30–40% for omeprazole).</p>

      <h3>Product profile</h3>
      <table>
        <tr><th>T-max</th><td>1.5 h</td></tr>
        <tr><th>Half-life</th><td>1–1.5 h</td></tr>
        <tr><th>Protein binding</th><td>97%</td></tr>
        <tr><th>Metabolism</th><td>Liver (CYP2C19, CYP3A4); no accumulation with once-daily dosing</td></tr>
        <tr><th>Side effects</th><td>Epigastric pain, dyspepsia, allergic reaction</td></tr>
        <tr><th>Contra-indication</th><td>Hypersensitivity to esomeprazole or substituted benzimidazoles</td></tr>
        <tr><th>Renal / hepatic</th><td>No adjustment in renal impairment; in <strong>severe hepatic</strong> impairment do not exceed <strong>20 mg/day</strong></td></tr>
        <tr><th>Pregnancy</th><td>Category B</td></tr>
      </table>

      <h3>Indications &amp; Esso-20 dosing</h3>
      <table>
        <tr><th>Indication</th><th>Esso 20 regimen</th></tr>
        <tr><td>Upper GI symptoms (dyspepsia, heartburn, acid regurgitation)</td><td>20 mg once daily for 4–8 weeks</td></tr>
        <tr><td>GERD</td><td>20 mg once daily for 4–8 weeks; <strong>maintenance 20 mg once daily for 6 months</strong></td></tr>
        <tr><td>Gastric / duodenal ulcer</td><td>20 mg once daily for 4–8 weeks</td></tr>
        <tr><td>Prevention of NSAID-induced ulcer</td><td>20 mg once daily for 6 months</td></tr>
        <tr><td>H. pylori ulcer</td><td>20 mg <strong>twice daily</strong> + clarithromycin 500 mg b.i.d. + amoxicillin 1 g b.i.d. for 1 week</td></tr>
      </table>
      <p>Esso-20 is the natural partner for patients on regular NSAIDs such as Mits who are at risk of GI side effects.</p>

      <h3>Esso-20 key messages (current literature)</h3>
      <ul>
        <li><strong>Strong and prolonged acid control</strong> in patients with acid peptic disorders (APDs)</li>
        <li><strong>Faster healing rates in GERD</strong></li>
        <li><strong>Maintenance of intragastric pH &gt; 4 for longer duration</strong></li>
      </ul>
    `
  },

  /* ------------------------------------------------------------------ 8 */
  {
    id: "m8",
    title: "Zeespa (Mebeverine HCl 135 mg)",
    summary: "Make Life eZee — relieves spasm without anticholinergic side effects.",
    body: `
      <figure><img src="assets/img/khyber-2/zeespa.jpg" alt="Zeespa literature: Make Life eZee — effective in intestinal colic, biliary colic, IBS, renal colic and dysmenorrhoea; relieves spasm, normalises gut motility, no anticholinergic side effects" loading="lazy">
      <figcaption>Zeespa — "Make Life eZee"</figcaption></figure>

      <h3>Smooth muscle — the science</h3>
      <p><strong>Smooth muscle</strong> is involuntary, non-striated muscle found in the walls of hollow organs — the
      <strong>gut</strong>, blood vessels, urinary bladder, reproductive and respiratory tracts, and the iris. Its cells are small and
      spindle-shaped, and its job is to contract in response to a stimulus (e.g. peristalsis in the gut). Energy comes from
      ATP.</p>
      <p><strong>How it contracts:</strong> sodium (Na⁺) entry opens calcium (Ca²⁺) channels; calcium flows in, activates myosin kinase,
      the myosin chain is phosphorylated, and myosin heads attach to <strong>actin</strong> — the filaments slide and the muscle
      contracts. Calcium both locks actin and myosin together and releases energy from ATP. Excess contraction =
      <strong>spasm</strong> and cramping pain.</p>

      <h3>Mebeverine</h3>
      <ul>
        <li>A <strong>musculotropic antispasmodic</strong> of the methoxybenzamine group (discovered 1961; launched as an antispasmodic in 1965).</li>
        <li>Acts <strong>directly on gut smooth muscle at the cellular level</strong>: it <strong>blocks Na⁺ channels</strong>, so Ca²⁺ channels stay closed and the muscle does not over-contract — <strong>relieving spasm while allowing normal peristalsis</strong>.</li>
        <li>It does <strong>not block muscarinic receptors</strong>, so it is <strong>free from anticholinergic side effects</strong> — no drowsiness, blurred vision, dry mouth, urinary retention, palpitations or constipation.</li>
      </ul>

      <h3>Pharmacokinetics</h3>
      <p>Complete and fast absorption; <strong>onset within the first hour</strong>; peak levels in 1–3 hours; 75% bound to albumin;
      metabolised in the liver; excreted in urine, complete within 24 hours.</p>

      <h3>Indications</h3>
      <p>Mebeverine is effective in various <strong>spasmodic conditions</strong> — the current literature highlights <strong>intestinal colic,
      biliary colic, irritable bowel syndrome (IBS), renal colic and dysmenorrhoea</strong>. Symptomatic relief of smooth-muscle spasm,
      abdominal pain and distension, flatulence, and diarrhoea or constipation of IBS.</p>

      <h3>Dosage</h3>
      <p><strong>1 tablet (135 mg) three times a day, 20 minutes before meals</strong> (3 × 10 tablets). Once the desired result is
      achieved, the dose may be reduced to once or twice daily.</p>

      <h3>Safety</h3>
      <p>Adverse effects are rare: dizziness, headache, insomnia, anorexia, decreased heart rate. Contraindicated only in
      hypersensitivity to the ingredients.</p>

      <h3>Zeespa key messages (current literature)</h3>
      <ul>
        <li><strong>Relieves spasm by relaxing smooth muscles.</strong></li>
        <li><strong>Normalises gut motility.</strong></li>
        <li><strong>Free from anticholinergic side effects.</strong></li>
      </ul>
    `
  }
];

const questions = [
  /* ---- m1 Portfolio */
  { module: "m1", q: "Which of these is NOT a Khyber-2 brand?",
    options: ["Jovit", "Zeespa", "Mits", "Tepride"], answer: 3 },
  { module: "m1", q: "What is Mits' current theme?",
    options: ["Get Set Go", "Make Life eZee", "Challenge Resolved", "For Joint Vitality"], answer: 0 },
  { module: "m1", q: "Which brand's theme is \"Make Life eZee\"?",
    options: ["Esso-20", "Zeespa", "Jovit", "Mits"], answer: 1 },
  { module: "m1", q: "Jovit is promoted as the…",
    options: ["Number 1 Formula — For Joint Vitality", "Pioneer in Pelletization", "Challenge Resolved", "Get Set Go"], answer: 0 },
  { module: "m1", q: "Which brand's literature says \"Pioneer in Pelletization\"?",
    options: ["Esso", "Zeespa", "Pegalin-CR", "Jovit"], answer: 0 },
  { module: "m1", q: "Pegalin-CR's theme is…",
    options: ["Healthy Life, Healthy Stomach", "Challenge Resolved", "Make Life eZee", "Get Set Go"], answer: 1 },
  { module: "m1", q: "Which Khyber-2 brand is an antispasmodic?",
    options: ["Mits", "Zeespa", "Jovit", "Esso-20"], answer: 1 },
  { module: "m1", q: "Which Khyber-2 brand is a cartilage supplement?",
    options: ["Jovit", "Pegalin-CR", "Mits", "Esso-20"], answer: 0 },
  { module: "m1", q: "What are the two Mits strengths?",
    options: ["7.5 mg and 15 mg (Mits DS)", "20 mg and 40 mg", "82.5 mg and 165 mg", "135 mg only"], answer: 0 },
  { module: "m1", q: "Which Khyber-2 brand naturally partners with patients on regular NSAIDs to protect the stomach?",
    options: ["Esso-20", "Jovit", "Pegalin-CR", "Zeespa"], answer: 0 },
  { module: "m1", q: "What does Zeespa contain?",
    options: ["Mebeverine hydrochloride 135 mg", "Meloxicam 15 mg", "Itopride 50 mg", "Esomeprazole 20 mg"], answer: 0 },

  /* ---- m2 Joints, arthritis, NSAIDs */
  { module: "m2", q: "Cartilage is described as avascular, which means it…",
    options: ["Has a rich blood supply", "Has no blood vessels, so nutrients diffuse through its matrix", "Is made of bone", "Contracts like muscle"], answer: 1 },
  { module: "m2", q: "What are the cells of cartilage called?",
    options: ["Osteoclasts", "Chondrocytes", "Neurons", "Hepatocytes"], answer: 1 },
  { module: "m2", q: "Osteoarthritis develops when…",
    options: ["Cartilage proteoglycan breakdown exceeds synthesis", "The immune system attacks small joints", "Bacteria infect the joint", "Uric acid crystals form"], answer: 0 },
  { module: "m2", q: "Which statement describes rheumatoid arthritis rather than osteoarthritis?",
    options: ["Usually begins after age 40", "Autoimmune and symmetrical, starting in small joints", "Mainly weight-bearing joints", "No general feeling of sickness"], answer: 1 },
  { module: "m2", q: "Signs of knee OA appear in about what share of people aged 45–65?",
    options: ["5%", "15%", "30%", "75%"], answer: 2 },
  { module: "m2", q: "Which COX isoform protects the stomach lining and kidney blood flow?",
    options: ["COX-1", "COX-2", "Both equally", "Neither"], answer: 0 },
  { module: "m2", q: "COX-2 is found mainly in…",
    options: ["Stomach and platelets", "Macrophages, leukocytes and fibroblasts", "Red blood cells", "The lens of the eye"], answer: 1 },
  { module: "m2", q: "COX converts arachidonic acid into…",
    options: ["Prostaglandins", "Insulin", "Histamine", "Acetylcholine"], answer: 0 },
  { module: "m2", q: "Chronic pain is pain lasting more than…",
    options: ["1 week", "1 month", "3 months", "1 year"], answer: 2 },
  { module: "m2", q: "Why do conventional NSAIDs cause stomach ulcers?",
    options: ["They block protective COX-1 prostaglandins", "They kill stomach bacteria", "They block the proton pump", "They increase mucus"], answer: 0 },
  { module: "m2", q: "Dorsalgia means…",
    options: ["Back pain", "Headache", "Painful periods", "Joint stiffness"], answer: 0 },

  /* ---- m3 Acid & PPIs */
  { module: "m3", q: "Which enzyme in the parietal cell pumps H+ into the stomach?",
    options: ["Carbonic anhydrase", "H+/K+-ATPase (proton pump)", "Cyclo-oxygenase", "Pepsin"], answer: 1 },
  { module: "m3", q: "Which three receptors stimulate the parietal cell?",
    options: ["Gastrin, acetylcholine, histamine-2", "Dopamine, serotonin, GABA", "Insulin, glucagon, gastrin", "β1, β2, α1"], answer: 0 },
  { module: "m3", q: "PPIs reduce acid whichever receptor is involved because…",
    options: ["They neutralise acid", "The proton pump is the final step of acid secretion", "They block histamine only", "They increase mucus"], answer: 1 },
  { module: "m3", q: "What is the target intragastric pH for PPI therapy?",
    options: ["Below 2", "Above 4", "Exactly 7", "Above 9"], answer: 1 },
  { module: "m3", q: "Two major causes of peptic ulcer are…",
    options: ["NSAIDs and Helicobacter pylori", "Vitamin C and calcium", "Exercise and water", "Antacids and milk"], answer: 0 },
  { module: "m3", q: "Lifestyle changes alone help about what share of acid-reflux patients?",
    options: ["5%", "20%", "60%", "90%"], answer: 1 },
  { module: "m3", q: "Reflux patients should avoid eating for how long before lying down?",
    options: ["15 minutes", "2 hours", "6 hours", "12 hours"], answer: 1 },
  { module: "m3", q: "A peptic ulcer in the duodenum is called a…",
    options: ["Gastric ulcer", "Duodenal ulcer", "Oesophagitis", "Colitis"], answer: 1 },
  { module: "m3", q: "Which enzyme splits carbonic acid into bicarbonate and H+?",
    options: ["Carbonic anhydrase", "Lipase", "Amylase", "DPP-4"], answer: 0 },
  { module: "m3", q: "GERD stands for…",
    options: ["Gastro-oesophageal reflux disease", "Gastric enzyme release disorder", "General erosive renal disease", "Gut-epithelium repair defect"], answer: 0 },

  /* ---- m4 Mits */
  { module: "m4", q: "Meloxicam is more selective for…",
    options: ["COX-1", "COX-2", "The proton pump", "α2δ calcium channels"], answer: 1 },
  { module: "m4", q: "What is the half-life of meloxicam, which allows once-daily dosing?",
    options: ["2 hours", "6 hours", "20 hours", "72 hours"], answer: 2 },
  { module: "m4", q: "What is the maximum recommended daily dose of meloxicam?",
    options: ["7.5 mg", "15 mg", "30 mg", "100 mg"], answer: 2 },
  { module: "m4", q: "What is the Mits dose for rheumatoid arthritis?",
    options: ["7.5 mg once daily", "15 mg once daily", "7.5 mg three times daily", "30 mg twice daily"], answer: 1 },
  { module: "m4", q: "What is the Mits dose for low back pain?",
    options: ["7.5 mg twice daily", "15 mg twice daily", "30 mg once daily", "7.5 mg once weekly"], answer: 0 },
  { module: "m4", q: "What is the Mits dose for primary dysmenorrhoea?",
    options: ["7.5 mg once daily", "15 mg twice daily", "30 mg once daily", "Not indicated"], answer: 0 },
  { module: "m4", q: "In the GI-safety data, GI adverse effects with meloxicam 15 mg were…",
    options: ["19%", "27%", "37%", "50%"], answer: 0 },
  { module: "m4", q: "Which NSAID had the highest GI adverse effects (37%) in that comparison?",
    options: ["Piroxicam 20 mg", "Diclofenac 100 mg SR", "Naproxen 750–1000 mg", "Meloxicam 15 mg"], answer: 2 },
  { module: "m4", q: "Meloxicam reaches what concentration in synovial fluid?",
    options: ["1–2% of plasma", "40–50% of plasma", "100% of plasma", "None"], answer: 1 },
  { module: "m4", q: "Which two claims does the current Mits literature make?",
    options: ["Remarkable efficacy in chronic pain management; superior GI safety in long-term use", "Acid control; faster GERD healing", "Cartilage regeneration; halal source", "Once-weekly dosing; no side effects"], answer: 0 },
  { module: "m4", q: "Meloxicam's pregnancy category is…",
    options: ["A", "B", "C", "X"], answer: 2 },
  { module: "m4", q: "What is the bioavailability of meloxicam?",
    options: ["26%", "60%", "89%", "100%"], answer: 2 },

  /* ---- m5 Jovit */
  { module: "m5", q: "What does each Jovit tablet contain?",
    options: ["Glucosamine sulphate 500 mg + chondroitin sulphate 400 mg", "Glucosamine 1500 mg only", "Chondroitin 1200 mg only", "Meloxicam 15 mg + glucosamine 500 mg"], answer: 0 },
  { module: "m5", q: "What is the Jovit dosage?",
    options: ["One tablet three times a day for 6 months", "One tablet once weekly", "Two tablets at bedtime for 1 week", "As needed for pain"], answer: 0 },
  { module: "m5", q: "Glucosamine is the building block of…",
    options: ["Glycosaminoglycans (GAGs) in cartilage", "Haemoglobin", "Insulin", "Bone calcium"], answer: 0 },
  { module: "m5", q: "Jovit is contraindicated in patients with…",
    options: ["Shellfish allergy", "Hypertension", "Diabetes", "Age over 50"], answer: 0 },
  { module: "m5", q: "In the WJO 2023 study, what share of knee and hip OA patients got relief from pain with Jovit's combination?",
    options: ["29%", "54%", "69%", "95%"], answer: 2 },
  { module: "m5", q: "In the same study, what share of patients were satisfied with treatment?",
    options: ["38%", "62%", "78%", "100%"], answer: 2 },
  { module: "m5", q: "In the GAIT trial, response in moderate-to-severe knee OA pain with glucosamine + chondroitin vs placebo was…",
    options: ["79% vs 54%", "54% vs 79%", "20% vs 10%", "Equal"], answer: 0 },
  { module: "m5", q: "How does chondroitin help cartilage?",
    options: ["Attracts water, acts as a shock absorber and inhibits cartilage-damaging enzymes", "Blocks the proton pump", "Raises blood glucose", "Paralyses the joint"], answer: 0 },
  { module: "m5", q: "Which is a current Jovit literature claim?",
    options: ["The most prescribed brand in Pakistan for knee & hip osteoarthritis", "Once-daily acid control", "No anticholinergic side effects", "Faster GERD healing"], answer: 0 },
  { module: "m5", q: "Jovit's glucosamine and chondroitin come from a…",
    options: ["Halal-certified source", "Synthetic hormone", "Plant alkaloid", "Animal blood"], answer: 0 },
  { module: "m5", q: "What is the bioavailability of glucosamine?",
    options: ["13%", "26%", "89%", "100%"], answer: 1 },
  { module: "m5", q: "Jovit is positioned versus nutraceutical brands as…",
    options: ["A pharmaceutical registered brand with superior efficacy and standards", "Cheaper but weaker", "An herbal remedy", "A painkiller injection"], answer: 0 },

  /* ---- m6 Pegalin-CR */
  { module: "m6", q: "Which side effects of conventional pregabalin does the Pegalin-CR literature show as the \"challenge\"?",
    options: ["Dizziness, sleepiness, fatigue and muscle tenderness", "Cough and rash", "Hair loss", "Hypoglycaemia"], answer: 0 },
  { module: "m6", q: "Pregabalin binds to…",
    options: ["The α2δ subunit of voltage-gated calcium channels", "COX-2", "The proton pump", "Muscarinic receptors"], answer: 0 },
  { module: "m6", q: "What are the Pegalin-CR strengths?",
    options: ["82.5, 165 and 330 mg", "75, 150 and 300 mg", "7.5 and 15 mg", "20 and 40 mg"], answer: 0 },
  { module: "m6", q: "Pegalin-CR's T-max compared with conventional pregabalin is…",
    options: ["≈ 8 h vs ≈ 3 h", "≈ 1 h vs ≈ 8 h", "The same", "≈ 24 h vs ≈ 1 h"], answer: 0 },
  { module: "m6", q: "Pegalin-CR's half-life compared with immediate-release pregabalin is…",
    options: ["Much longer", "The same (≈ 6.3 h)", "Much shorter", "Unknown"], answer: 1 },
  { module: "m6", q: "Which neurotransmitters does pregabalin reduce?",
    options: ["Glutamate, noradrenaline and substance P", "GABA only", "Dopamine and serotonin", "Acetylcholine and histamine"], answer: 0 },
  { module: "m6", q: "Post-herpetic neuralgia follows which infection?",
    options: ["Shingles (varicella-zoster)", "Influenza", "Tuberculosis", "Malaria"], answer: 0 },
  { module: "m6", q: "Pegalin-CR improves safety by reducing…",
    options: ["Daytime dizziness and drowsiness", "Stomach acid", "Blood pressure", "Joint stiffness"], answer: 0 },
  { module: "m6", q: "How should pregabalin be stopped?",
    options: ["Abruptly", "Taper gradually", "Double the dose first", "Switch to an NSAID immediately"], answer: 1 },
  { module: "m6", q: "Which three headings appear on the Pegalin-CR literature?",
    options: ["Once Daily Dosing; Efficacy & Safety; Cost-Effective", "Acid Control; Healing; pH > 4", "Relieves Spasm; Normalises Motility; No Anticholinergic Effects", "Regeneration; Protection; Halal"], answer: 0 },

  /* ---- m7 Esso-20 */
  { module: "m7", q: "What does \"Pioneer in Pelletization\" refer to?",
    options: ["Shaigan's in-house pelletization facility for Esso pellets", "A new tablet coating", "An injection device", "A clinical trial"], answer: 0 },
  { module: "m7", q: "Which is a benefit of Esso's pellets listed in the literature?",
    options: ["Uniform pellet size, precise dosing and quick dissolution", "Slow release over 7 days", "Contains an antibiotic", "Chewable"], answer: 0 },
  { module: "m7", q: "Esomeprazole is which isomer of omeprazole?",
    options: ["R-isomer", "S-isomer", "Racemic", "Not related"], answer: 1 },
  { module: "m7", q: "What is the Esso-20 maintenance regimen for GERD?",
    options: ["20 mg once daily for 6 months", "20 mg three times daily for 1 week", "40 mg twice daily for 1 year", "20 mg once weekly"], answer: 0 },
  { module: "m7", q: "For H. pylori ulcer, Esso 20 is given…",
    options: ["Twice daily with clarithromycin and amoxicillin for 1 week", "Once weekly alone", "At bedtime for 6 months", "With metformin"], answer: 0 },
  { module: "m7", q: "In severe hepatic impairment, esomeprazole should not exceed…",
    options: ["20 mg/day", "40 mg/day", "80 mg/day", "No limit"], answer: 0 },
  { module: "m7", q: "What is the protein binding of esomeprazole?",
    options: ["48%", "75%", "97%", "99%"], answer: 2 },
  { module: "m7", q: "Which is a current Esso-20 claim?",
    options: ["Maintenance of intragastric pH > 4 for longer duration", "Relieves smooth-muscle spasm", "Regenerates cartilage", "Once-daily nerve-pain control"], answer: 0 },
  { module: "m7", q: "Esso's theme line is…",
    options: ["Healthy Life, Healthy Stomach", "Make Life eZee", "Get Set Go", "Challenge Resolved"], answer: 0 },
  { module: "m7", q: "Prevention of NSAID-induced ulcer with Esso 20 is…",
    options: ["20 mg once daily for 6 months", "20 mg once daily for 3 days", "Not an indication", "40 mg three times daily"], answer: 0 },
  { module: "m7", q: "What is the Esso pack?",
    options: ["1 × 14 capsules, tamper-proof", "3 × 10 tablets", "Syrup 120 ml", "Single injection vial only"], answer: 0 },

  /* ---- m8 Zeespa */
  { module: "m8", q: "Mebeverine is a…",
    options: ["Musculotropic antispasmodic", "Proton pump inhibitor", "NSAID", "Anticholinergic"], answer: 0 },
  { module: "m8", q: "How does mebeverine prevent excess gut contraction?",
    options: ["Blocks Na+ channels so Ca2+ channels stay closed", "Blocks muscarinic receptors", "Blocks the proton pump", "Increases acetylcholine"], answer: 0 },
  { module: "m8", q: "Why is Zeespa free from anticholinergic side effects?",
    options: ["It does not block muscarinic receptors", "It is given by injection", "It is excreted unchanged", "It is taken at night"], answer: 0 },
  { module: "m8", q: "What is the Zeespa dosage?",
    options: ["1 tablet three times a day, 20 minutes before meals", "1 tablet once weekly", "2 tablets at bedtime", "1 tablet after every meal and snack"], answer: 0 },
  { module: "m8", q: "Which conditions does the current Zeespa literature highlight?",
    options: ["Intestinal colic, biliary colic, IBS, renal colic, dysmenorrhoea", "GERD, gastric ulcer, H. pylori", "Knee OA, tendonitis, bursitis", "DPN, PHN, fibromyalgia"], answer: 0 },
  { module: "m8", q: "Which ion's entry triggers smooth-muscle contraction?",
    options: ["Calcium", "Chloride", "Hydrogen", "Iron"], answer: 0 },
  { module: "m8", q: "Which two protein filaments interlock to make muscle contract?",
    options: ["Actin and myosin", "Collagen and elastin", "Insulin and glucagon", "Keratin and melanin"], answer: 0 },
  { module: "m8", q: "What is the onset of action of mebeverine?",
    options: ["Within the first hour", "After 24 hours", "After 1 week", "After 1 month"], answer: 0 },
  { module: "m8", q: "Which is NOT one of Zeespa's three literature claims?",
    options: ["Relieves spasm by relaxing smooth muscles", "Normalises gut motility", "Free from anticholinergic side effects", "Maintains intragastric pH > 4"], answer: 3 },
  { module: "m8", q: "Smooth muscle is…",
    options: ["Involuntary and non-striated", "Voluntary and striated", "Found only in the heart", "Found only in the arms and legs"], answer: 0 },
  { module: "m8", q: "What is the Zeespa pack?",
    options: ["3 × 10 tablets (135 mg)", "1 × 14 capsules", "2 × 10 tablets (15 mg)", "Syrup"], answer: 0 }
];

window.K1Content.register("Khyber-2", { modules, questions });
})();
