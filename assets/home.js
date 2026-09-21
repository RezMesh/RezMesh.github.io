
/* ================= i18n ================= */
const I18N={
en:{"nav.problem":"Problem","nav.how":"How it works","nav.emergency":"Emergency","nav.power":"Power","nav.scenarios":"Scenarios","nav.engineering":"Engineering","nav.beta":"Beta access",
"hero.tag":"Communication beyond infrastructure.","hero.sub":"Communicate without cellular service or internet infrastructure.","hero.body":"RezMesh is designed for resilient device-to-device communication when conventional networks are unavailable, disrupted, overloaded, or out of reach.","hero.cta1":"Explore RezMesh","hero.cta2":"See How It Works","hero.beta":"Beta release coming soon. For Beta access, contact Soheil Mozaffari directly.","hero.legendInfra":"Conventional infrastructure","hero.legendMesh":"RezMesh local path","hero.seq":"SEQ 01 — Infrastructure loss / mesh formation",
"hs.1":"Infrastructure online","hs.2":"Disruption — infrastructure lost","hs.3":"Local mesh forming","hs.4":"Message moving device-to-device","hs.5":"Communication continues without infrastructure",
"princ.l1":"The infrastructure can disappear.","princ.l2":"The people and their devices are still there.","princ.note":"RezMesh turns the devices that remain into potential communication points.",
"prob.kick":"The problem","prob.head":"When the network is gone, nearby devices can still communicate.","prob.lead":"Infrastructure can disappear. The need to communicate does not.","prob.body":"Cellular towers, internet access, centralized services, and remote infrastructure are useful—until they are damaged, unavailable, congested, blocked, or simply too far away. RezMesh approaches communication from the other direction: start with the devices that are still physically present.","prob.btnRemove":"Remove infrastructure","prob.btnRestore":"Restore infrastructure","prob.note":"Distance is extended through participating nearby nodes—not through magical long-range radio.",
"ps.conv":"Message routed through carrier infrastructure","ps.fail":"Infrastructure removed — conventional path fails","ps.mesh":"Mesh path established — message delivered","ps.auto":"Transforms live — buttons replay",
"lbl.phone":"Phone","lbl.tower":"Cell tower","lbl.net":"Carrier / Internet","lbl.server":"Server","lbl.device":"Nearby device","lbl.shelter":"Shelter","lbl.medical":"Medical point","lbl.volunteers":"Volunteers",
"how.kick":"How it works","how.lead":"Nearby devices become part of the communication path.","how.body":"RezMesh uses local device-to-device communication to create resilient paths between participating devices without making cellular service or internet access the starting requirement.","how.s1t":"Discover","how.s1d":"Nearby RezMesh devices discover one another using local wireless capabilities.","how.s2t":"Connect","how.s2d":"Devices establish local communication relationships without requiring a central internet service.","how.s3t":"Route","how.s3d":"Information can move toward its destination through available participating devices.","how.s4t":"Adapt","how.s4d":"Communication behavior and power usage can change according to operating conditions.","how.out":"out of direct reach","how.recalc":"route recalculating…","how.scroll":"Scroll to advance the sequence","how.dest":"Destination","how.route":"Active route","how.settle":"Local path active — communication continues","how.phase":"PHASE",
"emg.kick":"Emergency broadcast","emg.head":"One urgent message. A community of reachable devices.","emg.body":"RezMesh includes an emergency alert mechanism designed to prioritize urgent communication across the available local mesh. Emergency messages can propagate beyond the originating device through participating nodes, allowing an alert to move through the reachable network without depending on cellular or internet infrastructure.","emg.btn":"Trigger emergency alert","emg.note":"Propagation depends on which devices are present and participating; universal coverage is not guaranteed.","emg.reached":"Devices reached","emg.w0":"Origin creates the alert","emg.w1":"Immediate peers receive","emg.w2":"Next reachable group","emg.w3":"Wider reachable mesh — settles",
"lg.origin":"Origin alert","lg.reached":"Reached device","lg.link":"Mesh link","lg.cover":"Coverage area",
"pow.kick":"Smart power control","pow.head":"Communication resilience also means protecting the battery.","pow.lead":"In an emergency, connectivity is only useful while the device still has power.","pow.body":"RezMesh implements multiple power states that change how aggressively communication resources are used—from active communication to increasingly conservative modes and hibernation. BLE scan timing, advertising availability, Wi‑Fi Direct availability and routing-update frequency change with each state.","pow.quote":"Spend energy when communication matters. Conserve it when survival time matters.","pow.btnEmg":"Demonstrate Emergency state","pow.term":"Duty cycling.","pow.termNote":"The strip chart shows how often the radio wakes: scan and transmit intervals follow the current power state.","pow.battery":"BATTERY","pow.axis":"RADIO ACTIVITY","pow.time":"TIME →","pow.override":"Intentional override","pow.scale":"Descending battery scale",
"st.emergency":"Emergency","st.active":"Active","st.balanced":"Balanced","st.saver":"Power Saver","st.minimal":"Minimal","st.hibernation":"Hibernation","st.dead":"Dead",
"pd.active":"Scanning frequent; connections responsive; radio activity high.","pd.balanced":"Scanning relaxed; routine traffic slightly deferred.","pd.saver":"Radio wakes in longer intervals; essentials only.","pd.minimal":"Sparse, deliberate activity; long listening silence.","pd.hibernation":"Radio largely asleep; brief periodic wake-ups.","pd.dead":"No power left; the device is silent by physics, not by choice.","pd.emergency":"High-priority state: radio resources fully committed regardless of battery level.",
"pw.wake":"Radio wake-ups","pw.wake.active":"frequent","pw.wake.balanced":"moderate","pw.wake.saver":"sparse","pw.wake.minimal":"minimal","pw.wake.hibernation":"largely asleep","pw.wake.dead":"—","pw.wake.emergency":"continuous",
"scn.kick":"Real-world scenarios","scn.head":"Designed for the places where connectivity becomes uncertain.","scn.hint":"Select a scenario — the stage updates. The visual story changes; the principle remains constant.",
"scn.1t":"Earthquake","scn.1m":"Local communication when centralized infrastructure is damaged or unavailable.","scn.2t":"Flood","scn.2m":"Coordinate across disrupted local environments.","scn.3t":"Wildfire","scn.3m":"Share urgent local information when conventional connectivity is unreliable.","scn.4t":"Infrastructure blackout","scn.4m":"Communication that does not begin with a cloud connection.","scn.5t":"Remote hiking & expeditions","scn.5m":"Stay connected beyond ordinary coverage.","scn.6t":"Festivals & crowded events","scn.6m":"A local communication option when centralized networks are overloaded.","scn.7t":"Conflict & communications disruption","scn.7m":"Resilient civilian communication when conventional networks become unavailable.",
"scn.principle":"The infrastructure disappears. <em>Local devices remain.</em>",
"tag.1":"Disaster response","tag.2":"Disaster response","tag.3":"Disaster response","tag.4":"Infrastructure outage","tag.5":"Outdoors & expeditions","tag.6":"Crowded events","tag.7":"Communications disruption",
"poc.kick":"No special hardware","poc.head":"Designed around the device already in your pocket","poc.lead":"The network begins with the devices people already carry.","poc.f1":"Phone","poc.s1":"An ordinary Android device, no added hardware","poc.f2":"Local wireless communication","poc.s2":"BLE discovery, Wi‑Fi Direct transport","poc.f3":"Nearby RezMesh devices","poc.s3":"Each participating device is a node","poc.f4":"Resilient local communication paths","poc.s4":"Range extends hop by hop, not by magic","poc.labA":"ISOLATED ENDPOINT","poc.labB":"PARTICIPATING NODE",
"gl.t1":"Device-to-device communication","gl.d1":"Devices talk directly with one another without traversing a tower or server.","gl.t2":"Mesh communication","gl.d2":"Every participating device can also carry messages for others; range extends through nearby nodes.","gl.t3":"Power-aware communication","gl.d3":"Radio activity is tuned to battery level and operating conditions to preserve survival time.",
"eng.kick":"Authorship & method","eng.head":"Engineering behind RezMesh","eng.bound":"RezMesh is developed using BOUND Method v3.0 — Boundary-Oriented Unified Development.","eng.author":"RezMesh is developed by Soheil Mozaffari, a software engineer and the author of BOUND Method v3.0.","eng.l1":"Soheil Mozaffari — professional website","eng.l4":"BOUND Method website","eng.l5":"BOUND DOI record on Zenodo","eng.former":"FORMERLY",
"beta.kick":"Availability","beta.head":"RezMesh Beta is coming soon.","beta.body":"RezMesh is preparing for its Beta release. Organizations, researchers, journalists, potential partners, and interested Beta users can contact Soheil Mozaffari directly for information about Beta access.","beta.cta":"Contact for Beta Access","beta.mail":"Direct contact:","beta.copy":"Copy email",
"toast.copied":"Email copied",
"foot.tag":"Communication beyond infrastructure.","foot.product":"Product","foot.identity":"Identity","foot.langs":"Languages","foot.history":"RezMesh was formerly known as RezvanMesh.","foot.colophon":"Diagrams are schematic and not to scale. Set in Space Grotesk, IBM Plex Sans & IBM Plex Mono.","foot.rights":"© Soheil Mozaffari. All rights reserved.",
"title":"RezMesh — Communication beyond infrastructure"},
fa:{"nav.problem":"مسئله","nav.how":"نحوه عملکرد","nav.emergency":"ارتباط اضطراری","nav.power":"مدیریت نیرو","nav.scenarios":"سناریوها","nav.engineering":"مهندسی","nav.beta":"دسترسی بتا",
"hero.tag":"ارتباط فراتر از زیرساخت.","hero.sub":"بدون سرویس تلفن همراه یا زیرساخت اینترنت، ارتباط برقرار کنید.","hero.body":"RezMesh برای ارتباط مقاوم دستگاه‌به‌دستگاه طراحی شده است؛ هنگامی که شبکه‌های متداول در دسترس نیستند، مختل شده‌اند، اشباع شده‌اند یا خارج از دسترس‌اند.","hero.cta1":"کاوش RezMesh","hero.cta2":"نحوه عملکرد را ببینید","hero.beta":"انتشار نسخه بتا به‌زودی. برای دسترسی بتا، مستقیماً با سهیل مظفری تماس بگیرید.","hero.legendInfra":"زیرساخت متداول","hero.legendMesh":"مسیر محلی RezMesh","hero.seq":"ترتیب ۰۱ — فقدان زیرساخت / شکل‌گیری mesh",
"hs.1":"زیرساخت فعال","hs.2":"اختلال — زیرساخت از دست رفت","hs.3":"شبکه محلی در حال شکل‌گیری","hs.4":"پیام میان دستگاه‌ها در حرکت است","hs.5":"ارتباط بدون زیرساخت ادامه دارد",
"princ.l1":"زیرساخت می‌تواند ناپدید شود.","princ.l2":"مردم و دستگاه‌هایشان هنوز آنجا هستند.","princ.note":"RezMesh دستگاه‌های باقی‌مانده را به نقاط ارتباطی ممکن تبدیل می‌کند.",
"prob.kick":"مسئله","prob.head":"وقتی شبکه از میان می‌رود، دستگاه‌های نزدیک همچنان می‌توانند ارتباط برقرار کنند.","prob.lead":"زیرساخت می‌تواند ناپدید شود؛ نیاز به ارتباط نه.","prob.body":"دکل‌های سلولی، دسترسی اینترنت و خدمات متمرکز مفیدند—تا زمانی که آسیب‌دیده، در دسترس نباشند، اشباع شوند، مسدود شوند یا خیلی دور باشند. RezMesh ارتباط را از جهت دیگر آغاز می‌کند: با دستگاه‌هایی که هنوز حضور فیزیکی دارند.","prob.btnRemove":"حذف زیرساخت","prob.btnRestore":"بازگردانی زیرساخت","prob.note":"برد ارتباط نه با جادو، بلکه از طریق دستگاه‌های نزدیکِ مشارکت‌کننده گسترش می‌یابد.",
"ps.conv":"پیام از زیرساخت حامل مسیریابی می‌شود","ps.fail":"زیرساخت حذف شد — مسیر متداول ناموفق است","ps.mesh":"مسیر mesh برقرار شد — پیام تحویل شد","ps.auto":"تحول زنده — دکمه‌ها تکرار می‌کنند",
"lbl.phone":"گوشی","lbl.tower":"دکل سلولی","lbl.net":"حامل / اینترنت","lbl.server":"سرور","lbl.device":"دستگاه نزدیک","lbl.shelter":"پناهگاه","lbl.medical":"نقطه پزشکی","lbl.volunteers":"داوطلبان",
"how.kick":"نحوه عملکرد","how.lead":"دستگاه‌های نزدیک بخشی از مسیر ارتباط می‌شوند.","how.body":"RezMesh با ارتباط محلی دستگاه‌به‌دستگاه، مسیرهای مقاومی میان دستگاه‌های مشارکت‌کننده می‌سازد، بدون آنکه سرویس تلفن همراه یا اینترنت پیش‌شرط آغاز باشد.","how.s1t":"کشف","how.s1d":"دستگاه‌های نزدیک RezMesh یکدیگر را با قابلیت‌های بی‌سیم محلی پیدا می‌کنند.","how.s2t":"اتصال","how.s2d":"دستگاه‌ها رابطه ارتباطی محلی برقرار می‌کنند، بدون نیاز به سرویس اینترنت مرکزی.","how.s3t":"مسیریابی","how.s3d":"اطلاعات می‌تواند از میان دستگاه‌های مشارکت‌کننده به مقصد برسد.","how.s4t":"سازگاری","how.s4d":"رفتار ارتباط و مصرف نیرو متناسب با شرایط کاری تغییر می‌کند.","how.out":"خارج از دسترس مستقیم","how.recalc":"مسیریابی دوباره…","how.scroll":"برای پیشرفت توالی اسکرول کنید","how.dest":"مقصد","how.route":"مسیر فعال","how.settle":"مسیر محلی فعال — ارتباط ادامه دارد","how.phase":"فاز",
"emg.kick":"پخش اضطراری","emg.head":"یک پیام فوری؛ جامعه‌ای از دستگاه‌های قابل دسترس.","emg.body":"RezMesh سازوکاری برای هشدار اضطراری دارد که ارتباط فوری را در mesh محلی موجود اولویت‌بندی می‌کند. پیام‌های اضطراری می‌توانند فراتر از دستگاه مبدأ از طریق گره‌های مشارکت‌کننده منتشر شوند، بدون وابستگی به زیرساخت سلولی یا اینترنت.","emg.btn":"فعال‌سازی هشدار اضطراری","emg.note":"انتشار به دستگاه‌های حاضر و مشارکت‌کننده بستگی دارد؛ پوشش همگانی تضمین نمی‌شود.","emg.reached":"دستگاه‌های رسیده","emg.w0":"مبدأ هشدار را می‌سازد","emg.w1":"همسایگان بلافاصله دریافت می‌کنند","emg.w2":"گروه قابل دسترس بعدی","emg.w3":"mesh گسترده‌تر — و آرام می‌گیرد",
"lg.origin":"هشدار مبدأ","lg.reached":"دستگاه رسیده","lg.link":"پیوند mesh","lg.cover":"پوشش",
"pow.kick":"کنترل هوشمند نیرو","pow.head":"تاب‌آوری ارتباط یعنی حفاظت از باتری هم.","pow.lead":"در شرایط اضطراری، اتصال تنها تا زمانی مفید است که دستگاه هنوز نیرو دارد.","pow.body":"RezMesh چند حالت نیرو دارد که شدت استفاده از منابع ارتباطی را تغییر می‌دهد: از ارتباط فعال تا حالت‌های محافظه‌کارانه و خواب زمستانی. زمان‌بندی اسکن BLE، تبلیغ دسترس‌پذیری، Wi‑Fi Direct و بسامد به‌روزرسانی مسیریابی با هر حالت تغییر می‌کند.","pow.quote":"وقتی ارتباط مهم است، نیرو خرج کن؛ وقتی زمان بقا مهم است، ذخیره کن.","pow.btnEmg":"نمایش حالت اضطراری","pow.term":"چرخه وظیفه (Duty cycling).","pow.termNote":"نوار نگار نشان می‌دهد رادیو چند وقت یک‌بار بیدار می‌شود: تناوب اسکن و ارسال از حالت نیرو پیروی می‌کند.","pow.battery":"باتری","pow.axis":"فعالیت رادیویی","pow.time":"زمان →","pow.override":"جایگزینی عمدی","pow.scale":"مقیاس نزولی باتری",
"st.emergency":"اضطراری","st.active":"فعال","st.balanced":"متعادل","st.saver":"ذخیرهٔ نیرو","st.minimal":"حداقل","st.hibernation":"خواب زمستانی","st.dead":"خاموش",
"pd.active":"اسکن پرتکرار؛ اتصال پاسخ‌گو؛ فعالیت رادیویی زیاد.","pd.balanced":"اسکن آرام‌تر؛ ترافیک معمولی کمی به تعویق می‌افتد.","pd.saver":"رادیو با فاصله‌های طولانی‌تر بیدار می‌شود؛ فقط ضروریات.","pd.minimal":"فعالیت پراکنده و عمدی؛ سکوت شنیداری طولانی.","pd.hibernation":"رادیو عمدتاً خواب است؛ بیدارشدن‌های دوره‌ای کوتاه.","pd.dead":"نیرویی نمانده؛ دستگاه از سرِ فیزیک خاموش است، نه از سرِ انتخاب.","pd.emergency":"حالت اولویت بالا: منابع رادیویی صرف‌نظر از سطح باتری کاملاً درگیرند.",
"pw.wake":"بیدارشدن‌های رادیو","pw.wake.active":"پرتکرار","pw.wake.balanced":"متوسط","pw.wake.saver":"پراکنده","pw.wake.minimal":"حداقل","pw.wake.hibernation":"خوابِ دوره‌ای","pw.wake.dead":"—","pw.wake.emergency":"پیوسته",
"scn.kick":"سناریوهای واقعی","scn.head":"برای مکان‌هایی طراحی شده که اتصال در آن‌ها نامطمئن می‌شود.","scn.hint":"سناریویی انتخاب کنید — صحنه به‌روز می‌شود. داستان بصری تغییر می‌کند؛ اصل ثابت می‌ماند.",
"scn.1t":"زلزله","scn.1m":"ارتباط محلی وقتی زیرساخت متمرکز آسیب‌دیده یا در دسترس نیست.","scn.2t":"سیل","scn.2m":"هماهنگی در محیط‌های محلی مختل‌شده.","scn.3t":"آتش‌سوزی جنگل","scn.3m":"اشتراک اطلاعات فوری محلی وقتی اتصال متداول نامطمئن است.","scn.4t":"خاموشی زیرساخت","scn.4m":"ارتباطی که با اتصال ابری آغاز نمی‌شود.","scn.5t":"کوهنوردی و سفرهای اکتشافی دور","scn.5m":"فراتر از پوشش متداول، متصل بمانید.","scn.6t":"جشنواره‌ها و رویدادهای پرجمعیت","scn.6m":"گزینه ارتباط محلی وقتی شبکه‌های متمرکز اشباع‌اند.","scn.7t":"تعارض و اختلال ارتباطات","scn.7m":"ارتباط مقاوم شهروندی وقتی شبکه‌های متداول در دسترس نیستند.",
"scn.principle":"زیرساخت ناپدید می‌شود. <em>دستگاه‌های محلی می‌مانند.</em>",
"tag.1":"پاسخ به بلایا","tag.2":"پاسخ به بلایا","tag.3":"پاسخ به بلایا","tag.4":"قطعی زیرساخت","tag.5":"فضای باز و سفرها","tag.6":"رویدادهای پرجمعیت","tag.7":"اختلال ارتباطات",
"poc.kick":"بدون سخت‌افزار ویژه","poc.head":"پیرامون دستگاهی که همین حالا در جیب شماست","poc.lead":"شبکه از دستگاه‌هایی آغاز می‌شود که مردم همراه دارند.","poc.f1":"گوشی","poc.s1":"یک دستگاه اندروید معمولی، بدون سخت‌افزار افزوده","poc.f2":"ارتباط بی‌سیم محلی","poc.s2":"کشف BLE، حمل Wi‑Fi Direct","poc.f3":"دستگاه‌های نزدیک RezMesh","poc.s3":"هر دستگاه مشارکت‌کننده یک گره است","poc.f4":"مسیرهای ارتباطی مقاوم محلی","poc.s4":"برد جهش‌به‌جهش گسترش می‌یابد، نه با جادو","poc.labA":"پایانه منزوی","poc.labB":"گره مشارکت‌کننده",
"gl.t1":"ارتباط دستگاه‌به‌دستگاه","gl.d1":"دستگاه‌ها بدون عبور از دکل یا سرور، مستقیم با یکدیگر گفت‌وگو می‌کنند.","gl.t2":"ارتباط مش (mesh)","gl.d2":"هر دستگاه مشارکت‌کننده می‌تواند پیام دیگران را نیز جابه‌جا کند؛ برد از طریق گره‌های نزدیک گسترش می‌یابد.","gl.t3":"ارتباط آگاه از نیرو","gl.d3":"فعالیت رادیویی با سطح باتری و شرایط کاری تنظیم می‌شود تا زمان بقا حفظ شود.",
"eng.kick":"مالکیت و روش","eng.head":"مهندسی پشت RezMesh","eng.bound":"RezMesh با متد BOUND نسخه ۳.۰ توسعه یافته است — Boundary-Oriented Unified Development.","eng.author":"RezMesh توسط سهیل مظفری، مهندس نرم‌افزار و نویسنده متد BOUND نسخه ۳.۰، توسعه داده می‌شود.","eng.l1":"وب‌گاه حرفه‌ای سهیل مظفری","eng.l4":"وب‌گاه متد BOUND","eng.l5":"رکورد DOI در Zenodo","eng.former":"پیشتر",
"beta.kick":"دسترس‌پذیری","beta.head":"نسخه بتای RezMesh به‌زودی منتشر می‌شود.","beta.body":"RezMesh برای انتشار بتا آماده می‌شود. سازمان‌ها، پژوهشگران، خبرنگاران، شرکای بالقوه و کاربران علاقه‌مند می‌توانند برای دسترسی بتا مستقیماً با سهیل مظفری تماس بگیرند.","beta.cta":"تماس برای دسترسی بتا","beta.mail":"تماس مستقیم:","beta.copy":"کپی رایانامه",
"toast.copied":"رایانامه کپی شد",
"foot.tag":"ارتباط فراتر از زیرساخت.","foot.product":"محصول","foot.identity":"هویت","foot.langs":"زبان‌ها","foot.history":"RezMesh پیش‌تر با نام RezvanMesh شناخته می‌شد.","foot.colophon":"نمودارها شماتیک و بدون مقیاس‌اند. تنظیم‌شده با Space Grotesk، IBM Plex Sans و IBM Plex Mono.","foot.rights":"© سهیل مظفری. تمامی حقوق محفوظ است.",
"title":"RezMesh — ارتباط فراتر از زیرساخت"},
ar:{"nav.problem":"المشكلة","nav.how":"كيف يعمل","nav.emergency":"الطوارئ","nav.power":"الطاقة","nav.scenarios":"السيناريوهات","nav.engineering":"الهندسة","nav.beta":"الوصول التجريبي",
"hero.tag":"اتصال يتجاوز البنية التحتية.","hero.sub":"تواصل دون خدمة خلوية أو بنية تحتية للإنترنت.","hero.body":"صُمم RezMesh لاتصال مرن من جهاز إلى جهاز عندما تكون الشبكات التقليدية غير متاحة أو معطلة أو مثقلة بالأحمال أو بعيدة المنال.","hero.cta1":"استكشف RezMesh","hero.cta2":"شاهد كيف يعمل","hero.beta":"سيصدر الإصدار التجريبي قريبًا. للوصول التجريبي، تواصل مباشرة مع سهيل مظفري.","hero.legendInfra":"البنية التحتية التقليدية","hero.legendMesh":"مسار RezMesh المحلي","hero.seq":"التسلسل 01 — فقدان البنية / تشكّل الشبكة",
"hs.1":"البنية التحتية تعمل","hs.2":"اضطراب — فقدت البنية التحتية","hs.3":"الشبكة المحلية تتشكل","hs.4":"الرسالة تنتقل بين الأجهزة","hs.5":"الاتصال يستمر دون بنية تحتية",
"princ.l1":"قد تختفي البنية التحتية.","princ.l2":"الناس وأجهزتهم ما زالوا هناك.","princ.note":"يحوّل RezMesh الأجهزة المتبقية إلى نقاط اتصال محتملة.",
"prob.kick":"المشكلة","prob.head":"حين تختفي الشبكة، تبقى الأجهزة القريبة قادرة على التواصل.","prob.lead":"قد تختفي البنية التحتية، لكن الحاجة إلى التواصل لا تختفي.","prob.body":"الأبراج الخلوية والإنترنت والخدمات المركزية مفيدة—حتى تتضرر أو تصبح غير متاحة أو مزدحمة أو محظورة أو بعيدة جدًا. يبدأ RezMesh الاتصال من الاتجاه الآخر: من الأجهزة الموجودة فعليًا في المكان.","prob.btnRemove":"أزل البنية التحتية","prob.btnRestore":"أعد البنية التحتية","prob.note":"تمتد المسافة عبر الأجهزة القريبة المشاركة—لا عبر اتصال سحري بعيد المدى.",
"ps.conv":"تُوجَّه الرسالة عبر بنية المشغل","ps.fail":"أُزيلت البنية التحتية — فشل المسار التقليدي","ps.mesh":"تم إنشاء مسار الشبكة — وصلت الرسالة","ps.auto":"يتحول مباشرة — الأزرار للإعادة",
"lbl.phone":"هاتف","lbl.tower":"برج خلوي","lbl.net":"مشغل / إنترنت","lbl.server":"خادم","lbl.device":"جهاز قريب","lbl.shelter":"مأوى","lbl.medical":"نقطة طبية","lbl.volunteers":"متطوعون",
"how.kick":"كيف يعمل","how.lead":"الأجهزة القريبة تصبح جزءًا من مسار الاتصال.","how.body":"يستخدم RezMesh اتصالًا محليًا من جهاز إلى جهاز لبناء مسارات مرنة بين الأجهزة المشاركة، دون اشتراط خدمة خلوية أو إنترنت كنقطة بداية.","how.s1t":"اكتشاف","how.s1d":"تتعرف أجهزة RezMesh القريبة على بعضها عبر إمكانات لاسلكية محلية.","how.s2t":"اتصال","how.s2d":"تُنشئ الأجهزة علاقات اتصال محلية دون حاجة إلى خدمة إنترنت مركزية.","how.s3t":"توجيه","how.s3d":"تنتقل المعلومات نحو وجهتها عبر الأجهزة المشاركة المتاحة.","how.s4t":"تكيّف","how.s4d":"يتغير سلوك الاتصال واستهلاك الطاقة وفق ظروف التشغيل.","how.out":"خارج المدى المباشر","how.recalc":"إعادة حساب المسار…","how.scroll":"مرّر لتقديم التسلسل","how.dest":"الوجهة","how.route":"المسار النشط","how.settle":"المسار المحلي نشط — الاتصال يستمر","how.phase":"المرحلة",
"emg.kick":"بث الطوارئ","emg.head":"رسالة عاجلة واحدة؛ مجتمع من الأجهزة التي يمكن الوصول إليها.","emg.body":"يتضمن RezMesh آلية تنبيه طوارئ تُعلي أولوية المعلومات العاجلة عبر الشبكة المحلية المتاحة، ويمكن للرسائل أن تنتشر عبر الأجهزة المشاركة دون الاعتماد على البنية الخلوية أو الإنترنت.","emg.btn":"تفعيل تنبيه الطوارئ","emg.note":"يعتمد الانتشار على الأجهزة الحاضرة والمشاركة؛ التغطية الشاملة غير مضمونة.","emg.reached":"أجهزة تم الوصول إليها","emg.w0":"المصدر ينشئ التنبيه","emg.w1":"الأقران المباشرون يستقبلون","emg.w2":"المجموعة التالية التي يمكن الوصول إليها","emg.w3":"شبكة أوسع — ثم تستقر",
"lg.origin":"تنبيه المصدر","lg.reached":"جهاز تم الوصول إليه","lg.link":"وصلة شبكية","lg.cover":"منطقة التغطية",
"pow.kick":"تحكم ذكي بالطاقة","pow.head":"مرونة الاتصال تعني أيضًا حماية البطارية.","pow.lead":"في الطوارئ، لا يفيد الاتصال إلا ما دام الجهاز يعمل.","pow.body":"يوفر RezMesh حالات طاقة متعددة تغيّر درجة استخدام موارد الاتصال: من الاتصال النشط إلى أوضاع أكثر تحفظًا ثم السبات. وتتغير معها توقيتات فحص BLE والإعلان وتوفر Wi‑Fi Direct وتواتر تحديثات التوجيه.","pow.quote":"أنفق الطاقة حين يهم الاتصال، ووفّرها حين يهم وقت البقاء.","pow.btnEmg":"عرض حالة الطوارئ","pow.term":"دورية المهام (Duty cycling).","pow.termNote":"يوضح المخطط الشريطي مدى تكرار استيقاظ اللاسلكي: وتيرة الفحص والإرسال تتبع حالة الطاقة الحالية.","pow.battery":"البطارية","pow.axis":"النشاط اللاسلكي","pow.time":"الزمن →","pow.override":"تجاوز مقصود","pow.scale":"مقياس البطارية التنازلي",
"st.emergency":"طوارئ","st.active":"نشط","st.balanced":"متوازن","st.saver":"توفير الطاقة","st.minimal":"الحد الأدنى","st.hibernation":"سبات","st.dead":"متوقف",
"pd.active":"فحص متكرر؛ اتصال سريع الاستجابة؛ نشاط لاسلكي عالٍ.","pd.balanced":"فحص أهدأ؛ تأجيل طفيف للحركة الاعتيادية.","pd.saver":"يستيقظ اللاسلكي على فترات أطول؛ للضروريات فقط.","pd.minimal":"نشاط متباعد ومقصود؛ صمت استماع طويل.","pd.hibernation":"اللاسلكي نائم في الغالب؛ استيقاظات دورية قصيرة.","pd.dead":"لا طاقة متبقية؛ الصمت هنا بفعل الفيزياء لا الاختيار.","pd.emergency":"حالة أولوية قصوى: موارد اللاسلكي ملتزمة بالكامل بغض النظر عن مستوى البطارية.",
"pw.wake":"استيقاظات اللاسلكي","pw.wake.active":"متكررة","pw.wake.balanced":"متوسطة","pw.wake.saver":"متباعدة","pw.wake.minimal":"حد أدنى","pw.wake.hibernation":"شبه نائمة","pw.wake.dead":"—","pw.wake.emergency":"مستمرة",
"scn.kick":"سيناريوهات واقعية","scn.head":"صُمم للأماكن التي يصبح فيها الاتصال غير مؤكد.","scn.hint":"اختر سيناريو — تتحدث المنصة. تتغير القصة البصرية؛ يبقى المبدأ ثابتًا.",
"scn.1t":"زلزال","scn.1m":"اتصال محلي حين تتضرر البنية المركزية أو تغيب.","scn.2t":"فيضان","scn.2m":"تنسيق عبر بيئات محلية متقطعة.","scn.3t":"حريق غابات","scn.3m":"مشاركة معلومات عاجلة محليًا حين يكون الاتصال التقليدي غير موثوق.","scn.4t":"انقطاع البنية التحتية","scn.4m":"اتصال لا يبدأ بالاتصال السحابي.","scn.5t":"مشي جبلي ورحلات استكشافية","scn.5m":"ابقَ متصلًا خارج التغطية الاعتيادية.","scn.6t":"مهرجانات وفعاليات مزدحمة","scn.6m":"خيار اتصال محلي حين تُثقل الشبكات المركزية.","scn.7t":"النزاعات واضطراب الاتصالات","scn.7m":"اتصال مدني مرن حين تصبح الشبكات التقليدية غير متاحة.",
"scn.principle":"تختفي البنية التحتية. <em>تبقى الأجهزة المحلية.</em>",
"tag.1":"استجابة للكوارث","tag.2":"استجابة للكوارث","tag.3":"استجابة للكوارث","tag.4":"انقطاع البنية","tag.5":"هواء طلق ورحلات","tag.6":"فعاليات مزدحمة","tag.7":"اضطراب الاتصالات",
"poc.kick":"بدون عتاد خاص","poc.head":"صُمم حول الجهاز الموجود في جيبك بالفعل","poc.lead":"تبدأ الشبكة من الأجهزة التي يحملها الناس بالفعل.","poc.f1":"هاتف","poc.s1":"جهاز أندرويد عادي، بلا عتاد إضافي","poc.f2":"اتصال لاسلكي محلي","poc.s2":"اكتشاف BLE ونقل Wi‑Fi Direct","poc.f3":"أجهزة RezMesh القريبة","poc.s3":"كل جهاز مشارك عقدة","poc.f4":"مسارات اتصال محلية مرنة","poc.s4":"تمتد المسافة قفزة بقفزة، لا بالسحر","poc.labA":"طرف معزول","poc.labB":"عقدة مشاركة",
"gl.t1":"اتصال من جهاز إلى جهاز","gl.d1":"تتحدث الأجهزة مباشرة مع بعضها دون برج أو خادم.","gl.t2":"اتصال شبكي (mesh)","gl.d2":"كل جهاز مشارك يمكنه نقل رسائل الآخرين؛ تمتد المسافة عبر العقد القريبة.","gl.t3":"اتصال واعٍ بالطاقة","gl.d3":"يُضبط النشاط اللاسلكي وفق مستوى البطارية وظروف التشغيل للحفاظ على وقت البقاء.",
"eng.kick":"التأليف والمنهج","eng.head":"الهندسة خلف RezMesh","eng.bound":"يُطوَّر RezMesh باستخدام منهجية BOUND الإصدار 3.0 — التطوير الموحّد الموجّه بالحدود.","eng.author":"يطوّر RezMesh سهيل مظفري، مهندس برمجيات ومؤلف منهجية BOUND الإصدار 3.0.","eng.l1":"الموقع المهني لسهيل مظفري","eng.l4":"موقع منهجية BOUND","eng.l5":"سجل DOI على Zenodo","eng.former":"سابقًا",
"beta.kick":"التوفر","beta.head":"سيصدر RezMesh التجريبي قريبًا.","beta.body":"يستعد RezMesh لإصداره التجريبي. يمكن للمنظمات والباحثين والصحفيين والشركاء المحتملين والمستخدمين المهتمين مراسلة سهيل مظفري مباشرة للحصول على وصول تجريبي.","beta.cta":"تواصل للوصول التجريبي","beta.mail":"تواصل مباشر:","beta.copy":"نسخ البريد",
"toast.copied":"تم نسخ البريد",
"foot.tag":"اتصال يتجاوز البنية التحتية.","foot.product":"المنتج","foot.identity":"الهوية","foot.langs":"اللغات","foot.history":"كان RezMesh معروفًا سابقًا باسم RezvanMesh.","foot.colophon":"المخططات توضيحية وليست بمقياس. التنسيق بخطوط Space Grotesk وIBM Plex Sans وIBM Plex Mono.","foot.rights":"© سهيل مظفري. جميع الحقوق محفوظة.",
"title":"RezMesh — اتصال يتجاوز البنية التحتية"}};
const TITLES={en:"RezMesh — Communication beyond infrastructure",fa:"RezMesh — ارتباط فراتر از زیرساخت",ar:"RezMesh — اتصال يتجاوز البنية التحتية"};
let LANG=document.documentElement.lang||"en";
const t=k=>(I18N[LANG]||I18N.en)[k]??I18N.en[k]??k;
function applyLang(c){LANG=c;const d=I18N[c]||I18N.en;
  document.documentElement.lang=c;document.documentElement.dir=(c==="fa"||c==="ar")?"rtl":"ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.getAttribute("data-i18n");if(d[k]!==undefined)el.textContent=d[k];});
  document.querySelectorAll("[data-i18n-html]").forEach(el=>{const k=el.getAttribute("data-i18n-html");if(d[k]!==undefined)el.innerHTML=d[k];});
  document.title=TITLES[c];
  document.querySelectorAll(".langs button").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.lang===c)));
  if(window.__dyn)window.__dyn.forEach(f=>f());}
