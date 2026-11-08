/* ==========================================================================
   Khyber-3 team — induction modules and quiz bank
   --------------------------------------------------------------------------
   Source: "Induction Training Product Presentations\Khyber - 3"
   (CO-BENZ.pptx, Pepzym.pptx, Vonopran Training ppt.pptx) and the latest
   literature in its "Detailing Literatures" folder (Co-Benz drop card Q1-2023,
   Pepzym DC 2024, Vonopran literature) — themes, slogans and claims follow
   that literature:
     Co-Benz  — "COmfort beyond BENdZ"
     Pepzym   — "abcD: All Balanced Constituents for Digestive system"
     Vonopran — "Relief you can TRUST"

   Portfolio: Co-Benz, Pepzym, Vonopran 10 / 20.

   - modules  : shown IN THIS ORDER (each unlocks after the previous one is
                read and its quiz attempted). HTML allowed.
   - questions: `module` links a question to its module; `answer` is the
                0-based index of the correct option. Keep 10+ per module.
   Module ids are stored in managers' progress — don't rename them once
   managers have started; add new modules with new ids.
   ========================================================================== */
(function () {
const IMG = "assets/img/khyber-3/";
const fig = (file, alt, caption) =>
  `<figure><img src="${IMG}${file}" alt="${alt}" loading="lazy"><figcaption>${caption}</figcaption></figure>`;

const modules = [
  /* ------------------------------------------------------------------ 1 */
  {
    id: "m1",
    title: "Welcome & the Khyber-3 Portfolio",
    summary: "The three Khyber-3 brands, their themes and the therapy areas they cover.",
    body: `
      <p>Welcome to the <strong>Khyber-3</strong> team of <strong>Shaigan Pharmaceuticals</strong>. As a First Line Manager
      you will coach your Territory Managers on these brands every day, so you must know each one thoroughly —
      composition, mechanism, indications, dosing and the message on its <strong>current literature</strong>.</p>

      <h3>The portfolio at a glance</h3>
      <table>
        <tr><th>Brand</th><th>Composition</th><th>Pack</th><th>Theme (current literature)</th></tr>
        <tr><td><strong>Co-Benz</strong></td><td>Tramadol HCl 37.5 mg + Paracetamol (acetaminophen) 325 mg</td><td>Tablets, 1 × 10</td><td><em>COmfort beyond BENdZ</em></td></tr>
        <tr><td><strong>Pepzym</strong></td><td>Metoclopramide HCl 6 mg, Sodium dehydrocholate 20 mg, Bromelain P.U 35000, Pancreatin FIP P.U 210, Simethicone 50 mg</td><td>Tablets, 3 × 10</td><td><em>abcD — All Balanced Constituents for Digestive system</em></td></tr>
        <tr><td><strong>Vonopran 10 / 20</strong></td><td>Vonoprazan 10 mg / 20 mg — Potassium-Competitive Acid Blocker (P-CAB)</td><td>Tablets, 1 × 14</td><td><em>Relief you can TRUST</em></td></tr>
      </table>

      <h3>Two therapy areas</h3>
      <ul>
        <li><strong>Pain</strong> — <strong>Co-Benz</strong> combines a centrally acting analgesic (tramadol) with paracetamol for
        <em>moderate to severe pain</em>: faster onset and longer duration than either component alone.</li>
        <li><strong>Gastroenterology</strong> — <strong>Pepzym</strong> treats indigestion/dyspepsia and GI motility problems
        (including diabetic gastroparesis), while <strong>Vonopran</strong> is a new-generation acid blocker for GERD,
        ulcers and <em>H. pylori</em> eradication.</li>
      </ul>

      <h3>How the modules are organised</h3>
      <ol>
        <li>Pain and analgesics — the science behind Co-Benz</li>
        <li>Co-Benz — <em>COmfort beyond BENdZ</em></li>
        <li>The digestive system — anatomy and physiology</li>
        <li>Pepzym — <em>All Balanced Constituents for Digestive system</em></li>
        <li>Acid-related diseases and how the stomach makes acid</li>
        <li>Vonopran — <em>Relief you can TRUST</em></li>
        <li>Vonopran — the clinical evidence</li>
      </ol>
      <p>Each module has a minimum study time and a short quiz; the next module opens once you finish reading and attempt
      the quiz. The final assessment draws questions from every module.</p>

      <h3>Using the current message</h3>
      <p>Always detail with the <strong>latest literature</strong>. The themes above — <em>COmfort beyond BENdZ</em>,
      <em>abcD</em> and <em>Relief you can TRUST</em> — are the ones your team must use in front of doctors. Make sure
      Territory Managers carry the current drop cards and that every claim they make is one printed on the literature.</p>
    `
  },

  /* ------------------------------------------------------------------ 2 */
  {
    id: "m2",
    title: "Pain & Analgesics — the Science behind Co-Benz",
    summary: "Types of analgesics, NSAIDs, opioids, the WHO analgesic ladder and how paracetamol works.",
    body: `
      <p>Pain is the commonest reason patients see a doctor. To sell an analgesic well you must understand the
      different groups of pain-killers, where they act, and where a combination such as Co-Benz fits.</p>

      <h3>Types of analgesics</h3>
      ${fig("analgesic-types.jpg", "Analgesics are centrally acting (opioids, narcotic/morphine-like drugs) or peripherally acting (non-opioids, NSAIDs, non-narcotic/aspirin-like drugs)", "Analgesics: centrally acting vs peripherally acting")}
      <ul>
        <li><strong>Centrally acting — opioids</strong> (narcotic / morphine-like drugs): act on opioid receptors in the brain and spinal cord.</li>
        <li><strong>Peripherally acting — non-opioids / NSAIDs</strong> (non-narcotic / aspirin-like drugs): act mainly at the site of
        injury by blocking prostaglandin synthesis.</li>
      </ul>

      <h3>NSAIDs (Non-Steroidal Anti-Inflammatory Drugs)</h3>
      <p>NSAIDs block the <strong>cyclo-oxygenase (COX)</strong> enzymes that convert arachidonic acid into prostaglandins.</p>
      <table>
        <tr><th>Non-selective NSAIDs (COX-1 + COX-2)</th><th>Selective NSAIDs (COX-2)</th></tr>
        <tr><td>Diclofenac, Ibuprofen, Ketoprofen, Aspirin, Naproxen, Piroxicam, Indomethacin, Mefenamic acid</td>
            <td>Celecoxib, Rofecoxib, Etoricoxib, Meloxicam</td></tr>
      </table>
      <p>Because COX-1 prostaglandins protect the stomach lining, keep kidney blood flow and support platelets, NSAIDs
      carry risks of <strong>gastric injury/ulcers</strong>, kidney problems and (per FDA safety communications)
      increased <strong>heart attack and stroke</strong> risk. This is why a non-NSAID option such as Co-Benz is valuable.</p>

      <h3>Opioid analgesics</h3>
      ${fig("opioid-classes.jpg", "Opioid analgesics range from weak to strong: tramadol and codeine are weaker pure agonists; morphine, fentanyl, oxycodone are strong; buprenorphine is a partial agonist; pentazocine is an agonist/antagonist; naloxone and naltrexone are antagonists", "Opioids from weak to strong — note tramadol at the weak end")}
      <ul>
        <li>The word comes from <em>opium</em> (opium poppy). The body makes its own opioids — <strong>endorphins, enkephalins and dynorphins</strong>.</li>
        <li>Opioid receptors: <strong>mu (μ)</strong>, kappa (κ), delta (δ) and nociceptin. The <strong>mu receptor</strong> is the main one for pain relief.</li>
        <li>Classes: <strong>pure agonists</strong> (tramadol, codeine — weak; morphine, fentanyl, oxycodone — strong),
        <strong>partial agonists</strong> (buprenorphine), <strong>agonist/antagonists</strong> (pentazocine, nalbuphine) and
        <strong>antagonists</strong> (naloxone, naltrexone).</li>
        <li><strong>Tramadol is a weak opioid</strong> — strong enough for moderate to severe pain, with a lower risk than strong opioids.</li>
      </ul>

      <h3>The WHO analgesic ladder</h3>
      ${fig("who-ladder.jpg", "WHO analgesic ladder: Step 1 mild pain — non-opioid with or without adjuvant; Step 2 mild to moderate pain — opioid for mild to moderate pain plus non-opioid; Step 3 moderate to severe pain — opioid for moderate to severe pain plus non-opioid", "WHO analgesic ladder")}
      <table>
        <tr><th>Step</th><th>Pain</th><th>Treatment</th></tr>
        <tr><td>1</td><td>Mild</td><td>Non-opioid (e.g. paracetamol, NSAID) ± adjuvant</td></tr>
        <tr><td>2</td><td>Mild to moderate</td><td>Opioid for mild–moderate pain (e.g. <strong>tramadol</strong>) <strong>plus a non-opioid</strong> ± adjuvant</td></tr>
        <tr><td>3</td><td>Moderate to severe</td><td>Opioid for moderate–severe pain plus non-opioid ± adjuvant</td></tr>
      </table>
      <p>If pain persists, move <strong>up</strong> one step; if there are signs of toxicity or severe side effects, reduce the
      dose or move <strong>down</strong> one step. <strong>Co-Benz (tramadol + paracetamol) is a ready-made Step 2
      combination</strong> — a weak opioid plus a non-opioid in one tablet.</p>

      <h3>How paracetamol (acetaminophen) works</h3>
      ${fig("paracetamol-moa.jpg", "Tissue damage releases arachidonic acid; NSAIDs block COX-1 and COX-2, COX-2 inhibitors block COX-2, acetaminophen acts on COX-3; COX-1 prostaglandins maintain platelet activity, GI integrity and kidney function while COX-2 prostaglandins cause pain, inflammation and fever", "Where NSAIDs, COX-2 inhibitors and paracetamol act")}
      <ul>
        <li>Tissue damage releases <strong>arachidonic acid</strong>, which COX enzymes turn into prostaglandins.</li>
        <li><strong>COX-1</strong> prostaglandins: platelet activity (haemostasis), <strong>GI integrity</strong>, regulation of kidney function.</li>
        <li><strong>COX-2</strong> prostaglandins: <strong>pain, inflammation and fever</strong>.</li>
        <li>Paracetamol acts <strong>centrally</strong> (proposed <strong>COX-3</strong> in the brain), so it relieves pain and fever
        <strong>without the stomach damage</strong> of NSAIDs, but has little anti-inflammatory effect.</li>
      </ul>
    `
  },

  /* ------------------------------------------------------------------ 3 */
  {
    id: "m3",
    title: "Co-Benz — COmfort beyond BENdZ",
    summary: "Tramadol 37.5 mg + Paracetamol 325 mg: dual mechanism, faster onset, longer duration, indications and dosing.",
    body: `
      ${fig("cobenz-theme.jpg", "Co-Benz drop card front: COmfort beyond BENdZ — a grandfather playing with his grandson in a field", "Current theme: COmfort beyond BENdZ")}
      <p><strong>Co-Benz</strong> tablets contain <strong>Tramadol HCl USP 37.5 mg + Paracetamol (Acetaminophen) USP 325 mg</strong>
      (pack 1 × 10). The theme <em>COmfort beyond BENdZ</em> shows an elderly man freely bending to play with his grandchild —
      pain relief that lets patients bend, move and live comfortably.</p>

      <h3>Dual mechanism of action</h3>
      <p><strong>Paracetamol</strong> works centrally on prostaglandin synthesis (Module 2). <strong>Tramadol</strong> has two actions:</p>
      <ol>
        <li><strong>Opioid action</strong> — binds the <strong>μ (mu)-opioid receptor</strong> and inhibits pain signalling.</li>
        <li><strong>SNRI action</strong> — inhibits the <strong>reuptake of serotonin (5-HT) and noradrenaline (norepinephrine)</strong>,
        raising their levels in the synapse; these activate the descending pain-inhibiting pathway and block substance P release.</li>
      </ol>
      ${fig("tramadol-snri.jpg", "Tramadol as an SNRI: reuptake inhibition of serotonin and noradrenaline increases synaptic concentration, and tramadol binds the mu receptor on the postsynaptic neuron", "Tramadol: μ-receptor agonist + serotonin/noradrenaline reuptake inhibitor")}

      <h3>How opioids block pain (G-protein-coupled receptors)</h3>
      <p>Opioid receptors are <strong>GPCRs</strong>. When an opioid binds, the G-protein splits into an <strong>α</strong> unit and a
      <strong>βγ</strong> unit:</p>
      <ul>
        <li><strong>Presynaptic inhibition</strong> — the βγ unit stops <strong>voltage-gated calcium channels (VGCC)</strong> from opening, so
        Ca<sup>++</sup> cannot enter and <strong>no neurotransmitter (substance P)</strong> is released.</li>
        <li><strong>Postsynaptic inhibition</strong> — the βγ unit <strong>opens potassium channels</strong>; K<sup>+</sup> flows out, the
        neuron cannot depolarise and the pain signal stops.</li>
        <li><strong>Less cAMP</strong> — the G<sub>α i/o</sub> unit inhibits adenylyl cyclase, lowering cAMP and changing neurotransmission.</li>
        <li><strong>Descending pathway</strong> — opioids inhibit GABA neurons, so the descending pain-control pathway is
        released and inhibits the ascending pain pathway; at the spinal cord they block substance P release.</li>
      </ul>

      <h3>Why the combination wins — the drop-card data</h3>
      ${fig("cobenz-claims.jpg", "Co-Benz drop card back: duration of action Co-Benz 5.03 hr vs paracetamol 3.05 hr vs tramadol 2.03 hr; onset of action Co-Benz 17 min vs paracetamol 18 min vs tramadol 51 min; Co-Benz offers longer duration, faster onset, no effect on fracture healing, safer than NSAIDs; indications", "Co-Benz literature: onset, duration, offers and indications")}
      <table>
        <tr><th></th><th>Co-Benz (n=240)</th><th>Paracetamol (n=240)</th><th>Tramadol (n=238)</th></tr>
        <tr><td><strong>Onset of action</strong></td><td><strong>17 min</strong></td><td>18 min</td><td>51 min</td></tr>
        <tr><td><strong>Duration of action</strong></td><td><strong>5.03 hr</strong></td><td>3.05 hr</td><td>2.03 hr</td></tr>
      </table>
      <p>Paracetamol gives the <strong>fast start</strong>; tramadol gives the <strong>long tail</strong> — together Co-Benz starts working
      as fast as paracetamol and lasts longer than either drug alone.</p>

      <h3>Co-Benz offers</h3>
      <ul>
        <li><strong>Faster onset</strong> of pain relief</li>
        <li><strong>Longer duration</strong> of action</li>
        <li><strong>No effect on the fracture-healing process</strong> (unlike NSAIDs, which can slow bone healing)</li>
        <li><strong>Safer than NSAIDs</strong> (FDA drug safety communication on NSAID cardiovascular risk)</li>
      </ul>

      <h3>Indications (current literature)</h3>
      <table>
        <tr><td>Migraine</td><td>Sciatic pain</td></tr>
        <tr><td>Dental pain</td><td>OA &amp; RA pain</td></tr>
        <tr><td>Low back pain</td><td>Moderate to severe pain</td></tr>
        <tr><td>Fibromyalgia pain</td><td>Fracture / post-operative pain</td></tr>
      </table>

      <h3>Dosage</h3>
      <ul>
        <li><strong>One tablet twice a day.</strong> The doctor may increase the daily dose depending on pain severity.</li>
        <li><strong>Not more than 8 tablets per day</strong>; dosing interval <strong>not less than 6 hours</strong>.</li>
      </ul>

      <h3>Pharmacokinetics</h3>
      <table>
        <tr><td>Onset of action</td><td>17 minutes</td></tr>
        <tr><td>Duration</td><td>about 5 hours</td></tr>
        <tr><td>Bioavailability</td><td>75 – 90%</td></tr>
        <tr><td>T-max</td><td>10 – 60 minutes</td></tr>
        <tr><td>Protein binding</td><td>20%</td></tr>
        <tr><td>Elimination half-life</td><td>1 – 3 hours</td></tr>
      </table>

      <h3>Precautions</h3>
      <ul>
        <li>Hepatotoxicity (paracetamol component — respect the daily maximum)</li>
        <li>Risk of seizures</li>
        <li>Severe respiratory impairment</li>
        <li>Pregnancy category C</li>
        <li>Not recommended for children under 12 years</li>
      </ul>
      <h3>Contraindications</h3>
      <ul>
        <li>Hypersensitivity to any ingredient/excipient</li>
        <li>Uncontrolled epilepsy</li>
        <li>Pregnancy and lactation</li>
        <li>Severe hepatic impairment</li>
        <li>Severe respiratory impairment</li>
      </ul>
    `
  },

  /* ------------------------------------------------------------------ 4 */
  {
    id: "m4",
    title: "The Digestive System — Anatomy & Physiology",
    summary: "Parts of the GI tract, the stomach and its glands, the accessory organs and how digestion works.",
    body: `
      <p>Both Pepzym and Vonopran act on the digestive system, so a manager must be able to explain how it is built and
      how it works.</p>

      <h3>The gastrointestinal (GI) tract</h3>
      <p>The GI tract (digestive tract, alimentary canal or gut) takes in food, <strong>digests</strong> it to extract energy and
      nutrients, <strong>absorbs</strong> them and <strong>excretes</strong> the waste. In an adult man it is about
      <strong>6.5 metres (20 feet)</strong> long.</p>
      <ul>
        <li><strong>Upper GI tract:</strong> mouth, pharynx, oesophagus and stomach.</li>
        <li><strong>Lower GI tract:</strong> small intestine (duodenum, jejunum, ileum), large intestine (caecum, colon, rectum) and anus.</li>
      </ul>
      <p><strong>Digestion</strong> is the breakdown of food into simple chemical substances by digestive juices (enzymes), followed by absorption.</p>

      <h3>Mouth, pharynx and oesophagus</h3>
      <ul>
        <li>Saliva's <strong>mucin</strong> (a glycoprotein) lubricates food; salivary <strong>amylase</strong> starts the digestion of starch.</li>
        <li>The <strong>pharynx</strong> carries air to the larynx and food to the oesophagus; it has three parts —
        nasopharynx, oropharynx and laryngopharynx.</li>
        <li>The <strong>oesophagus</strong> (about <strong>25 cm</strong>) moves food to the stomach by <strong>peristalsis</strong>. At its base is the
        <strong>Lower Oesophageal Sphincter (LES)</strong>, a high-pressure zone that <strong>prevents acid reflux</strong> into the oesophagus.</li>
      </ul>

      <h3>The stomach</h3>
      ${fig("stomach-parts.jpg", "Parts of the stomach: cardia, fundus, body, antrum and pylorus", "Regions of the stomach")}
      <p>A muscular sac in the upper left abdomen, under the liver and diaphragm. Regions: <strong>cardia, fundus, body,
      antrum and pylorus</strong>. Functions: <strong>storage</strong> of food, <strong>digestion</strong> into a soupy mixture called
      <strong>chyme</strong>, and <strong>protection</strong> against bacteria and pathogens.</p>
      <table>
        <tr><th>Gastric gland cell</th><th>Secretes</th></tr>
        <tr><td><strong>Parietal (oxyntic) cells</strong></td><td><strong>Hydrochloric acid (HCl)</strong> and <strong>intrinsic factor</strong> (needed to absorb vitamin B12)</td></tr>
        <tr><td>Mucous neck (goblet) cells</td><td>Mucus and some pepsinogen</td></tr>
        <tr><td>Peptic (chief) cells</td><td>Large quantities of <strong>pepsinogen</strong></td></tr>
      </table>

      <h3>Small and large intestine</h3>
      <ul>
        <li>The <strong>small intestine</strong> runs from the pylorus to the ileo-caecal junction; it is where <strong>most digestion and
        absorption</strong> happen, through finger-like <strong>villi</strong>.</li>
        <li><strong>Duodenum</strong> — C-shaped, about 10 inches, wraps around the pancreas; the common bile duct and pancreatic duct open
        into it; <strong>most peptic ulcers occur here</strong>.</li>
        <li><strong>Jejunum</strong> (about 8 ft) and <strong>ileum</strong> (about 12 ft) complete the small intestine; the ileum opens into the large
        intestine through the ileo-caecal valve.</li>
        <li>The <strong>large intestine</strong> absorbs water and electrolytes, produces vitamin K and some B vitamins, and forms and
        excretes faeces.</li>
      </ul>

      <h3>Accessory organs</h3>
      <ul>
        <li><strong>Pancreas</strong> — <em>acinar cells</em> make the digestive enzymes (protease/trypsin for proteins, <strong>amylase</strong> for
        carbohydrates, <strong>lipase</strong> for fats); <em>ductal cells</em> make <strong>bicarbonate</strong> to neutralise acid chyme entering the duodenum.</li>
        <li><strong>Liver</strong> — produces <strong>bile</strong>, whose salts <strong>emulsify fats</strong>; bile is made continuously.</li>
        <li><strong>Gall bladder</strong> — stores bile and delivers it to the duodenum when needed; alkaline bile also helps neutralise chyme.</li>
      </ul>

      <h3>Physiology — six essential activities</h3>
      <p><strong>Ingestion, propulsion, mechanical digestion, chemical digestion, absorption and defecation.</strong></p>
      <ul>
        <li><strong>Mechanical digestion</strong> — chewing (mastication), swallowing, mixing with juices and moving food by peristalsis and segmentation.</li>
        <li><strong>Chemical digestion</strong> — enzymes in saliva, gastric juice and pancreatic juice.</li>
        <li><strong>Absorption</strong> — digested food passes through the villi into blood and lymph.</li>
        <li><strong>Excretion</strong> — unabsorbed food leaves the bowel as faeces.</li>
      </ul>
    `
  },

  /* ------------------------------------------------------------------ 5 */
  {
    id: "m5",
    title: "Pepzym — All Balanced Constituents for Digestive system",
    summary: "Five-ingredient Repetab (bilayer) tablet for indigestion, motility disorders and diabetic gastroparesis.",
    body: `
      ${fig("pepzym-theme.jpg", "Pepzym literature cover: abcD — All Balanced Constituents for Digestive system, with a two-layer tablet", "Current theme: abcD — All Balanced Constituents for Digestive system")}
      <p><strong>Pepzym</strong> (pack 3 × 10 tablets) brings <strong>five balanced ingredients</strong> together so that one tablet treats
      the different causes of indigestion — slow emptying, missing enzymes, poor fat digestion and gas. The theme
      <strong>abcD</strong> stands for <em>All Balanced Constituents for Digestive system</em>.</p>

      <h3>Composition</h3>
      <table>
        <tr><th>Ingredient</th><th>Strength</th><th>Role</th></tr>
        <tr><td><strong>Metoclopramide HCl</strong></td><td>6 mg</td><td>Gut motility regulator (prokinetic)</td></tr>
        <tr><td><strong>Sodium dehydrocholate</strong></td><td>20 mg</td><td>Choleretic (increases bile flow)</td></tr>
        <tr><td><strong>Bromelain</strong></td><td>P.U 35000</td><td>Digestive enzyme complex</td></tr>
        <tr><td><strong>Pancreatin</strong></td><td>FIP P.U 210</td><td>Pancreatic enzymes (protease, lipase, amylase)</td></tr>
        <tr><td><strong>Simethicone</strong></td><td>50 mg</td><td>Anti-flatulent</td></tr>
      </table>

      <h3>Repetab (bilayer) technology — the right ingredient in the right place</h3>
      ${fig("pepzym-bilayer.jpg", "Pepzym tablet: outer tablet contains metoclopramide, bromelain and simethicone; enteric-coated inner tablet contains pancreatin, sodium dehydrocholate and simethicone", "Outer tablet (stomach) and enteric-coated inner tablet (intestine)")}
      <ul>
        <li><strong>Outer tablet — dissolves in the stomach:</strong> Metoclopramide, Bromelain, Simethicone.</li>
        <li><strong>Enteric-coated inner tablet — dissolves only in the intestine:</strong> Pancreatin, Sodium dehydrocholate, Simethicone.</li>
      </ul>
      <p>The enteric coat protects the pancreatic enzymes from stomach acid so they are released where fat, protein and
      starch are digested — the small intestine.</p>

      <h3>What each ingredient does</h3>
      <ul>
        <li><strong>Metoclopramide</strong> — stimulates upper-GI motility; increases gastric peristalsis, <strong>accelerating gastric
        emptying</strong> and intestinal transit; <strong>increases the resting tone of the lower oesophageal sphincter</strong>.</li>
        <li><strong>Bromelain</strong> — a <strong>mixture of four enzymes</strong>; helps digestion and has an anti-inflammatory effect.</li>
        <li><strong>Pancreatin 4NF</strong> — <strong>four times as active</strong> as standard pancreatin; provides <strong>lipase</strong> (fats),
        <strong>protease</strong> (proteins) and <strong>amylase</strong> (carbohydrates).</li>
        <li><strong>Sodium dehydrocholate</strong> — a <strong>semi-synthetic bile acid</strong>; increases the volume and water content of bile
        without altering its contents, <strong>emulsifies fats</strong> and favours their absorption, improves biliary drainage, and also
        gives temporary relief of constipation.</li>
        <li><strong>Simethicone</strong> — <strong>reduces the surface tension of gas bubbles</strong>, minimising gas; used for flatulence and
        meteorism (gas pressure in the intestine).</li>
      </ul>

      <h3>Diabetic gastroparesis — the literature focus</h3>
      ${fig("pepzym-claims.jpg", "Pepzym literature: diabetic gastroparesis is the most common known cause of indigestion; 37.5% of patients with type 1 and type 2 diabetes report gastroparesis; symptoms nausea 18%, not able to finish meal 35%, bloating 44%, excessive fullness after meal 34%; metoclopramide is the only FDA-approved drug for gastroparesis; Pepzym with Repetab technology provides relief", "Pepzym literature: diabetic gastroparesis and indications")}
      <ul>
        <li><strong>Diabetic gastroparesis is the most common known cause of indigestion.</strong></li>
        <li><strong>37.5%</strong> of patients with type 1 and type 2 diabetes report gastroparesis.</li>
        <li>Symptoms reported: <strong>bloating 44%</strong>, not able to finish a meal 35%, excessive fullness after a meal 34%, nausea 18%.</li>
        <li><strong>Metoclopramide is the only FDA-approved drug for the treatment of gastroparesis</strong> — and it is in Pepzym.</li>
      </ul>

      <h3>Indications</h3>
      <p><strong>Pepzym with Repetab technology provides relief in:</strong></p>
      <ul>
        <li>GI motility disorders and enzyme deficiency</li>
        <li>Acute and chronic pancreatitis</li>
        <li>Cholelithiasis and post-cholecystectomy syndrome</li>
        <li><strong>All types of indigestion</strong> — dyspepsia from motility or secretory disorders, epigastric discomfort, feeling of
        fullness, abdominal distension, heartburn, belching, nausea, flatulence and post-prandial headache</li>
      </ul>

      <h3>Dosage</h3>
      <ul>
        <li><strong>1 or 2 tablets, 10 minutes before the main meals</strong>, depending on the severity of dyspepsia.</li>
        <li>The tablet may also be taken with meals.</li>
      </ul>

      <h3>Safety</h3>
      <ul>
        <li><strong>Not recommended in the first three months of pregnancy.</strong></li>
        <li>Extrapyramidal effects may appear on overdosage (metoclopramide).</li>
        <li>Excreted mainly through the urine; <strong>no dose adjustment</strong> needed in hepatic or renal impairment.</li>
      </ul>
    `
  },

  /* ------------------------------------------------------------------ 6 */
  {
    id: "m6",
    title: "Acid-Related Diseases & How the Stomach Makes Acid",
    summary: "GERD, peptic ulcer, H. pylori, NSAID gastropathy, Zollinger-Ellison syndrome, disease burden and the proton pump.",
    body: `
      <h3>Gastro-oesophageal reflux disease (GERD)</h3>
      <p>GERD occurs when stomach acid <strong>frequently flows back into the oesophagus</strong>, irritating its lining.</p>
      <ul>
        <li><strong>Heartburn</strong> is the characteristic symptom — usually <strong>40–45 minutes after a meal</strong>, worse on bending, lifting,
        straining or lying down, and triggered by acidic food and drink (tomatoes, orange juice, cola, alcohol).</li>
        <li>Other features: chest pain (can mimic angina), <strong>regurgitation</strong>, <strong>dysphagia</strong> (difficulty swallowing),
        nocturnal cough/asthma from aspiration.</li>
        <li>Complications: oesophageal stricture, oesophageal ulcer and <strong>Barrett's oesophagus</strong> (precancerous).</li>
        <li>Reasons: low LES tone (especially lying flat), poor oesophageal peristalsis, reduced mucosal resistance to acid,
        <strong>delayed gastric emptying</strong>; episodes are longest at night and after meals.</li>
        <li>Associated factors: poor diet, pregnancy, obesity, fats, chocolate, coffee, alcohol, systemic sclerosis.</li>
      </ul>
      <p><strong>Erosive oesophagitis</strong> is graded endoscopically by the <strong>Los Angeles (LA) classification</strong>, Grades A to D:</p>
      ${fig("la-classification.jpg", "LA classification of reflux oesophagitis: Grade A mucosal breaks 5 mm or less; Grade B more than 5 mm; Grade C bridging the tops of folds but less than 75% of the circumference; Grade D 75% or more", "LA classification of erosive (reflux) oesophagitis")}
      <table>
        <tr><th>LA Grade</th><th>Finding</th></tr>
        <tr><td>A</td><td>Mucosal break(s) ≤ 5 mm long</td></tr>
        <tr><td>B</td><td>Mucosal break(s) &gt; 5 mm long, not bridging folds</td></tr>
        <tr><td>C</td><td>Breaks bridging the tops of folds, &lt; 75% of the circumference</td></tr>
        <tr><td>D</td><td>Breaks involving ≥ 75% of the circumference (most severe)</td></tr>
      </table>

      <h3>Peptic ulcer disease</h3>
      <ul>
        <li>An <strong>ulcer</strong> is a lesion on a skin or mucosal surface caused by superficial loss of tissue, usually with inflammation.</li>
        <li><strong>Peptic ulcers</strong> are open sores in the lining of the <strong>stomach (gastric ulcer)</strong> or the
        <strong>duodenum (duodenal ulcer)</strong>; they can bleed and, long-term, are linked to gastric cancer.</li>
        <li>Symptoms: abdominal discomfort/burning, bloating, nausea, vomiting, poor appetite, weight loss — some patients have none.</li>
        <li>Predisposing factors: age, sex, genetics, diet, drugs, alcohol and smoking.</li>
      </ul>

      <h3>Helicobacter pylori</h3>
      <ul>
        <li>One of the commonest chronic bacterial infections — about <strong>4.4 billion people</strong> worldwide; the Vonopran literature notes
        that <strong>approximately 50% of the adult population</strong> is associated with <em>H. pylori</em>.</li>
        <li>Damages the protective lining of the stomach and duodenum, causing <strong>gastritis and ulcers</strong>; a strong risk factor for
        certain <strong>stomach cancers</strong>.</li>
        <li>Prevalence in Pakistan has been reported as high as <strong>92%</strong>.</li>
      </ul>

      <h3>NSAID-induced gastropathy</h3>
      <p>NSAIDs and aspirin (weak acids) block prostaglandins that protect the stomach <strong>and</strong> injure the mucosa directly. The
      result — <strong>NSAID gastropathy</strong> — raises the risk of symptomatic and complicated upper-GI ulcers. This is why ulcer
      prevention is needed in patients on long-term NSAIDs.</p>

      <h3>Zollinger-Ellison syndrome</h3>
      <p>A triad of <strong>gastric acid hypersecretion</strong>, severe peptic ulceration and a <strong>gastrin-secreting tumour (gastrinoma)</strong>
      of the pancreas or duodenum. Excess gastrin drives excessive HCl production.</p>

      <h3>Disease burden</h3>
      <ul>
        <li>GERD prevalence: USA 18.1–27.8%; Europe 8.8–25.9%.</li>
        <li><strong>In Pakistan, 24% of the population suffers from GERD.</strong></li>
        <li><strong>Pakistan spends nearly 27 billion PKR annually on acid-related diseases.</strong></li>
        <li>Peptic ulcer disease affects about 4.6 million people worldwide each year.</li>
      </ul>

      <h3>How the parietal cell makes acid</h3>
      ${fig("acid-formation.jpg", "Acid formation in the parietal cell: CO2 and chloride diffuse in, carbonic acid dissociates to bicarbonate and H+, and an ATP-driven pump secretes H+ into the gland duct", "Acid formation in the parietal cell")}
      <ol>
        <li>CO<sub>2</sub> and Cl<sup>−</sup> diffuse from the blood into the parietal cell.</li>
        <li>CO<sub>2</sub> + H<sub>2</sub>O form carbonic acid (H<sub>2</sub>CO<sub>3</sub>), which dissociates into <strong>H<sup>+</sup></strong> and bicarbonate (HCO<sub>3</sub><sup>−</sup>).</li>
        <li>The <strong>H<sup>+</sup>/K<sup>+</sup> ATPase — the proton pump</strong> — exchanges H<sup>+</sup> into the canaliculus for K<sup>+</sup>, using ATP.</li>
        <li>H<sup>+</sup> joins Cl<sup>−</sup> to form <strong>HCl</strong>, about <strong>a million times</strong> more concentrated in the gland duct than in the cell.</li>
      </ol>
      ${fig("proton-pump.jpg", "Proton pumps become activated in response to food; only active proton pumps can secrete acid; histamine, acetylcholine and gastrin stimulate the parietal cell", "Only active proton pumps can secrete acid")}
      <ul>
        <li>The parietal cell is stimulated by <strong>histamine (H2), acetylcholine and gastrin</strong>.</li>
        <li><strong>Proton pumps are activated in response to food</strong>; only active pumps (moved to the cell surface) can secrete acid,
        and not all pumps are active at one time.</li>
        <li><strong>Potassium (K<sup>+</sup>) is essential</strong> — the pump can only push out H<sup>+</sup> when it takes in K<sup>+</sup>. This is the
        step Vonopran blocks.</li>
      </ul>
      <p>On the pH scale, lower numbers are more acidic (lemon juice ≈ 2, blood ≈ 7.3). Each one-unit rise in pH means
      <strong>10 times less acidity</strong>; healing of acid damage depends on how long gastric pH stays <strong>above 4</strong>.</p>
    `
  },

  /* ------------------------------------------------------------------ 7 */
  {
    id: "m7",
    title: "Vonopran 10 / 20 — Relief you can TRUST",
    summary: "Vonoprazan, a P-CAB: mechanism, advantages over PPIs, pharmacokinetics, indications and dosage.",
    body: `
      ${fig("vonopran-theme.jpg", "Vonopran literature: Relief you can TRUST — day and night, a circular house of daily life under sun and moon", "Current theme: Relief you can TRUST — day and night")}
      <p><strong>Vonopran</strong> contains <strong>Vonoprazan</strong>, available as <strong>Vonopran 10 mg</strong> and <strong>Vonopran 20 mg</strong>
      (1 × 14 tablets). The theme <em>Relief you can TRUST</em> — with the sun and the moon over a patient's daily life — stands for
      reliable acid control around the clock, through meals, work and sleep.</p>

      <h3>Literature key messages</h3>
      <ul>
        <li><strong>Precise mode of action</strong></li>
        <li><strong>Rapid acid suppression</strong></li>
        <li><strong>No influence of meal</strong></li>
        <li><strong>FDA approved in <em>H. pylori</em> eradication therapy</strong></li>
        <li><strong>350 times higher potency than PPIs</strong></li>
      </ul>

      <h3>Mode of action — Potassium-Competitive Acid Blocker (P-CAB)</h3>
      ${fig("pcab-moa.jpg", "Vonoprazan mode of action: a potassium-competitive acid blocker that inhibits acid secretion by competitively blocking the availability of potassium to H+/K+ ATPase; active drug, stable in acid, no dependency on meal", "Vonoprazan competes with potassium at the proton pump")}
      <p>Vonoprazan is a <strong>Potassium-Competitive Acid Blocker (P-CAB)</strong>. It inhibits acid secretion by
      <strong>competitively blocking the availability of potassium (K<sup>+</sup>) to the H<sup>+</sup>/K<sup>+</sup> ATPase</strong> (proton pump).
      Without K<sup>+</sup>, the pump cannot exchange and push H<sup>+</sup> into the stomach. It binds <strong>reversibly</strong> to both
      <strong>active and inactive</strong> pumps and dissociates slowly, so its effect is strong and lasting.</p>

      <h3>Vonoprazan vs PPIs</h3>
      ${fig("vonopran-vs-ppi.jpg", "Vonopran literature: vonoprazan stability over PPI limitations table and FDA-approved therapy against H. pylori eradication — 93% vs 76% and 82% vs 40% in clarithromycin-resistant infection", "Vonopran literature: advantages over PPIs")}
      <table>
        <tr><th></th><th>Vonoprazan (Vonopran) — extra advantages</th><th>PPIs — limitations</th></tr>
        <tr><td>Onset of action</td><td><strong>Target 24-hour acid suppression within 2 hours</strong></td><td>Take <strong>4 to 5 days</strong> to reach maximum effect</td></tr>
        <tr><td>Plasma half-life</td><td><strong>Long — about 7 hours</strong></td><td>Short — about 2 hours</td></tr>
        <tr><td>Binding to proton pump</td><td><strong>Reversibly</strong> blocks <strong>active and inactive</strong> pumps, slow dissociation</td><td><strong>Irreversibly</strong> blocks <strong>active</strong> pumps only</td></tr>
        <tr><td>Influence of meal</td><td><strong>No influence of meal</strong></td><td>Must be taken 30 to 60 minutes before a meal</td></tr>
        <tr><td>Activation &amp; stability</td><td><strong>No activation needed; stable in acid</strong></td><td>Prodrugs that need acid for activation, yet are unstable in acid</td></tr>
      </table>
      ${fig("ppi-vs-pcab.jpg", "Limitations of PPIs (prodrug, short half-life, meal required) result in slow onset, limited potency and limited duration; advantages of P-CAB result in rapid onset, potent acid control and reliable 24-hour activity", "PPI limitations vs P-CAB advantages")}
      <p><strong>Result:</strong> PPIs give slow onset, limited potency and limited duration; a P-CAB gives <strong>rapid onset,
      potent acid control and reliable 24-hour activity</strong>.</p>

      <h3>The unmet need with PPIs</h3>
      ${fig("ppi-unmet-needs.jpg", "Unmet needs of patients on PPIs: reflux symptoms persist after first dose 66%, symptoms persist after 3 days 50%, heartburn and regurgitation not relieved 40%, patients used twice-daily PPI 22%, addition of another antacid required 42%", "Unmet needs of patients on PPI treatment")}
      <p>Because of slow onset and insufficient duration, PPI patients suffer <strong>nocturnal heartburn, post-prandial heartburn and
      weak treatment response</strong>. In a survey (Digestive Diseases and Sciences, 2010):</p>
      <ul>
        <li>Reflux symptoms persist after the 1st dose — <strong>66%</strong></li>
        <li>Symptoms persist after 3 days — <strong>50%</strong></li>
        <li>Heartburn and regurgitation not relieved — <strong>40%</strong></li>
        <li>Another antacid needed with the PPI — <strong>42%</strong></li>
        <li>Patients used twice-daily PPI — <strong>22%</strong></li>
      </ul>

      <h3>Pharmacokinetics</h3>
      <ul>
        <li>The <strong>stomach is the target organ</strong> — its effect relates to the vonoprazan concentration in the stomach rather than the plasma.</li>
        <li><strong>Cmax at 1.5–2.0 hours</strong> after an oral dose; <strong>food has minimal effect</strong> on absorption.</li>
        <li>Plasma protein binding <strong>80%</strong>; volume of distribution about <strong>1050 L</strong>.</li>
        <li>Mean terminal half-life about <strong>7.7 hours</strong> (the literature rounds this to 7 hours).</li>
      </ul>

      <h3>Indications</h3>
      <ul>
        <li>Gastro-oesophageal reflux / reflux oesophagitis / <strong>erosive oesophagitis</strong></li>
        <li>Peptic ulcer — <strong>gastric and duodenal ulcer</strong></li>
        <li>Prevention of <strong>NSAID-induced ulcer</strong></li>
        <li><strong><em>Helicobacter pylori</em> eradication</strong> (with triple therapy)</li>
      </ul>

      <h3>Dosage (current literature)</h3>
      ${fig("vonopran-dosage.jpg", "Vonopran literature: key messages, dosage table and Vonopran 10 and 20 packs", "Vonopran 10 / 20 dosage")}
      <table>
        <tr><th>Disease</th><th>Dose</th><th>Duration</th></tr>
        <tr><td>Reflux oesophagitis (EE)</td><td><strong>20 mg once daily</strong></td><td>4 weeks</td></tr>
        <tr><td>Maintenance of healed oesophagitis</td><td><strong>10 mg once daily</strong></td><td>—</td></tr>
        <tr><td>Gastric ulcer</td><td><strong>20 mg once daily</strong></td><td>8 weeks</td></tr>
        <tr><td>Duodenal ulcer</td><td><strong>20 mg once daily</strong></td><td>6 weeks</td></tr>
        <tr><td>Prevention of NSAID-induced ulcer</td><td><strong>10 mg once daily</strong></td><td>—</td></tr>
        <tr><td><em>H. pylori</em> eradication</td><td><strong>20 mg twice daily</strong> with triple regimen</td><td>One week</td></tr>
      </table>
      <p>Vonopran can be taken <strong>with or without food</strong> — no meal timing needed.</p>
    `
  },

  /* ------------------------------------------------------------------ 8 */
  {
    id: "m8",
    title: "Vonopran — the Clinical Evidence",
    summary: "Studies vs esomeprazole and lansoprazole: pH control, heartburn relief, EE healing and maintenance, H. pylori eradication, safety.",
    body: `
      <p>Doctors switch from a familiar PPI only when they see the evidence. These are the studies in the Vonopran
      training deck and literature — learn the headline numbers.</p>

      <h3>1. Rapid and potent acid control — vs esomeprazole 20 mg (Sakurai et al., AP&amp;T 2015)</h3>
      ${fig("vpz-ph-control.jpg", "Intragastric pH over 24 hours on Day 1 and Day 7: vonoprazan 20 mg keeps pH higher than esomeprazole 20 mg", "Vonoprazan 20 mg vs esomeprazole 20 mg — gastric pH, Day 1 and Day 7")}
      <ul>
        <li>Randomised, open-label; vonoprazan 20 mg vs esomeprazole 20 mg daily for 7 days.</li>
        <li>Time with pH ≥ 4 (pH4 HTR) was <strong>significantly greater with vonoprazan on Day 1 and Day 7</strong>; Day 7 difference <strong>24.6%</strong>.</li>
        <li>Day 1 / Day 7 ratio: <strong>&gt; 0.8 for vonoprazan vs 0.37 for esomeprazole</strong> — vonoprazan is almost fully effective from the first day.</li>
        <li>On Day 7 vonoprazan kept pH about <strong>1–2 units higher</strong> — a <strong>10- to 100-fold reduction in acidity</strong>.</li>
      </ul>

      <h3>2. Faster heartburn relief — vs lansoprazole 30 mg (Oshima et al., AP&amp;T 2019)</h3>
      <ul>
        <li>32 patients with erosive oesophagitis; vonoprazan 20 mg vs lansoprazole 30 mg before breakfast for 14 days (double-blind).</li>
        <li>Heartburn was relieved <strong>sooner</strong> with vonoprazan.</li>
        <li>Complete heartburn relief on <strong>Day 1: 31.3% vs 12.5%</strong>.</li>
        <li>Significantly more patients achieved complete <strong>night-time (nocturnal) heartburn relief</strong> with vonoprazan.</li>
      </ul>

      <h3>3. Healing erosive oesophagitis — vs lansoprazole 30 mg (Ashida et al., AP&amp;T 2016)</h3>
      ${fig("vpz-ee-healing.jpg", "Healing of erosive oesophagitis: all patients 91% vs 82% at week 2 and 99% vs 96% at week 8; LA grade C/D 88% vs 64% at week 2 and 99% vs 88% at week 8 — vonoprazan 20 mg vs lansoprazole 30 mg", "Superior healing rate in erosive oesophagitis")}
      <ul>
        <li>Multicentre, randomised, double-blind; endoscopically confirmed EE (LA Grades A–D).</li>
        <li>Healing up to <strong>week 8: 99.0% vs 95.5%</strong>.</li>
        <li>Faster healing: <strong>week 2 — 91% vs 82%</strong> (all patients).</li>
        <li>Severe <strong>LA Grade C/D</strong>: week 2 <strong>88% vs 64%</strong>; week 8 <strong>99% vs 88%</strong>.</li>
      </ul>

      <h3>4. Keeping it healed — maintenance vs lansoprazole 15 mg (Ashida et al., AP&amp;T 2018)</h3>
      ${fig("vpz-ee-recurrence.jpg", "Recurrence of erosive oesophagitis at 24 weeks: vonoprazan 20 mg 2%, vonoprazan 10 mg 5%, lansoprazole 15 mg 17%; in LA grade C/D 5%, 13% and 39%", "Minimal recurrence of erosive oesophagitis")}
      <ul>
        <li>607 patients with healed EE, randomised to vonoprazan 10 mg, vonoprazan 20 mg or lansoprazole 15 mg once daily for 24 weeks.</li>
        <li>Recurrence: <strong>vonoprazan 20 mg 2.0%</strong>, <strong>vonoprazan 10 mg 5.1%</strong> vs <strong>lansoprazole 15 mg 16.8%</strong>.</li>
        <li>In severe <strong>LA C/D</strong>: <strong>4.7%</strong> (20 mg) and <strong>13.2%</strong> (10 mg) vs <strong>39.0%</strong> with lansoprazole.</li>
      </ul>

      <h3>5. Better <em>H. pylori</em> eradication (Murakami et al., Gut 2016)</h3>
      ${fig("vpz-hpylori.jpg", "H. pylori eradication with triple therapy: vonoprazan 20 mg 93% vs lansoprazole 30 mg 76% in all patients; 82% vs 40% in clarithromycin-resistant infection", "Better eradication of H. pylori")}
      <ul>
        <li>Randomised, double-blind; vonoprazan 20 mg vs lansoprazole 30 mg, each with <strong>amoxicillin 750 mg + clarithromycin 200 or 400 mg</strong>
        (twice daily, 1 week), in <em>H. pylori</em>-positive patients with a history of gastric or duodenal ulcer.</li>
        <li>First-line eradication: <strong>92.6% vs 75.9%</strong> (literature: <strong>93% vs 76%</strong>).</li>
        <li><strong>Clarithromycin-resistant</strong> strains: <strong>82% vs 40%</strong>.</li>
        <li>Second-line (vonoprazan + amoxicillin + metronidazole) eradication: <strong>98%</strong>.</li>
      </ul>

      <h3>6. Reliable safety profile</h3>
      <ul>
        <li><strong>6,683 subjects</strong> received vonoprazan in clinical studies.</li>
        <li><strong>No dose-related increase</strong> in adverse events.</li>
        <li><strong>More than 23 million patients</strong> have received vonoprazan since launch.</li>
      </ul>

      <h3>Summary — why Vonopran</h3>
      <table>
        <tr><td><strong>Rapid</strong> onset of action</td><td>Target 24-h acid suppression within 2 hours</td></tr>
        <tr><td><strong>Potent</strong> acid control</td><td>350 times higher potency than PPIs</td></tr>
        <tr><td><strong>Durable</strong> 24-hour activity</td><td>Controls nocturnal and breakthrough heartburn</td></tr>
        <tr><td><strong>No influence of meal</strong></td><td>Take with or without food</td></tr>
        <tr><td><strong>Proven</strong></td><td>99% EE healing, minimal recurrence, 93% <em>H. pylori</em> eradication</td></tr>
      </table>
      <p>Close every Vonopran call on the theme: <strong><em>Relief you can TRUST</em></strong>.</p>
    `
  }
];

const questions = [
  /* ---- m1 Portfolio */
  { module: "m1", q: "Which of these brands is NOT in the Khyber-3 portfolio?",
    options: ["Esso 40", "Co-Benz", "Pepzym", "Vonopran"], answer: 0 },
  { module: "m1", q: "What is Co-Benz's current theme?",
    options: ["COmfort beyond BENdZ", "Relief you can TRUST", "Treat Deep", "The Gold Standard"], answer: 0 },
  { module: "m1", q: "What is Vonopran's current theme?",
    options: ["Relief you can TRUST", "COmfort beyond BENdZ", "Challenge Resolved", "Ultimate Care"], answer: 0 },
  { module: "m1", q: "In Pepzym's theme \"abcD\", what does it stand for?",
    options: ["All Balanced Constituents for Digestive system", "Acid Blocker for Complete Digestion", "Always Better Comfort in Dyspepsia", "Active Bilayer Core Delivery"], answer: 0 },
  { module: "m1", q: "What does Co-Benz contain?",
    options: ["Tramadol HCl 37.5 mg + Paracetamol 325 mg", "Tramadol 50 mg + Diclofenac 50 mg", "Paracetamol 500 mg + Caffeine 65 mg", "Codeine 30 mg + Paracetamol 325 mg"], answer: 0 },
  { module: "m1", q: "What is the active ingredient of Vonopran?",
    options: ["Vonoprazan", "Esomeprazole", "Famotidine", "Lansoprazole"], answer: 0 },
  { module: "m1", q: "In which strengths is Vonopran available?",
    options: ["10 mg and 20 mg", "20 mg and 40 mg", "15 mg and 30 mg", "40 mg only"], answer: 0 },
  { module: "m1", q: "Which Khyber-3 brand belongs to the pain therapy area?",
    options: ["Co-Benz", "Pepzym", "Vonopran", "None of them"], answer: 0 },
  { module: "m1", q: "To which drug class does Vonopran belong?",
    options: ["Potassium-Competitive Acid Blocker (P-CAB)", "Proton pump inhibitor (PPI)", "H2-receptor antagonist", "Antacid"], answer: 0 },
  { module: "m1", q: "What is the pack size of Pepzym?",
    options: ["3 × 10 tablets", "1 × 10 tablets", "1 × 14 tablets", "2 × 10 tablets"], answer: 0 },
  { module: "m1", q: "Which material should Territory Managers use when detailing?",
    options: ["The latest literature with its current themes and claims", "Any old drop card available", "Their own slogans", "Competitor literature"], answer: 0 },

  /* ---- m2 Pain science */
  { module: "m2", q: "Opioids are classified as which type of analgesic?",
    options: ["Centrally acting", "Peripherally acting", "Topical", "Anti-inflammatory steroids"], answer: 0 },
  { module: "m2", q: "Which opioid receptor is mainly responsible for pain relief?",
    options: ["Mu (μ)", "Kappa (κ)", "Delta (δ)", "Nociceptin"], answer: 0 },
  { module: "m2", q: "Which of these is a selective (COX-2) NSAID?",
    options: ["Celecoxib", "Diclofenac", "Ibuprofen", "Naproxen"], answer: 0 },
  { module: "m2", q: "Where does tramadol sit among opioids?",
    options: ["A weak pure agonist", "A strong pure agonist like fentanyl", "A pure antagonist", "A partial agonist like buprenorphine"], answer: 0 },
  { module: "m2", q: "Which of these is an opioid antagonist?",
    options: ["Naloxone", "Morphine", "Tramadol", "Codeine"], answer: 0 },
  { module: "m2", q: "On the WHO analgesic ladder, Step 2 (mild to moderate pain) is:",
    options: ["An opioid for mild–moderate pain plus a non-opioid", "A non-opioid alone", "A strong opioid alone", "Surgery"], answer: 0 },
  { module: "m2", q: "Co-Benz fits which step of the WHO analgesic ladder?",
    options: ["Step 2 — weak opioid plus non-opioid", "Step 1 — non-opioid only", "Step 3 — strong opioid", "It is not on the ladder"], answer: 0 },
  { module: "m2", q: "According to the WHO ladder, what should be done if pain persists?",
    options: ["Move up one step", "Move down one step", "Stop all analgesics", "Double the same dose indefinitely"], answer: 0 },
  { module: "m2", q: "Which prostaglandins protect GI integrity and kidney function?",
    options: ["COX-1 prostaglandins", "COX-2 prostaglandins", "COX-3 prostaglandins", "Leukotrienes"], answer: 0 },
  { module: "m2", q: "Paracetamol is thought to act mainly on which enzyme in the brain?",
    options: ["COX-3", "COX-1 in the stomach", "Lipoxygenase", "Adenylyl cyclase"], answer: 0 },
  { module: "m2", q: "Which are the body's own (endogenous) opioids?",
    options: ["Endorphins, enkephalins and dynorphins", "Histamine and serotonin", "Insulin and glucagon", "Prostaglandins and leukotrienes"], answer: 0 },
  { module: "m2", q: "A key advantage of paracetamol over NSAIDs is that it:",
    options: ["Relieves pain and fever without NSAID-type stomach damage", "Is strongly anti-inflammatory", "Is an opioid", "Has no maximum daily dose"], answer: 0 },

  /* ---- m3 Co-Benz */
  { module: "m3", q: "Tramadol relieves pain by which TWO actions?",
    options: ["μ-opioid receptor binding and serotonin/noradrenaline reuptake inhibition", "COX-1 and COX-2 inhibition", "Sodium channel block and GABA release", "Histamine block and calcium release"], answer: 0 },
  { module: "m3", q: "Per the Co-Benz literature, what is Co-Benz's onset of action?",
    options: ["17 minutes", "51 minutes", "5 minutes", "2 hours"], answer: 0 },
  { module: "m3", q: "Per the Co-Benz literature, what is Co-Benz's duration of action?",
    options: ["5.03 hours", "2.03 hours", "3.05 hours", "12 hours"], answer: 0 },
  { module: "m3", q: "In the drop-card data, what is the onset of tramadol alone?",
    options: ["51 minutes", "17 minutes", "18 minutes", "5 minutes"], answer: 0 },
  { module: "m3", q: "Which is one of the claims under \"Co-Benz Offers\" on the literature?",
    options: ["No effect on fracture healing process", "Cures osteoarthritis", "Strongest anti-inflammatory", "Once-a-week dosing"], answer: 0 },
  { module: "m3", q: "What is the usual Co-Benz dose?",
    options: ["One tablet twice a day", "Two tablets three times a day", "One tablet once a week", "Four tablets at bedtime"], answer: 0 },
  { module: "m3", q: "What is the maximum number of Co-Benz tablets per day?",
    options: ["8", "4", "12", "16"], answer: 0 },
  { module: "m3", q: "What is the minimum interval between Co-Benz doses?",
    options: ["6 hours", "1 hour", "2 hours", "24 hours"], answer: 0 },
  { module: "m3", q: "Which of these is a Co-Benz contraindication?",
    options: ["Uncontrolled epilepsy", "Mild headache", "Hypertension controlled on treatment", "Age over 60"], answer: 0 },
  { module: "m3", q: "Co-Benz is NOT recommended for children under what age?",
    options: ["12 years", "2 years", "18 years", "6 months"], answer: 0 },
  { module: "m3", q: "At the presynaptic neuron, opioids stop neurotransmitter release by:",
    options: ["Blocking voltage-gated calcium channels", "Opening sodium channels", "Increasing cAMP", "Stimulating COX-2"], answer: 0 },
  { module: "m3", q: "At the postsynaptic neuron, opioids prevent depolarisation by:",
    options: ["Opening potassium channels (K+ outflow)", "Closing chloride channels", "Releasing substance P", "Blocking acetylcholine"], answer: 0 },
  { module: "m3", q: "Which is listed as a Co-Benz indication on the current literature?",
    options: ["Fracture / post-operative pain", "Peptic ulcer", "Hypertension", "Diabetic gastroparesis"], answer: 0 },
  { module: "m3", q: "Which Co-Benz precaution relates to the paracetamol component?",
    options: ["Hepatotoxicity", "Hypoglycaemia", "Bradycardia", "Hair loss"], answer: 0 },

  /* ---- m4 Digestive system */
  { module: "m4", q: "Approximately how long is the GI tract in an adult man?",
    options: ["6.5 metres (20 feet)", "1 metre", "15 metres", "30 cm"], answer: 0 },
  { module: "m4", q: "Which structure at the base of the oesophagus prevents acid reflux?",
    options: ["Lower oesophageal sphincter (LES)", "Pyloric sphincter", "Ileo-caecal valve", "Epiglottis"], answer: 0 },
  { module: "m4", q: "Which stomach cells secrete hydrochloric acid?",
    options: ["Parietal (oxyntic) cells", "Chief (peptic) cells", "Goblet cells", "Acinar cells"], answer: 0 },
  { module: "m4", q: "Intrinsic factor, needed for vitamin B12 absorption, is made by:",
    options: ["Parietal cells", "Chief cells", "Liver cells", "Pancreatic ductal cells"], answer: 0 },
  { module: "m4", q: "Chief (peptic) cells secrete large quantities of:",
    options: ["Pepsinogen", "HCl", "Bile", "Insulin"], answer: 0 },
  { module: "m4", q: "Where do most digestion and absorption take place?",
    options: ["Small intestine", "Stomach", "Large intestine", "Oesophagus"], answer: 0 },
  { module: "m4", q: "In which part of the GI tract do most peptic ulcers occur?",
    options: ["Duodenum", "Ileum", "Colon", "Rectum"], answer: 0 },
  { module: "m4", q: "Which organ produces bile?",
    options: ["Liver", "Gall bladder", "Pancreas", "Stomach"], answer: 0 },
  { module: "m4", q: "What is the main role of bile salts?",
    options: ["Emulsify fats", "Digest proteins", "Produce acid", "Absorb water"], answer: 0 },
  { module: "m4", q: "Pancreatic ductal cells mainly produce:",
    options: ["Bicarbonate to neutralise acid chyme", "Pepsin", "Bile", "Hydrochloric acid"], answer: 0 },
  { module: "m4", q: "Which enzyme in saliva starts starch digestion?",
    options: ["Amylase", "Lipase", "Pepsin", "Trypsin"], answer: 0 },
  { module: "m4", q: "Which of these is NOT a region of the stomach?",
    options: ["Jejunum", "Fundus", "Antrum", "Pylorus"], answer: 0 },

  /* ---- m5 Pepzym */
  { module: "m5", q: "Which Pepzym ingredients are in the outer tablet that dissolves in the stomach?",
    options: ["Metoclopramide, Bromelain, Simethicone", "Pancreatin, Sodium dehydrocholate, Simethicone", "Only Pancreatin", "Vonoprazan and Simethicone"], answer: 0 },
  { module: "m5", q: "Why are Pancreatin and Sodium dehydrocholate in Pepzym's enteric-coated inner tablet?",
    options: ["So they are released in the intestine, protected from stomach acid", "To dissolve in the mouth", "To act faster in the stomach", "To reduce the tablet size"], answer: 0 },
  { module: "m5", q: "What is the metoclopramide strength in Pepzym?",
    options: ["6 mg", "10 mg", "20 mg", "50 mg"], answer: 0 },
  { module: "m5", q: "What does metoclopramide do in Pepzym?",
    options: ["Accelerates gastric emptying and raises LES tone", "Kills H. pylori", "Blocks the proton pump", "Emulsifies fats"], answer: 0 },
  { module: "m5", q: "How does simethicone work?",
    options: ["Reduces the surface tension of gas bubbles", "Neutralises acid", "Digests proteins", "Increases bile flow"], answer: 0 },
  { module: "m5", q: "Sodium dehydrocholate is best described as:",
    options: ["A semi-synthetic bile acid (choleretic)", "A pancreatic enzyme", "A prokinetic", "An antacid"], answer: 0 },
  { module: "m5", q: "Bromelain is:",
    options: ["A mixture of four enzymes that aids digestion", "A bile acid", "An anti-flatulent", "A dopamine blocker"], answer: 0 },
  { module: "m5", q: "Pancreatin 4NF is how many times as active as standard pancreatin?",
    options: ["4 times", "2 times", "10 times", "Equal"], answer: 0 },
  { module: "m5", q: "Per the Pepzym literature, what percentage of type 1 and type 2 diabetics report gastroparesis?",
    options: ["37.5%", "18%", "44%", "75%"], answer: 0 },
  { module: "m5", q: "Which is the most commonly reported gastroparesis symptom on the Pepzym literature (44%)?",
    options: ["Bloating", "Nausea", "Not able to finish a meal", "Excessive fullness after meal"], answer: 0 },
  { module: "m5", q: "According to the Pepzym literature, which is the only FDA-approved drug for gastroparesis?",
    options: ["Metoclopramide", "Simethicone", "Domperidone", "Bromelain"], answer: 0 },
  { module: "m5", q: "What is the recommended Pepzym dose?",
    options: ["1 or 2 tablets 10 minutes before main meals", "1 tablet at bedtime only", "4 tablets once a week", "1 tablet 2 hours after meals"], answer: 0 },
  { module: "m5", q: "When is Pepzym NOT recommended?",
    options: ["First three months of pregnancy", "In diabetic patients", "After a heavy meal", "In patients over 40"], answer: 0 },
  { module: "m5", q: "Which is a Pepzym indication on the current literature?",
    options: ["Cholelithiasis and post-cholecystectomy syndrome", "Migraine", "H. pylori eradication", "Fracture pain"], answer: 0 },
  { module: "m5", q: "The Pepzym literature describes the tablet's technology as:",
    options: ["Repetab technology", "Pelletization", "Osmotic pump", "Liposomal"], answer: 0 },

  /* ---- m6 Acid-related diseases */
  { module: "m6", q: "What is the characteristic symptom of GERD?",
    options: ["Heartburn", "Diarrhoea", "Headache", "Joint pain"], answer: 0 },
  { module: "m6", q: "Per the Vonopran literature, what percentage of Pakistan's population suffers from GERD?",
    options: ["24%", "8%", "50%", "92%"], answer: 0 },
  { module: "m6", q: "How much does Pakistan spend annually on acid-related diseases?",
    options: ["Nearly 27 billion PKR", "Nearly 2.7 billion PKR", "Nearly 270 billion PKR", "Nearly 27 million PKR"], answer: 0 },
  { module: "m6", q: "Which classification is used to grade erosive (reflux) oesophagitis?",
    options: ["Los Angeles (LA) classification, Grades A–D", "WHO ladder", "NYHA class I–IV", "Child-Pugh A–C"], answer: 0 },
  { module: "m6", q: "Which LA grade is the most severe (≥ 75% of the circumference)?",
    options: ["Grade D", "Grade A", "Grade B", "Grade C"], answer: 0 },
  { module: "m6", q: "A precancerous complication of chronic GERD is:",
    options: ["Barrett's oesophagus", "Achalasia", "Appendicitis", "Gallstones"], answer: 0 },
  { module: "m6", q: "Zollinger-Ellison syndrome is caused by a tumour secreting:",
    options: ["Gastrin", "Insulin", "Bile", "Secretin"], answer: 0 },
  { module: "m6", q: "What is the enzyme that forms the proton pump?",
    options: ["H+/K+ ATPase", "Na+/K+ ATPase", "Carbonic anhydrase only", "Adenylyl cyclase"], answer: 0 },
  { module: "m6", q: "To push H+ into the stomach, the proton pump exchanges it for which ion?",
    options: ["Potassium (K+)", "Sodium (Na+)", "Calcium (Ca++)", "Chloride (Cl−)"], answer: 0 },
  { module: "m6", q: "Which three substances stimulate the parietal cell to secrete acid?",
    options: ["Histamine, acetylcholine and gastrin", "Insulin, glucagon and cortisol", "Bile, lipase and amylase", "Serotonin, dopamine and GABA"], answer: 0 },
  { module: "m6", q: "Proton pumps become activated in response to:",
    options: ["Food", "Sleep", "Exercise", "Cold water"], answer: 0 },
  { module: "m6", q: "Why do NSAIDs cause gastropathy?",
    options: ["They block protective prostaglandins and injure the mucosa directly", "They increase mucus", "They kill H. pylori", "They raise gastric pH"], answer: 0 },
  { module: "m6", q: "A one-unit rise in gastric pH means acidity falls by:",
    options: ["10 times", "2 times", "100 times", "It does not change"], answer: 0 },

  /* ---- m7 Vonopran product */
  { module: "m7", q: "How does vonoprazan inhibit acid secretion?",
    options: ["By competitively blocking potassium's access to the H+/K+ ATPase", "By irreversibly binding active pumps after acid activation", "By blocking histamine H2 receptors", "By neutralising acid in the stomach"], answer: 0 },
  { module: "m7", q: "Per the literature, how quickly does vonoprazan achieve target 24-hour acid suppression?",
    options: ["Within 2 hours", "After 4 to 5 days", "After 2 weeks", "Within 10 minutes"], answer: 0 },
  { module: "m7", q: "How long do PPIs take to reach maximum effect (literature)?",
    options: ["4 to 5 days", "2 hours", "30 minutes", "4 weeks"], answer: 0 },
  { module: "m7", q: "What is vonoprazan's plasma half-life as stated on the literature?",
    options: ["About 7 hours", "About 2 hours", "About 30 minutes", "About 24 hours"], answer: 0 },
  { module: "m7", q: "Vonoprazan binds to which proton pumps?",
    options: ["Both active and inactive pumps, reversibly", "Only active pumps, irreversibly", "Only inactive pumps", "No pumps — it is an antacid"], answer: 0 },
  { module: "m7", q: "How does food affect vonoprazan?",
    options: ["No influence of meal — take with or without food", "Must be taken 60 minutes before breakfast", "Must be taken only with a fatty meal", "Food doubles its effect"], answer: 0 },
  { module: "m7", q: "Per the literature, vonoprazan has how many times higher potency than PPIs?",
    options: ["350 times", "3 times", "35 times", "1000 times"], answer: 0 },
  { module: "m7", q: "Why are PPIs limited by acid?",
    options: ["They are prodrugs that need acid for activation but are unstable in acid", "They are destroyed by food", "They block potassium", "They are absorbed only in the mouth"], answer: 0 },
  { module: "m7", q: "What is the Vonopran dose for reflux (erosive) oesophagitis?",
    options: ["20 mg once daily for 4 weeks", "10 mg once daily for 1 week", "20 mg twice daily for 8 weeks", "40 mg once daily for 12 weeks"], answer: 0 },
  { module: "m7", q: "What is the Vonopran dose for prevention of NSAID-induced ulcer?",
    options: ["10 mg once daily", "20 mg twice daily", "40 mg once daily", "20 mg once a week"], answer: 0 },
  { module: "m7", q: "What is the Vonopran regimen for H. pylori eradication?",
    options: ["20 mg twice daily with triple regimen for one week", "10 mg once daily for 4 weeks", "20 mg once daily alone for 8 weeks", "40 mg once a week"], answer: 0 },
  { module: "m7", q: "How long is Vonopran 20 mg given for a gastric ulcer?",
    options: ["8 weeks", "4 weeks", "1 week", "6 months"], answer: 0 },
  { module: "m7", q: "In the PPI patient survey, what percentage had reflux symptoms persisting after the first dose?",
    options: ["66%", "22%", "40%", "10%"], answer: 0 },
  { module: "m7", q: "What is vonoprazan's plasma protein binding?",
    options: ["80%", "20%", "99%", "50%"], answer: 0 },

  /* ---- m8 Vonopran evidence */
  { module: "m8", q: "In Murakami et al. (Gut 2016), what was the first-line H. pylori eradication rate with vonoprazan triple therapy?",
    options: ["92.6% (≈ 93%)", "75.9% (≈ 76%)", "50%", "40%"], answer: 0 },
  { module: "m8", q: "In clarithromycin-resistant H. pylori, eradication with vonoprazan vs lansoprazole triple therapy was:",
    options: ["82% vs 40%", "93% vs 76%", "50% vs 50%", "40% vs 82%"], answer: 0 },
  { module: "m8", q: "What was the erosive oesophagitis healing rate with vonoprazan up to week 8 (Ashida 2016)?",
    options: ["99.0%", "82%", "64%", "75.9%"], answer: 0 },
  { module: "m8", q: "In severe LA Grade C/D oesophagitis at week 2, healing with vonoprazan vs lansoprazole was:",
    options: ["88% vs 64%", "99% vs 96%", "50% vs 50%", "64% vs 88%"], answer: 0 },
  { module: "m8", q: "In the 24-week maintenance study, EE recurrence with vonoprazan 20 mg was:",
    options: ["2.0%", "16.8%", "39.0%", "25%"], answer: 0 },
  { module: "m8", q: "In the maintenance study, EE recurrence with lansoprazole 15 mg was:",
    options: ["16.8%", "2.0%", "5.1%", "0%"], answer: 0 },
  { module: "m8", q: "In the heartburn study (Oshima), complete heartburn relief on Day 1 was:",
    options: ["31.3% with vonoprazan vs 12.5% with lansoprazole", "12.5% with vonoprazan vs 31.3% with lansoprazole", "100% in both", "50% vs 50%"], answer: 0 },
  { module: "m8", q: "Vonoprazan's heartburn relief advantage was most pronounced for:",
    options: ["Night-time (nocturnal) heartburn", "Morning nausea", "Exercise-induced pain", "Headache"], answer: 0 },
  { module: "m8", q: "Against esomeprazole 20 mg (Sakurai 2015), the Day 1 / Day 7 pH4 ratio for vonoprazan was:",
    options: ["> 0.8 (vs 0.37 for esomeprazole)", "0.37 (vs > 0.8 for esomeprazole)", "0.1", "Exactly 2.0"], answer: 0 },
  { module: "m8", q: "Keeping gastric pH 1–2 units higher means a reduction in acidity of:",
    options: ["10- to 100-fold", "2-fold", "1000-fold", "No change"], answer: 0 },
  { module: "m8", q: "How many patients have received vonoprazan since launch, per the training deck?",
    options: ["More than 23 million", "About 6,000", "About 1 million", "About 500"], answer: 0 },
  { module: "m8", q: "What did clinical studies of 6,683 subjects show about vonoprazan safety?",
    options: ["No dose-related increase in adverse events", "Serious liver toxicity at all doses", "Must be stopped after 3 days", "Not studied in humans"], answer: 0 },
  { module: "m8", q: "In the H. pylori study, vonoprazan triple therapy used which antibiotics?",
    options: ["Amoxicillin and clarithromycin", "Metronidazole and tetracycline only", "Ciprofloxacin and doxycycline", "No antibiotics"], answer: 0 }
];

window.K1Content.register("Khyber-3", { modules, questions });
})();
