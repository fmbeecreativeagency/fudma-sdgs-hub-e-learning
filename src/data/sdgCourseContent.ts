export interface Chapter {
  id: number;
  title: string;
  content: string;
}

export interface CourseContent {
  sdgId: number;
  overview: string;
  chapters: Chapter[];
}

export const sdgCourseContents: CourseContent[] = [
  {
    sdgId: 1,
    overview: "This course explores the global challenge of poverty, its root causes, and strategies for eradication — with a focus on the Nigerian and African experience.",
    chapters: [
      {
        id: 1,
        title: "Understanding Poverty: Definitions and Dimensions",
        content: `Poverty is more than just a lack of income. The United Nations defines poverty as a condition where individuals lack the financial resources and essentials for a minimum standard of living. However, poverty is multidimensional — it includes lack of access to education, healthcare, clean water, adequate shelter, and social exclusion.

**Types of Poverty:**
- **Absolute Poverty:** Living below a defined threshold (currently $2.15/day by World Bank standards). In Nigeria, the National Bureau of Statistics estimated that about 63% of Nigerians (133 million people) are multidimensionally poor as of 2022.
- **Relative Poverty:** Being poor compared to others in the same society. Even within Nigerian cities like Lagos or Abuja, wealth disparity is staggering.
- **Transient vs Chronic Poverty:** Transient poverty is temporary (e.g., caused by a flood or job loss), while chronic poverty persists across generations.

**Key Indicators:**
- Income levels and purchasing power
- Access to basic services (health, education, water)
- Nutrition and food security
- Housing quality and overcrowding

**The Nigerian Context:**
Nigeria is Africa's largest economy, yet it also has one of the highest poverty rates. The North-East and North-West zones have the highest poverty incidence, with rates above 80% in some states. Factors include insurgency (Boko Haram), low educational attainment, and limited infrastructure.`
      },
      {
        id: 2,
        title: "Root Causes of Poverty in Africa",
        content: `Understanding why poverty persists requires examining structural, historical, and systemic factors.

**Historical Causes:**
- **Colonial Legacy:** Colonial economies were extractive — designed to export raw materials, not to develop local industries. This left many African nations with weak industrial bases at independence.
- **Slave Trade Impact:** Centuries of the transatlantic slave trade depleted populations and disrupted social structures across West Africa, including present-day Nigeria.

**Structural Causes:**
- **Weak Governance and Corruption:** Transparency International consistently ranks many African nations low on its Corruption Perceptions Index. In Nigeria, billions of dollars have been lost to corruption since independence.
- **Conflict and Insecurity:** The Boko Haram insurgency in the North-East has displaced over 2 million people and destroyed livelihoods.
- **Poor Infrastructure:** Only about 36% of Nigeria's road network is paved. Poor roads increase the cost of transporting goods, hurting farmers and traders.
- **Unemployment:** Nigeria's unemployment rate was 33.3% (Q4 2020, NBS), with youth unemployment even higher.

**Environmental Causes:**
- Climate change leads to desertification in the Sahel region, flooding in the Niger Delta, and unpredictable rainfall patterns affecting agriculture.
- Over 70% of Nigerians depend on agriculture, making them vulnerable to environmental shocks.

**Gender Dimension:**
- Women in rural Nigeria often lack land ownership rights, access to credit, and educational opportunities, deepening their poverty.`
      },
      {
        id: 3,
        title: "Global and Local Strategies Against Poverty",
        content: `Multiple strategies exist at international, national, and community levels to combat poverty.

**International Frameworks:**
- The UN's SDG 1 aims to end poverty in all its forms by 2030.
- The World Bank provides loans and grants to developing nations for poverty reduction programs.
- The African Union's Agenda 2063 envisions a prosperous Africa driven by its own citizens.

**National Strategies in Nigeria:**
- **National Social Investment Programme (NSIP):** Launched in 2016, this includes:
  - *N-Power:* Provides temporary employment for graduates in teaching, agriculture, and health.
  - *TraderMoni:* Interest-free loans for petty traders.
  - *Conditional Cash Transfer:* Direct payments to the poorest households.
- **Anchor Borrowers' Programme:** The Central Bank of Nigeria (CBN) provides loans to smallholder farmers to boost agricultural output.

**Community-Based Approaches:**
- **The Ajo/Esusu System:** A traditional rotating savings system practiced across Yoruba communities. Members contribute fixed amounts regularly, and each member takes the total in turns. This indigenous system provides access to lump sums without formal banking, enabling small investments, school fees payment, or business startup.
- **Cooperative Societies:** Groups of farmers or traders pool resources to access better prices, bulk inputs, and shared equipment.
- **Microfinance:** Institutions like LAPO (Lift Above Poverty Organisation) and Grameen-style models provide small loans to the poor, especially women.

**Case Study — Kano State:**
Kano's "Tsangaya" schools have been integrated into formal education through the Almajiri Education Programme, aiming to reduce child poverty by giving Quranic school students access to Western education and vocational training.`
      },
      {
        id: 4,
        title: "Measuring Progress and the Road Ahead",
        content: `Tracking poverty reduction requires robust data and clear metrics.

**Key Measurement Tools:**
- **Multidimensional Poverty Index (MPI):** Developed by UNDP and Oxford, it measures poverty across health, education, and living standards. Nigeria's MPI reveals that poverty is concentrated in rural areas and the northern zones.
- **Gini Coefficient:** Measures income inequality. A Gini of 0 means perfect equality; 1 means maximum inequality. Nigeria's Gini is approximately 0.35, indicating moderate inequality.
- **Human Development Index (HDI):** Combines life expectancy, education, and per capita income. Nigeria's HDI is 0.535 (2021), ranking 163 out of 191 countries.

**Progress So Far:**
- Global extreme poverty fell from 36% in 1990 to about 9% in 2019, but COVID-19 reversed some gains.
- In Nigeria, the number of people in extreme poverty increased during the pandemic due to lockdowns and economic contraction.
- Sub-Saharan Africa accounts for over 60% of the world's extreme poor.

**Challenges:**
- Population growth outpaces economic growth in many African countries. Nigeria's population grows at about 2.6% annually.
- Inflation erodes purchasing power — Nigeria's inflation rate exceeded 30% in 2023.
- Climate change threatens agricultural livelihoods.

**The Road Ahead:**
- Invest in human capital: education, healthcare, and skills training.
- Diversify economies away from oil dependence.
- Strengthen social safety nets and make them more inclusive.
- Leverage technology: mobile banking (M-Pesa model) and digital platforms for farmers.
- Empower women and youth as agents of change.`
      }
    ]
  },
  {
    sdgId: 2,
    overview: "This course examines global hunger, food security, and sustainable agriculture — with emphasis on Nigeria's agricultural landscape and African food systems.",
    chapters: [
      {
        id: 1,
        title: "Understanding Hunger and Food Security",
        content: `Hunger is not just about not having enough food — it's about the quality, consistency, and accessibility of nutrition.

**Key Definitions:**
- **Food Security:** When all people, at all times, have physical and economic access to sufficient, safe, and nutritious food (FAO definition).
- **Food Insecurity:** The state of being without reliable access to sufficient affordable, nutritious food.
- **Malnutrition:** Includes undernutrition (stunting, wasting), micronutrient deficiencies (hidden hunger), and overweight/obesity.

**Global Statistics:**
- About 735 million people faced chronic hunger in 2022 (FAO).
- Africa has the highest prevalence of undernourishment at 20%.

**The Nigerian Situation:**
- Nigeria is the most populous country in Africa (over 220 million people) and faces significant food insecurity.
- About 25 million Nigerians face acute food insecurity (IPC Phase 3+).
- The North-East is most affected due to the Boko Haram conflict, which has displaced farmers and disrupted food systems.
- Stunting affects 37% of Nigerian children under 5, one of the highest rates globally.

**Causes of Hunger in Nigeria:**
- Conflict and displacement in the North-East
- Poor post-harvest storage (30-40% of produce is lost)
- Inadequate irrigation infrastructure
- Rising food prices due to inflation and naira depreciation
- Limited access to improved seeds and fertilizers`
      },
      {
        id: 2,
        title: "Agriculture in Nigeria: Challenges and Opportunities",
        content: `Agriculture is the backbone of Nigeria's economy, employing over 70% of the rural population, yet it contributes only about 24% of GDP.

**Historical Context:**
- Pre-independence, Nigeria was a major exporter of groundnuts, cocoa, palm oil, and rubber. The oil boom of the 1970s led to "Dutch Disease" — agriculture was neglected as oil revenues surged.
- Today, Nigeria imports over $3 billion in food annually, including rice, wheat, and fish.

**Major Crops:**
- *Food crops:* Cassava (Nigeria is the world's largest producer), yams, maize, rice, sorghum, millet
- *Cash crops:* Cocoa, palm oil, rubber, cotton, sesame

**Challenges:**
- **Land Tenure Issues:** The Land Use Act of 1978 vests all land in state governors, making it difficult for smallholders to secure land rights.
- **Climate Change:** Erratic rainfall, desertification in the North, and flooding in the South affect yields.
- **Herder-Farmer Conflicts:** Competition for land between Fulani herders and crop farmers has led to violent conflicts across the Middle Belt.
- **Low Mechanization:** Only about 10% of Nigerian farmers use tractors or modern equipment.
- **Financing:** Banks consider agriculture high-risk; most farmers rely on personal savings.

**Opportunities:**
- Nigeria has 84 million hectares of arable land, only about 40% is cultivated.
- Growing demand for locally produced food creates market opportunities.
- Technology (precision farming, drone monitoring, mobile apps for market prices) can boost productivity.
- Value chain development: processing cassava into starch, flour, and ethanol creates jobs and adds value.`
      },
      {
        id: 3,
        title: "Sustainable Agriculture and Food Systems",
        content: `Sustainable agriculture meets current food needs without compromising future generations' ability to feed themselves.

**Principles of Sustainable Agriculture:**
- Minimize environmental impact (reduce pesticide/fertilizer use)
- Conserve natural resources (soil, water, biodiversity)
- Ensure economic viability for farmers
- Promote social equity and food access

**Sustainable Practices in the African Context:**
- **Agroforestry:** Integrating trees with crops. In the Sahel, the "Farmer Managed Natural Regeneration" technique has restored millions of hectares in Niger and is being adopted in Northern Nigeria.
- **Intercropping:** Growing multiple crops together (e.g., maize and cowpea), which improves soil fertility and reduces pest damage.
- **Organic Farming:** Reducing chemical inputs. The "Songhai Model" from Benin Republic demonstrates integrated organic farming that has been replicated across Africa.
- **Conservation Agriculture:** Minimum tillage, permanent soil cover, and crop rotation to maintain soil health.

**Technology for Sustainability:**
- **Mobile Platforms:** Apps like "FarmCrowdy" and "Thrive Agric" connect Nigerian farmers to investors and markets.
- **Weather Information:** The Nigerian Meteorological Agency (NiMet) provides seasonal forecasts, though distribution to rural farmers remains limited.
- **Improved Seeds:** Organisations like IITA (International Institute of Tropical Agriculture, headquartered in Ibadan) develop drought-resistant and disease-resistant crop varieties.

**School Feeding Programme:**
Nigeria's National Home-Grown School Feeding Programme (NHGSFP) feeds over 10 million pupils daily using locally sourced ingredients, simultaneously addressing hunger and supporting local farmers.`
      },
      {
        id: 4,
        title: "Policy, Nutrition, and the Path to Zero Hunger",
        content: `Achieving Zero Hunger requires comprehensive policies, nutrition interventions, and sustained investment.

**Key Policies and Programmes:**
- **Agricultural Promotion Policy (APP) 2016-2020:** Focused on food security and import substitution, particularly for rice, wheat, and tomatoes.
- **Anchor Borrowers' Programme:** CBN initiative providing subsidised loans to smallholder farmers through commercial banks.
- **Presidential Fertilizer Initiative:** Aims to make fertilizers affordable and accessible to farmers.
- **ECOWAS Agricultural Policy (ECOWAP):** Regional framework for food security in West Africa.

**Nutrition Interventions:**
- **Vitamin A Supplementation:** Nigeria runs biannual campaigns to reduce Vitamin A deficiency in children.
- **Exclusive Breastfeeding:** Only about 29% of Nigerian mothers exclusively breastfeed for six months. Community health workers promote this vital practice.
- **Food Fortification:** Flour, cooking oil, sugar, and salt are fortified with essential micronutrients under the National Food Fortification Programme.
- **Ready-to-Use Therapeutic Food (RUTF):** Used to treat severe acute malnutrition, especially in IDP camps in the North-East.

**Role of Women:**
Women produce up to 80% of food in Sub-Saharan Africa, yet they own less than 20% of agricultural land. Empowering women farmers through land rights, credit access, and training is critical for food security.

**Community Solutions:**
- Urban farming initiatives in Lagos and Abuja
- Fish farming (aquaculture) is growing rapidly, with catfish being the most popular species
- The "Fadama" programme supports community-driven agricultural development in low-lying areas

**Looking Forward:**
Achieving Zero Hunger in Nigeria requires addressing the "triple burden" of malnutrition (undernutrition, micronutrient deficiency, and obesity), investing in agricultural research, and building resilient food systems that can withstand climate shocks and conflicts.`
      }
    ]
  },
  {
    sdgId: 3,
    overview: "This course covers global health challenges, disease prevention, and healthcare systems — with particular focus on Nigeria's health landscape.",
    chapters: [
      {
        id: 1,
        title: "Health Challenges in Nigeria and Africa",
        content: `Africa faces a unique set of health challenges shaped by history, geography, economics, and social factors.

**Leading Health Issues in Nigeria:**
- **Malaria:** Nigeria accounts for about 27% of global malaria cases and 23% of malaria deaths. It remains the leading cause of death in children under 5.
- **HIV/AIDS:** Nigeria has the second-largest HIV epidemic globally, with about 1.9 million people living with HIV. Antiretroviral therapy (ART) coverage has improved but gaps remain.
- **Maternal and Child Mortality:** Nigeria's maternal mortality ratio is approximately 512 per 100,000 live births — one of the highest in the world. About 20% of global under-5 deaths occur in Nigeria.
- **Tuberculosis (TB):** Nigeria ranks 6th globally in TB burden, with many cases going undiagnosed and untreated.

**Emerging Health Issues:**
- **Non-Communicable Diseases (NCDs):** Hypertension, diabetes, cancer, and mental health disorders are increasing due to urbanisation and lifestyle changes.
- **COVID-19 Impact:** The pandemic exposed weaknesses in Nigeria's health infrastructure, including limited ICU beds, oxygen supply, and testing capacity.
- **Lassa Fever:** An endemic viral hemorrhagic fever, especially in Edo, Ondo, and Bauchi states.

**Health Infrastructure:**
- Nigeria has about 4 doctors per 10,000 people (WHO recommends at least 10).
- "Japa" (brain drain): Thousands of Nigerian doctors and nurses emigrate annually to the UK, US, Canada, and Gulf states.
- Many rural communities rely on patent medicine vendors (chemists) as their primary healthcare providers.
- Traditional medicine remains widely used, with about 80% of Nigerians consulting traditional healers at some point.`
      },
      {
        id: 2,
        title: "Maternal, Newborn, and Child Health",
        content: `Improving maternal and child health is central to SDG 3 and has particular urgency in Nigeria.

**The Scale of the Challenge:**
- A Nigerian woman has a 1 in 22 lifetime risk of dying during pregnancy or childbirth (compared to 1 in 4,900 in developed countries).
- About 60% of births in Nigeria occur outside health facilities, often attended by traditional birth attendants (TBAs).
- Northern Nigeria has significantly worse maternal health indicators than the South.

**Key Interventions:**
- **Antenatal Care (ANC):** WHO recommends at least 8 ANC visits. Only about 57% of Nigerian women have at least 4 visits.
- **Skilled Birth Attendance:** Ensuring deliveries are assisted by trained midwives or doctors reduces complications.
- **Emergency Obstetric Care (EmOC):** Availability of blood transfusion, caesarean section, and other emergency interventions saves lives.
- **Immunization:** Nigeria's Expanded Programme on Immunization (EPI) targets diseases like polio, measles, and hepatitis B. Nigeria was certified wild poliovirus-free in 2020 after decades of effort.

**Newborn Health:**
- Neonatal deaths (within first 28 days) account for about 29% of under-5 deaths in Nigeria.
- Key causes: prematurity, birth asphyxia, neonatal sepsis.
- Kangaroo Mother Care (skin-to-skin contact) is an effective low-cost intervention for premature babies.

**Child Health:**
- Pneumonia, diarrhoea, and malaria are the top killers of children under 5.
- Oral Rehydration Therapy (ORT) for diarrhoea is simple and effective but underutilised.
- Integrated Community Case Management (iCCM) trains community health workers to treat common childhood illnesses in remote areas.

**Cultural Considerations:**
- In some communities, women need permission from their husbands or mothers-in-law before seeking healthcare.
- Religious and cultural beliefs sometimes delay or prevent medical treatment.
- Community engagement and male involvement are crucial for improving maternal health outcomes.`
      },
      {
        id: 3,
        title: "Disease Prevention and Health Promotion",
        content: `Prevention is more cost-effective than treatment, yet many African health systems are curative-focused.

**Key Prevention Strategies:**
- **Vaccination:** One of the most cost-effective health interventions. Nigeria's routine immunization coverage has improved but remains below 70% for many antigens.
- **Insecticide-Treated Nets (ITNs):** Mass distribution campaigns have increased net ownership, but usage remains inconsistent (nets used as fishing nets, curtains, etc.).
- **Water, Sanitation and Hygiene (WASH):** About 60 million Nigerians lack access to clean drinking water. Open defecation remains a problem, with Nigeria having one of the highest rates globally.
- **Health Education:** Community health workers, radio programmes, and social media campaigns promote health literacy.

**Mental Health:**
- Mental health is significantly under-prioritised in Nigeria. There are fewer than 150 psychiatrists for over 220 million people.
- The Lunacy Act of 1958 (now being reviewed) governs mental health law — it is outdated and stigmatising.
- Common conditions include depression, anxiety, substance abuse, and psychosis.
- Traditional and faith-based healers often provide the first line of mental health support.

**Substance Abuse:**
- Nigeria has high rates of substance abuse, including cannabis, codeine (cough syrup), tramadol, and alcohol.
- The NDLEA (National Drug Law Enforcement Agency) leads enforcement, but prevention and treatment services are limited.
- The BBC Africa Eye documentary "Sweet Sweet Codeine" (2018) brought national attention to the codeine crisis.

**Sexual and Reproductive Health:**
- Contraceptive prevalence rate is about 17% (modern methods) in Nigeria.
- Adolescent birth rates remain high, especially in the North.
- Comprehensive sexuality education faces cultural and religious resistance in many communities.`
      },
      {
        id: 4,
        title: "Strengthening Health Systems for Universal Health Coverage",
        content: `Universal Health Coverage (UHC) means everyone receives quality health services without financial hardship.

**Nigeria's Health System Structure:**
- **Primary Health Care (PHC):** Managed by local governments. Most PHC centres are understaffed and underfunded.
- **Secondary Health Care:** General hospitals managed by state governments.
- **Tertiary Health Care:** Teaching hospitals and federal medical centres managed by the federal government.

**Health Financing:**
- Nigeria's health expenditure is about 3.8% of GDP — well below the Abuja Declaration target of 15%.
- Out-of-pocket spending accounts for over 70% of health expenditure, pushing millions into poverty.
- The National Health Insurance Authority (NHIA) was established to expand coverage, but less than 5% of Nigerians have health insurance.

**Key Reforms and Initiatives:**
- **Basic Health Care Provision Fund (BHCPF):** Established by the National Health Act 2014, it allocates 1% of the Consolidated Revenue Fund to primary healthcare.
- **Primary Health Care Under One Roof (PHCUOR):** A policy to streamline PHC governance and improve service delivery.
- **Community Health Influencers, Promoters, and Services (CHIPS):** Programme to deploy community health workers across Nigeria.

**Technology in Healthcare:**
- **Telemedicine:** Platforms like "mDoc" and "Helium Health" provide remote consultations and electronic health records.
- **Mobile Health (mHealth):** SMS-based health information services reach rural populations.
- **Health Information Systems:** The District Health Information System (DHIS2) is used for disease surveillance and health data management.

**The Path to UHC:**
Achieving UHC requires increasing health funding, training and retaining health workers, strengthening primary healthcare, and addressing the social determinants of health (poverty, education, housing, environment).`
      }
    ]
  },
  {
    sdgId: 4,
    overview: "This course examines education systems, challenges, and innovations — with focus on Nigeria's educational landscape and the quest for inclusive, quality education.",
    chapters: [
      {
        id: 1,
        title: "The State of Education in Nigeria",
        content: `Education is both a fundamental human right and a catalyst for sustainable development.

**Nigeria's Education Structure:**
- **6-3-3-4 System:** 6 years of primary, 3 years of junior secondary, 3 years of senior secondary, and 4 years of tertiary education.
- **Universal Basic Education (UBE):** Free and compulsory 9-year basic education (primary + junior secondary) introduced in 2004.

**Key Statistics:**
- Nigeria has the highest number of out-of-school children globally — approximately 18.5 million (UNICEF).
- Literacy rate is about 62%, with significant gender and regional disparities.
- Northern Nigeria has much lower school enrollment and completion rates than the South.
- Only about 30% of Nigerian universities' graduates are considered employable by employers.

**Challenges:**
- **Funding:** UNESCO recommends 15-20% of national budget for education; Nigeria allocates about 5-7%.
- **Teacher Quality:** Many teachers, especially in rural areas, lack adequate training and qualifications. "Ghost teachers" (on payroll but not teaching) are a persistent problem.
- **Infrastructure:** Overcrowded classrooms, lack of laboratories, libraries, and sanitation facilities.
- **Gender Gap:** In the North-East and North-West, only about 40% of girls complete primary school.
- **Almajiri System:** About 10 million children in the northern Almajiri Quranic education system, many of whom lack access to formal education.

**Bright Spots:**
- Growing EdTech ecosystem (uLesson, Tuteria, PrepClass)
- Federal government's TETFUND invests in tertiary education infrastructure
- Private sector involvement in education is increasing`
      },
      {
        id: 2,
        title: "Inclusive Education: Reaching the Marginalised",
        content: `Inclusive education ensures every learner has access to quality education regardless of background, ability, or circumstance.

**Groups Requiring Special Attention in Nigeria:**
- **Girls:** Cultural practices like early marriage, preference for boys' education, and safety concerns keep girls out of school. The "Girl Child Education" initiative and programmes like "She Leads Africa" advocate for girls' education.
- **Children with Disabilities:** An estimated 10.5 million Nigerians live with disabilities. Special education facilities are scarce — less than 10% of children with disabilities attend school.
- **Internally Displaced Children (IDPs):** Over 2 million people displaced by Boko Haram, with thousands of children lacking access to education in IDP camps.
- **Nomadic Communities:** Fulani pastoralists and fishing communities move seasonally. The National Commission for Nomadic Education (NCNE) provides mobile schools, but coverage is limited.
- **Street Children (Almajiri):** The Almajiri Education Programme integrates Quranic education with basic education, but implementation has been inconsistent.

**Inclusive Practices:**
- **Mother Tongue Education:** Teaching in local languages (Hausa, Yoruba, Igbo) in early years improves comprehension and retention.
- **Flexible School Calendars:** Aligning school schedules with farming and fishing seasons in rural areas.
- **Safe Schools Declaration:** Nigeria signed this international commitment to protect education during armed conflict.
- **Assistive Technology:** Use of audio books, screen readers, and sign language interpreters for students with disabilities.

**Community Involvement:**
- School-Based Management Committees (SBMCs) engage parents and community leaders in school governance.
- Community reading programmes and library initiatives promote literacy beyond the classroom.`
      },
      {
        id: 3,
        title: "Higher Education and Skills Development",
        content: `Higher education and vocational training are critical for Nigeria's economic development and youth employment.

**Higher Education Landscape:**
- Nigeria has over 200 universities (federal, state, and private), plus polytechnics and colleges of education.
- JAMB (Joint Admissions and Matriculation Board) administers the UTME for university admission. Over 1.8 million candidates sit the exam annually, but universities can only admit about 500,000.
- NUC (National Universities Commission) regulates and accredits university programmes.

**Challenges in Higher Education:**
- **ASUU Strikes:** The Academic Staff Union of Universities frequently goes on strike over funding, conditions, and autonomy. Cumulative strike days exceed 5 years since 1999.
- **Curriculum Relevance:** Many programmes do not align with industry needs, leading to graduate unemployment.
- **Research Funding:** Nigeria spends less than 0.1% of GDP on research and development (global average is 2.6%).
- **Brain Drain:** Thousands of Nigerian academics and researchers leave for better opportunities abroad.

**TVET (Technical and Vocational Education and Training):**
- TVET is often stigmatised as "for those who can't get into university."
- The National Board for Technical Education (NBTE) oversees polytechnics and technical colleges.
- Skills in demand: ICT, renewable energy, agriculture, construction, healthcare.
- The "NPOWER" programme trains graduates in technology, agriculture, and creative industries.

**EdTech Revolution:**
- Nigeria has one of Africa's most vibrant EdTech ecosystems.
- Platforms like uLesson, Tuteria, PrepClass, and Coursera for Campus are making education more accessible.
- Digital literacy programmes help bridge the technology gap.
- However, internet penetration (about 55%) and electricity access (about 60%) limit digital education reach.`
      },
      {
        id: 4,
        title: "Education for Sustainable Development",
        content: `Education for Sustainable Development (ESD) empowers learners to make informed decisions for environmental integrity, economic viability, and social justice.

**What is ESD?**
- ESD goes beyond environmental education — it integrates sustainability into all aspects of learning.
- UNESCO's Global Action Programme on ESD provides the framework.
- Key competencies: critical thinking, systems thinking, collaboration, and ethical responsibility.

**ESD in Nigeria:**
- The National Policy on Education recognises environmental education, but implementation is weak.
- The Nigerian Conservation Foundation (NCF) runs environmental education programmes.
- Universities like FUDMA (Federal University Dutsinma) are incorporating SDG-related content into curricula.
- The "Green Schools" initiative promotes environmental practices in schools.

**Key ESD Themes:**
- **Climate Change Education:** Teaching students about climate science, adaptation, and mitigation.
- **Peace Education:** Particularly relevant in conflict-affected areas of Nigeria. Teaching conflict resolution, tolerance, and civic responsibility.
- **Financial Literacy:** Educating young people about saving, budgeting, and entrepreneurship.
- **Digital Citizenship:** Teaching responsible use of technology and social media.

**Youth as Change Agents:**
- Nigerian youth organisations like "Sustainable Development Goals Youth Alliance" and "YouthHubAfrica" promote SDG awareness.
- Social enterprises started by young Nigerians (e.g., Wecyclers for waste recycling) demonstrate the link between education and innovation.
- Model United Nations (MUN) and debate clubs in schools foster global citizenship.

**Lifelong Learning:**
Adult literacy programmes, community learning centres, and informal education initiatives ensure that learning continues beyond formal schooling. The National Commission for Mass Literacy targets the 38% of Nigerian adults who cannot read and write.`
      }
    ]
  },
  {
    sdgId: 5,
    overview: "This course explores gender equality, women's empowerment, and the challenges women face in Nigeria and across Africa.",
    chapters: [
      {
        id: 1,
        title: "Understanding Gender Inequality",
        content: `Gender inequality refers to unequal treatment or perceptions of individuals based on their gender. It affects all aspects of life — education, health, economic participation, and political representation.

**Key Concepts:**
- **Gender vs Sex:** Sex is biological; gender is a social construct that defines roles, behaviours, and expectations.
- **Gender Equity vs Equality:** Equity means fairness (recognising different needs); equality means equal rights and opportunities.
- **Patriarchy:** A social system where men hold primary power. Most Nigerian cultures are patriarchal.

**Gender Inequality in Nigeria:**
- Nigeria ranks 123 out of 146 countries on the Global Gender Gap Index (2023).
- Women's labour force participation is about 50%, compared to 60% for men.
- Only about 4% of Nigerian legislators are women (one of the lowest rates globally).
- Child marriage affects 44% of girls in Nigeria (76% in the North-West).

**Forms of Gender-Based Discrimination:**
- Denial of education (especially in northern Nigeria)
- Limited access to land and property
- Gender-based violence (domestic violence, sexual assault)
- Harmful traditional practices (FGM, early marriage, widowhood rites)
- Workplace discrimination and sexual harassment
- Exclusion from political and leadership positions

**Legal Framework:**
- The 1999 Constitution prohibits discrimination on grounds of sex.
- Violence Against Persons (Prohibition) Act (VAPP) 2015 criminalises domestic violence, rape, and FGM — but only applicable in FCT and states that adopt it.
- Child Rights Act 2003 sets minimum marriage age at 18, but not all states have domesticated it.`
      },
      {
        id: 2,
        title: "Women's Economic Empowerment",
        content: `Economic empowerment is fundamental to achieving gender equality and reducing poverty.

**Women in Nigeria's Economy:**
- Women dominate informal trade — markets across Nigeria are largely run by women (e.g., Aba's textile trade, Lagos Island markets).
- Women in agriculture: produce about 60-80% of food but own less than 20% of land.
- Access to formal finance: only about 27% of Nigerian women have bank accounts (compared to 42% of men).

**Barriers to Women's Economic Participation:**
- Limited access to credit and financial services
- Unpaid care work (Nigerian women spend 4-5 times more time on domestic work than men)
- Gender wage gap (women earn about 20-30% less than men for similar work)
- Legal barriers (e.g., some states require husband's consent for women to obtain passports or open businesses)
- Low digital literacy and limited access to technology

**Empowerment Initiatives:**
- **The Ajo/Esusu System:** Traditional rotating savings groups empower women financially. Women-only "Esusu" groups are common across Yoruba communities, providing capital for trading and business.
- **Microfinance:** Organisations like LAPO and ASA Microfinance target women entrepreneurs with small loans and financial literacy training.
- **Tech and Innovation:** Organisations like "She Leads Africa," "Women in Tech Nigeria," and "African Women in Technology" support female entrepreneurs and tech professionals.
- **Government Programmes:** BOI (Bank of Industry) has special lending windows for women-owned businesses.

**Success Stories:**
- Ibukun Awosika: First female chair of First Bank of Nigeria.
- Ngozi Okonjo-Iweala: First female Director-General of the World Trade Organisation (WTO).
- Folorunsho Alakija: One of Africa's richest women, started as a fashion designer.`
      },
      {
        id: 3,
        title: "Ending Gender-Based Violence",
        content: `Gender-based violence (GBV) is one of the most widespread human rights violations globally, and Nigeria is no exception.

**Scale of GBV in Nigeria:**
- About 30% of Nigerian women aged 15-49 have experienced physical violence (NDHS 2018).
- 9% have experienced sexual violence.
- During COVID-19 lockdowns, reported cases of sexual and domestic violence increased significantly — the "Shadow Pandemic."
- Most cases go unreported due to stigma, fear, and lack of trust in the justice system.

**Forms of GBV in Nigeria:**
- **Domestic Violence:** Physical, emotional, and economic abuse within marriages and partnerships.
- **Sexual Violence:** Rape, sexual harassment, and exploitation.
- **Female Genital Mutilation (FGM):** Prevalence is about 20% nationally, but over 60% in some South-Western and South-South states.
- **Early/Forced Marriage:** 44% of girls married before 18, denying them education and autonomy.
- **Trafficking:** Nigeria is a source, transit, and destination country for human trafficking, particularly affecting women and girls.

**Response and Prevention:**
- **Legal:** VAPP Act 2015, Sexual Offences Bill, domestication of Child Rights Act.
- **Services:** Sexual Assault Referral Centres (SARCs) provide medical and psychosocial support.
- **Community:** Male engagement programmes, community dialogue, and religious leader advocacy.
- **Technology:** Platforms like "Stand to End Rape" (STER) and "Mirabel Centre" provide support and awareness.
- **Media:** Campaigns like #ArewaMeToo and #SexForGrades have brought national attention to sexual violence.

**Role of Men and Boys:**
Ending GBV requires engaging men and boys as allies. Programmes that promote positive masculinity and challenge harmful norms are essential.`
      },
      {
        id: 4,
        title: "Women in Leadership and Political Participation",
        content: `Women's participation in leadership and governance is essential for inclusive and effective decision-making.

**Women in Nigerian Politics:**
- Women hold about 4% of seats in the National Assembly — among the lowest in Africa.
- No woman has been elected state governor in Nigeria's democratic history.
- Only 7 out of 109 senators and 22 out of 360 House of Representatives members are women (2023).
- At the local government level, women's representation is slightly higher but still far from parity.

**Barriers to Women's Political Participation:**
- Monetisation of politics: high cost of campaigns disadvantages women who have less access to wealth.
- Violence and intimidation during elections.
- Cultural and religious beliefs that women should not lead.
- Lack of internal party democracy — women are rarely given winnable tickets.
- Multiple roles: women bear disproportionate family responsibilities.

**Efforts to Increase Women's Participation:**
- **35% Affirmative Action:** The National Gender Policy recommends 35% representation for women, but it is not legally binding.
- **Gender and Equal Opportunity Bill:** Repeatedly rejected by the National Assembly.
- **Women's Political Academies:** Organisations like WARD-C and PLAC train women for political leadership.
- **Not Too Young to Run Act (2018):** Reduced age requirements for political office, benefiting young women.

**Women in Other Leadership Spaces:**
- Nigerian women excel in business, academia, media, and civil society.
- Female-led organisations like WIMBIZ (Women in Management, Business and Public Service) promote women's leadership.
- The judiciary has seen progress: several women have served as Chief Justices at the state level.

**Lessons from Africa:**
Rwanda has the world's highest proportion of women in parliament (61%). Quota systems and deliberate political will have driven this success, offering lessons for Nigeria.`
      }
    ]
  },
  {
    sdgId: 6,
    overview: "This course explores water and sanitation challenges, solutions, and the critical importance of clean water for health and development in Nigeria.",
    chapters: [
      { id: 1, title: "The Global Water Crisis and Nigeria", content: `Access to clean water is a fundamental human right, yet millions of Nigerians lack this basic necessity.\n\n**Global Context:**\n- 2.2 billion people worldwide lack safely managed drinking water (WHO/UNICEF 2019).\n- Sub-Saharan Africa has the lowest water access rates globally.\n\n**Nigeria's Water Situation:**\n- About 60 million Nigerians lack access to basic drinking water.\n- Only about 20% of Nigerians have access to safely managed water (piped, treated, and free from contamination).\n- Urban areas rely on boreholes, water vendors, and sachet water ("pure water"), while rural areas depend on wells, streams, and rainwater harvesting.\n- The "pure water" industry (sachet water) has grown rapidly, but quality regulation is inconsistent.\n\n**Key Challenges:**\n- Aging and poorly maintained water infrastructure.\n- Pollution from industrial waste, oil spills (especially in the Niger Delta), and agricultural runoff.\n- Groundwater depletion in some regions.\n- Climate change affecting rainfall patterns.\n- Rapid urbanisation overwhelming existing water systems.\n\n**Health Impact:**\n- Waterborne diseases (cholera, typhoid, dysentery) kill thousands of Nigerians annually.\n- Cholera outbreaks occur regularly, with major outbreaks in 2021 affecting multiple states.\n- Unsafe water is a major contributor to child mortality and malnutrition.` },
      { id: 2, title: "Sanitation and Hygiene in Nigeria", content: `Sanitation and hygiene are inseparable from clean water and are critical for public health.\n\n**Nigeria's Sanitation Crisis:**\n- Nigeria has one of the highest rates of open defecation globally — about 46 million people practice open defecation.\n- Only about 42% of Nigerians have access to basic sanitation facilities.\n- Urban slums (like Makoko in Lagos) face severe sanitation challenges.\n\n**Key Issues:**\n- **Open Defecation:** Despite the "Clean Nigeria" campaign and the National Action Plan, progress has been slow.\n- **Waste Management:** Most Nigerian cities lack adequate waste collection and disposal systems. Lagos generates over 13,000 tons of waste daily.\n- **Menstrual Hygiene:** Many Nigerian girls miss school during menstruation due to lack of sanitation facilities, hygiene products, and cultural taboos.\n\n**Community-Led Total Sanitation (CLTS):**\n- A participatory approach that triggers communities to eliminate open defecation without external subsidies.\n- Successful in many Nigerian communities, especially in Jigawa, Cross River, and Ekiti states.\n\n**Handwashing:**\n- COVID-19 highlighted the importance of handwashing, but only about 25% of Nigerian households have handwashing facilities with water and soap.\n- The "Global Handwashing Day" campaign promotes handwashing in schools and communities.` },
      { id: 3, title: "Water Management and Sustainable Solutions", content: `Sustainable water management ensures long-term availability and quality of water resources.\n\n**Nigeria's Water Resources:**\n- Major rivers: Niger, Benue, Cross River, Osun, Ogun.\n- Major dams: Kainji, Jebba, Shiroro (also used for hydropower).\n- Groundwater reserves are significant but unevenly distributed.\n- Lake Chad has shrunk by about 90% since the 1960s, affecting millions in the Chad Basin.\n\n**Water Governance:**\n- Federal Ministry of Water Resources sets policy.\n- State Water Boards manage urban water supply.\n- Local governments and communities manage rural water supply.\n- The National Water Resources Bill (pending) aims to establish a comprehensive framework.\n\n**Sustainable Solutions:**\n- **Rainwater Harvesting:** Collecting and storing rainwater, particularly useful in southern Nigeria with higher rainfall.\n- **Solar-Powered Boreholes:** Reduce reliance on diesel generators for water pumping, especially in rural areas.\n- **Water Treatment:** Household water treatment (boiling, chlorination, ceramic filters) is simple and effective.\n- **Watershed Management:** Protecting river catchment areas from deforestation and pollution.\n- **Wastewater Recycling:** Treating and reusing wastewater for agriculture and industry.\n\n**Innovation:**\n- "Water ATMs" dispense treated water using smart cards in some Nigerian communities.\n- GIS mapping of water sources helps plan infrastructure development.\n- Community-based water management committees ensure local ownership and sustainability.` },
      { id: 4, title: "Policy and the Path to Universal Access", content: `Achieving universal access to clean water and sanitation requires strong policies, investment, and community engagement.\n\n**International Frameworks:**\n- SDG 6 aims for universal access to safe water, sanitation, and hygiene by 2030.\n- The Human Right to Water and Sanitation was recognised by the UN General Assembly in 2010.\n- The Sanitation and Water for All (SWA) partnership promotes political commitment.\n\n**Nigeria's Policy Landscape:**\n- National Water Supply and Sanitation Policy (revised 2000).\n- Partnership for Expanded Water Supply, Sanitation and Hygiene (PEWASH) programme.\n- WASH sector funding remains below the estimated $8 billion needed annually.\n\n**Key Strategies:**\n- Increase government budget allocation to the WASH sector.\n- Attract private sector investment in water and sanitation infrastructure.\n- Strengthen community management of water and sanitation facilities.\n- Improve data collection and monitoring systems.\n- Mainstream gender and disability inclusion in WASH programmes.\n\n**Role of Development Partners:**\n- UNICEF, WaterAid, World Bank, and AfDB support Nigeria's WASH sector.\n- NGOs like "Water.org" and "charity: water" fund water projects across Nigeria.\n\n**Looking Forward:**\nNigeria must address the urban-rural divide, improve maintenance of existing infrastructure, and ensure that clean water and sanitation are priorities in national development planning. The goal of universal access by 2030 is ambitious but achievable with sustained political will and investment.` }
    ]
  },
  {
    sdgId: 7,
    overview: "This course examines energy access, renewable energy, and Nigeria's energy challenges — with focus on sustainable solutions for Africa.",
    chapters: [
      { id: 1, title: "Energy Access in Nigeria", content: `Energy is fundamental to economic development, yet Nigeria faces a severe energy crisis.\n\n**The Energy Gap:**\n- About 85 million Nigerians (40%) lack access to electricity.\n- Nigeria's installed power generation capacity is about 13,000 MW, but actual generation is often below 5,000 MW.\n- Per capita electricity consumption is about 144 kWh — compared to 6,500 kWh in South Africa and 12,000 kWh in the US.\n- Power outages are frequent and prolonged. The average Nigerian business experiences about 33 power outages per month.\n\n**Energy Sources:**\n- **Fossil Fuels:** Nigeria is Africa's largest oil producer and has the continent's largest natural gas reserves. Yet, domestic refining capacity is minimal, and the country imports most of its refined petroleum products.\n- **Biomass:** About 70% of Nigerians use wood, charcoal, and crop residue for cooking, contributing to deforestation and indoor air pollution.\n- **Generators:** Nigerians spend an estimated $14 billion annually on fuel for private generators.\n\n**Impact of Energy Poverty:**\n- Limited industrialisation and job creation.\n- Poor healthcare delivery (hospitals without reliable power).\n- Educational limitations (students study by candlelight).\n- Environmental pollution from generators and biomass burning.\n- Gender impact: women and girls spend hours collecting firewood.` },
      { id: 2, title: "Renewable Energy Opportunities", content: `Nigeria has enormous renewable energy potential that remains largely untapped.\n\n**Solar Energy:**\n- Nigeria receives 5.5-7 hours of sunshine daily, with solar radiation of 3.5-7.0 kWh/m²/day.\n- Northern Nigeria has the highest solar potential.\n- Off-grid solar companies (Lumos, d.light, Zola Electric) provide solar home systems, reaching millions.\n- Mini-grids combine solar panels with battery storage to power communities.\n\n**Wind Energy:**\n- Wind speeds in northern Nigeria and coastal areas (3-5 m/s) are suitable for small-scale wind turbines.\n- Less developed than solar but has potential, especially for water pumping.\n\n**Hydropower:**\n- Large dams (Kainji, Jebba, Shiroro) provide about 30% of grid electricity.\n- Small hydropower potential exists in many rivers but is underexploited.\n\n**Biomass and Biogas:**\n- Agricultural waste (rice husks, cassava peels, corn stalks) can be converted to energy.\n- Biogas digesters convert animal waste to cooking gas — several pilot projects exist in rural Nigeria.\n\n**Challenges to Renewable Energy Adoption:**\n- High upfront costs of solar panels and equipment.\n- Limited financing options for households and businesses.\n- Policy inconsistency and regulatory barriers.\n- Skills gap in installation and maintenance.\n- Import duties on renewable energy equipment.\n\n**Government Initiatives:**\n- National Renewable Energy and Energy Efficiency Policy (NREEEP).\n- Rural Electrification Agency (REA) promotes off-grid solutions.\n- The Energising Economies Initiative provides clean energy to markets and business clusters.` },
      { id: 3, title: "Nigeria's Power Sector Reform", content: `Nigeria's power sector has undergone significant reforms, but challenges remain.\n\n**History of Reform:**\n- The Power Holding Company of Nigeria (PHCN) was unbundled and privatised in 2013, creating generation companies (GenCos), a transmission company (TCN), and distribution companies (DisCos).\n- The Nigerian Electricity Regulatory Commission (NERC) regulates the sector.\n\n**Current Structure:**\n- Generation → Transmission → Distribution → End Users\n- GenCos sell power to the national grid via the Nigerian Bulk Electricity Trading Company (NBET).\n- TCN transmits power across the national grid.\n- 11 DisCos distribute power to end users.\n\n**Persistent Problems:**\n- **Gas Supply:** Gas-to-power is hindered by pipeline vandalism, gas flaring, and inadequate investment.\n- **Transmission Bottleneck:** The grid can only transmit about 5,500 MW, even when more is generated.\n- **Collection Efficiency:** DisCos struggle to collect revenue due to estimated billing, theft, and consumer resistance.\n- **Metering Gap:** Millions of Nigerians are on estimated billing because they lack prepaid meters. The MAP (Meter Asset Provider) programme aims to close this gap.\n- **Tariff Issues:** Electricity tariffs are politically sensitive, and below-cost tariffs discourage investment.\n\n**The Way Forward:**\n- Decentralise power through mini-grids and off-grid solutions.\n- Improve gas supply infrastructure.\n- Upgrade and expand the transmission network.\n- Accelerate metering to improve billing accuracy.\n- Attract private investment through stable policies.` },
      { id: 4, title: "Energy Efficiency and Clean Cooking", content: `Energy efficiency and clean cooking are critical components of SDG 7.\n\n**Energy Efficiency:**\n- Energy efficiency means using less energy to deliver the same service.\n- Nigerian buildings, industries, and transport systems are generally energy-inefficient.\n- Simple measures: LED lighting, efficient appliances, building insulation, and industrial process optimisation.\n- The Energy Commission of Nigeria promotes energy efficiency standards.\n\n**Clean Cooking:**\n- About 70% of Nigerians rely on traditional biomass (wood, charcoal) for cooking.\n- Indoor air pollution from biomass cooking kills an estimated 93,000 Nigerians annually (WHO).\n- Women and children are disproportionately affected.\n\n**Clean Cooking Solutions:**\n- **LPG (Cooking Gas):** The government's "Decade of Gas" initiative promotes LPG adoption. Usage has grown but remains concentrated in urban areas.\n- **Improved Cookstoves:** More fuel-efficient stoves that reduce wood consumption and smoke. Organisations like "Clean Cooking Alliance" promote adoption.\n- **Biogas:** Animal and agricultural waste converted to cooking gas. Small-scale digesters are being promoted in rural areas.\n- **Electric Cooking:** Viable where electricity is reliable; solar-powered electric cookers are being piloted.\n\n**Barriers to Clean Cooking:**\n- Cost of clean fuels and equipment.\n- Cultural preferences for traditional cooking methods.\n- Distribution challenges in rural areas.\n- Safety concerns about LPG.\n\n**Economic Benefits:**\n- Reduced healthcare costs from fewer respiratory illnesses.\n- Time saved from collecting firewood (especially for women).\n- Reduced deforestation and environmental degradation.\n- Job creation in the clean cooking value chain.` }
    ]
  },
  {
    sdgId: 8,
    overview: "This course explores decent work, economic growth, and the employment challenge in Nigeria and Africa.",
    chapters: [
      { id: 1, title: "Nigeria's Economy: Structure and Challenges", content: `Nigeria is Africa's largest economy, but growth has not translated into widespread prosperity.\n\n**Economic Structure:**\n- GDP: approximately $440 billion (nominal, 2022).\n- Oil and gas account for about 90% of export earnings and 50% of government revenue, but only about 9% of GDP.\n- Services sector (telecom, banking, entertainment) contributes about 54% of GDP.\n- Agriculture contributes about 24% of GDP but employs about 35% of the labour force.\n- Manufacturing contributes only about 9% of GDP.\n\n**Key Challenges:**\n- **Oil Dependence:** Vulnerability to global oil price fluctuations. The 2015-2016 oil price crash pushed Nigeria into recession.\n- **Inflation:** Consumer price inflation exceeded 30% in 2023, driven by currency devaluation, food prices, and fuel subsidy removal.\n- **Foreign Exchange:** The naira has depreciated significantly, from about ₦200/$1 in 2015 to over ₦1,500/$1 in 2024.\n- **Debt:** Nigeria's debt-to-revenue ratio is one of the highest in the world — about 96% of revenue goes to debt servicing.\n- **Infrastructure Deficit:** Poor roads, railways, ports, and power supply constrain economic activity.\n\n**Positive Developments:**\n- Growing tech sector ("Silicon Lagoon" in Lagos)\n- Dangote Refinery (650,000 barrels/day capacity) aims to end fuel imports\n- AfCFTA (African Continental Free Trade Area) opens opportunities for Nigerian businesses\n- Creative economy (Nollywood, Afrobeats) is a global success story` },
      { id: 2, title: "Employment and the Future of Work", content: `Nigeria faces a massive employment challenge, particularly for its young population.\n\n**The Numbers:**\n- Unemployment rate: about 33% (Q4 2020, NBS) — one of the highest in the world.\n- Youth unemployment: over 42% for ages 15-34.\n- Underemployment: about 23% — people working but earning very little.\n- About 4-6 million young Nigerians enter the job market annually.\n\n**The Informal Economy:**\n- Over 80% of Nigerian workers are in the informal sector.\n- Informal workers lack social protection, job security, and access to credit.\n- Examples: street vendors, motorcycle riders (okada), artisans, market traders.\n- The informal sector contributes about 65% of GDP.\n\n**Key Sectors for Employment:**\n- **Agriculture:** Largest employer but productivity is low. Value chain development can create more and better jobs.\n- **Technology:** Nigeria's tech ecosystem has attracted over $4 billion in venture capital (2014-2022). Companies like Flutterwave, Paystack, and Andela create high-quality jobs.\n- **Creative Industries:** Nollywood is the world's second-largest film industry by output. Music, fashion, and digital content creation employ millions.\n- **Construction and Real Estate:** Housing deficit of about 28 million units creates demand.\n\n**Skills Gap:**\n- Mismatch between education curricula and employer needs.\n- Critical shortage of technical and vocational skills.\n- Need for digital skills, entrepreneurship training, and soft skills.\n\n**Government Employment Programmes:**\n- N-Power: temporary employment for graduates.\n- Survival Fund: grants and loans for MSMEs during COVID-19.\n- Youth Investment Fund: access to finance for young entrepreneurs.` },
      { id: 3, title: "Decent Work and Workers' Rights", content: `Decent work means productive work in conditions of freedom, equity, security, and human dignity.\n\n**The ILO's Decent Work Agenda:**\n- Employment creation and enterprise development\n- Social protection and security\n- Workers' rights and social dialogue\n- Gender equality and non-discrimination\n\n**Workers' Rights in Nigeria:**\n- **Labour Act (2004):** Governs employment relations, working conditions, and termination.\n- **Trade Unions Act:** Workers have the right to form and join unions. The Nigeria Labour Congress (NLC) and Trade Union Congress (TUC) are the main umbrella bodies.\n- **Minimum Wage:** ₦30,000/month (about $20) set in 2019. Many states and employers do not comply.\n- **Working Conditions:** Many workers face long hours, unsafe conditions, and delayed wages.\n\n**Child Labour:**\n- About 43% of Nigerian children aged 5-14 are involved in child labour.\n- Common in agriculture, domestic work, street hawking, and mining.\n- The Child Rights Act prohibits exploitative child labour, but enforcement is weak.\n\n**Modern Slavery and Trafficking:**\n- Nigeria is a source country for human trafficking, particularly to Europe, the Middle East, and within Africa.\n- NAPTIP (National Agency for the Prohibition of Trafficking in Persons) leads the fight against trafficking.\n\n**Occupational Safety and Health:**\n- Industrial accidents are common, especially in construction, mining, and manufacturing.\n- The Factories Act governs workplace safety, but enforcement is inadequate.\n- Most workers in the informal sector have no safety protections.\n\n**The Gig Economy:**\n- Ride-hailing (Uber, Bolt), delivery services (Jumia, Glovo), and freelancing platforms are growing.\n- Gig workers often lack benefits like health insurance, pensions, and job security.\n- Debate continues about whether gig workers should be classified as employees.` },
      { id: 4, title: "Entrepreneurship and Economic Diversification", content: `Entrepreneurship and economic diversification are key to sustainable growth in Nigeria.\n\n**Nigeria's Entrepreneurship Landscape:**\n- Nigeria has one of the highest rates of entrepreneurial activity globally (about 35% of adults are involved in early-stage businesses).\n- MSMEs (Micro, Small and Medium Enterprises) account for about 48% of GDP and 86% of employment.\n- The informal nature of most MSMEs limits their access to finance, markets, and technology.\n\n**Key Sectors for Diversification:**\n- **Technology/Fintech:** Nigeria is Africa's leading tech hub. Lagos's Yaba district ("Yabacon Valley") hosts numerous startups.\n- **Agriculture Value Chains:** Processing raw materials into finished products (e.g., cassava to flour, garri, ethanol).\n- **Solid Minerals:** Nigeria has significant deposits of gold, tin, limestone, coal, and gemstones.\n- **Tourism:** Potential in cultural tourism (Osun-Osogbo Grove, Yankari Game Reserve), eco-tourism, and entertainment tourism.\n- **Manufacturing:** Import substitution and local production of goods currently imported.\n\n**Support for Entrepreneurs:**\n- BOI (Bank of Industry) and NEXIM Bank provide financing.\n- SMEDAN (Small and Medium Enterprises Development Agency) provides training and support.\n- Tony Elumelu Foundation provides $5,000 seed funding to African entrepreneurs.\n- Innovation hubs: CcHUB, Ventures Platform, Impact Hub Lagos.\n\n**Challenges:**\n- Access to finance (interest rates exceed 25% at commercial banks).\n- Regulatory burden and multiple taxation.\n- Poor infrastructure (especially electricity and transport).\n- Insecurity affecting business operations.\n\n**The AfCFTA Opportunity:**\nThe African Continental Free Trade Area creates a single market of 1.3 billion people. Nigerian businesses can access new markets, but must improve competitiveness and product quality.` }
    ]
  },
  {
    sdgId: 9,
    overview: "This course covers infrastructure development, industrialisation, and innovation in Nigeria and Africa.",
    chapters: [
      { id: 1, title: "Infrastructure Deficit in Nigeria", content: `Infrastructure is the backbone of economic development, yet Nigeria faces a massive infrastructure gap.\n\n**The Scale of the Deficit:**\n- The African Development Bank estimates Nigeria's infrastructure deficit at $100 billion annually.\n- Only about 36% of Nigeria's 200,000 km road network is paved.\n- Rail network: about 3,500 km of narrow-gauge rail, mostly colonial-era and non-functional.\n- Port congestion: Apapa and Tin Can Island ports in Lagos handle about 80% of imports but are severely congested.\n\n**Transport Infrastructure:**\n- **Roads:** The federal highway network is in poor condition. State and local roads are even worse. Road accidents kill about 12,000 Nigerians annually.\n- **Rail:** The Lagos-Ibadan standard gauge railway and Abuja-Kaduna railway represent recent investments, but coverage is still minimal.\n- **Aviation:** Nigeria has several international airports, but facilities and safety standards need improvement.\n- **Inland Waterways:** Nigeria has 10,000 km of navigable waterways, largely underutilised.\n\n**Digital Infrastructure:**\n- Internet penetration is about 55%, with most access via mobile phones.\n- Broadband penetration is about 44%.\n- The National Broadband Plan targets 70% broadband penetration.\n- Submarine cables (MainOne, ACE, SAT-3) connect Nigeria to the global internet.\n\n**Housing:**\n- Housing deficit of about 28 million units.\n- Urban housing is expensive and often inadequate.\n- Slums and informal settlements house millions in cities like Lagos, Kano, and Port Harcourt.` },
      { id: 2, title: "Industrialisation and Manufacturing", content: `Industrialisation transforms raw materials into finished goods, creating jobs and adding economic value.\n\n**Nigeria's Industrial History:**\n- Post-independence, Nigeria invested in import-substitution industries (textiles, steel, vehicles).\n- The Ajaokuta Steel Company, started in 1979, has never produced commercial steel despite billions in investment.\n- Textile mills in Kano, Kaduna, and Lagos once employed hundreds of thousands but most have closed.\n- The oil boom diverted attention and investment away from manufacturing.\n\n**Current Manufacturing Landscape:**\n- Manufacturing contributes about 9% of GDP — low compared to 20-35% in industrialised countries.\n- Key sub-sectors: food and beverages, cement, chemicals, and consumer goods.\n- Dangote Group is a major industrial player (cement, sugar, flour, refinery).\n- The Dangote Refinery in Lagos (650,000 barrels/day) is the world's largest single-train refinery.\n\n**Special Economic Zones (SEZs):**\n- Lekki Free Trade Zone (Lagos)\n- Calabar Free Trade Zone\n- Onne Oil and Gas Free Zone\n- SEZs offer tax incentives, improved infrastructure, and simplified regulations.\n\n**Challenges to Industrialisation:**\n- Unreliable power supply (manufacturers spend heavily on generators).\n- High cost of finance.\n- Competition from cheap imports (especially from China).\n- Weak intellectual property protection.\n- Skills shortage in technical and engineering fields.\n\n**Made in Nigeria:**\n- Government's "Made in Nigeria" campaign promotes local production.\n- The CBN's RT200 programme incentivises non-oil exports.\n- Nigerian-made products gaining traction: Innoson vehicles, Coleman cables, Nigerian Breweries.` },
      { id: 3, title: "Innovation and Technology", content: `Innovation is essential for leapfrogging traditional development paths.\n\n**Nigeria's Tech Ecosystem:**\n- Lagos is Africa's leading tech hub, with Nairobi and Cape Town.\n- Over $4 billion in venture capital invested in Nigerian startups (2014-2022).\n- Notable unicorns and successes: Flutterwave, Paystack (acquired by Stripe), Interswitch, Andela, Jumia.\n\n**Key Innovation Areas:**\n- **Fintech:** Nigeria leads Africa in financial technology. Mobile money, digital payments, and neobanks are transforming financial inclusion. Opay, PalmPay, and Moniepoint serve millions.\n- **Agritech:** Platforms connecting farmers to markets, providing weather data, and enabling access to inputs. Examples: Farmcrowdy, ThriveAgric, Releaf.\n- **Healthtech:** Telemedicine, digital health records, and drug delivery platforms. Examples: mDoc, Helium Health, MyDawa.\n- **Edtech:** Online learning platforms democratising education. Examples: uLesson, Tuteria, AltSchool Africa.\n- **Logistics:** Last-mile delivery and supply chain solutions. Examples: Kobo360, MVX, Kwik Delivery.\n\n**Innovation Hubs and Ecosystems:**\n- CcHUB (Co-creation Hub) in Lagos and Kigali\n- Ventures Platform in Abuja\n- nHub in Jos\n- Zone Tech Park in Gbagada, Lagos\n- Kano Innovation Hub\n\n**Government Support:**\n- NITDA (National Information Technology Development Agency) promotes IT development.\n- Presidential Initiative on Science and Technology.\n- Startup Act (pending) to provide supportive regulatory framework.\n\n**Challenges:**\n- Brain drain ("Japa") of tech talent.\n- Limited research and development funding.\n- Regulatory uncertainty (e.g., cryptocurrency ban, reversed, and ongoing regulation).\n- Digital divide between urban and rural areas.` },
      { id: 4, title: "Building Resilient Infrastructure", content: `Resilient infrastructure can withstand and recover from natural disasters, climate change, and other shocks.\n\n**Why Resilience Matters:**\n- Nigeria faces floods, droughts, erosion, and increasingly severe weather events.\n- The 2022 floods affected 33 states, displaced over 1.4 million people, and destroyed infrastructure worth billions.\n- Climate change will increase the frequency and severity of these events.\n\n**Key Strategies:**\n- **Climate-Resilient Design:** Building roads, bridges, and buildings that can withstand extreme weather.\n- **Green Infrastructure:** Using nature-based solutions like wetland restoration, green roofs, and permeable pavements.\n- **Flood Management:** Proper drainage systems, dams, and early warning systems.\n- **Erosion Control:** Gully erosion is a major problem in South-Eastern Nigeria (Anambra, Imo, Enugu). Engineering solutions combined with reforestation are needed.\n\n**Financing Infrastructure:**\n- Public-Private Partnerships (PPPs) are essential given limited government resources.\n- Sukuk bonds have been issued to fund road construction.\n- The Infrastructure Corporation of Nigeria (InfraCorp) was established to mobilise private capital.\n- Pension fund investment in infrastructure is being explored.\n\n**Regional Integration:**\n- Trans-African Highway network connecting Nigerian cities to neighbouring countries.\n- The Lagos-Abidjan Highway project.\n- Regional railway connections for trade.\n- Cross-border energy infrastructure (West African Power Pool).\n\n**Smart Cities:**\n- Eko Atlantic in Lagos is designed as a modern, self-sufficient city on reclaimed land.\n- Smart traffic management, digital governance, and IoT-enabled infrastructure.\n- The challenge is ensuring smart city development is inclusive and doesn't widen inequalities.` }
    ]
  },
  {
    sdgId: 10,
    overview: "This course explores inequality within and among countries, with focus on Nigeria's socioeconomic disparities.",
    chapters: [
      { id: 1, title: "Understanding Inequality in Nigeria", content: `Inequality in Nigeria is stark and multidimensional, cutting across geography, gender, ethnicity, and economic class.\n\n**Key Dimensions:**\n- **Income Inequality:** Nigeria's Gini coefficient is about 0.35. The richest 10% of Nigerians earn about 32% of national income.\n- **Regional Disparity:** The South (especially Lagos, Rivers) is significantly wealthier than the North. Poverty rates in the North-East and North-West exceed 70%.\n- **Urban-Rural Divide:** Urban Nigerians have better access to services, infrastructure, and opportunities than rural populations.\n- **Gender Inequality:** Women earn less, own less, and have less political representation than men.\n- **Ethnic and Religious Tensions:** Nigeria's 250+ ethnic groups sometimes compete for resources and political power, fuelling inequality.\n\n**Manifestations:**\n- Access to education varies dramatically by region and wealth.\n- Healthcare access is uneven — private hospitals serve the wealthy while public facilities are underfunded.\n- Housing: from Banana Island's luxury apartments (some of Africa's most expensive) to Makoko's floating slums, Lagos encapsulates Nigeria's inequality.\n- Digital divide: internet and technology access is concentrated in urban areas.\n\n**Root Causes:**\n- Colonial legacy creating uneven development.\n- Oil wealth concentration and "resource curse."\n- Corruption and poor governance.\n- Discriminatory laws and cultural practices.\n- Weak social protection systems.` },
      { id: 2, title: "Reducing Inequality: Policies and Programmes", content: `Addressing inequality requires comprehensive policies that target its root causes.\n\n**Social Protection:**\n- **Conditional Cash Transfers:** The NSIP programme provides ₦5,000/month to the poorest households. Over 1 million households benefit, but targeting accuracy and coverage need improvement.\n- **Pension System:** The Contributory Pension Scheme covers about 9.8 million workers, but most informal sector workers are excluded.\n- **Health Insurance:** The NHIA aims to expand coverage, but less than 5% of Nigerians are enrolled.\n\n**Education Interventions:**\n- UBE (Universal Basic Education) provides free primary and junior secondary education.\n- TETFUND invests in tertiary education infrastructure.\n- Scholarship programmes for students from disadvantaged backgrounds.\n\n**Economic Inclusion:**\n- Financial inclusion: CBN's Financial Inclusion Strategy targets 80% inclusion (from about 64%).\n- MSME support through BOI, SMEDAN, and various state-level programmes.\n- Youth employment programmes (N-Power, YIF).\n\n**Fiscal Policy:**\n- Progressive taxation: those who earn more should pay more. Nigeria's tax-to-GDP ratio is only about 6% — one of the lowest globally.\n- Revenue allocation formula: how oil and other revenues are shared among federal, state, and local governments.\n- The Fiscal Responsibility Act promotes transparency and accountability in public finance.\n\n**Anti-Discrimination:**\n- The Discrimination Against Persons with Disabilities (Prohibition) Act 2018.\n- Efforts to pass the Gender and Equal Opportunities Bill.\n- Affirmative action policies in education and employment.` },
      { id: 3, title: "Migration, Displacement, and Inclusion", content: `Migration and displacement create both challenges and opportunities for addressing inequality.\n\n**Internal Migration:**\n- Rural-urban migration is driven by the search for better opportunities. Lagos grows by about 600,000 people annually.\n- North-South migration for education and economic opportunities.\n- Seasonal migration of farming and pastoral communities.\n\n**Internal Displacement:**\n- Over 3 million internally displaced persons (IDPs) in Nigeria, mostly in the North-East.\n- Causes: Boko Haram insurgency, herder-farmer conflicts, banditry in the North-West, and natural disasters.\n- IDPs face dire conditions: overcrowded camps, limited food and water, inadequate healthcare, and disrupted education.\n\n**International Migration:**\n- The "Japa" phenomenon: increasing emigration of skilled Nigerians (doctors, engineers, IT professionals, academics).\n- Nigerian diaspora: estimated 15-17 million worldwide.\n- Diaspora remittances: about $20 billion annually, a significant source of foreign exchange.\n\n**Inclusion of Marginalised Groups:**\n- People with disabilities face significant barriers to education, employment, and public services.\n- Ethnic minorities in some regions face discrimination in access to land, employment, and political representation.\n- Refugee communities (from Cameroon, Chad, Niger) in border areas.\n\n**Policies for Inclusive Migration:**\n- The National Migration Policy (2015) provides a framework for managing migration.\n- Diaspora engagement: the Nigerians in Diaspora Commission (NiDCOM) coordinates diaspora affairs.\n- Integration programmes for IDPs and refugees.\n- Addressing root causes of displacement through security and development.` },
      { id: 4, title: "Global Inequality and International Cooperation", content: `Reducing inequality is not just a national issue — it requires global cooperation.\n\n**Global Inequality Trends:**\n- The richest 1% own about 46% of global wealth.\n- Sub-Saharan Africa's share of global GDP is about 3% despite having about 14% of world population.\n- "Vaccine apartheid" during COVID-19 highlighted global health inequalities.\n\n**Trade and Development:**\n- International trade rules often disadvantage developing countries.\n- African countries export raw materials and import manufactured goods, limiting value addition.\n- AfCFTA (African Continental Free Trade Area) aims to change this by boosting intra-African trade.\n\n**Aid and Development Finance:**\n- Official Development Assistance (ODA) to Nigeria totals about $3-4 billion annually.\n- Debates about aid effectiveness and the need for "trade, not aid."\n- Debt relief: Nigeria benefited from HIPC debt relief in 2005 but has since accumulated significant new debt.\n\n**Illicit Financial Flows:**\n- Africa loses an estimated $88.6 billion annually to illicit financial flows (UNCTAD).\n- Tax evasion, trade misinvoicing, and corrupt money transfers drain resources.\n- International cooperation is needed to close tax havens and improve transparency.\n\n**Technology and Data:**\n- Digital technology can reduce inequality through financial inclusion, e-commerce, and access to information.\n- But the digital divide risks widening inequality if not addressed.\n- Data collection and disaggregation (by gender, age, disability, ethnicity) are essential for targeting inequality.\n\n**The Role of International Institutions:**\n- UN, World Bank, IMF, AU, ECOWAS play roles in addressing inequality.\n- Reforms to these institutions (e.g., voting rights at IMF) are needed to give developing countries more voice.\n- South-South cooperation (e.g., Nigeria-Brazil, Nigeria-India partnerships) complements traditional North-South aid.` }
    ]
  },
  {
    sdgId: 11,
    overview: "This course explores sustainable urbanisation, city planning, and community resilience in Nigeria's rapidly growing cities.",
    chapters: [
      { id: 1, title: "Urbanisation in Nigeria", content: `Nigeria is urbanising rapidly, creating both opportunities and challenges.\n\n**The Pace of Urbanisation:**\n- About 52% of Nigerians now live in urban areas, up from 15% in 1960.\n- By 2050, 70% of Nigerians are projected to be urban dwellers.\n- Lagos is Africa's largest city with an estimated population of 16-21 million (depending on definition).\n- Other major cities: Kano, Ibadan, Abuja, Port Harcourt, Benin City.\n\n**Drivers of Urbanisation:**\n- Rural-urban migration seeking employment and better services.\n- Natural population growth in cities.\n- Economic concentration in urban centres.\n- Insecurity in rural areas pushing people to cities.\n\n**Urban Challenges:**\n- **Housing:** Deficit of about 28 million units. Affordable housing is scarce in cities like Lagos where rent can consume 50-70% of income.\n- **Transport:** Traffic congestion in Lagos costs an estimated $55 billion annually in lost productivity. Average commute time is 3+ hours.\n- **Waste Management:** Nigerian cities generate millions of tons of waste daily but lack adequate collection and disposal systems.\n- **Flooding:** Poor drainage and unplanned development lead to severe urban flooding, particularly in Lagos, Port Harcourt, and Owerri.\n- **Slums:** About 50% of urban Nigerians live in slum conditions (UN-Habitat).` },
      { id: 2, title: "Sustainable Urban Planning", content: `Sustainable cities balance economic growth, social inclusion, and environmental protection.\n\n**Key Principles:**\n- Compact, mixed-use development that reduces commuting.\n- Efficient public transportation systems.\n- Green spaces and recreational areas.\n- Inclusive planning that considers all residents, including the poor and disabled.\n- Climate-resilient infrastructure.\n\n**Urban Planning in Nigeria:**\n- The Nigerian Institute of Town Planners (NITP) and Town Planners Registration Council regulate the profession.\n- Master plans exist for many cities but are often outdated or poorly implemented.\n- Abuja is Nigeria's planned capital city (designed by IPA Consultants), but unplanned settlements have grown around it.\n\n**Transport Solutions:**\n- **BRT (Bus Rapid Transit):** Lagos BRT launched in 2008, providing affordable public transport. Expansion to other corridors is ongoing.\n- **Rail:** Lagos Rail Mass Transit (Blue and Red Lines) is under development.\n- **Water Transport:** Lagos ferry services provide alternative commuting options.\n- **Non-Motorised Transport:** Cycling infrastructure is minimal but being advocated for.\n\n**Housing Solutions:**\n- Mass housing programmes by state governments (e.g., Lagos HOMS).\n- Public-private partnerships for affordable housing.\n- Sites-and-services schemes providing serviced plots for self-build.\n- Social housing for the poorest urban residents.\n\n**Smart Cities:**\n- Eko Atlantic: a planned city on reclaimed land in Lagos.\n- Centenary City, Abuja.\n- Integration of technology in urban management (e-government, smart traffic, digital payments for services).` },
      { id: 3, title: "Cultural Heritage and Community Resilience", content: `Protecting cultural heritage while building resilient communities is essential for sustainable cities.\n\n**Nigeria's Cultural Heritage:**\n- UNESCO World Heritage Sites: Sukur Cultural Landscape (Adamawa), Osun-Osogbo Sacred Grove (Osun).\n- Rich architectural heritage: Kano's ancient city walls, Benin's moats, colonial-era buildings in Lagos.\n- Intangible heritage: festivals (Durbar, Osun-Osogbo, New Yam Festival), cuisine, languages.\n\n**Threats to Heritage:**\n- Rapid urbanisation destroying historical sites.\n- Neglect and lack of maintenance of heritage buildings.\n- Looting and illegal export of antiquities.\n- Cultural homogenisation through globalisation.\n\n**Community Resilience:**\n- Nigerian communities have strong social networks and mutual support systems.\n- Extended family systems provide safety nets.\n- Community development associations mobilise resources for local projects.\n- Faith-based organisations (mosques, churches) provide social services and community cohesion.\n\n**Disaster Preparedness:**\n- NEMA (National Emergency Management Agency) coordinates disaster response.\n- State Emergency Management Agencies (SEMAs) operate at state level.\n- Community-based early warning systems for floods and other hazards.\n- The need for building codes that account for climate risks.\n\n**Inclusive Communities:**\n- Accessibility for people with disabilities in urban planning.\n- Safe public spaces for women and children.\n- Integration of migrants and displaced persons into urban communities.\n- Participatory budgeting and community-driven development.` },
      { id: 4, title: "Environmental Sustainability in Cities", content: `Urban environmental sustainability is crucial as Nigeria's cities grow.\n\n**Air Quality:**\n- Nigerian cities rank among the world's most polluted.\n- Sources: vehicle emissions, generators, industrial pollution, refuse burning, dust.\n- Health impact: respiratory diseases, reduced life expectancy.\n- The NESREA (National Environmental Standards and Regulations Enforcement Agency) sets air quality standards but enforcement is limited.\n\n**Green Spaces:**\n- Nigerian cities have limited parks and green spaces.\n- Lagos has initiated greening programmes (Lekki Conservation Centre, parks along the lagoon).\n- Urban agriculture: rooftop gardens and small-scale farming in cities.\n- Tree planting campaigns to combat urban heat island effects.\n\n**Water and Waste:**\n- Urban water supply is inadequate and often contaminated.\n- Solid waste management remains a major challenge.\n- LAWMA (Lagos Waste Management Authority) is one of the better-funded agencies but still struggles.\n- Recycling: organisations like Wecyclers and RecyclePoints incentivise waste recycling.\n- E-waste: Nigeria is one of the largest destinations for electronic waste, with health and environmental consequences.\n\n**Climate Action in Cities:**\n- Urban areas contribute significantly to greenhouse gas emissions.\n- Green building practices (energy-efficient design, sustainable materials) are slowly gaining traction.\n- Flood-resistant construction and drainage improvements.\n- Climate adaptation plans for coastal cities (Lagos, Calabar) facing sea-level rise.\n\n**The Future:**\n- Nigerian cities can leapfrog to sustainable development by adopting clean technology, green infrastructure, and inclusive planning.\n- Youth-led environmental movements are growing.\n- The challenge is ensuring that sustainable city development benefits all residents, not just the wealthy.` }
    ]
  },
  {
    sdgId: 12,
    overview: "This course examines sustainable consumption and production patterns, waste management, and circular economy in the Nigerian context.",
    chapters: [
      { id: 1, title: "Consumption and Production Patterns", content: `Our current patterns of consumption and production are unsustainable and must change.\n\n**Global Context:**\n- If the global population reaches 9.8 billion by 2050, we would need almost three planets to sustain current lifestyles.\n- Material footprint (total raw materials used) has been growing faster than population and GDP.\n- Food waste: about 1/3 of all food produced is wasted globally.\n\n**Nigeria's Consumption Patterns:**\n- Rapid urbanisation and a growing middle class are changing consumption patterns.\n- Increasing demand for processed foods, electronics, vehicles, and housing.\n- "Throwaway culture" is growing, with single-use plastics being a major concern.\n- Nigeria uses about 1 million tonnes of plastics annually, most of which is not recycled.\n\n**Production Challenges:**\n- Nigerian manufacturing often uses outdated, inefficient technology.\n- High energy costs (due to generator dependence) increase production costs.\n- Limited adoption of cleaner production techniques.\n- Environmental regulations exist but enforcement is weak.\n\n**The Oil and Gas Sector:**\n- Gas flaring wastes about $2.5 billion worth of gas annually.\n- Oil spills in the Niger Delta have devastated ecosystems and livelihoods.\n- OGONI Clean-Up (recommended by UNEP 2011 report) is ongoing but slow.\n\n**Sustainable Alternatives:**\n- Local production reduces transport emissions and supports jobs.\n- Traditional practices (repairing items, composting, using natural materials) align with sustainability.\n- Growing awareness of sustainable fashion, ethical consumption, and green products.` },
      { id: 2, title: "Waste Management and Circular Economy", content: `Transitioning from a linear (take-make-dispose) to a circular economy is essential.\n\n**Nigeria's Waste Challenge:**\n- Nigeria generates about 32 million tons of solid waste annually.\n- Only about 20-30% is collected; the rest is dumped in waterways, roadsides, or burned.\n- Lagos alone generates over 13,000 tons of waste daily.\n- Open dumpsites (like Olusosun in Lagos, once Africa's largest) pose health and environmental risks.\n\n**Types of Waste:**\n- Organic waste (food, garden): about 50-60% of total waste — ideal for composting.\n- Plastics: growing rapidly, with PET bottles and sachet water bags being major contributors.\n- E-waste: Nigeria receives significant quantities of used electronics, often containing hazardous materials.\n- Medical waste: improper disposal poses public health risks.\n\n**Circular Economy Principles:**\n- Design out waste and pollution.\n- Keep products and materials in use.\n- Regenerate natural systems.\n\n**Circular Economy in Practice in Nigeria:**\n- **Recycling:** Companies like Wecyclers, RecyclePoints, and Chanja Datti collect recyclables from households using incentive systems.\n- **Upcycling:** Artisans create furniture, art, and household items from waste materials.\n- **Composting:** Converting organic waste to fertiliser for agriculture.\n- **Repair Economy:** Nigeria has a strong culture of repair — phone technicians, tailors, mechanics — that embodies circular economy principles.\n\n**Extended Producer Responsibility (EPR):**\n- The concept that producers should be responsible for the end-of-life management of their products.\n- Nigeria is developing an EPR framework, starting with packaging and electronics.` },
      { id: 3, title: "Sustainable Food Systems", content: `Making food systems sustainable requires addressing production, processing, distribution, and consumption.\n\n**Food Loss and Waste in Nigeria:**\n- Post-harvest losses account for 30-40% of food produced.\n- Causes: poor storage facilities, inadequate cold chain, bad roads, limited processing capacity.\n- Value: estimated $9 billion worth of food is lost annually.\n\n**Solutions for Reducing Food Loss:**\n- Improved storage (hermetic bags for grains, solar-powered cold rooms for perishables).\n- Better road infrastructure for faster transport to markets.\n- Food processing and preservation (drying, smoking, canning).\n- Market information systems to match supply with demand.\n\n**Sustainable Agriculture:**\n- Organic farming reduces chemical inputs and improves soil health.\n- Agroforestry integrates trees with crops for environmental benefits.\n- Water-efficient irrigation (drip irrigation) conserves scarce water resources.\n- Integrated Pest Management (IPM) reduces pesticide use.\n\n**Sustainable Diets:**\n- Traditional Nigerian diets (based on local grains, legumes, vegetables) are often more sustainable than imported processed foods.\n- Promoting consumption of indigenous crops (fonio, millet, cowpea) reduces environmental impact.\n- Reducing food waste at the household level through proper planning and storage.\n\n**Urban Agriculture:**\n- Rooftop gardens, vertical farming, and community gardens in cities like Lagos.\n- Aquaponics (combining fish farming with vegetable growing) is gaining interest.\n- School gardens teach children about nutrition and sustainability.` },
      { id: 4, title: "Corporate Responsibility and Sustainable Lifestyles", content: `Businesses and individuals both have roles to play in sustainable consumption and production.\n\n**Corporate Social Responsibility (CSR) in Nigeria:**\n- Many Nigerian companies invest in community development, education, and health.\n- Examples: MTN Foundation (education, health), Dangote Foundation (nutrition, health), Shell LiveWIRE (youth enterprise).\n- However, CSR is sometimes used to mask environmental and social harm.\n\n**Environmental, Social, and Governance (ESG):**\n- Growing interest in ESG reporting among Nigerian listed companies.\n- The Nigerian Stock Exchange Sustainability Disclosure Guidelines encourage transparency.\n- International investors increasingly require ESG compliance.\n\n**Sustainable Business Practices:**\n- Energy efficiency and renewable energy adoption.\n- Waste minimisation and recycling programmes.\n- Sustainable supply chain management.\n- Green building and office practices.\n\n**Consumer Awareness:**\n- Growing awareness of sustainable products and practices among Nigerian consumers.\n- Social media influencers promoting sustainable lifestyles.\n- "Green" products and services gaining market share.\n\n**Policy and Regulation:**\n- NESREA sets environmental standards for industries.\n- The Environmental Impact Assessment (EIA) Act requires assessment of development projects.\n- State-level environmental protection agencies enforce local regulations.\n- Lagos has banned single-use plastics in certain contexts (Styrofoam for food packaging).\n\n**Lifestyle Changes:**\n- Reduce: buy only what you need.\n- Reuse: find new uses for items before discarding.\n- Recycle: separate waste and use recycling services.\n- Support local: buy Nigerian-made products.\n- Conserve energy: switch off appliances, use energy-efficient lighting.\n- Manage water: fix leaks, collect rainwater, avoid waste.` }
    ]
  },
  {
    sdgId: 13,
    overview: "This course covers climate change science, impacts, and action — with focus on Nigeria and Africa's vulnerability and response.",
    chapters: [
      { id: 1, title: "Climate Change Science and Nigeria", content: `Climate change is the defining challenge of our time, and Nigeria is particularly vulnerable.\n\n**The Science:**\n- Global average temperatures have risen about 1.1°C above pre-industrial levels.\n- Greenhouse gases (CO2, methane, nitrous oxide) trap heat in the atmosphere.\n- Human activities (burning fossil fuels, deforestation, agriculture) are the primary cause.\n- The Paris Agreement aims to limit warming to 1.5°C above pre-industrial levels.\n\n**Nigeria's Climate:**\n- Nigeria spans multiple climate zones: tropical (south), savanna (middle), semi-arid (north).\n- Average temperatures have risen about 1.1°C since 1901.\n- Rainfall patterns are becoming more erratic and unpredictable.\n\n**Observed Changes in Nigeria:**\n- Lake Chad has shrunk by about 90% since the 1960s, affecting 30 million people in four countries.\n- Increasing frequency and severity of floods (the 2012 and 2022 floods were the worst in decades).\n- Advancing desertification in the North at about 600 m/year.\n- Rising sea levels threatening coastal areas (Lagos, Calabar, Port Harcourt).\n- Shifting growing seasons affecting farmers.\n\n**Nigeria's Emissions:**\n- Nigeria contributes less than 1% of global emissions but is among the most vulnerable to climate impacts.\n- Main sources: gas flaring, deforestation, agriculture, waste, and transport.\n- Gas flaring: Nigeria is one of the top gas-flaring countries, wasting valuable resources and emitting CO2.\n\n**Climate Vulnerability:**\n- Agriculture (rain-fed) supports 70% of livelihoods.\n- Coastal communities face flooding and erosion.\n- Urban areas are prone to heat waves and flooding.\n- The poor and marginalised are most vulnerable.` },
      { id: 2, title: "Climate Impacts and Adaptation", content: `Adaptation means adjusting to the effects of climate change that are already happening.\n\n**Climate Impacts in Nigeria:**\n- **Agriculture:** Changed rainfall patterns reduce crop yields. Drought affects northern Nigeria; flooding affects the South.\n- **Water Resources:** Groundwater depletion, reduced river flows, and contamination affect water availability.\n- **Health:** Heat-related illnesses, expansion of malaria zones, waterborne diseases from flooding.\n- **Conflict:** Competition for shrinking resources (water, grazing land) contributes to herder-farmer conflicts.\n- **Migration:** Climate-induced displacement is increasing, both internally and across borders.\n\n**Adaptation Strategies:**\n- **Agriculture:** Drought-resistant crop varieties, improved irrigation, crop diversification, and climate-smart agriculture practices.\n- **Water:** Rainwater harvesting, watershed management, groundwater recharge, and water-efficient technologies.\n- **Coastal Protection:** Mangrove restoration, seawalls, and managed retreat from vulnerable areas.\n- **Urban Resilience:** Improved drainage, flood defences, heat-resilient building design, and green infrastructure.\n- **Early Warning Systems:** Seasonal forecasts, flood warnings, and drought monitoring to help communities prepare.\n\n**The Great Green Wall:**\n- An African Union initiative to restore 100 million hectares of degraded land across the Sahel.\n- Nigeria's segment stretches across 11 northern states.\n- Involves tree planting, sustainable land management, and community development.\n- Progress has been slow but has restored some land and created local benefits.\n\n**Community-Based Adaptation:**\n- Local communities have indigenous knowledge about climate and weather.\n- Participatory approaches engage communities in developing adaptation plans.\n- Community-managed forests, water resources, and early warning systems.` },
      { id: 3, title: "Climate Mitigation and Clean Development", content: `Mitigation means reducing greenhouse gas emissions to limit future climate change.\n\n**Nigeria's Mitigation Commitments:**\n- Nigeria's Nationally Determined Contribution (NDC) under the Paris Agreement commits to reducing emissions by 20% unconditionally and 47% with international support by 2030.\n- Climate Change Act 2021 establishes the National Council on Climate Change and sets the framework for net-zero emissions by 2060.\n- Energy Transition Plan: Nigeria needs $410 billion by 2060 to achieve carbon neutrality.\n\n**Key Mitigation Strategies:**\n- **End Gas Flaring:** The government has set multiple deadlines (often missed) to end gas flaring. Flare gas commercialisation projects convert wasted gas into power and industrial use.\n- **Renewable Energy:** Scaling up solar, wind, and hydropower to reduce fossil fuel dependence.\n- **Forest Conservation:** Reducing deforestation (Nigeria has one of the highest deforestation rates globally at about 3.7% annually).\n- **Clean Transport:** Promoting mass transit, electric vehicles, and non-motorised transport.\n- **Waste Management:** Methane capture from landfills and wastewater treatment.\n\n**Carbon Markets:**\n- Clean Development Mechanism (CDM) allows developing countries to earn carbon credits.\n- Voluntary carbon markets are growing, with projects in reforestation, clean cooking, and renewable energy.\n- Article 6 of the Paris Agreement provides new frameworks for carbon trading.\n\n**Green Finance:**\n- Green bonds: Nigeria issued Africa's first sovereign green bond in 2017 (₦10.69 billion).\n- Climate funds: Green Climate Fund, Adaptation Fund, and bilateral climate finance.\n- Private sector climate finance through ESG investments and sustainability-linked loans.` },
      { id: 4, title: "Climate Action and Youth Engagement", content: `Climate action requires participation from all segments of society, especially youth.\n\n**Youth and Climate Action in Nigeria:**\n- Over 60% of Nigeria's population is under 25 — young people are the most affected by climate change and the most important agents of change.\n- Youth-led organisations: Sustainable Development Goals Youth Alliance, Climate Wednesday, YouthHubAfrica.\n- "Fridays for Future" Nigeria mobilises students for climate strikes.\n- Young Nigerians are starting green businesses (renewable energy, recycling, sustainable fashion).\n\n**Education and Awareness:**\n- Climate change education in schools is limited and needs mainstreaming.\n- Universities are incorporating climate modules into curricula.\n- Social media campaigns reach millions of young Nigerians.\n- Environmental journalism and podcasts are growing.\n\n**Community Climate Action:**\n- Tree planting campaigns (e.g., "Plant a Tree" initiative).\n- Community clean-up exercises.\n- Local recycling and waste management projects.\n- Energy conservation awareness.\n\n**International Climate Action:**\n- COP (Conference of Parties) annual climate negotiations. Nigeria participates actively.\n- Africa Climate Week and regional platforms.\n- Loss and Damage Fund established at COP27 (held in Africa, Egypt) to help vulnerable countries.\n\n**What You Can Do:**\n- Reduce energy consumption (switch off lights, use efficient appliances).\n- Minimise waste (reduce, reuse, recycle).\n- Use public transport or walk/cycle when possible.\n- Plant trees and protect green spaces.\n- Advocate for climate-friendly policies.\n- Support local and sustainable businesses.\n- Educate others about climate change.\n- Join or support environmental organisations.` }
    ]
  },
  {
    sdgId: 14,
    overview: "This course covers ocean conservation, marine resources, and the importance of sustainable use of Nigeria's coastal and marine ecosystems.",
    chapters: [
      { id: 1, title: "Nigeria's Marine and Coastal Environment", content: `Nigeria has a 853 km coastline along the Gulf of Guinea, rich in marine biodiversity and economic resources.\n\n**Marine Geography:**\n- Exclusive Economic Zone (EEZ) of about 210,900 sq km.\n- Major features: Niger Delta, Lagos Lagoon, Cross River estuary, mangrove forests.\n- Nigeria's coastal zone is home to about 25% of the population.\n\n**Marine Biodiversity:**\n- Over 200 species of fish in Nigerian waters.\n- Mangrove forests in the Niger Delta (third largest in the world).\n- Sea turtles (green, leatherback, olive ridley) nest on Nigerian beaches.\n- Whales, dolphins, and manatees inhabit Nigerian waters.\n\n**Economic Importance:**\n- Fishing industry employs over 700,000 people and contributes about 4% of agricultural GDP.\n- Oil and gas: the Niger Delta produces about 2 million barrels of oil per day.\n- Shipping: Lagos and other ports handle millions of tons of cargo annually.\n- Tourism potential in coastal areas.\n\n**Threats to Marine Ecosystems:**\n- Oil pollution: thousands of oil spills have occurred in the Niger Delta over decades.\n- Overfishing: both artisanal and industrial fishing exceed sustainable levels.\n- Plastic pollution: Nigerian beaches and waterways are littered with plastic waste.\n- Mangrove destruction for development, fuelwood, and sand mining.\n- Climate change: sea-level rise, ocean warming, and acidification.\n- Coastal erosion threatening communities in Lagos, Delta, and Bayelsa states.` },
      { id: 2, title: "Fisheries and Sustainable Use", content: `Sustainable fisheries management is crucial for food security and livelihoods.\n\n**Nigeria's Fishing Industry:**\n- Domestic fish production: about 1.1 million tonnes annually.\n- Fish consumption: 1.9 million tonnes annually, with a deficit of about 800,000 tonnes met through imports.\n- Artisanal fishers: about 80% of fishers use traditional boats and methods.\n- Industrial trawling: licensed vessels operate in deeper waters.\n- Aquaculture: growing rapidly, with catfish and tilapia being the most popular species.\n\n**Challenges:**\n- **Overfishing:** Both artisanal and industrial fishing are depleting fish stocks.\n- **Illegal Fishing:** IUU (Illegal, Unreported, and Unregulated) fishing by foreign vessels costs Nigeria an estimated $70 million annually.\n- **Habitat Destruction:** Mangrove clearing, pollution, and dredging destroy fish breeding grounds.\n- **Climate Change:** Rising water temperatures and changing currents affect fish distribution.\n\n**Sustainable Fisheries Management:**\n- Setting and enforcing catch limits based on scientific assessments.\n- Seasonal fishing bans to allow stocks to recover.\n- Marine Protected Areas (MPAs) to conserve critical habitats.\n- Vessel Monitoring Systems (VMS) to track fishing boats.\n- Community-based fisheries management involving local fishers.\n\n**Aquaculture Growth:**\n- Nigeria is one of Africa's largest aquaculture producers.\n- Catfish farming has grown significantly, providing income for thousands of farmers.\n- Challenges: high cost of fish feed, disease management, limited access to fingerlings.\n- Sustainable aquaculture practices include using locally sourced feed and minimising environmental impact.` },
      { id: 3, title: "Ocean Pollution and Conservation", content: `Ocean pollution is a growing threat to marine ecosystems and human health.\n\n**Sources of Marine Pollution in Nigeria:**\n- **Oil Spills:** Over 7,000 oil spills recorded in the Niger Delta between 1970 and 2000. The UNEP assessment of Ogoniland (2011) revealed extensive contamination.\n- **Plastic Pollution:** Rivers carry plastic waste from cities to the ocean. Lagos Lagoon and the Atlantic coast are heavily polluted.\n- **Industrial Waste:** Factory effluents discharged into rivers and the sea without adequate treatment.\n- **Sewage:** Most coastal cities lack sewage treatment plants.\n- **Ship Waste:** Ballast water, fuel spills, and garbage from vessels.\n\n**Impact on Marine Life:**\n- Oil pollution kills fish, birds, and other marine organisms.\n- Plastic ingestion and entanglement affect sea turtles, seabirds, and marine mammals.\n- Chemical pollution accumulates in the food chain (bioaccumulation).\n- Loss of mangrove forests destroys nursery habitats for fish and shrimp.\n\n**Conservation Efforts:**\n- NOSDRA (National Oil Spill Detection and Response Agency) responds to oil spills.\n- The Ogoni Clean-Up project is implementing UNEP recommendations.\n- Marine turtle conservation projects protect nesting beaches.\n- Cross River National Park protects some coastal and marine habitats.\n- Community-based conservation in fishing communities.\n\n**International Cooperation:**\n- MARPOL Convention regulates ship-based pollution.\n- Regional cooperation through the Gulf of Guinea Commission and Abidjan Convention.\n- Global treaty on plastic pollution under negotiation.\n\n**What Can Be Done:**\n- Strengthen enforcement of environmental laws.\n- Invest in waste management infrastructure.\n- Promote recycling and circular economy.\n- Support community-based conservation.\n- Clean up contaminated sites.` },
      { id: 4, title: "Blue Economy and Sustainable Development", content: `The blue economy approach uses ocean resources sustainably for economic growth and improved livelihoods.\n\n**What is the Blue Economy?**\n- Sustainable use of ocean resources for economic growth, improved livelihoods, and jobs while preserving ocean health.\n- Sectors include fisheries, aquaculture, shipping, tourism, renewable energy, and biotechnology.\n\n**Nigeria's Blue Economy Potential:**\n- Maritime sector contributes about $6 billion to GDP.\n- NIMASA (Nigerian Maritime Administration and Safety Agency) promotes maritime development.\n- Deep Blue Project (Integrated National Security and Waterways Protection Infrastructure) combats piracy.\n- Potential for offshore wind energy and wave power.\n\n**Maritime Security:**\n- Gulf of Guinea piracy has been a major concern, but incidents have decreased due to the Deep Blue Project and international cooperation.\n- Maritime safety, port security, and anti-piracy measures are crucial for economic development.\n\n**Coastal Tourism:**\n- Nigeria's beaches (Tarkwa Bay, Elegushi, Atican Beach) attract domestic tourists.\n- Potential for eco-tourism in mangrove areas and marine parks.\n- Tourism development requires infrastructure investment and environmental protection.\n\n**Marine Renewable Energy:**\n- Wave and tidal energy potential along the coast.\n- Offshore wind energy feasibility studies are underway.\n- Ocean thermal energy conversion (OTEC) could provide baseload power.\n\n**Challenges:**\n- Coastal erosion and sea-level rise threaten infrastructure.\n- Pollution degrades coastal and marine environments.\n- Weak institutional framework for integrated ocean governance.\n- Limited investment in marine research and technology.\n\n**The Way Forward:**\n- Develop a comprehensive national ocean policy.\n- Invest in marine research and education.\n- Promote sustainable fisheries and aquaculture.\n- Combat marine pollution through regulation and infrastructure.\n- Build climate-resilient coastal communities.` }
    ]
  },
  {
    sdgId: 15,
    overview: "This course explores terrestrial ecosystems, biodiversity, and land management in Nigeria — one of Africa's most biodiverse countries.",
    chapters: [
      { id: 1, title: "Nigeria's Terrestrial Ecosystems", content: `Nigeria has diverse terrestrial ecosystems, from tropical rainforests to semi-arid savannas.\n\n**Major Ecosystems:**\n- **Tropical Rainforest:** Southern Nigeria, especially Cross River, Edo, and Ondo states. Rich in biodiversity but severely degraded.\n- **Guinea Savanna:** Middle Belt region. Mix of grassland and woodland, important for agriculture.\n- **Sudan Savanna:** Northern Nigeria. Drier savanna with scattered trees.\n- **Sahel:** Extreme north. Semi-arid with sparse vegetation.\n- **Mangroves:** Niger Delta. Third-largest mangrove forest in the world.\n- **Montane Ecosystems:** Jos Plateau and Obudu Plateau. Unique highland environments.\n\n**Biodiversity:**\n- Over 7,895 plant species identified in Nigeria.\n- About 910 bird species — one of the highest in Africa.\n- Notable wildlife: Cross River gorillas (world's rarest great ape), forest elephants, chimpanzees, pangolins, manatees.\n- Nigeria is a biodiversity hotspot within the Guinean Forests of West Africa.\n\n**Protected Areas:**\n- 8 National Parks: Yankari, Cross River, Gashaka-Gumti, Okomu, Kainji Lake, Chad Basin, Old Oyo, Kamuku.\n- Over 1,000 forest reserves managed by state governments.\n- Community conservancies and private reserves.\n- Total protected area is about 12% of land area, below the 30% target.\n\n**Ecosystem Services:**\n- Forests purify water, regulate climate, prevent erosion, and provide food and medicine.\n- Wetlands filter water, control floods, and support fisheries.\n- Savannas support livestock grazing and crop agriculture.\n- These services are worth billions of dollars but are rarely valued in economic planning.` },
      { id: 2, title: "Deforestation and Land Degradation", content: `Nigeria has one of the highest deforestation rates in the world, threatening ecosystems and livelihoods.\n\n**Deforestation Statistics:**\n- Nigeria loses about 3.7% of its forest cover annually — among the highest rates globally.\n- Original forest cover has declined from about 40% to less than 7% of total land area.\n- Between 2000 and 2020, Nigeria lost about 5 million hectares of tree cover.\n\n**Causes of Deforestation:**\n- Agricultural expansion (largest driver): clearing forests for farms.\n- Logging: both legal and illegal timber harvesting.\n- Fuelwood and charcoal: about 70% of Nigerians use biomass for cooking.\n- Urbanisation: cities expanding into forested areas.\n- Infrastructure development: roads, dams, and buildings.\n- Mining: legal and illegal mining operations.\n\n**Land Degradation:**\n- **Desertification:** The Sahara advances into Nigeria at about 600m per year, affecting 11 northern states.\n- **Soil Erosion:** Gully erosion is severe in South-Eastern Nigeria, destroying homes and farmland.\n- **Salinisation:** Over-irrigation and poor drainage lead to salt buildup in soils.\n- **Pollution:** Industrial and mining waste contaminate land.\n\n**Impact:**\n- Loss of biodiversity and ecosystem services.\n- Reduced agricultural productivity.\n- Climate change (forests are carbon sinks).\n- Displacement of communities.\n- Loss of cultural and spiritual sites.\n\n**Combating Deforestation:**\n- Reforestation and afforestation programmes.\n- Community forestry management.\n- Alternative energy to reduce fuelwood demand.\n- Sustainable agriculture practices.\n- Strengthening forest governance and enforcement.\n- REDD+ (Reducing Emissions from Deforestation and forest Degradation) programmes.` },
      { id: 3, title: "Wildlife Conservation", content: `Nigeria's wildlife faces severe threats, but conservation efforts are growing.\n\n**Endangered Species:**\n- **Cross River Gorilla:** World's rarest great ape, with only about 300 remaining, mostly in Cross River National Park and the Afi Mountain Wildlife Sanctuary.\n- **Nigeria-Cameroon Chimpanzee:** Endangered subspecies found in southern Nigeria.\n- **Forest Elephant:** Numbers have declined drastically due to poaching and habitat loss.\n- **Pangolins:** World's most trafficked mammals. All four African species are found in Nigeria.\n- **African Grey Parrot:** Once abundant, now threatened by trapping for the pet trade.\n\n**Threats to Wildlife:**\n- Habitat loss from deforestation and agriculture.\n- Poaching and illegal wildlife trade.\n- Bushmeat hunting (a significant source of protein but unsustainable at current levels).\n- Human-wildlife conflict (crop raiding by elephants, livestock predation).\n- Climate change altering habitats and food sources.\n\n**Conservation Efforts:**\n- National Park Service manages protected areas.\n- Wildlife Conservation Society (WCS) works on gorilla conservation in Cross River.\n- Nigerian Conservation Foundation (NCF) leads conservation advocacy.\n- Community-based conservation programmes engage local people.\n- Anti-poaching patrols and intelligence-led enforcement.\n\n**CITES and International Trade:**\n- Nigeria is a Party to CITES (Convention on International Trade in Endangered Species).\n- Nigeria has been identified as a major transit point for illegal wildlife trade (ivory, pangolin scales).\n- Enforcement at ports and airports is improving but needs strengthening.\n\n**Conservation and Livelihoods:**\n- Eco-tourism can provide income for communities living near wildlife areas.\n- Yankari Game Reserve's warm spring and wildlife attract tourists.\n- Community conservancies offer models where conservation benefits local people directly.` },
      { id: 4, title: "Sustainable Land Management", content: `Sustainable land management is essential for food security, biodiversity, and climate resilience.\n\n**Principles:**\n- Use land within its capability.\n- Maintain and improve soil fertility.\n- Conserve water resources.\n- Protect biodiversity.\n- Ensure equitable access to land.\n\n**Land Tenure in Nigeria:**\n- The Land Use Act 1978 vests all land in state governors "in trust" for the people.\n- Certificate of Occupancy (C of O) is the primary land title document.\n- In practice, customary land tenure systems still dominate in rural areas.\n- Women's land rights are limited in many communities, despite constitutional provisions.\n\n**Sustainable Land Management Practices:**\n- **Agroforestry:** Combining trees with crops improves soil fertility and provides additional products.\n- **Terracing:** Building terraces on slopes reduces soil erosion, practiced in Jos Plateau.\n- **Mulching:** Covering soil with organic material retains moisture and adds nutrients.\n- **Contour Farming:** Ploughing along contour lines reduces water runoff.\n- **Fallowing:** Allowing land to rest and regenerate between cropping periods.\n\n**The Great Green Wall:**\n- Nigeria's contribution to the pan-African initiative to combat desertification.\n- Targets 11 northern states for reforestation and sustainable land management.\n- Community participation is key to success.\n- Combines tree planting with agriculture, water management, and livelihood support.\n\n**Land Restoration:**\n- Nigeria has committed to restoring 4 million hectares of degraded land under the Bonn Challenge.\n- Restoration activities include reforestation, soil conservation, and watershed management.\n- Success requires secure land tenure, community engagement, and sustained funding.\n\n**Climate-Smart Land Management:**\n- Practices that increase productivity while reducing emissions and building resilience.\n- Carbon sequestration in soils and vegetation.\n- Integration of climate data into land use planning.\n- Payment for Ecosystem Services (PES) schemes can incentivise sustainable practices.` }
    ]
  },
  {
    sdgId: 16,
    overview: "This course explores peace, justice, governance, and institutional development in Nigeria.",
    chapters: [
      { id: 1, title: "Peace and Security in Nigeria", content: `Nigeria faces multiple security challenges that threaten peace and development.\n\n**Security Challenges:**\n- **Boko Haram/ISWAP:** Islamist insurgency in the North-East since 2009 has killed over 40,000 people and displaced millions.\n- **Banditry:** Armed groups in the North-West engage in kidnapping, cattle rustling, and mass killings.\n- **Herder-Farmer Conflicts:** Competition for land between pastoralists and crop farmers, particularly in the Middle Belt.\n- **Separatist Movements:** IPOB (Indigenous People of Biafra) agitation in the South-East.\n- **Militancy in the Niger Delta:** Groups demanding resource control and environmental justice.\n- **Kidnapping for Ransom:** A nationwide security concern affecting all socioeconomic classes.\n- **Cultism and Gang Violence:** Particularly in urban areas and university campuses.\n\n**Impact of Insecurity:**\n- Loss of life and displacement.\n- Destruction of infrastructure and livelihoods.\n- Disruption of education and healthcare.\n- Reduced foreign investment.\n- Psychological trauma and social breakdown.\n\n**Security Architecture:**\n- Nigerian Armed Forces (Army, Navy, Air Force).\n- Nigeria Police Force (about 370,000 officers for 220 million people).\n- Paramilitary forces: NSCDC, Customs, Immigration.\n- Intelligence agencies: DSS, NIA.\n- Community policing and vigilante groups (Civilian JTF, Amotekun, Ebubeagu).\n\n**Peacebuilding Approaches:**\n- Dialogue and mediation (e.g., herder-farmer peace committees).\n- Deradicalisation programmes (Operation Safe Corridor for repentant Boko Haram members).\n- Community-based conflict resolution mechanisms.\n- Addressing root causes: poverty, unemployment, marginalisation.\n- Interfaith dialogue and religious tolerance initiatives.` },
      { id: 2, title: "Justice and the Rule of Law", content: `An effective justice system is fundamental to peace, development, and human rights.\n\n**Nigeria's Legal System:**\n- Three parallel legal systems: English Common Law, Customary Law, and Islamic (Sharia) Law (in 12 northern states).\n- The 1999 Constitution is the supreme law.\n- Judiciary: Supreme Court, Court of Appeal, Federal High Court, State High Courts, Magistrate Courts, Sharia Courts, Customary Courts.\n\n**Access to Justice:**\n- The formal justice system is inaccessible to many Nigerians due to cost, distance, complexity, and delay.\n- Case backlog: courts have millions of pending cases.\n- Pre-trial detention: about 72% of inmates in Nigerian prisons are awaiting trial.\n- Legal aid: the Legal Aid Council of Nigeria provides free legal services, but resources are limited.\n- Many Nigerians rely on informal justice mechanisms (traditional rulers, community leaders).\n\n**Key Justice Issues:**\n- **Police Reform:** The Nigeria Police Force faces challenges of corruption, brutality, poor training, and inadequate equipment. The #EndSARS movement (2020) highlighted police brutality.\n- **Prison Reform:** Overcrowding (prisons hold 2-3 times their capacity), poor conditions, and prolonged detention without trial.\n- **Judicial Independence:** Concerns about political influence on the judiciary, especially in election cases.\n- **Anti-Corruption:** EFCC (Economic and Financial Crimes Commission) and ICPC (Independent Corrupt Practices Commission) lead the fight against corruption.\n\n**Human Rights:**\n- The Constitution guarantees fundamental rights (life, dignity, liberty, fair hearing, etc.).\n- The National Human Rights Commission investigates violations.\n- Key concerns: extrajudicial killings, torture, arbitrary detention, restrictions on media and civil society.\n- Freedom of expression is protected but journalists and activists face threats.` },
      { id: 3, title: "Governance and Accountability", content: `Good governance is essential for effective institutions and sustainable development.\n\n**Nigeria's Government Structure:**\n- Federal presidential system with 36 states and FCT.\n- Three tiers: Federal, State, and Local Government.\n- Three arms: Executive, Legislature (bicameral at federal level), Judiciary.\n- Separation of powers with checks and balances (in theory).\n\n**Governance Challenges:**\n- **Corruption:** Transparency International ranks Nigeria 150 out of 180 countries. Corruption pervades all levels of government.\n- **Weak Institutions:** Many government agencies lack capacity, funding, and independence.\n- **Electoral Integrity:** Election rigging, violence, and vote buying undermine democratic legitimacy.\n- **Fiscal Federalism:** Debates about revenue allocation between federal, state, and local governments.\n- **Local Government Autonomy:** LGAs are constitutionally the third tier of government but often controlled by state governors.\n\n**Accountability Mechanisms:**\n- **EFCC and ICPC:** Anti-corruption agencies that investigate and prosecute financial crimes.\n- **Auditor General:** Audits government accounts.\n- **Public Procurement Act (BPP):** Regulates government spending.\n- **Freedom of Information Act (2011):** Citizens' right to access government information.\n- **National Assembly:** Legislative oversight of the executive.\n\n**Civil Society:**\n- Nigeria has a vibrant civil society that holds government accountable.\n- Organisations like BudgIT (budget transparency), SERAP (anti-corruption), and Enough is Enough (governance) use data and advocacy.\n- Media plays a crucial role: Premium Times, Sahara Reporters, and others investigate corruption.\n- Social media activism (#EndSARS, #FixTheCountry) has mobilised millions.\n\n**Open Government:**\n- Nigeria is a member of the Open Government Partnership (OGP).\n- The Open Contracting Data Standard improves procurement transparency.\n- Open Budget Index scores Nigeria's budget transparency.` },
      { id: 4, title: "Building Inclusive Institutions", content: `Strong, inclusive institutions are essential for sustainable development and peace.\n\n**What Makes Institutions Strong?**\n- Independence from political interference.\n- Transparency and accountability.\n- Competence and professionalism.\n- Inclusiveness (representing all segments of society).\n- Adaptability and innovation.\n\n**Key Institutions for SDG 16:**\n- **Independent National Electoral Commission (INEC):** Conducts elections. The introduction of BVAS (Bimodal Voter Accreditation System) and IReV (INEC Result Viewing Portal) improved transparency.\n- **National Assembly:** Makes laws, appropriates budget, and oversees the executive. Challenges include absenteeism, lobbying, and slow legislative processes.\n- **Judiciary:** Interprets laws and resolves disputes. Independence is crucial but faces challenges.\n- **Anti-Corruption Agencies:** EFCC, ICPC, Code of Conduct Bureau.\n- **National Human Rights Commission:** Investigates human rights violations.\n\n**Birth Registration:**\n- Only about 43% of Nigerian children under 5 have their births registered.\n- Birth registration is essential for accessing services, legal protection, and citizenship rights.\n- The National Population Commission (NPC) is responsible for birth registration.\n- Digital registration systems are being introduced to improve coverage.\n\n**Inclusive Participation:**\n- Ensuring women, youth, people with disabilities, and minorities are represented in governance.\n- Youth participation: "Not Too Young to Run" Act reduced age requirements for political office.\n- Disability inclusion: The Discrimination Against Persons with Disabilities Act 2018.\n- Ethnic and religious balance in government appointments (Federal Character Principle).\n\n**Technology and Governance:**\n- E-government initiatives for service delivery.\n- Digital identity (National Identity Number) for accessing services.\n- Open data platforms for government transparency.\n- Civic tech tools for citizen engagement and feedback.\n\n**The Way Forward:**\nBuilding strong institutions requires sustained investment, political will, citizen engagement, and a culture of accountability. Nigeria's young population represents both a challenge and an opportunity for institutional reform.` }
    ]
  },
  {
    sdgId: 17,
    overview: "This course explores partnerships, international cooperation, and the means of implementation for achieving all SDGs in Nigeria and Africa.",
    chapters: [
      { id: 1, title: "Global Partnerships for Development", content: `Achieving the SDGs requires partnerships between governments, private sector, civil society, and international organisations.\n\n**Why Partnerships Matter:**\n- No single actor (government, business, or NGO) can solve complex development challenges alone.\n- Partnerships bring together diverse resources, expertise, and perspectives.\n- SDG 17 is the "enabling goal" — it supports achievement of all other SDGs.\n\n**Types of Partnerships:**\n- **Government-to-Government:** Bilateral aid, diplomatic cooperation, and joint programmes.\n- **Public-Private Partnerships (PPPs):** Combining public purpose with private efficiency. Examples in Nigeria: Lekki-Ikoyi Link Bridge, Murtala Muhammed Airport Terminal 2.\n- **Multi-Stakeholder Partnerships:** Involving government, business, civil society, and academia. Example: Nigeria's SDG Private Sector Advisory Group.\n- **South-South Cooperation:** Developing countries sharing knowledge and resources. Nigeria's Technical Aid Corps (TAC) sends professionals to other developing countries.\n- **North-South Cooperation:** Traditional development assistance from developed to developing countries.\n\n**Nigeria's International Partnerships:**\n- United Nations: Nigeria is a founding member and active participant. Nigerian Ngozi Okonjo-Iweala heads the WTO; Amina Mohammed is UN Deputy Secretary-General.\n- African Union: Nigeria is a major contributor to AU peace operations.\n- ECOWAS: Nigeria plays a leading role in West African regional integration.\n- Bilateral partners: UK (FCDO), US (USAID), EU, China, Japan, Germany.\n\n**Development Finance:**\n- Official Development Assistance (ODA) to Nigeria: about $3-4 billion annually.\n- Foreign Direct Investment (FDI): volatile, mostly in oil and gas.\n- Remittances from diaspora: about $20 billion annually — largest in Africa.\n- Domestic resource mobilisation: Nigeria's tax-to-GDP ratio is about 6% (very low).` },
      { id: 2, title: "Trade, Technology, and Capacity Building", content: `Trade, technology transfer, and capacity building are essential means of implementation.\n\n**Trade:**\n- Nigeria's total trade is about $80 billion annually.\n- Exports are dominated by crude oil (about 90% of export value).\n- Main trading partners: India, Netherlands, Spain, US, China.\n- The African Continental Free Trade Area (AfCFTA) creates a single market of 1.3 billion people and $3.4 trillion GDP.\n- AfCFTA opportunity: Nigerian businesses can access new markets, but must improve product quality and competitiveness.\n\n**Technology Transfer:**\n- Access to technology is critical for development.\n- Nigeria's tech ecosystem generates innovation but gaps remain in adoption across sectors.\n- Digital technology can accelerate progress on all SDGs (health, education, agriculture, governance).\n- Challenges: digital divide, affordability, skills gap, infrastructure.\n\n**Technology Initiatives:**\n- NITDA promotes IT development and digital economy.\n- National Broadband Plan targets 70% broadband penetration.\n- Digital transformation of government services (e-government).\n- Smart agriculture technology adoption.\n\n**Capacity Building:**\n- Strengthening institutions and human resources to achieve development goals.\n- Areas: public administration, data collection, policy analysis, project management.\n- Training programmes by international organisations (World Bank, UNDP, AfDB).\n- Nigerian institutions building capacity: NIPSS (National Institute for Policy and Strategic Studies), Administrative Staff College of Nigeria (ASCON).\n\n**Data and Statistics:**\n- Good data is essential for planning, monitoring, and accountability.\n- National Bureau of Statistics (NBS) conducts surveys and produces economic data.\n- Challenges: outdated data, limited disaggregation, and gaps in coverage.\n- SDG tracking requires data on over 230 indicators — Nigeria reports on fewer than half.\n- The "Data Revolution" calls for better, more timely, and more accessible data.` },
      { id: 3, title: "Financing the SDGs", content: `Achieving the SDGs requires massive investment — estimated at $5-7 trillion annually globally.\n\n**Financing Gap:**\n- The SDG financing gap for developing countries is about $2.5 trillion annually.\n- Africa's SDG financing gap is estimated at $1.3 trillion annually.\n- Nigeria needs to significantly increase investment across all SDGs.\n\n**Sources of Finance:**\n- **Domestic Revenue:** Tax collection, customs duties, non-oil revenues. Nigeria's tax-to-GDP ratio of 6% has huge room for improvement (African average is 17%).\n- **Official Development Assistance (ODA):** Important but declining as a share of total finance. About $3-4 billion annually to Nigeria.\n- **Foreign Direct Investment (FDI):** Private investment from abroad. Nigeria needs to improve its business environment to attract more FDI.\n- **Remittances:** About $20 billion annually from the Nigerian diaspora — the largest source of foreign exchange after oil.\n- **Domestic Private Sector:** Nigerian businesses and investors can play a much larger role in development financing.\n- **Innovative Finance:** Green bonds, social impact bonds, blended finance, carbon credits.\n\n**Nigeria's Fiscal Challenges:**\n- Heavy debt burden: about 96% of revenue goes to debt servicing.\n- Fuel subsidy removal (2023) freed up fiscal space but caused inflation.\n- Revenue diversification: reducing dependence on oil revenues.\n- Blocking revenue leakages and fighting corruption.\n\n**The Role of the Private Sector:**\n- Corporate investment in SDG-aligned businesses.\n- Impact investing: investments that generate social/environmental returns alongside financial returns.\n- Philanthropy: Nigerian foundations (Tony Elumelu Foundation, Dangote Foundation) invest in development.\n- Pension funds: Nigeria's pension assets (about ₦16 trillion) could be deployed for infrastructure and development.\n\n**International Financing Mechanisms:**\n- Green Climate Fund, Global Fund (HIV/TB/Malaria), Gavi (vaccines).\n- World Bank IDA (International Development Association) loans.\n- African Development Bank financing.\n- Bilateral climate finance.` },
      { id: 4, title: "Nigeria's SDG Implementation", content: `Nigeria has frameworks for SDG implementation, but progress has been uneven.\n\n**Institutional Framework:**\n- **OSSAP-SDGs:** Office of the Senior Special Assistant to the President on SDGs coordinates national implementation.\n- **SDG Council:** Chaired by the Vice President, brings together government agencies.\n- **State-Level SDG Offices:** Some states have dedicated SDG focal points.\n- **Private Sector Advisory Group:** Engages businesses in SDG implementation.\n\n**Progress and Challenges:**\n- Nigeria conducted Voluntary National Reviews (VNRs) at the UN High-Level Political Forum.\n- Some progress on SDG 3 (health — polio eradication), SDG 9 (technology/fintech growth), and SDG 4 (education access).\n- Limited progress on SDG 1 (poverty has increased), SDG 2 (food insecurity worsened), SDG 16 (security challenges persist).\n- COVID-19, insecurity, and economic challenges have slowed progress.\n\n**Localising the SDGs:**\n- Translating global goals into local action at state and community levels.\n- States like Lagos, Kaduna, and Borno have integrated SDGs into development plans.\n- Local Government Areas (LGAs) are the closest level of government to communities but often lack capacity.\n\n**Monitoring and Evaluation:**\n- SDG indicators require data that Nigeria often lacks.\n- NBS conducts surveys but capacity is limited.\n- Civil society organisations (like BudgIT and ONE Campaign) track government SDG spending.\n- The "SDG Tracker" platform provides data on global progress.\n\n**The Role of Universities:**\n- Universities can contribute through research, teaching, and community engagement.\n- FUDMA and other Nigerian universities are integrating SDGs into curricula.\n- University-industry partnerships can drive innovation for the SDGs.\n- Students and faculty can be SDG ambassadors in their communities.\n\n**Conclusion:**\nAchieving the SDGs in Nigeria requires a "whole of society" approach — government, private sector, civil society, academia, and citizens working together. Despite challenges, Nigeria has the resources, talent, and determination to make significant progress. The 2030 deadline is approaching, and accelerated action is needed now.` }
    ]
  }
];