document.querySelectorAll(".langs button").forEach(b=>b.addEventListener("click",()=>applyLang(b.dataset.lang)));
document.querySelectorAll("[data-langlink]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();applyLang(a.dataset.langlink);}));
/* ================= helpers ================= */
const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const add=(el,c)=>el&&el.classList.add(c),rm=(el,c)=>el&&el.classList.remove(c);
const cl=v=>Math.min(1,Math.max(0,v)),seg=(p,a,b)=>cl((p-a)/(b-a));
const LOOPS=[];
function makeLoop(dur,steps,target,onTick){let idx=0,tt=0,last=0,run=false,raf=0;
  function frame(ts){if(!run)return;if(!last)last=ts;tt+=(ts-last)/1000;last=ts;
    while(idx<steps.length&&steps[idx].t<=tt){steps[idx].fn();idx++;}
    if(onTick)onTick(tt);
    if(tt>=dur){tt=0;idx=0;}
    raf=requestAnimationFrame(frame);}
  function start(){if(RM){steps.forEach(s=>s.fn());if(onTick)onTick(dur);return;}if(run)return;run=true;last=0;raf=requestAnimationFrame(frame);}
  function pause(){run=false;cancelAnimationFrame(raf);}
  if(target&&"IntersectionObserver"in window)new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?start():pause()),{threshold:.2}).observe(target);else start();
  LOOPS.push({start,pause,target});return{start,pause};}
const rio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");rio.unobserve(e.target);}}),{threshold:.14});
$$(".rv,.band").forEach(el=>rio.observe(el));
const vio=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle("pause",!e.isIntersecting)),{threshold:.08});
$$(".scn-item.on, #pocket svg").forEach(el=>vio.observe(el));
document.addEventListener("visibilitychange",()=>{if(document.hidden)LOOPS.forEach(l=>l.pause());
  else LOOPS.forEach(l=>{if(!l.target)return;const r=l.target.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight)l.start();});});
/* ================= chrome ================= */
const hdr=$("#hdr"),prog=$("#progress"),backTop=$("#backTop");let sTick=false;
addEventListener("scroll",()=>{if(sTick)return;sTick=true;requestAnimationFrame(()=>{
  const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
  prog.style.width=(h>0?(y/h)*100:0)+"%";hdr.classList.toggle("scrolled",y>30);backTop.classList.toggle("on",y>760);sTick=false;});},{passive:true});
backTop.addEventListener("click",()=>scrollTo({top:0,behavior:RM?"auto":"smooth"}));
const menuBtn=$("#menuBtn"),mnav=$("#mnav");
menuBtn.addEventListener("click",()=>{const o=mnav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",String(o));});
mnav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mnav.classList.remove("open");menuBtn.setAttribute("aria-expanded","false");}));
const spy=new IntersectionObserver(es=>es.forEach(e=>{const l=document.querySelector('nav.main a[href="#'+e.target.id+'"]');
  if(l&&e.isIntersecting){$$("nav.main a").forEach(a=>a.classList.remove("active"));l.classList.add("active");}}),{rootMargin:"-42% 0px -52% 0px"});
["problem","how","emergency","power","scenarios","engineering"].forEach(id=>{const el=document.getElementById(id);if(el)spy.observe(el);});
/* ================= HERO ================= */
const HERO=$("#hero"),hStat=$("#heroStatus"),hDots=$$("#hDots b"),tcode=$("#tcode");
const hRows=$$("#heroResilience .rr"),hPacket=$("#heroPacket"),meshState=$("#meshState");
function heroPhase(n,key,cls){
  hStat.className="status"+(cls?" "+cls:"");
  const sp=hStat.querySelector("span");
  sp.setAttribute("data-i18n",key);
  sp.textContent=t(key);
  hDots.forEach((dot,i)=>dot.classList.toggle("on",i<=n));
}
function rowSet(row,mode){
  if(!row)return;
  row.classList.remove("lost","present","active");
  if(mode)row.classList.add(mode);
  const small=row.querySelector("small");
  if(small){
    const off=mode==="lost"||mode==="active";
    small.textContent=off?(small.dataset.off||small.textContent):(small.dataset.on||small.textContent);
  }
}
function heroScenePhase(n){
  HERO.dataset.phase=String(n);
  rowSet(hRows[0],n>=1?"lost":"");
  rowSet(hRows[1],n>=1?"lost":"");
  rowSet(hRows[2],n>=2?"present":"");
  rowSet(hRows[3],n>=3?"active":"");
  if(meshState){
    const lang=document.documentElement.lang;
    const active=lang==="fa"?"فعال":lang==="ar"?"نشط":"ACTIVE";
    const standby=lang==="fa"?"آماده‌باش":lang==="ar"?"استعداد":"STANDBY";
    meshState.textContent=n>=3?active:standby;
  }
}
function runHeroPacket(){
  if(!hPacket)return;
  rm(hPacket,"run");
  void hPacket.getBoundingClientRect();
  add(hPacket,"run");
}
if(RM){
  heroScenePhase(4);
  heroPhase(4,"hs.5","ok");
}else{
  makeLoop(17,[
    {t:0,fn:()=>{heroScenePhase(0);heroPhase(0,"hs.1","");rm(hPacket,"run");}},
    {t:4,fn:()=>{heroScenePhase(1);heroPhase(1,"hs.2","warn");}},
    {t:6.4,fn:()=>{heroScenePhase(2);heroPhase(2,"hs.3","ok");}},
    {t:9,fn:()=>{heroScenePhase(3);heroPhase(3,"hs.4","ok");}},
    {t:11.2,fn:()=>{heroScenePhase(4);runHeroPacket();heroPhase(4,"hs.5","ok");}}
  ],HERO,tt=>{tcode.textContent="T+"+String(Math.floor(tt)).padStart(2,"0")+"S";});
}
/* ================= DISCONNECTED -> CONNECTED ================= */
const story=$("#problem"),storySteps=$$(".story-step"),storyStatus=$("#storyStatus"),storyMsg=$("#storyMessage");
let storyRestart=null;
function setStory(n,runMessage=false){
  if(!story)return;
  story.dataset.storyStage=String(n);
  storySteps.forEach((btn,i)=>{
    const on=i===n;
    btn.classList.toggle("active",on);
    btn.setAttribute("aria-pressed",String(on));
  });
  const active=storySteps[n];
  if(active&&storyStatus)storyStatus.textContent=active.dataset.status||"";
  if(runMessage&&storyMsg){
    rm(storyMsg,"run");
    void storyMsg.getBoundingClientRect();
    add(storyMsg,"run");
  }else if(storyMsg){
    rm(storyMsg,"run");
  }
}
let storyLoop=null;
if(story){
  if(RM){
    setStory(3,false);
  }else{
    storyLoop=makeLoop(14,[
      {t:0,fn:()=>setStory(0,false)},
      {t:3.2,fn:()=>setStory(1,false)},
      {t:6.2,fn:()=>setStory(2,false)},
      {t:9.2,fn:()=>setStory(3,true)}
    ],story);
  }
  storySteps.forEach((btn,i)=>btn.addEventListener("click",()=>{
    if(storyLoop)storyLoop.pause();
    clearTimeout(storyRestart);
    setStory(i,i===3);
    if(storyLoop&&!RM)storyRestart=setTimeout(()=>storyLoop.start(),4500);
  }));
}
/* ================= HOW (scrub) ================= */
const howLis=$$("#howList li"),howRail=$("#howRail"),howRead=$("#howRead"),howStat=$("#howStatus");
const HOWK=["how.s1t","how.s2t","how.s3t","how.s4t"];
const rA=$("#routeA"),rB=$("#routeB"),mA=$("#msgA"),mB=$("#msgB");
let lenA=0,lenB=0;
try{lenA=rA.getTotalLength();lenB=rB.getTotalLength();}catch(e){}
function place(el,path,len,q){if(!len)return;const p=path.getPointAtLength(q*len);el.setAttribute("transform","translate("+p.x+","+p.y+")");}
function applyHow(p){
  const e=seg(p,0,.08);
  const n1=$("#n1g");n1.setAttribute("opacity",e);n1.setAttribute("transform","translate("+(-60*(1-e))+","+(60*(1-e))+")");
  const d=seg(p,.08,.22),ring=$("#n1ring");
  ring.style.transform="scale("+(0.3+d*2.8)+")";ring.setAttribute("opacity",(1-d)*.9*e);
  const c1=seg(p,.22,.36),c2=seg(p,.28,.42);
  $("#hk1").style.strokeDashoffset=1-c1;$("#hk1").style.opacity=c1>0?1:0;
  $("#hk2").style.strokeDashoffset=1-c2;$("#hk2").style.opacity=c2>0?1:0;
  const dst=$("#hdest");dst.setAttribute("opacity",seg(p,.42,.46));
  dst.style.transform="scale("+(1+.22*((p*26)%1))+")";
  const hd=$("#hdirect");hd.setAttribute("opacity",seg(p,.44,.5)*(1-seg(p,.66,.72)));
  $("#houtLab").setAttribute("opacity",seg(p,.46,.52)*(1-seg(p,.64,.7)));
  const ra=seg(p,.5,.6);rA.style.strokeDashoffset=1-ra;rA.style.opacity=(ra>0?1:0)*(1-seg(p,.7,.78));
  const maV=seg(p,.6,.68);mA.setAttribute("opacity",(maV>0&&maV<1)?1:0);if(maV>0&&maV<1)place(mA,rA,lenA,maV);
  const rc=$("#recalcLab");rc.setAttribute("opacity",seg(p,.68,.7)*(1-seg(p,.8,.84)));
  const mv=seg(p,.7,.82);$("#n4g").setAttribute("transform","translate("+(40*mv)+","+(-140*mv)+")");
  $("#n4ring").setAttribute("opacity",(seg(p,.68,.72)*(1-seg(p,.78,.84)))*.9);
  const rb=seg(p,.78,.86);rB.style.strokeDashoffset=1-rb;rB.style.opacity=rb>0?1:0;
  const mbV=seg(p,.86,.93);mB.setAttribute("opacity",(mbV>0&&mbV<1)?1:0);if(mbV>0&&mbV<1)place(mB,rB,lenB,mbV);
  const idx=p<.22?0:p<.42?1:p<.68?2:3;
  howLis.forEach(li=>{const s=+li.dataset.stage;li.classList.toggle("on",s===idx);li.classList.toggle("done",s<idx);});
  howRail.style.height=(p*100)+"%";
  howRead.textContent=t("how.phase")+" 0"+(idx+1)+" / 04 — "+String(Math.round(p*100)).padStart(3,"0")+"%";
  const sk=p>.93?"how.settle":HOWK[idx];const sp=howStat.querySelector("span");sp.setAttribute("data-i18n",sk);sp.textContent=t(sk);
}
const howTall=$("#howTall");let howStatic=false;
function howMode(){const mob=innerWidth<960;
  if(RM||mob){if(!howStatic){howStatic=true;applyHow(RM?1:.99);}}
  else{howStatic=false;howScroll();}}
function howScroll(){if(howStatic)return;const r=howTall.getBoundingClientRect();
  const total=r.height-innerHeight;if(total<=0)return;
  applyHow(cl(-r.top/total));}
addEventListener("scroll",()=>requestAnimationFrame(howScroll),{passive:true});
addEventListener("resize",howMode);howMode();
/* ================= EMERGENCY ================= */
const chip=$("#emgChip"),emgCount=$("#emgCount"),wrows=$$(".wrow");
const WN=[1,5,10,13];let shownN=1;
function tweenCount(to){if(RM){emgCount.textContent=to;shownN=to;return;}const from=shownN;shownN=to;const t0=performance.now();
  (function st(ts){const q=Math.min(1,(ts-t0)/700);emgCount.textContent=Math.round(from+(to-from)*q);if(q<1)requestAnimationFrame(st);})(t0);}
function emgWave(n){$$("#elinks .w"+n+" .elink").forEach(p=>add(p,"on"));
  $$("#enodes .enode[data-w='"+n+"']").forEach(c=>{add(c,"lit");add(c,"new");setTimeout(()=>rm(c,"new"),1200);});
  const bl=$$("#blobs .eblob"),rg={1:[1,4],2:[5,9],3:[10,12]}[n];
  for(let i=rg[0];i<=rg[1];i++)bl[i]&&add(bl[i],"on");
  wrows.forEach((r,i)=>r.classList.toggle("on",i<=n));
  chip.textContent="T+"+n+"s";add(chip,"on");tweenCount(WN[n]);}
function emgReset(){$$("#elinks .elink").forEach(p=>rm(p,"on"));
  $$("#enodes .enode").forEach(c=>{rm(c,"lit");rm(c,"new");});
  $$("#blobs .eblob").forEach(b=>rm(b,"on"));add($("#blobs .eblob"),"on");
  wrows.forEach((r,i)=>r.classList.toggle("on",i===0));
  chip.textContent="T+0s";add(chip,"on");tweenCount(1);}
const emgLoop=makeLoop(15,[{t:0,fn:emgReset},{t:2.2,fn:()=>emgWave(1)},{t:4.8,fn:()=>emgWave(2)},{t:7.4,fn:()=>emgWave(3)}],$("#emergency"));
$("#btnEmgRun").addEventListener("click",()=>{emgLoop.pause();emgReset();
  setTimeout(()=>emgWave(1),700);setTimeout(()=>emgWave(2),1900);setTimeout(()=>emgWave(3),3100);setTimeout(()=>emgLoop.start(),6500);});
if(RM){emgReset();emgWave(1);emgWave(2);emgWave(3);}
/* ================= POWER ================= */
const STATES=[{id:"active",min:78,per:2,dut:2,ring:"2.2s"},{id:"balanced",min:56,per:5,dut:3,ring:"3.2s"},{id:"saver",min:34,per:9,dut:2,ring:"4.6s"},{id:"minimal",min:14,per:16,dut:1,ring:"6.5s"},{id:"hibernation",min:4,per:48,dut:1,ring:"9s"},{id:"dead",min:-1,per:99,dut:0,ring:"9s"}];
const panel=$("#powPanel"),duty=$("#duty"),srail=$("#srail");
const DUTY_TXT={active:"||||||||||||||",balanced:"||||  ||||  ||",saver:"||     ||     ",minimal:"|            .",hibernation:".            ."};
function buildDuty(){duty.innerHTML="";["active","balanced","saver","minimal","hibernation"].forEach(id=>{
  const r=document.createElement("div");r.className="drow";r.dataset.state=id;
  r.innerHTML='<span class="dn" data-i18n="st.'+id+'">'+t("st."+id)+'</span><span>'+ (DUTY_TXT[id]||"").replace(/ /g," ")+'</span>';
  duty.appendChild(r);});markRows();}
let batt=96,curState="",emgUntil=0,powRun=false,powRaf=0,powLast=0;
function setState(id){curState=id;
  $("#stateDesc").textContent=t("pd."+id);
  $("#wakeVal").textContent=t("pw.wake."+id);
  $("#scopeState").textContent=t("st."+id).toUpperCase();
  const st=STATES.find(s=>s.id===id);panel.style.setProperty("--ringd",st?st.ring:"3s");
  panel.classList.toggle("emg",id==="emergency");markRows();}
function markRows(){const emg=panel.classList.contains("emg");
  $$("#srail .srow").forEach(r=>r.classList.toggle("on",r.dataset.state===(emg?"emergency":curState)));
  $$("#duty .drow").forEach(r=>r.classList.toggle("on",!emg&&r.dataset.state===curState));}
window.__dyn=[()=>{if(curState)setState(curState);buildDuty();}];
buildDuty();
function powFrame(ts){if(!powRun)return;if(!powLast)powLast=ts;const dt=(ts-powLast)/1000;powLast=ts;
  const now=performance.now();
  if(now>emgUntil&&panel.classList.contains("emg")){panel.classList.remove("emg");setState(curState);}
  if(!panel.classList.contains("emg"))batt=Math.max(0,batt-dt*(96/36));
  $("#battFill").style.height=Math.max(2,batt)+"%";
  $("#battPct").textContent=Math.round(batt)+"%";
  $("#battFill").classList.toggle("low",batt<=34);
  if(!panel.classList.contains("emg")){const st=STATES.find(s=>batt>=s.min);if(st&&st.id!==curState)setState(st.id);}
  powRaf=requestAnimationFrame(powFrame);}
$("#btnPwrEmg").addEventListener("click",()=>{emgUntil=performance.now()+6000;setState("emergency");add(panel,"emg");});
/* scope strip chart */
const cv=$("#scope"),cx=cv.getContext("2d");let samples=[],scC=0,scLast=0;
function scopeSize(){const dpr=Math.min(2,devicePixelRatio||1);const w=cv.clientWidth,h=cv.clientHeight;cv.width=w*dpr;cv.height=h*dpr;cx.setTransform(dpr,0,0,dpr,0,0);samples=new Array(Math.floor(w/3)).fill(0);}
function sample(st,c){switch(st){case"active":return c%3!==0?1:.25;case"balanced":return (c%6)<4?1:.15;case"saver":return (c%9)<2?1:.12;case"minimal":return (c%16)<1?1:.1;case"hibernation":return (c%48)<1?.6:.05;case"dead":return .04;case"emergency":return c%2?.95:1;default:return .1;}}
function scopeDraw(){const w=cv.clientWidth,h=cv.clientHeight;cx.clearRect(0,0,w,h);
  cx.strokeStyle="rgba(17,26,34,.12)";cx.lineWidth=1;cx.beginPath();cx.moveTo(0,h-6.5);cx.lineTo(w,h-6.5);cx.stroke();
  const emg=panel.classList.contains("emg");
  cx.strokeStyle=emg?"rgba(154,100,16,.9)":"rgba(46,125,111,.85)";
  for(let i=0;i<samples.length;i++){const v=samples[i];if(v<=.06)continue;const x=i*3+.5,hh=v*(h-22);cx.beginPath();cx.moveTo(x,h-7);cx.lineTo(x,h-7-hh);cx.stroke();}}
function scopeTick(){const emg=panel.classList.contains("emg");const st=emg?"emergency":curState;
  samples.push(sample(st,scC++));if(samples.length>Math.floor(cv.clientWidth/3))samples.shift();scopeDraw();}
if(RM){setState("balanced");batt=62;$("#battFill").style.height="62%";$("#battPct").textContent="62%";
  scopeSize();for(let i=0;i<samples.length;i++)samples[i]=sample("balanced",i);scopeDraw();}
else{setState("active");scopeSize();addEventListener("resize",()=>{scopeSize();scopeDraw();});
  setInterval(()=>{if(powRun&&!document.hidden)scopeTick();},90);
  new IntersectionObserver(es=>es.forEach(e=>{powRun=e.isIntersecting;powLast=0;
    if(powRun&&!powRaf)powRaf=requestAnimationFrame(powFrame);
    if(!powRun){cancelAnimationFrame(powRaf);powRaf=0;}}),{threshold:.15}).observe(panel);}
/* ================= SCENARIOS ================= */
const SCN_N=7;let scnIdx=0,scnTimer=0,scnPaused=false;
const list=$("#scnList"),items=$$(".scn-item");
function buildScnList(){list.innerHTML="";for(let i=0;i<SCN_N;i++){
  const b=document.createElement("button");b.className="srow2";b.setAttribute("role","tab");b.dataset.i=i;
  b.innerHTML='<span class="n">0'+(i+1)+'</span><span class="tt" data-i18n="scn.'+(i+1)+'t">'+t("scn."+(i+1)+"t")+'</span><span class="tg" data-i18n="tag.'+(i+1)+'">'+t("tag."+(i+1))+'</span><span class="prog"></span>';
  b.addEventListener("click",()=>{setScn(i);resetScnTimer();});
  list.appendChild(b);}}
function setScn(i){scnIdx=i;
  $$("#scnList .srow2").forEach((r,k)=>{r.classList.toggle("on",k===i);r.setAttribute("aria-selected",String(k===i));});
  items.forEach((it,k)=>it.classList.toggle("on",k===i));
  $("#scnTitle").textContent=t("scn."+(i+1)+"t");
  $("#scnMsg").textContent=t("scn."+(i+1)+"m");
  $("#scnNum").textContent="0"+(i+1)+" / 07";}
function resetScnTimer(){clearInterval(scnTimer);
  scnTimer=setInterval(()=>{if(!scnPaused&&!document.hidden)setScn((scnIdx+1)%SCN_N);},7000);}
buildScnList();setScn(0);resetScnTimer();
list.addEventListener("mouseenter",()=>{scnPaused=true;add($("#scnWrap"),"scnpaused");});
list.addEventListener("mouseleave",()=>{scnPaused=false;rm($("#scnWrap"),"scnpaused");});
window.__dyn.push(()=>{buildScnList();setScn(scnIdx);});
/* ================= copy / toast ================= */
const toast=$("#toast");let toastT=0;
function showToast(){toast.setAttribute("data-i18n","toast.copied");toast.textContent=t("toast.copied");toast.classList.add("on");clearTimeout(toastT);toastT=setTimeout(()=>toast.classList.remove("on"),2400);}
$("#btnCopy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText("Soheil.Mozaffari@gmail.com");showToast();}
  catch(e){const ta=document.createElement("textarea");ta.value="Soheil.Mozaffari@gmail.com";document.body.appendChild(ta);ta.select();try{document.execCommand("copy");showToast();}catch(_){}ta.remove();}});

