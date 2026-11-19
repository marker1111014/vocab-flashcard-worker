// =========================================================================
// 繁體中文轉換核心引擎 (OpenCC 台灣正體標準 + 常用辭典短語，離線 0ms 高速精準轉換)
// =========================================================================
const S_CHARS = "㐷㐹㐽㑇㑈㑔㑩㓥㓰㔉㖊㖞㘎㚯㛀㛣㛤㟆㟥㡎㤘㤽㥪㧏㧐㧑㧟㧰㨫㭎㭏㭤㭴㱩㱮㲿㳔㳕㳠㳡㳽㴋㶉㶶㶽㺍㻅䀥䁖䂵䃅䅉䅟䇲䉤䌶䌷䌸䌹䌺䌻䌼䌽䌾䌿䍀䍁䍠䎬䏝䓓䓕䓖䓨䗖䙌䙓䜣䜤䜧䜩䝙䞍䞐䟢䥺䥽䥾䦂䦃䦅䦆䦶䦷䩄䯄䯅䲝䲟䲠䲡䲢䲣䴓䴔䴕䴖䴗䴘䴙䶮万与丑专业丛东丝丢两严丧个丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅仆从仑仓仪们价众优伙会伛伞伟传伡伣伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬侭俣俦俨俩俪俫俭债倾偬偻偾偿傤傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冯冲决况冻净凄准凉减凑凛几凤凫凭凯凶击凿刍划刘则刚创删别刬刭刹刽刾刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勚匀匦匮区医华协单卖占卢卤卧卫却卺厂厅历厉压厌厍厐厕厘厢厣厦厨厩厮县叁参叆叇双发变叙叠台叶号叹叽吁吃后吓吕吗吨听启吴呐呒呓呕呖呗员呙呛呜咏咙咛咝咤咨咸响哑哒哓哔哕哗哙哜哝哟唇唛唝唠唡唢唤啧啬啭啮啯啰啴啸喷喽喾嗫嗳嘘嘤嘱噜嚣团园囱围囵国图圆圣圹场坏块坚坛坜坝坞坟坠垄垅垆垒垦垩垫垭垯垱垲垴埘埙埚堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姹娄娅娆娇娈娱娲娴婳婴婵婶媪媭嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尝尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岚岛岩岭岳岽岿峃峄峡峣峤峥峦峰崂崃崄崭嵘嵚嵝巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂干并广庄庆床庐庑库应庙庞废庼廪开异弃弑张弥弪弯弹强归当录彟彦彨彻征径徕忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恒恳恶恸恹恺恻恼恽悦悫悬悭悮悯惊惧惨惩惫惬惭惮惯愠愤愦愿慑慭懑懒懔戆戋戏戗战戬戯户扑执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捝捞损捡换捣据掳掴掷掸掺掼揽揾揿搀搁搂搄搅携摄摅摆摇摈摊撄撑撵撷撸撺擜擞攒敌敚敛敩数斋斓斗斩断无旧时旷旸昙昵昼昽显晋晒晓晔晕晖暂暧术朴机杀杂权杠条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桠桡桢档桤桥桦桧桨桩桪梦梼梾梿检棁棂椁椝椟椠椢椤椫椭椮楼榄榅榇榈榉榝槚槛槟槠横樯樱橥橱橹橼檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉汤汹沄沟没沣沤沥沦沧沨沩沪泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涚涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溁溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪潆潇潋潍潜潴澛澜濑濒灏灭灯灵灶灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煴熏爱爷牍牦牵牺犊状犷犸犹狈狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珐珑珰珲琎琏琐琼瑶瑷瑸璎瓒瓮瓯电画畅畴疖疗疟疠疡疬疭疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫皂皑皱皲盏盐监盖盗盘眍眦眬睁睐睑瞆瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硕硖硗硙硚确硵碍碛碜碱礼祃祎祢祯祷祸禀禄禅离秃秆种秘积称秽秾稆税稣稳穑穞穷窃窍窎窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹筼签筿简箓箦箧箨箩箪箫篑篓篮篯篱簖籁籴类籼粜粝粤粪粮粽糁糇糍紧絷緼縆纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡群翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肮肴肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑膻臜舆舣舰舱舻艰艳艺节芈芗芜芦苁苇苈苋苌苍苎苏苧苹范茎茏茑茔茕茧荆荐荙荚荛荜荝荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒀蒇蒉蒋蒌蒏蓝蓟蓠蓣蓥蓦蔂蔷蔹蔺蔼蕰蕲蕴薮藓藴蘖虏虑虚虫虬虮虱虽虾虿蚀蚁蚂蚃蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯訚詟誉誊讠计订讣认讥讦讧讨让讪讫讬训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谉谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踌踪踬踯蹑蹒蹰蹿躏躜躯輼车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辟辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郏郐郑郓郦郧郸酂酝酦酱酽酾酿醖采释里鉴銮錾钅钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钜钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铇铈铉铊铋铌铍铎铏铐铑铒铓铔铕铖铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铩铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗锘错锚锛锜锝锞锟锠锡锢锣锤锥锦锧锨锩锪锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镄镅镆镇镈镉镊镋镌镍镎镏镐镑镒镓镔镕镖镗镘镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镵镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陦陧陨险随隐隶隽难雇雏雠雳雾霁霉霡霭靓靔静靥鞑鞒鞯鞲韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饣饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓鬶魇魉鱼鱽鱾鱿鲀鲁鲂鲃鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳚鳛鳜鳝鳞鳟鳠鳡鳢鳣鳤鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹙鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹮鹯鹰鹱鹲鹳鹴鹾麦麸麹麺麽黄黉黡黩黪黾鼋鼌鼍鼹齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟鿎鿏鿒鿔";
const T_CHARS = "傌㑶偑㑳倲㑯儸劏劃劚噚喎㘚㜄媰㜏孋㠏嵾幓㥮懤慺掆㩳撝擓擽㩜棡椲樢樫殰殨瀇濧灡澾濄瀰潚鸂燶煱獱璯䁻瞜碽磾稏穇筴籔䊷紬縳絅䋙䋚綐綵䋻䋹繿繸䍦䎱膞薵薳藭罃螮䙡襬訢鿁䜀讌貙䝼賰躎釾鏺䥱䥇鐯鐥钁䦛䦟靦騧䯀䱽鮣鰆鰌鰧䱷鳾鵁鴷鶄鶪鷉鸊龑萬與醜專業叢東絲丟兩嚴喪個豐臨為麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅僕從侖倉儀們價眾優夥會傴傘偉傳俥俔傷倀倫傖偽佇體餘傭僉俠侶僥偵側僑儈儕儂儘俁儔儼倆儷倈儉債傾傯僂僨償儎儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農馮衝決況凍淨悽準涼減湊凜幾鳳鳧憑凱兇擊鑿芻劃劉則剛創刪別剗剄剎劊㓨劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳勩勻匭匱區醫華協單賣佔盧滷臥衛卻巹廠廳歷厲壓厭厙龎廁釐廂厴廈廚廄廝縣叄參靉靆雙發變敘疊臺葉號嘆嘰籲吃後嚇呂嗎噸聽啟吳吶嘸囈嘔嚦唄員咼嗆嗚詠嚨嚀噝吒諮鹹響啞噠嘵嗶噦譁噲嚌噥喲唇嘜嗊嘮啢嗩喚嘖嗇囀齧嘓囉嘽嘯噴嘍嚳囁噯噓嚶囑嚕囂團園囪圍圇國圖圓聖壙場壞塊堅壇壢壩塢墳墜壟壠壚壘墾堊墊埡墶壋塏堖塒壎堝塹墮壪牆壯聲殼壺壼處備復夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗媯姍奼婁婭嬈嬌孌娛媧嫻嫿嬰嬋嬸媼嬃嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵嘗堯尷屍盡層屓屜屆屬屢屨嶼歲豈嶇崗峴嵐島巖嶺嶽崬巋嶨嶧峽嶢嶠崢巒峰嶗崍嶮嶄嶸嶔嶁巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪幹並廣莊慶床廬廡庫應廟龐廢廎廩開異棄弒張彌弳彎彈強歸當錄彠彥彲徹徵徑徠憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀恆懇惡慟懨愷惻惱惲悅愨懸慳悞憫驚懼慘懲憊愜慚憚慣慍憤憒願懾憖懣懶懍戇戔戲戧戰戩戱戶撲執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏挩撈損撿換搗據擄摑擲撣摻摜攬搵撳攙擱摟揯攪攜攝攄擺搖擯攤攖撐攆擷擼攛㩵擻攢敵敓斂斆數齋斕鬥斬斷無舊時曠暘曇暱晝曨顯晉曬曉曄暈暉暫曖術樸機殺雜權槓條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒椏橈楨檔榿橋樺檜槳樁樳夢檮棶槤檢梲欞槨槼櫝槧槶欏樿橢槮樓欖榲櫬櫚櫸樧檟檻檳櫧橫檣櫻櫫櫥櫓櫞檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳匯漢湯洶澐溝沒灃漚瀝淪滄渢溈滬濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗湧涗濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣溼濚潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦瀠瀟瀲濰潛瀦瀂瀾瀨瀕灝滅燈靈灶災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾熅燻愛爺牘犛牽犧犢狀獷獁猶狽獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽琺瓏璫琿璡璉瑣瓊瑤璦璸瓔瓚甕甌電畫暢疇癤療瘧癘瘍癧瘲瘡瘋皰痾癰痙癢瘂癆瘓癇痴癉瘮瘞瘻癟癱癮癭癩癬癲皂皚皺皸盞鹽監蓋盜盤瞘眥矓睜睞瞼瞶瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜碩硤磽磑礄確磠礙磧磣鹼禮禡禕禰禎禱禍稟祿禪離禿稈種祕積稱穢穠穭稅穌穩穡穭窮竊竅窵窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌篔籤篠簡籙簀篋籜籮簞簫簣簍籃籛籬籪籟糴類秈糶糲粵糞糧粽糝餱餈緊縶縕緪糹糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺紲紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽鞝緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒韁繾繰繯繳纘罌網羅罰罷羆羈羥羨群翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚骯餚腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕顎膩靦膃騰臏羶臢輿艤艦艙艫艱豔藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇薴蘋範莖蘢蔦塋煢繭荊薦薘莢蕘蓽萴蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蒕蕆蕢蔣蔞醟藍薊蘺蕷鎣驀虆薔蘞藺藹薀蘄蘊藪蘚蘊櫱虜慮虛蟲虯蟣蝨雖蝦蠆蝕蟻螞蠁蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襉褸襤襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶誾讋譽謄訁計訂訃認譏訐訌討讓訕訖託訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談讅誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗贊贇贈贍贏贛赬趙趕趨趲躉躍蹌蹠躒踐躂蹺蹕躚躋躊蹤躓躑躡蹣躕躥躪躦軀轀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭闢辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郟鄶鄭鄆酈鄖鄲酇醞醱醬釅釃釀醞採釋裡鑑鑾鏨釒釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鉅鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷缽鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鉋鈰鉉鉈鉍鈮鈹鐸鉶銬銠鉺鋩錏銪鋮鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鎩鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐧銳銻鋃鋟鋦錒錆鍺鍩錯錨錛錡鍀錁錕錩錫錮鑼錘錐錦鑕鍁錈鍃錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鐨鎇鏌鎮鎛鎘鑷钂鐫鎳鎿鎦鎬鎊鎰鎵鑌鎔鏢鏜鏝鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑱鑲長門閂閃閆閈閉問闖閏闈閒閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隯隉隕險隨隱隸雋難僱雛讎靂霧霽黴霢靄靚靝靜靨韃鞽韉韝韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飈飛饗饜飠飣飢飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢鬹魘魎魚魛魢魷魨魯魴䰾魺鮁鮃鯰鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鯰鯛鯨鰺鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鰲鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅䲁鰼鱖鱔鱗鱒鱯鱤鱧鱣䲘鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鷽鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鵾鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶖鷀鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺䴉鸇鷹鸌鸏鸛鸘鹺麥麩麴麵麼黃黌黶黷黲黽黿鼂鼉鼴齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜䃮䥑鿓鎶";
const PHRASES = [["复习", "複習"], ["温习", "溫習"], ["联系", "聯繫"], ["关系", "關係"], ["关联", "關聯"], ["过去式", "過去式"], ["过去分词", "過去分詞"], ["现在分词", "現在分詞"], ["进行时", "進行式"], ["完成时", "完成式"], ["及物动词", "及物動詞"], ["不及物动词", "不及物動詞"], ["代词", "代名詞"], ["介词", "介系詞"], ["连词", "連接詞"], ["数词", "數詞"], ["量词", "量詞"], ["冠词", "冠詞"], ["感叹词", "感嘆詞"], ["短语", "片語"], ["词组", "片語"], ["研制", "研製"], ["舍弃", "捨棄"], ["制造", "製造"], ["制作", "製作"], ["发现", "發現"], ["发生", "發生"], ["发展", "發展"], ["发财", "發財"], ["头发", "頭髮"], ["毛发", "毛髮"], ["干杯", "乾杯"], ["干燥", "乾燥"], ["干净", "乾淨"], ["干涸", "乾涸"], ["干部", "幹部"], ["干活", "幹活"], ["蛮干", "蠻幹"], ["干脆", "乾脆"], ["一只", "一隻"], ["两只", "兩隻"], ["只身", "隻身"], ["形单影只", "形單影隻"], ["只有", "只有"], ["只要", "只要"], ["借口", "藉口"], ["凭藉", "憑藉"], ["周一", "週一"], ["周二", "週二"], ["周三", "週三"], ["周四", "週四"], ["周五", "週五"], ["周六", "週六"], ["周日", "週日"], ["周末", "週末"], ["周期", "週期"], ["周年", "週年"], ["分钟", "分鐘"], ["时钟", "時鐘"], ["警钟", "警鐘"], ["时分", "時分"], ["历程", "歷程"], ["历史", "歷史"], ["经历", "經歷"], ["日历", "日曆"], ["台阶", "階梯"], ["台湾", "臺灣"], ["台北", "臺北"], ["台中", "臺中"], ["台南", "臺南"], ["一冲性子", "一沖性子"], ["一出", "一齣"], ["一出剧", "一齣劇"], ["一出子", "一齣子"], ["一出戏", "一齣戲"], ["一分收获", "一分收穫"], ["一分钟", "一分鐘"], ["一别头", "一彆頭"], ["一发之差", "一髮之差"], ["一发之间", "一髮之間"], ["一发千钧", "一髮千鈞"], ["一口钟", "一口鐘"], ["一号木杆", "一號木桿"], ["一周", "一週"], ["一周年", "一週年"], ["一哄", "一鬨"], ["一哄而上", "一鬨而上"], ["一哄而散", "一鬨而散"], ["一哄而起", "一鬨而起"], ["一哄而集", "一鬨而集"], ["一地里", "一地裏"], ["一块面", "一塊麪"], ["一坛", "一罈"], ["一坛坛", "一罈罈"], ["一天星斗", "一天星斗"], ["一天钟", "一天鐘"], ["一干", "一干"], ["一干二净", "一乾二淨"], ["一干人", "一干人"], ["一干家中", "一干家中"], ["一干弟兄", "一干弟兄"], ["一干弟子", "一干弟子"], ["一干而尽", "一乾而盡"], ["一干部下", "一干部下"], ["一并", "一併"], ["一幻拉面", "一幻拉麪"], ["一径", "一逕"], ["一扎", "一紮"], ["一斗", "一斗"], ["一斗斗", "一斗斗"], ["一日千里", "一日千里"], ["一日叫娘", "一日叫孃"], ["一杆进洞", "一桿進洞"], ["一松", "一鬆"], ["一树百获", "一樹百穫"], ["一根烟", "一根菸"], ["一毫一发", "一毫一髮"], ["一泻千里", "一瀉千里"], ["一点钟", "一點鐘"], ["一目了然", "一目瞭然"], ["一碗面", "一碗麪"], ["一秒钟", "一秒鐘"], ["一签", "一簽"], ["一箭双雕", "一箭雙鵰"], ["一粥面", "一粥麪"], ["一赞", "一讚"], ["一递里", "一遞裏"], ["一逞兽欲", "一逞獸慾"], ["一里", "一里"], ["一里一外", "一裏一外"], ["一锅面", "一鍋麪"], ["一飞冲天", "一飛沖天"], ["丁丑", "丁丑"], ["丁里", "丁里"], ["丁铃当啷", "丁鈴噹啷"], ["丁零当啷", "丁零噹啷"], ["七八下里", "七八下裏"], ["七出戏", "七齣戲"], ["七分钟", "七分鐘"], ["七只", "七隻"], ["七周", "七週"], ["七坛", "七罈"], ["七娘妈", "七孃媽"], ["七弦", "七絃"], ["七情六欲", "七情六慾"], ["七扎", "七紮"], ["七点钟", "七點鐘"], ["七秒钟", "七秒鐘"], ["七里", "七里"], ["七里河", "七里河"], ["七里河区", "七里河區"], ["七里香", "七里香"], ["万众", "萬衆"], ["万众一心", "萬衆一心"], ["万众欢腾", "萬衆歡騰"], ["万众瞩目", "萬衆矚目"], ["万余只", "萬餘隻"], ["万余里", "萬餘里"], ["万俟", "万俟"], ["万历", "萬曆"], ["万只", "萬隻"], ["万坛", "萬罈"], ["万年历", "萬年曆"], ["万年历表", "萬年曆錶"], ["万扎", "萬紮"], ["万旗", "万旗"], ["万里", "萬里"], ["万里之望", "萬里之望"], ["万里乡", "萬里鄉"], ["万里侯", "萬里侯"], ["万里同风", "萬里同風"], ["万里封侯", "萬里封侯"], ["万里无云", "萬里無雲"], ["万里晴空", "萬里晴空"], ["万里江山", "萬里江山"], ["万里迢迢", "萬里迢迢"], ["万里追踪", "萬里追蹤"], ["万里长城", "萬里長城"], ["万里长征", "萬里長征"], ["万里长江", "萬里長江"], ["万里长空", "萬里長空"], ["万里鹏程", "萬里鵬程"], ["万里鹏翼", "萬里鵬翼"], ["丈母娘", "丈母孃"], ["三元里", "三元里"], ["三出戏", "三齣戲"], ["三分钟", "三分鐘"], ["三只", "三隻"], ["三只手", "三隻手"], ["三周", "三週"], ["三周年", "三週年"], ["三娘教子", "三孃教子"], ["三尸", "三尸"], ["三尸神", "三尸神"], ["三弦", "三絃"], ["三征七辟", "三徵七辟"], ["三扎", "三紮"], ["三浴三熏", "三浴三熏"], ["三点钟", "三點鐘"], ["三熏三沐", "三熏三沐"], ["三秒钟", "三秒鐘"], ["三统历", "三統曆"], ["三角关系", "三角關係"], ["三辟", "三辟"], ["三里", "三里"], ["三里屯", "三里屯"], ["三里河", "三里河"], ["三鲜面", "三鮮麪"], ["上下游", "上下游"], ["上中下游", "上中下游"], ["上冲下洗", "上沖下洗"], ["上升为", "上升爲"], ["上合屋", "上閤屋"], ["上周", "上週"], ["上复", "上覆"], ["上夸克", "上夸克"], ["上梁", "上樑"], ["上梁不正", "上樑不正"], ["上梁文", "上樑文"], ["上游", "上游"], ["上游工业", "上游工業"], ["上签写", "上簽寫"], ["上签名", "上簽名"], ["上签字", "上簽字"], ["上签收", "上簽收"], ["上课钟", "上課鐘"], ["上野树里", "上野樹里"], ["上链", "上鍊"], ["下仑路", "下崙路"], ["下周", "下週"], ["下咽", "下嚥"], ["下城里", "下城里"], ["下夸克", "下夸克"], ["下摆", "下襬"], ["下梁", "下樑"], ["下注解", "下註解"], ["下游", "下游"], ["下游工业", "下游工業"], ["下签写", "下簽寫"], ["下签名", "下簽名"], ["下签字", "下簽字"], ["下签收", "下簽收"], ["下课钟", "下課鐘"], ["下采", "下采"], ["下里", "下里"], ["下里巴人", "下里巴人"], ["下面条", "下麪條"], ["不上台盘", "不上檯盤"], ["不为牛后", "不爲牛後"], ["不了解", "不瞭解"], ["不克制", "不剋制"], ["不准他", "不准他"], ["不准你", "不准你"], ["不准她", "不准她"], ["不准它", "不准它"], ["不准我", "不准我"], ["不准没", "不准沒"], ["不准翻印", "不准翻印"], ["不准许", "不准許"], ["不准谁", "不准誰"], ["不准问", "不准問"], ["不划算", "不划算"], ["不占凶吉", "不占凶吉"], ["不占卜", "不占卜"], ["不占吉凶", "不占吉凶"], ["不占算", "不占算"], ["不合群", "不合羣"], ["不吊", "不弔"], ["不大精采", "不大精采"], ["不好干涉", "不好干涉"], ["不好干预", "不好干預"], ["不寒而栗", "不寒而慄"], ["不差毫发", "不差毫髮"], ["不干不净", "不乾不淨"], ["不干他", "不干他"], ["不干休", "不干休"], ["不干你", "不干你"], ["不干净", "不乾淨"], ["不干她", "不干她"], ["不干它", "不干它"], ["不干己事", "不干己事"], ["不干性", "不乾性"], ["不干我", "不干我"], ["不干扰", "不干擾"], ["不干杯", "不乾杯"], ["不干涉", "不干涉"], ["不干渴", "不乾渴"], ["不干犯", "不干犯"], ["不干着急", "不乾着急"], ["不干胶", "不乾膠"], ["不干脆", "不乾脆"], ["不干裂", "不乾裂"], ["不干预", "不干預"], ["不并", "不併"], ["不得台盘", "不得檯盤"], ["不惮强御", "不憚強禦"], ["不托", "不託"], ["不放松", "不放鬆"], ["不明就里", "不明就裏"], ["不松下", "不鬆下"], ["不气干", "不氣干"], ["不畏强御", "不畏強禦"], ["不畏彊御", "不畏彊禦"], ["不相干", "不相干"], ["不知所云", "不知所云"], ["不系", "不繫"], ["不系舟", "不繫舟"], ["不肯干休", "不肯干休"], ["不舍", "不捨"], ["不舍得", "不捨得"], ["不舍昼夜", "不捨晝夜"], ["不药而愈", "不藥而癒"], ["不讨采", "不討采"], ["不让须眉", "不讓鬚眉"], ["不谷", "不穀"], ["不赞", "不讚"], ["不赞一词", "不讚一詞"], ["不赞一辞", "不讚一辭"], ["不足为据", "不足爲據"], ["不远万里", "不遠萬里"], ["不远千里", "不遠千里"], ["不通吊庆", "不通弔慶"], ["不避彊御", "不避彊禦"], ["不采声", "不采聲"], ["不食干腊", "不食乾腊"], ["与众不同", "與衆不同"], ["与克制", "與剋制"], ["丑三", "丑三"], ["丑年", "丑年"], ["丑日", "丑日"], ["丑旦", "丑旦"], ["丑时", "丑時"], ["丑月", "丑月"], ["丑牛", "丑牛"], ["丑角", "丑角"], ["专征", "專征"], ["专辑里", "專輯裏"], ["专鉴", "專鑒"], ["世彩堂", "世綵堂"], ["世彩堂帖", "世綵堂帖"], ["世界杯", "世界盃"], ["世界杯室", "世界盃室"], ["世界杯赛", "世界盃賽"], ["世界里", "世界裏"], ["世纪钟", "世紀鐘"], ["世纪钟表", "世紀鐘錶"], ["东仓里", "東倉里"], ["东升", "東昇"], ["东周钟", "東周鐘"], ["东山里", "東山里"]];

const S2T_MAP = new Map();
for (let i = 0; i < S_CHARS.length; i++) {
  S2T_MAP.set(S_CHARS[i], T_CHARS[i]);
}

function toTraditional(text) {
  if (!text || typeof text !== "string") return text || "";
  let s = text;
  for (let i = 0; i < PHRASES.length; i++) {
    const [k, v] = PHRASES[i];
    if (s.includes(k)) {
      s = s.replaceAll(k, v);
    }
  }
  let res = "";
  for (let i = 0; i < s.length; i++) {
    res += S2T_MAP.get(s[i]) || s[i];
  }
  return res;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // -------------------------------------------------------------
    // 1. 同源音訊串流代理 (/api/audio?word=...) - 平行競速 ＋ Edge 快取最佳化
    // -------------------------------------------------------------
    const fetchWithTimeout = async (targetUrl, init, timeoutMs) => {
      const ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
      const timer = ctrl ? setTimeout(() => ctrl.abort(), timeoutMs) : null;
      try {
        const reqInit = Object.assign({}, init || {});
        if (ctrl) reqInit.signal = ctrl.signal;
        return await fetch(targetUrl, reqInit);
      } finally {
        if (timer) clearTimeout(timer);
      }
    };

    const buildAudioHttpResponse = (buf, rangeHeader) => {
      const total = buf.byteLength;
      const baseHeaders = {
        "Content-Type": "audio/mpeg",
        "Accept-Ranges": "bytes",
        "Cache-Control": "public, max-age=604800, s-maxage=604800",
        "Access-Control-Allow-Origin": "*"
      };
      if (rangeHeader) {
        const m = rangeHeader.match(/bytes=(\d+)-(\d*)/);
        if (m && total > 0) {
          const start = Math.min(parseInt(m[1], 10), total - 1);
          const end = m[2] ? Math.min(parseInt(m[2], 10), total - 1) : total - 1;
          if (start <= end) {
            return new Response(buf.slice(start, end + 1), {
              status: 206,
              headers: {
                ...baseHeaders,
                "Content-Range": "bytes " + start + "-" + end + "/" + total,
                "Content-Length": String(end - start + 1)
              }
            });
          }
        }
      }
      return new Response(buf, {
        status: 200,
        headers: {
          ...baseHeaders,
          "Content-Length": String(total)
        }
      });
    };

    const fetchDictAudioBytes = async (rawWord) => {
      try {
        const dictRes = await fetchWithTimeout(
          "https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(rawWord),
          { headers: { "User-Agent": "Mozilla/5.0" } },
          750
        );
        if (!dictRes || !dictRes.ok) return null;
        const data = await dictRes.json();
        const phonetics = data?.[0]?.phonetics || [];
        const usPhonetic = phonetics.find(p => {
          if (!p.audio) return false;
          const a = p.audio.toLowerCase();
          return a.includes("-us.") || a.includes("_us_") || a.includes("/en-us");
        });
        let targetAudioUrl = usPhonetic?.audio || phonetics.find(p => p.audio && p.audio.length > 0)?.audio;
        if (!targetAudioUrl) return null;
        if (targetAudioUrl.startsWith("//")) targetAudioUrl = "https:" + targetAudioUrl;
        const fileRes = await fetchWithTimeout(
          targetAudioUrl,
          { headers: { "User-Agent": "Mozilla/5.0" } },
          850
        );
        if (!fileRes || !fileRes.ok || !fileRes.headers.get("content-type")?.includes("audio")) return null;
        const buf = await fileRes.arrayBuffer();
        return (buf && buf.byteLength > 200) ? buf : null;
      } catch (e) {
        return null;
      }
    };

    const fetchGoogleTtsBytes = async (rawParam, rawWord, isSentence) => {
      try {
        let ttsText = isSentence ? rawParam : rawWord;
        if (ttsText.length > 190) {
          ttsText = ttsText.slice(0, 190);
          const lastSpace = ttsText.lastIndexOf(" ");
          if (lastSpace > 120) ttsText = ttsText.slice(0, lastSpace);
        }
        const ttsUrl = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en-US&q=" + encodeURIComponent(ttsText);
        const ttsRes = await fetchWithTimeout(
          ttsUrl,
          {
            headers: {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
              "Referer": "https://translate.google.com/"
            }
          },
          3500
        );
        if (!ttsRes || !ttsRes.ok) return null;
        const buf = await ttsRes.arrayBuffer();
        return (buf && buf.byteLength > 200) ? buf : null;
      } catch (e) {
        return null;
      }
    };

    const resolveAndCacheWordAudio = async (rawParam, origin, isSentence, cache, ctx) => {
      const rawWord = rawParam.toLowerCase();
      const canonicalUrl = origin + "/api/audio?" + (isSentence ? ("type=sentence&word=" + encodeURIComponent(rawParam)) : ("word=" + encodeURIComponent(rawWord)));
      const cacheKey = new Request(canonicalUrl, { method: "GET" });
      if (cache) {
        try {
          const hit = await cache.match(cacheKey);
          if (hit) return { response: hit, buffer: null, fromCache: true };
        } catch (e) {}
      }

      let audioBuf = null;
      if (isSentence) {
        audioBuf = await fetchGoogleTtsBytes(rawParam, rawWord, true);
      } else {
        // 單字啟動真人美式發音與 Google TTS 錯峰預備（真人發音逾 650ms 未完成或缺音即刻切換 TTS，避免久候無聲）
        let dictSettled = false;
        let ttsPromise = null;
        const startTts = () => {
          if (!ttsPromise) ttsPromise = fetchGoogleTtsBytes(rawParam, rawWord, false);
          return ttsPromise;
        };
        const dictPromise = fetchDictAudioBytes(rawWord).then(buf => {
          dictSettled = true;
          return buf;
        });
        const ttsWarmTimer = setTimeout(() => {
          if (!dictSettled) startTts();
        }, 160);
        const dictDeadline = new Promise(resolve => setTimeout(() => resolve("__TIMEOUT__"), 650));
        const dictOutcome = await Promise.race([dictPromise, dictDeadline]);
        clearTimeout(ttsWarmTimer);

        if (dictOutcome && dictOutcome !== "__TIMEOUT__") {
          audioBuf = dictOutcome;
        } else {
          audioBuf = await startTts();
          if (!audioBuf && dictOutcome === "__TIMEOUT__") {
            audioBuf = await dictPromise;
          }
        }
      }

      if (!audioBuf) return null;

      const cacheableRes = buildAudioHttpResponse(audioBuf, null);
      if (cache && ctx && typeof ctx.waitUntil === "function") {
        try {
          ctx.waitUntil(cache.put(cacheKey, cacheableRes.clone()));
        } catch (e) {}
      }
      return { response: cacheableRes, buffer: audioBuf, fromCache: false };
    };

    if (url.pathname === "/api/audio") {
      const rawParam = (url.searchParams.get("word") || "").replace(/<[^>]+>/g, "").trim();
      if (!rawParam) return new Response("Missing word", { status: 400 });

      const audioType = url.searchParams.get("type") || "";
      const isSentence = audioType === "sentence" || rawParam.includes(" ") || rawParam.length > 35;
      const cache = typeof caches !== "undefined" ? caches.default : null;

      const resolved = await resolveAndCacheWordAudio(rawParam, url.origin, isSentence, cache, ctx);
      if (!resolved) {
        return new Response("無可用音訊來源", { status: 404 });
      }

      const rangeHdr = request.headers.get("Range");
      if (rangeHdr) {
        const buf = resolved.buffer || await resolved.response.arrayBuffer();
        return buildAudioHttpResponse(buf, rangeHdr);
      }
      return resolved.response;
    }

    // -------------------------------------------------------------
    // 2. 個人專屬雲端同步 API (/api/sync)
    // -------------------------------------------------------------
    if (url.pathname === "/api/sync") {
      if (request.method === "OPTIONS") {
        return new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, X-Sync-Key"
          }
        });
      }

      const corsHeaders = {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      };

      const clientKey = request.headers.get("X-Sync-Key")?.trim() || "";
      const serverKey = (env.SYNC_SECRET || env.SYNC_PASSWORD || "").trim();

      if (!serverKey) {
        return new Response(JSON.stringify({
          error: "伺服器尚未設定環境變數 SYNC_SECRET，請至 Cloudflare Worker 儀表板【Settings ➔ Variables】新增密鑰。"
        }), { status: 403, headers: corsHeaders });
      }

      if (clientKey !== serverKey) {
        return new Response(JSON.stringify({
          error: "同步密碼錯誤，存取已被拒絕（未授權請求不消耗 KV 額度）。"
        }), { status: 401, headers: corsHeaders });
      }

      const kv = env.VOCAB_KV || env.KV || env.SYNC_KV;
      if (!kv) {
        return new Response(JSON.stringify({
          error: "尚未在 Cloudflare Worker 綁定 KV 命名空間，請至【Settings ➔ Variables ➔ KV Namespace Bindings】綁定變數名稱 VOCAB_KV。"
        }), { status: 500, headers: corsHeaders });
      }

      const STORAGE_SLOT = "MY_DECK";

      if (request.method === "GET") {
        try {
          const raw = await kv.get(STORAGE_SLOT);
          const deck = raw ? JSON.parse(raw) : [];
          return new Response(JSON.stringify({
            ok: true,
            deck,
            count: deck.length,
            timestamp: Date.now()
          }), { status: 200, headers: corsHeaders });
        } catch (e) {
          return new Response(JSON.stringify({ error: "讀取雲端單字庫失敗: " + e.message }), {
            status: 500,
            headers: corsHeaders
          });
        }
      }

      if (request.method === "POST") {
        try {
          const body = await request.json();
          if (!body || !Array.isArray(body.deck)) {
            return new Response(JSON.stringify({ error: "無效的單字庫資料格式" }), {
              status: 400,
              headers: corsHeaders
            });
          }

          const jsonStr = JSON.stringify(body.deck);
          if (jsonStr.length > 5 * 1024 * 1024) {
            return new Response(JSON.stringify({ error: "單字庫大小超出限制 (5MB)" }), {
              status: 413,
              headers: corsHeaders
            });
          }

          await kv.put(STORAGE_SLOT, jsonStr);
          return new Response(JSON.stringify({
            ok: true,
            message: "同步成功！已儲存至雲端專屬槽位",
            count: body.deck.length,
            timestamp: Date.now()
          }), { status: 200, headers: corsHeaders });
        } catch (e) {
          return new Response(JSON.stringify({ error: "寫入雲端單字庫失敗: " + e.message }), {
            status: 500,
            headers: corsHeaders
          });
        }
      }

      return new Response("Method not allowed", { status: 405, headers: corsHeaders });
    }

    // -------------------------------------------------------------
    // 3. 高精度英漢辭典 API (/api/pronounce?word=...)
    // -------------------------------------------------------------
    if (url.pathname === "/api/pronounce") {
      const rawWord = url.searchParams.get("word")?.trim();
      if (!rawWord) {
        return new Response(JSON.stringify({ error: "請輸入單字" }), {
          status: 400,
          headers: { "Content-Type": "application/json;charset=UTF-8" }
        });
      }

      const normLookupWord = rawWord.toLowerCase();
      const cache = typeof caches !== "undefined" ? caches.default : null;
      const cacheKey = new Request(url.origin + "/api/pronounce?word=" + encodeURIComponent(normLookupWord), { method: "GET" });
      if (cache) {
        try {
          const cached = await cache.match(cacheKey);
          if (cached) {
            const cachedData = await cached.clone().json();
            if (cachedData.translation && Array.isArray(cachedData.examples)) {
              return cached;
            }
          }
        } catch (e) {}
      }

      const posMap = {
        adj: "形容詞",
        v: "動詞",
        vt: "及物動詞",
        vi: "不及物動詞",
        n: "名詞",
        adv: "副詞",
        prep: "介系詞",
        conj: "連接詞",
        pron: "代名詞",
        art: "冠詞",
        num: "數詞",
        int: "感嘆詞",
        abbr: "縮寫",
        noun: "名詞",
        verb: "動詞",
        adjective: "形容詞",
        adverb: "副詞",
        phrase: "片語"
      };

      const splitMeanings = (str) => {
        const items = [];
        let cur = "";
        let inParen = 0;
        for (let i = 0; i < str.length; i++) {
          const ch = str[i];
          if (ch === "(" || ch === "（" || ch === "【" || ch === "[") {
            inParen++;
            cur += ch;
          } else if (ch === ")" || ch === "）" || ch === "】" || ch === "]") {
            inParen = Math.max(0, inParen - 1);
            cur += ch;
          } else if ((ch === ";" || ch === "；" || ch === "," || ch === "，") && inParen === 0) {
            if (cur.trim()) items.push(cur.trim());
            cur = "";
          } else {
            cur += ch;
          }
        }
        if (cur.trim()) items.push(cur.trim());
        return items;
      };

      const extractExamples = (data) => {
        const candidates = [];

        const cleanMarked = (s) => {
          if (!s || typeof s !== "string") return "";
          return s
            .replace(/<b\b[^>]*>/gi, "__B_OPEN__")
            .replace(/<\/b>/gi, "__B_CLOSE__")
            .replace(/<[^>]+>/g, "")
            .replace(/__B_OPEN__/g, "<b>")
            .replace(/__B_CLOSE__/g, "</b>")
            .replace(/\s+/g, " ")
            .trim();
        };

        const stripTags = (s) => (s || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

        const addCandidate = (enRaw, zhRaw, tierBase) => {
          const enMarked = cleanMarked(enRaw);
          const en = stripTags(enMarked);
          const zh = toTraditional(stripTags(zhRaw));
          if (!en || !zh) return;
          if (/[\u4e00-\u9fff]/.test(en)) return;
          if (en.startsWith("...") || en.startsWith("…")) return;
          if (en.length < 12 || en.length > 220) return;

          const tier = en.length <= 155 ? tierBase : tierBase + 3;
          candidates.push({ en, enMarked, zh, tier });
        };

        // 來源 1：expand_ec（權威精選、牛津、柯林斯、歷年考題）
        for (const wo of (data?.expand_ec?.word || [])) {
          for (const t of (wo?.transList || [])) {
            for (const s of (t?.content?.sents || [])) {
              const isAuth = s?.sourceType === "权威" || s?.sourceType === "權威" ||
                (s?.source && (s.source.includes("牛津") || s.source.includes("柯林斯") || s.source.includes("精选")));
              addCandidate(s?.sentOrig, s?.sentTrans, isAuth ? 1 : 4);
            }
          }
        }

        // 來源 2：blng_sents_part（雙語例句，支援單字與片語/慣用語）
        for (const p of (data?.blng_sents_part?.["sentence-pair"] || [])) {
          const hasNamedSource = Boolean(p?.source && (p.source.includes("牛津") || p.source.includes("柯林斯") || p.source.includes("朗文")));
          addCandidate(p?.["sentence-eng"] || p?.sentence, p?.["sentence-translation"], hasNamedSource ? 2 : 3);
        }

        // 來源 3：collins 例句（次要補位）
        for (const ce of (data?.collins?.collins_entries || [])) {
          for (const e of (ce?.entries?.entry || [])) {
            for (const te of (e?.tran_entry || [])) {
              for (const s of (te?.exam_sents?.sent || [])) {
                addCandidate(s?.eng_sent, s?.chn_sent, 5);
              }
            }
          }
        }

        candidates.sort((a, b) => a.tier - b.tier);

        const seen = new Set();
        const picked = [];
        for (const c of candidates) {
          const key = c.en.toLowerCase().replace(/[^a-z0-9]/g, "");
          if (!key || seen.has(key)) continue;
          seen.add(key);
          picked.push({
            en: c.en,
            enMarked: c.enMarked,
            zh: c.zh
          });
          if (picked.length >= 4) break;
        }
        return picked;
      };

      const fetchLexicon = async (word) => {
        try {
          const res = await fetchWithTimeout("https://dict.youdao.com/jsonapi?q=" + encodeURIComponent(word), {
            headers: { "User-Agent": "Mozilla/5.0" }
          }, 3500);
          if (!res || !res.ok) return null;
          const data = await res.json();
          const examples = extractExamples(data);
          const wordObj = data?.ec?.word?.[0];
          if (!wordObj || !Array.isArray(wordObj.trs) || wordObj.trs.length === 0) {
            return examples.length > 0 ? { translation: "", definitions: [], examples } : null;
          }

          const rawLines = [];
          for (const tr of wordObj.trs) {
            const item = tr?.tr?.[0]?.l?.i?.[0];
            if (item) rawLines.push(item);
          }
          if (rawLines.length === 0) {
            return examples.length > 0 ? { translation: "", definitions: [], examples } : null;
          }

          const lines = rawLines.map(l => toTraditional(l).trim()).filter(Boolean);

          const defs = [];
          for (const line of lines) {
            const match = line.match(/^([a-zA-Z]+)\.\s*(.*)$/);
            if (match) {
              const pKey = match[1].toLowerCase();
              const pos = posMap[pKey] || toTraditional(match[1]);
              const meanings = splitMeanings(match[2]).map(m => toTraditional(m));
              if (meanings.length > 0) {
                defs.push({
                  pos,
                  posEn: match[1] + ".",
                  meanings
                });
              }
            } else {
              const parts = splitMeanings(line).map(m => toTraditional(m));
              if (parts.length > 0) {
                defs.push({
                  pos: "釋義",
                  posEn: "",
                  meanings: parts
                });
              }
            }
          }

          if (defs.length === 0) {
            return examples.length > 0 ? { translation: "", definitions: [], examples } : null;
          }
          const primaryTrans = toTraditional(defs[0]?.meanings.slice(0, 2).join("、") || defs[0]?.meanings[0] || "");

          return {
            translation: primaryTrans,
            definitions: defs,
            examples
          };
        } catch (e) {
          return null;
        }
      };

      const parseGoogleJson = (data) => {
        let trans = "";
        let defs = [];
        if (Array.isArray(data[0])) {
          trans = toTraditional(data[0].map(item => item[0]).filter(Boolean).join(" ").trim());
        }
        if (Array.isArray(data[1])) {
          defs = data[1].map(item => {
            const posKey = (item[0] || "").toLowerCase();
            return {
              pos: posMap[posKey] || toTraditional(item[0]) || "釋義",
              posEn: item[0] || "",
              meanings: Array.isArray(item[1]) ? item[1].slice(0, 8).map(m => toTraditional(m)) : []
            };
          }).filter(d => d.meanings.length > 0);
        }
        return { trans, defs };
      };

      let translation = "";
      let definitions = [];
      let examples = [];

      try {
        const lex = await fetchLexicon(rawWord);
        if (lex) {
          if (lex.translation && lex.definitions.length > 0) {
            translation = lex.translation;
            definitions = lex.definitions;
          }
          if (Array.isArray(lex.examples)) {
            examples = lex.examples;
          }
        }
      } catch (e) {}

      if (!translation) {
        try {
          const res = await fetchWithTimeout("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=zh-TW&dt=t&dt=bd&q=" + encodeURIComponent(rawWord), {
            headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" }
          }, 3000);
          if (res && res.ok) {
            const data = await res.json();
            const parsed = parseGoogleJson(data);
            if (parsed.trans && parsed.trans.toLowerCase() !== rawWord.toLowerCase()) {
              translation = parsed.trans;
              definitions = parsed.defs;
            }
          }
        } catch (e) {}
      }

      if (!translation) {
        try {
          const res = await fetchWithTimeout("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(rawWord) + "&langpair=en|zh-TW", {
            headers: { "User-Agent": "Mozilla/5.0" }
          }, 3000);
          if (res && res.ok) {
            const data = await res.json();
            const tText = data.responseData?.translatedText;
            if (tText && tText.toLowerCase() !== rawWord.toLowerCase()) {
              translation = toTraditional(tText);
            }
          }
        } catch (e) {}
      }

      if (!translation && definitions.length === 0) {
        return new Response(JSON.stringify({ error: "查無此單字或翻譯" }), {
          status: 404,
          headers: { "Content-Type": "application/json;charset=UTF-8" }
        });
      }

      const result = {
        word: rawWord,
        translation: toTraditional(translation),
        definitions: definitions.map(d => ({
          pos: toTraditional(d.pos),
          posEn: d.posEn || "",
          meanings: (d.meanings || []).map(m => toTraditional(m))
        })),
        examples: examples,
        audioUrl: "/api/audio?word=" + encodeURIComponent(normLookupWord)
      };

      const response = new Response(JSON.stringify(result), {
        status: 200,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Cache-Control": translation ? "public, max-age=86400, s-maxage=86400" : "no-store"
        }
      });

      if (translation && cache && ctx && typeof ctx.waitUntil === "function") {
        try {
          ctx.waitUntil(cache.put(cacheKey, response.clone()));
          if (!rawWord.includes(" ") && rawWord.length <= 35) {
            ctx.waitUntil(resolveAndCacheWordAudio(rawWord, url.origin, false, cache, ctx).catch(() => null));
          }
        } catch (e) {}
      }

      return response;
    }

    // -------------------------------------------------------------
    // 4. 前端介面（純淨極簡雙欄版：詞性釋義置中 ｜ 移除音標 ｜ 提示可隱藏 ｜ 繁體中文）
    // -------------------------------------------------------------
    const html = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>美式單字即時發音 & 艾賓浩斯複習庫</title>
  <script>try{var t=localStorage.getItem('deck_ui_theme_v1');if(t==='sage'||t==='mono'||t==='slate')document.documentElement.setAttribute('data-theme',t);}catch(e){}</script>
  <style>
    :root,
    [data-theme="slate"] {
      --bg: #090d16;
      --panel-bg: #0d131f;
      --card-bg: #141d2e;
      --inset-bg: #0a101b;
      --border: rgba(148, 163, 184, 0.16);
      --border-subtle: rgba(148, 163, 184, 0.09);
      --text: #edf2f7;
      --text-secondary: #cbd5e1;
      --text-muted: #8494a7;
      --accent: #60a5fa;
      --accent-hover: #3b82f6;
      --accent-fg: #08101c;
      --accent-soft: rgba(96, 165, 250, 0.11);
      --accent-border: rgba(96, 165, 250, 0.36);
      --star: #60a5fa;
      --star-bg: rgba(96, 165, 250, 0.12);
      --pos-bg: #141d2e;
      --pos-border: rgba(148, 163, 184, 0.18);
      --status-1: #d98282;
      --status-1-bg: rgba(217, 130, 130, 0.09);
      --status-1-border: rgba(217, 130, 130, 0.28);
      --status-2: #d4b26a;
      --status-2-bg: rgba(212, 178, 106, 0.09);
      --status-2-border: rgba(212, 178, 106, 0.28);
      --status-3: #6fc99e;
      --status-3-bg: rgba(111, 201, 158, 0.09);
      --status-3-border: rgba(111, 201, 158, 0.28);
      --wrong: #df8484;
      --wrong-bg: rgba(223, 132, 132, 0.10);
      --wrong-border: rgba(223, 132, 132, 0.42);
    }
    [data-theme="sage"] {
      --bg: #080f0d;
      --panel-bg: #0c1412;
      --card-bg: #13201c;
      --inset-bg: #09110f;
      --border: rgba(148, 179, 168, 0.16);
      --border-subtle: rgba(148, 179, 168, 0.09);
      --text: #edf5f2;
      --text-secondary: #c5dad2;
      --text-muted: #7f9c92;
      --accent: #34d399;
      --accent-hover: #10b981;
      --accent-fg: #061410;
      --accent-soft: rgba(52, 211, 153, 0.11);
      --accent-border: rgba(52, 211, 153, 0.36);
      --star: #34d399;
      --star-bg: rgba(52, 211, 153, 0.12);
      --pos-bg: #13201c;
      --pos-border: rgba(148, 179, 168, 0.18);
      --status-1: #db8982;
      --status-1-bg: rgba(219, 137, 130, 0.09);
      --status-1-border: rgba(219, 137, 130, 0.28);
      --status-2: #c9bc75;
      --status-2-bg: rgba(201, 188, 117, 0.09);
      --status-2-border: rgba(201, 188, 117, 0.28);
      --status-3: #5eead4;
      --status-3-bg: rgba(94, 234, 212, 0.09);
      --status-3-border: rgba(94, 234, 212, 0.28);
      --wrong: #db8982;
      --wrong-bg: rgba(219, 137, 132, 0.10);
      --wrong-border: rgba(219, 137, 132, 0.42);
    }
    [data-theme="mono"] {
      --bg: #07090d;
      --panel-bg: #0b0e14;
      --card-bg: #141923;
      --inset-bg: #080a0f;
      --border: rgba(226, 232, 240, 0.14);
      --border-subtle: rgba(226, 232, 240, 0.08);
      --text: #f8fafc;
      --text-secondary: #cbd5e1;
      --text-muted: #7c8798;
      --accent: #e2e8f0;
      --accent-hover: #ffffff;
      --accent-fg: #07090d;
      --accent-soft: rgba(226, 232, 240, 0.10);
      --accent-border: rgba(226, 232, 240, 0.36);
      --star: #f8fafc;
      --star-bg: rgba(248, 250, 252, 0.10);
      --pos-bg: #141923;
      --pos-border: rgba(226, 232, 240, 0.15);
      --status-1: #94a3b8;
      --status-1-bg: rgba(148, 163, 184, 0.08);
      --status-1-border: rgba(148, 163, 184, 0.24);
      --status-2: #cbd5e1;
      --status-2-bg: rgba(203, 213, 225, 0.10);
      --status-2-border: rgba(203, 213, 225, 0.28);
      --status-3: #f8fafc;
      --status-3-bg: rgba(248, 250, 252, 0.12);
      --status-3-border: rgba(248, 250, 252, 0.36);
      --wrong: #b88a8a;
      --wrong-bg: rgba(184, 138, 138, 0.10);
      --wrong-border: rgba(184, 138, 138, 0.38);
    }
    * {
      box-sizing: border-box;
      border-radius: 0 !important;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
      padding: 1.5rem 1rem;
      transition: background-color 0.15s ease, color 0.15s ease;
    }
    .container {
      width: 100%;
      max-width: 1040px;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }
    .ic {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      line-height: 1;
    }
    .ic svg {
      display: block;
      pointer-events: none;
    }

    /* 頂部手機切換 Tab (RWD) */
    .mobile-tabs {
      display: none;
      gap: 6px;
      width: 100%;
    }
    .mobile-tab-btn {
      flex: 1;
      padding: 10px;
      background: var(--panel-bg);
      border: 1px solid var(--border);
      color: var(--text-muted);
      font-weight: 600;
      font-size: 0.88rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: all 0.15s;
    }
    .mobile-tab-btn.active {
      background: var(--card-bg);
      color: var(--accent);
      border-color: var(--accent-border);
    }

    /* 雙欄主架構 */
    .columns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.35rem;
      align-items: stretch;
    }

    .panel {
      background: var(--panel-bg);
      border: 1px solid var(--border);
      padding: 1.35rem 1.4rem;
      display: flex;
      flex-direction: column;
      min-height: 500px;
      transition: background-color 0.15s ease, border-color 0.15s ease;
    }
    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.9rem;
      padding-bottom: 0.7rem;
      border-bottom: 1px solid var(--border-subtle);
      gap: 8px;
    }
    .panel-title {
      font-size: 0.98rem;
      font-weight: 600;
      color: var(--text);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .badge {
      font-size: 0.72rem;
      background: var(--card-bg);
      color: var(--text-muted);
      border: 1px solid var(--border-subtle);
      padding: 1px 7px;
      font-weight: 500;
      font-variant-numeric: tabular-nums;
    }

    /* 靜默幽靈工具按鈕組 */
    .header-actions {
      display: flex;
      align-items: center;
      gap: 2px;
    }
    .tool-btn {
      background: transparent;
      border: 1px solid transparent;
      color: var(--text-muted);
      font-size: 0.75rem;
      padding: 4px 7px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      transition: all 0.15s ease;
    }
    .tool-btn:hover {
      color: var(--text);
      background: var(--card-bg);
      border-color: var(--border);
    }

    /* 左側：查詢面板 */
    input[type="text"],
    input[type="password"] {
      width: 100%;
      padding: 10px 12px;
      background: var(--card-bg);
      border: 1px solid var(--border);
      color: var(--text);
      font-size: 0.96rem;
      outline: none;
      transition: border-color 0.15s ease, background-color 0.15s ease;
    }
    input[type="text"]:focus,
    input[type="password"]:focus {
      border-color: var(--accent-border);
    }
    .result-box {
      background: transparent;
      border: none;
      margin-top: 0.5rem;
      padding: 1rem 0.15rem 0;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .word-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 4px;
    }
    .word { font-size: 1.9rem; font-weight: 700; color: var(--text); letter-spacing: -0.02em; }
    .star-btn {
      background: transparent;
      border: 1px solid var(--border);
      color: var(--text-muted);
      cursor: pointer;
      width: 28px;
      height: 28px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.15s ease, color 0.15s, border-color 0.15s, background-color 0.15s;
    }
    .star-btn:hover { border-color: var(--accent-border); color: var(--star); }
    .star-btn.active {
      color: var(--star);
      border-color: var(--accent-border);
      background: var(--star-bg);
    }
    .star-btn.active svg {
      fill: currentColor;
    }

    /* 主要釋義置中 + 詞性標籤固定左側排列 */
    .trans-section {
      width: 100%;
      border-top: 1px solid var(--border-subtle);
      margin-top: 14px;
      padding-top: 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .main-trans-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-bottom: 14px;
      flex-wrap: wrap;
    }
    .main-trans {
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--accent);
      text-align: center;
      line-height: 1.4;
    }
    .trans-action-btn {
      background: transparent;
      border: 1px solid var(--border-subtle);
      color: var(--text-muted);
      font-size: 0.74rem;
      padding: 3px 7px;
      cursor: pointer;
      line-height: 1.2;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: all 0.15s ease;
    }
    .trans-action-btn:hover {
      color: var(--text);
      border-color: var(--accent-border);
      background: var(--accent-soft);
    }
    .trans-action-btn svg.chevron-ic {
      transition: transform 0.15s ease;
    }
    .trans-action-btn.expanded svg.chevron-ic {
      transform: rotate(180deg);
    }
    .edit-trans-box {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      width: 100%;
      max-width: 360px;
      margin-bottom: 14px;
    }
    .edit-trans-input {
      flex: 1;
      padding: 5px 10px !important;
      background: var(--card-bg);
      border: 1px solid var(--accent-border) !important;
      color: var(--text);
      font-size: 0.9rem !important;
      font-weight: 600;
      outline: none;
      text-align: center;
    }
    .edit-trans-btn {
      border: 1px solid var(--border);
      padding: 5px 9px;
      font-size: 0.78rem;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s;
    }
    .edit-trans-btn.save {
      background: var(--accent);
      color: var(--accent-fg);
      border-color: var(--accent);
    }
    .edit-trans-btn.save:hover { background: var(--accent-hover); }
    .edit-trans-btn.cancel {
      background: var(--card-bg);
      color: var(--text-muted);
    }
    .edit-trans-btn.cancel:hover { color: var(--text); }
    .def-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: stretch;
      text-align: left;
      font-size: 0.85rem;
      width: 100%;
    }
    .def-row {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 10px;
      flex-wrap: nowrap;
      width: 100%;
    }
    .pos-tag {
      background: var(--pos-bg);
      color: var(--text-muted);
      border: 1px solid var(--pos-border);
      font-size: 0.74rem;
      padding: 3px 8px;
      min-width: 56px;
      text-align: center;
      line-height: 1.35;
      font-weight: 600;
      white-space: nowrap;
      flex-shrink: 0;
      cursor: pointer;
      user-select: none;
      transition: all 0.15s ease;
    }
    .pos-tag:hover {
      color: var(--accent);
      border-color: var(--accent-border);
      background: var(--accent-soft);
    }
    .pos-tag.active {
      color: var(--accent);
      border-color: var(--accent-border);
      background: var(--accent-soft);
      font-weight: 700;
    }
    .meaning-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      align-items: center;
      justify-content: flex-start;
      flex: 1;
      min-width: 0;
    }
    .meaning-pill {
      display: inline-block;
      max-width: 100%;
      white-space: normal;
      text-align: left;
      font-size: 0.82rem;
      color: var(--text-secondary);
      background: transparent;
      border: 1px solid var(--border-subtle);
      padding: 3px 9px;
      line-height: 1.35;
      cursor: pointer;
      user-select: none;
      transition: all 0.15s ease;
    }
    .meaning-pill:hover {
      border-color: var(--accent-border);
      color: var(--accent);
      background: var(--accent-soft);
    }
    .meaning-pill.active {
      border-color: var(--accent-border);
      color: var(--accent);
      background: var(--accent-soft);
      font-weight: 600;
    }

    .btn {
      margin-top: 16px;
      background: var(--card-bg);
      color: var(--text);
      border: 1px solid var(--border);
      padding: 8px 16px;
      font-weight: 600;
      font-size: 0.86rem;
      cursor: pointer;
      display: none;
      align-items: center;
      justify-content: center;
      gap: 7px;
      transition: all 0.15s ease;
    }
    .btn:hover {
      border-color: var(--accent-border);
      color: var(--accent);
      background: var(--accent-soft);
    }
    .btn.primary-fill {
      background: var(--accent);
      color: var(--accent-fg);
      border-color: var(--accent);
    }
    .btn.primary-fill:hover {
      background: var(--accent-hover);
      color: var(--accent-fg);
    }
    .status { font-size: 0.85rem; color: var(--text-muted); text-align: center; }
    .status.notice { color: var(--accent); }
    .status.error { color: var(--wrong); }

    /* 左側：精選雙語例句區塊 */
    .examples-section {
      width: 100%;
      border-top: 1px solid var(--border-subtle);
      margin-top: 16px;
      padding-top: 14px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      text-align: left;
      gap: 9px;
    }
    .examples-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.76rem;
      font-weight: 600;
      color: var(--text-muted);
      letter-spacing: 0.03em;
    }
    .example-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
    }
    .example-card {
      background: var(--inset-bg);
      border: 1px solid var(--border-subtle);
      border-left: 2px solid var(--accent-border);
      padding: 9px 11px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      transition: border-color 0.15s ease;
    }
    .example-card:hover {
      border-left-color: var(--accent);
    }
    .example-en-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px;
    }
    .example-en {
      font-size: 0.87rem;
      line-height: 1.5;
      color: var(--text);
      flex: 1;
      word-break: break-word;
    }
    .ex-highlight {
      color: var(--accent);
      background: var(--accent-soft);
      padding: 0 3px;
      font-weight: 600;
    }
    .example-zh {
      font-size: 0.8rem;
      line-height: 1.48;
      color: var(--text-muted);
    }
    .example-play-btn {
      background: transparent;
      border: 1px solid var(--border-subtle);
      color: var(--text-muted);
      padding: 4px 6px;
      cursor: pointer;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s ease;
    }
    .example-play-btn:hover,
    .example-play-btn.playing {
      color: var(--accent);
      border-color: var(--accent-border);
      background: var(--accent-soft);
    }
    .example-more-btn {
      width: 100%;
      background: transparent;
      border: 1px solid var(--border-subtle);
      color: var(--text-muted);
      font-size: 0.75rem;
      padding: 6px 10px;
      cursor: pointer;
      text-align: center;
      transition: all 0.15s ease;
    }
    .example-more-btn:hover {
      color: var(--accent);
      border-color: var(--accent-border);
      background: var(--accent-soft);
    }

    /* 右側：複習面板 (無外框雙層嵌套，底線式模式切換) */
    .review-mode-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .mode-switch-group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      border-bottom: 1px solid var(--border-subtle);
      background: transparent;
    }
    .mode-switch-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      padding: 8px 6px 9px;
      font-size: 0.84rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }
    .mode-switch-btn:hover {
      color: var(--text);
    }
    .mode-switch-btn.active {
      color: var(--text);
      box-shadow: inset 0 -2px 0 var(--accent);
      font-weight: 600;
    }
    .mode-switch-btn.active .ic {
      color: var(--accent);
    }
    .review-box {
      background: transparent;
      border: none;
      margin-top: 0.65rem;
      padding: 0.5rem 0.15rem 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      position: relative;
    }
    @media (max-width: 768px) {
      .columns { grid-template-columns: 1fr; }
      .mobile-tabs { display: flex; }
      .panel.mobile-hidden { display: none !important; }
      .panel { padding: 1.05rem; }
      .def-row { gap: 8px; }
      .pos-tag { min-width: 50px; padding: 3px 6px; }
      .mode-switch-btn { font-size: 0.8rem; padding: 8px 4px; }
    }
    .empty-state {
      text-align: center;
      color: var(--text-muted);
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .empty-icon { color: var(--text-muted); opacity: 0.45; margin-bottom: 0.75rem; }
    .empty-title { font-size: 0.96rem; font-weight: 600; color: var(--text); margin-bottom: 4px; }
    .empty-desc { font-size: 0.8rem; line-height: 1.5; max-width: 280px; }

    /* 複習卡片主體 */
    .card-wrap {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
    }
    .card-meta {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.74rem;
      color: var(--text-muted);
      margin-bottom: 0.5rem;
      transition: opacity 0.2s ease;
    }
    .card-wrap.quiz-active:not(.quiz-answered) .card-meta {
      opacity: 0.42;
    }
    .level-badge {
      padding: 2px 7px;
      font-weight: 600;
      font-size: 0.72rem;
      border: 1px solid var(--border-subtle);
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .lvl-dot {
      width: 6px;
      height: 6px;
      display: inline-block;
      flex-shrink: 0;
      background: currentColor;
    }
    .level-badge.lvl-1 { color: var(--status-1); border-color: var(--status-1-border); background: var(--status-1-bg); }
    .level-badge.lvl-2 { color: var(--status-2); border-color: var(--status-2-border); background: var(--status-2-bg); }
    .level-badge.lvl-3 { color: var(--status-3); border-color: var(--status-3-border); background: var(--status-3-bg); }

    .card-front {
      margin: 1.25rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    .card-word {
      font-size: 2.15rem;
      font-weight: 700;
      color: var(--text);
      letter-spacing: -0.02em;
    }
    .card-audio-btn {
      background: transparent;
      border: 1px solid var(--border-subtle);
      color: var(--text-muted);
      padding: 5px 12px;
      font-size: 0.8rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s ease;
    }
    .card-audio-btn:hover { border-color: var(--accent-border); color: var(--accent); background: var(--accent-soft); }

    .flip-btn-wrap {
      width: 100%;
      margin-top: 0.75rem;
    }
    .flip-btn {
      width: 100%;
      background: var(--card-bg);
      border: 1px solid var(--border);
      color: var(--text);
      padding: 10px;
      font-size: 0.88rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .flip-btn:hover {
      border-color: var(--accent-border);
      color: var(--accent);
      background: var(--accent-soft);
    }

    /* 卡片背面 */
    .card-back {
      width: 100%;
      display: none;
      flex-direction: column;
      align-items: center;
      margin-top: 0.5rem;
      animation: fadeIn 0.18s ease-out;
    }
    .card-back.show {
      display: flex;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(3px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .card-trans {
      font-size: 1.28rem;
      font-weight: 700;
      color: var(--accent);
      text-align: center;
      line-height: 1.4;
    }
    .card-defs {
      width: 100%;
      margin-bottom: 16px;
    }

    /* 熟悉度評分按鈕 (低飽和穩定色彩) */
    .rate-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 8px;
      width: 100%;
    }
    .rate-btn {
      padding: 9px 4px;
      border: 1px solid var(--border);
      background: var(--card-bg);
      cursor: pointer;
      font-size: 0.84rem;
      font-weight: 600;
      transition: all 0.15s ease;
    }
    .rate-btn.hard { color: var(--status-1); border-color: var(--status-1-border); }
    .rate-btn.hard:hover { background: var(--status-1-bg); }
    .rate-btn.med { color: var(--status-2); border-color: var(--status-2-border); }
    .rate-btn.med:hover { background: var(--status-2-bg); }
    .rate-btn.easy { color: var(--status-3); border-color: var(--status-3-border); }
    .rate-btn.easy:hover { background: var(--status-3-bg); }

    /* 模式 B：四選一精簡測驗 UI */
    .card-wrap.quiz-active {
      justify-content: flex-start;
    }
    .card-wrap.quiz-active .card-front {
      margin: 0.4rem 0 0.85rem;
      gap: 8px;
    }
    .quiz-mode-body {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 9px;
      margin-top: 2px;
      text-align: left;
    }
    .quiz-subbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
      font-size: 0.72rem;
      color: var(--text-muted);
      border-top: 1px solid var(--border-subtle);
      padding-top: 8px;
    }
    .quiz-toggles {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }
    .quiz-auto-label {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      user-select: none;
      color: var(--text-muted);
      transition: color 0.15s;
    }
    .quiz-auto-label:hover {
      color: var(--text);
    }
    .quiz-auto-label input {
      accent-color: var(--accent);
      cursor: pointer;
      margin: 0;
      width: 12px;
      height: 12px;
    }
    .quiz-options {
      display: flex;
      flex-direction: column;
      gap: 7px;
      width: 100%;
    }
    .quiz-option-btn {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      background: var(--card-bg);
      border: 1px solid var(--border);
      color: var(--text);
      font-size: 0.9rem;
      text-align: left;
      cursor: pointer;
      transition: border-color 0.15s, background-color 0.15s, opacity 0.15s;
      line-height: 1.4;
    }
    .quiz-option-btn:hover:not(:disabled) {
      border-color: var(--accent-border);
      background: var(--accent-soft);
    }
    .quiz-option-btn:disabled {
      cursor: default;
    }
    .quiz-opt-key {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      flex-shrink: 0;
      font-family: monospace;
      font-size: 0.76rem;
      font-weight: 600;
      color: var(--text-muted);
    }
    .quiz-option-btn:hover:not(:disabled) .quiz-opt-key {
      color: var(--accent);
    }
    .quiz-opt-text {
      flex: 1;
      min-width: 0;
      word-break: break-word;
    }
    .quiz-opt-mark {
      font-size: 0.84rem;
      font-weight: 700;
      flex-shrink: 0;
    }
    .quiz-option-btn.correct {
      border-color: var(--accent-border);
      background: var(--accent-soft);
      color: var(--text);
      font-weight: 600;
    }
    .quiz-option-btn.correct .quiz-opt-key,
    .quiz-option-btn.correct .quiz-opt-mark {
      color: var(--accent);
    }
    .quiz-option-btn.wrong {
      border-color: var(--wrong-border);
      background: var(--wrong-bg);
      color: var(--wrong);
    }
    .quiz-option-btn.wrong .quiz-opt-key,
    .quiz-option-btn.wrong .quiz-opt-mark {
      color: var(--wrong);
    }
    .quiz-option-btn.dimmed {
      opacity: 0.38;
    }

    /* 作答回饋整合成單一俐落卡片 */
    .quiz-feedback-wrap {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
      animation: fadeIn 0.18s ease-out;
    }
    .quiz-feedback-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      display: flex;
      flex-direction: column;
    }
    .quiz-verdict-box {
      padding: 10px 12px;
      border-left: 3px solid var(--accent);
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .quiz-verdict-box.verdict-1 { border-left-color: var(--status-1); }
    .quiz-verdict-box.verdict-2 { border-left-color: var(--status-2); }
    .quiz-verdict-box.verdict-3 { border-left-color: var(--status-3); }
    .quiz-verdict-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .quiz-verdict-title {
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--text);
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .quiz-verdict-transition {
      font-size: 0.73rem;
      font-weight: 600;
      padding: 1px 6px;
      border: 1px solid var(--border-subtle);
      background: var(--inset-bg);
      color: var(--accent);
    }
    .quiz-verdict-sub {
      font-size: 0.74rem;
      color: var(--text-muted);
      line-height: 1.48;
    }
    .quiz-override-row {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-top: 2px;
      flex-wrap: wrap;
    }
    .quiz-override-label {
      font-size: 0.71rem;
      color: var(--text-muted);
      margin-right: 2px;
    }
    .quiz-ov-btn {
      background: transparent;
      border: 1px solid var(--border-subtle);
      color: var(--text-muted);
      font-size: 0.71rem;
      padding: 2px 7px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      transition: all 0.15s ease;
    }
    .quiz-ov-btn:hover {
      color: var(--text);
      border-color: var(--border);
    }
    .quiz-ov-btn.active.lvl-1 {
      color: var(--status-1);
      border-color: var(--status-1-border);
      background: var(--status-1-bg);
      font-weight: 600;
    }
    .quiz-ov-btn.active.lvl-2 {
      color: var(--status-2);
      border-color: var(--status-2-border);
      background: var(--status-2-bg);
      font-weight: 600;
    }
    .quiz-ov-btn.active.lvl-3 {
      color: var(--status-3);
      border-color: var(--status-3-border);
      background: var(--status-3-bg);
      font-weight: 600;
    }
    .quiz-main-trans-wrap {
      padding: 8px 12px;
      border-top: 1px solid var(--border-subtle);
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .quiz-main-trans-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
    }
    .quiz-main-left {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
      min-width: 0;
      flex: 1;
    }
    .quiz-main-label {
      font-size: 0.73rem;
      color: var(--text-muted);
      white-space: nowrap;
    }
    .quiz-main-trans {
      font-size: 0.92rem;
      font-weight: 700;
      color: var(--accent);
      word-break: break-word;
    }
    .quiz-main-actions {
      display: flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
      flex-wrap: wrap;
    }
    .quiz-saved-badge {
      font-size: 0.7rem;
      color: var(--status-3);
      background: var(--status-3-bg);
      border: 1px solid var(--status-3-border);
      padding: 1px 6px;
      white-space: nowrap;
    }
    .quiz-main-trans-wrap .edit-trans-box {
      margin-bottom: 0;
      max-width: 100%;
    }
    .quiz-main-trans-wrap .edit-trans-input {
      text-align: left;
    }
    .quiz-def-list {
      border-top: 1px solid var(--border-subtle);
      padding: 10px 12px;
      background: var(--inset-bg);
    }
    .quiz-def-list .pos-tag,
    .quiz-def-list .meaning-pill {
      cursor: pointer;
    }
    .quiz-next-btn {
      width: 100%;
      background: var(--accent);
      color: var(--accent-fg);
      border: none;
      padding: 10px;
      font-size: 0.86rem;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: background-color 0.15s ease;
    }
    .quiz-next-btn:hover {
      background: var(--accent-hover);
    }

    /* 底部快捷鍵提示列（預設極簡收合） */
    .hint-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 2px;
    }
    .keyboard-hint {
      width: 100%;
      font-size: 0.74rem;
      color: var(--text-muted);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 10px;
      background: var(--panel-bg);
      border: 1px solid var(--border);
      line-height: 1.4;
    }
    .hint-text {
      flex-grow: 1;
      text-align: center;
    }
    .keyboard-hint kbd {
      background: var(--inset-bg);
      border: 1px solid var(--border);
      padding: 1px 4px;
      color: var(--accent);
      font-family: monospace;
    }
    .hint-toggle-btn {
      background: transparent;
      border: 1px solid var(--border-subtle);
      color: var(--text-muted);
      font-size: 0.7rem;
      padding: 2px 6px;
      cursor: pointer;
      margin-left: 8px;
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      gap: 3px;
      transition: all 0.15s;
    }
    .hint-toggle-btn:hover {
      color: var(--text);
      border-color: var(--accent-border);
    }
    .hint-restore-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      font-size: 0.72rem;
      padding: 3px 8px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      opacity: 0.65;
      transition: opacity 0.15s, color 0.15s;
    }
    .hint-restore-btn:hover {
      opacity: 1;
      color: var(--accent);
    }

    /* Modal 彈窗樣式 */
    .modal-backdrop {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.72);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      padding: 1rem;
    }
    .modal-backdrop.active { display: flex; }
    .modal-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      width: 100%;
      max-width: 480px;
      padding: 1.2rem;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.55);
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 9px;
      margin-bottom: 12px;
    }
    .modal-title {
      font-size: 0.96rem;
      font-weight: 700;
      color: var(--text);
      display: inline-flex;
      align-items: center;
      gap: 7px;
    }
    .modal-close {
      background: transparent;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      padding: 3px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .modal-close:hover { color: var(--text); }
    .modal-body { display: flex; flex-direction: column; gap: 12px; font-size: 0.84rem; }

    /* 設定彈窗：主題選擇器與開關 */
    .settings-section {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .settings-label {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-muted);
      letter-spacing: 0.03em;
    }
    .theme-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }
    @media (max-width: 480px) {
      .theme-grid { grid-template-columns: 1fr; }
    }
    .theme-opt {
      background: var(--inset-bg);
      border: 1px solid var(--border);
      color: var(--text-secondary);
      padding: 9px 8px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 7px;
      text-align: left;
      transition: all 0.15s ease;
    }
    .theme-opt:hover {
      border-color: var(--accent-border);
      color: var(--text);
    }
    .theme-opt.active {
      border-color: var(--accent);
      background: var(--accent-soft);
      color: var(--text);
    }
    .theme-swatch {
      display: flex;
      width: 100%;
      height: 10px;
      border: 1px solid var(--border-subtle);
      overflow: hidden;
    }
    .theme-swatch i {
      display: block;
      height: 100%;
    }
    .theme-meta {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .theme-meta strong {
      font-size: 0.8rem;
      color: var(--text);
    }
    .theme-meta small {
      font-size: 0.69rem;
      color: var(--text-muted);
      line-height: 1.3;
    }
    .settings-toggles {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--border-subtle);
      background: var(--inset-bg);
    }
    .settings-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 10px;
      border-bottom: 1px solid var(--border-subtle);
      cursor: pointer;
      font-size: 0.8rem;
      color: var(--text-secondary);
      user-select: none;
    }
    .settings-row:last-child { border-bottom: none; }
    .settings-row:hover { color: var(--text); }
    .settings-row input {
      accent-color: var(--accent);
      cursor: pointer;
      width: 14px;
      height: 14px;
    }

    .sync-banner {
      background: var(--accent-soft);
      border: 1px solid var(--accent-border);
      padding: 8px 10px;
      font-size: 0.78rem;
      color: var(--text-secondary);
      line-height: 1.5;
    }
    .sync-status-badge {
      display: inline-block;
      font-size: 0.73rem;
      padding: 2px 6px;
      border: 1px solid var(--border);
      color: var(--text-muted);
    }
    .sync-status-badge.connected {
      color: var(--status-3);
      border-color: var(--status-3-border);
      background: var(--status-3-bg);
    }

    .word-list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 7px 9px;
      background: var(--inset-bg);
      border: 1px solid var(--border-subtle);
      margin-bottom: 4px;
      font-size: 0.84rem;
    }
    .word-list-del {
      background: transparent;
      border: 1px solid var(--wrong-border);
      color: var(--wrong);
      padding: 2px 7px;
      font-size: 0.72rem;
      cursor: pointer;
    }
    .word-list-del:hover { background: var(--wrong-bg); }
    .modal-action-btn {
      width: 100%;
      padding: 9px 12px;
      font-size: 0.82rem;
      font-weight: 600;
      cursor: pointer;
      border: 1px solid var(--border);
      background: var(--inset-bg);
      color: var(--text);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      transition: all 0.15s ease;
    }
    .modal-action-btn:hover {
      border-color: var(--accent-border);
      color: var(--accent);
      background: var(--accent-soft);
    }
    .modal-action-btn.primary {
      background: var(--accent);
      color: var(--accent-fg);
      border-color: var(--accent);
    }
    .modal-action-btn.primary:hover {
      background: var(--accent-hover);
      color: var(--accent-fg);
    }
    .modal-action-btn.danger {
      background: transparent;
      border-color: var(--wrong-border);
      color: var(--wrong);
    }
    .modal-action-btn.danger:hover {
      background: var(--wrong-bg);
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- 手機版切換 Tab -->
    <div class="mobile-tabs">
      <button id="tabLookupBtn" class="mobile-tab-btn active">
        <span class="ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
        <span>單字查詢</span>
      </button>
      <button id="tabReviewBtn" class="mobile-tab-btn">
        <span class="ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><rect x="3" y="4" width="14" height="16"/><path d="M7 8h6"/><path d="M17 7h4v13H7"/></svg></span>
        <span>複習卡片 (<span id="tabBadge">0</span>)</span>
      </button>
    </div>

    <!-- 雙欄主容器 -->
    <div class="columns">
      <!-- 左側：單字查詢面板 -->
      <div id="lookupPanel" class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <span>單字查詢</span>
          </div>
        </div>

        <input type="text" id="wordInput" placeholder="輸入單字，例如：revised" autofocus autocomplete="off">

        <div class="result-box">
          <div id="status" class="status">請輸入英文單字</div>
          
          <div id="wordHeader" class="word-header" style="display:none;">
            <div id="wordDisplay" class="word"></div>
            <button id="starBtn" class="star-btn" title="加入單字複習庫 (Alt)" aria-label="加入或移出複習庫">
              <span class="ic"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
            </button>
          </div>
          
          <!-- 詞性與解釋置中區域 -->
          <div id="transSection" class="trans-section" style="display:none;">
            <div id="mainTransRow" class="main-trans-row">
              <span id="mainTrans" class="main-trans"></span>
              <button id="editTransBtn" class="trans-action-btn" title="自訂主要釋義" aria-label="自訂主要釋義">
                <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></span>
              </button>
              <button id="resetTransBtn" class="trans-action-btn" title="恢復辭典預設釋義" aria-label="恢復預設釋義" style="display:none;">
                <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg></span>
              </button>
            </div>
            <div id="editTransBox" class="edit-trans-box" style="display:none;">
              <input type="text" id="editTransInput" class="edit-trans-input" placeholder="輸入自訂主要釋義...">
              <button id="saveTransBtn" class="edit-trans-btn save" title="儲存" aria-label="儲存">
                <span class="ic"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><polyline points="20 6 9 17 4 12"/></svg></span>
              </button>
              <button id="cancelTransBtn" class="edit-trans-btn cancel" title="取消" aria-label="取消">
                <span class="ic"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
              </button>
            </div>
            <div id="defList" class="def-list"></div>
          </div>

          <button id="playBtn" class="btn">
            <span class="ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg></span>
            <span>重新播放</span>
          </button>

          <!-- 精選雙語例句區（僅左側顯示，預設 2 句） -->
          <div id="examplesSection" class="examples-section" style="display:none;">
            <div class="examples-header">
              <span>精選例句</span>
            </div>
            <div id="exampleList" class="example-list"></div>
            <button id="exampleMoreBtn" class="example-more-btn" style="display:none;"></button>
          </div>
        </div>
      </div>

      <!-- 右側：單字複習面板 (無音標) -->
      <div id="reviewPanel" class="panel mobile-hidden">
        <div class="panel-header">
          <div class="panel-title">
            <span>單字複習</span>
            <span id="deckCountBadge" class="badge">0 個</span>
          </div>
          <div class="header-actions">
            <button id="syncDeckBtn" class="tool-btn" title="個人專屬雲端同步">
              <span class="ic"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg></span>
              <span>同步</span>
            </button>
            <button id="manageDeckBtn" class="tool-btn" title="瀏覽複習庫清單">
              <span class="ic"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></span>
              <span>清單</span>
            </button>
            <button id="backupDeckBtn" class="tool-btn" title="配色設定與本機備份">
              <span class="ic"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg></span>
              <span>設定</span>
            </button>
          </div>
        </div>

        <!-- 模式切換開關：極簡底線分頁 -->
        <div class="review-mode-bar" role="tablist" aria-label="複習模式切換">
          <div class="mode-switch-group">
            <button id="modeFlipBtn" class="mode-switch-btn active" type="button" role="tab" aria-selected="true">
              <span class="ic"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><rect x="3" y="5" width="14" height="15"/><path d="M7 2h14v15"/></svg></span>
              <span>翻面記憶</span>
            </button>
            <button id="modeQuizBtn" class="mode-switch-btn" type="button" role="tab" aria-selected="false">
              <span class="ic"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/></svg></span>
              <span>四選一（英翻中）</span>
            </button>
          </div>
        </div>

        <div class="review-box">
          <!-- 空狀態 -->
          <div id="reviewEmptyState" class="empty-state">
            <div class="empty-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
            </div>
            <div class="empty-title">複習庫空空如也</div>
            <div class="empty-desc">在左側查詢單字後，點擊星號或按 Alt 即可加入複習庫。</div>
          </div>

          <!-- 卡片區域 -->
          <div id="reviewCard" class="card-wrap" style="display:none;">
            <div class="card-meta">
              <span id="cardLevelTag" class="level-badge lvl-1">
                <span class="lvl-dot"></span>
                <span id="cardLevelText">生疏</span>
              </span>
              <span id="cardStats">已複習 0 次</span>
            </div>

            <!-- 卡片正面 -->
            <div class="card-front">
              <div id="reviewWord" class="card-word">word</div>
              <button id="reviewPlayBtn" class="card-audio-btn" title="聽發音 (R)">
                <span class="ic"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></span>
                <span>聽發音 (R)</span>
              </button>
            </div>

            <!-- 模式 A：經典翻面記憶 -->
            <div id="flipModeBody" style="width:100%;">
              <div id="flipBtnWrap" class="flip-btn-wrap">
                <button id="flipBtn" class="flip-btn">翻面核對 (Space)</button>
              </div>

              <div id="cardBack" class="card-back">
                <div id="reviewMainTransRow" class="main-trans-row">
                  <span id="reviewMainTrans" class="card-trans">翻譯</span>
                  <button id="reviewEditTransBtn" class="trans-action-btn" title="自訂此卡片主要釋義" aria-label="編輯釋義">
                    <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></span>
                  </button>
                </div>
                <div id="reviewEditTransBox" class="edit-trans-box" style="display:none;">
                  <input type="text" id="reviewEditTransInput" class="edit-trans-input" placeholder="輸入自訂釋義...">
                  <button id="reviewSaveTransBtn" class="edit-trans-btn save" aria-label="儲存">
                    <span class="ic"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><polyline points="20 6 9 17 4 12"/></svg></span>
                  </button>
                  <button id="reviewCancelTransBtn" class="edit-trans-btn cancel" aria-label="取消">
                    <span class="ic"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
                  </button>
                </div>
                <div id="reviewDefList" class="card-defs def-list"></div>

                <div style="font-size:0.74rem; color:var(--text-muted); margin-bottom:6px; text-align:center;">請評估熟悉度</div>
                <div class="rate-grid">
                  <button id="rateHardBtn" class="rate-btn hard">1 生疏<br><span style="font-size:0.68rem;opacity:0.75;">頻繁複習</span></button>
                  <button id="rateMedBtn" class="rate-btn med">2 模糊<br><span style="font-size:0.68rem;opacity:0.75;">偶爾複習</span></button>
                  <button id="rateEasyBtn" class="rate-btn easy">3 精通<br><span style="font-size:0.68rem;opacity:0.75;">減少出現</span></button>
                </div>
              </div>
            </div>

            <!-- 模式 B：四選一（英翻中）＋ 艾賓浩斯記憶評估 -->
            <div id="quizModeBody" class="quiz-mode-body" style="display:none;">
              <div class="quiz-subbar">
                <span>鍵盤 1–4 作答</span>
                <div class="quiz-toggles">
                  <label class="quiz-auto-label" title="切換至下一個單字時自動播放發音">
                    <input type="checkbox" id="quizAutoPlayChk" checked>
                    <span>自動發音</span>
                  </label>
                  <label class="quiz-auto-label" title="答對後約 1.6 秒自動切換下一題">
                    <input type="checkbox" id="quizAutoNextChk" checked>
                    <span>自動跳題</span>
                  </label>
                </div>
              </div>

              <div id="quizOptionsGrid" class="quiz-options"></div>

              <div id="quizFeedbackWrap" class="quiz-feedback-wrap" style="display:none;">
                <div class="quiz-feedback-card">
                  <div id="quizVerdictBox" class="quiz-verdict-box">
                    <div class="quiz-verdict-top">
                      <span id="quizVerdictTitle" class="quiz-verdict-title">
                        <span id="quizVerdictIcon" class="ic"></span>
                        <span id="quizVerdictText">艾賓浩斯記憶判讀</span>
                      </span>
                      <span id="quizVerdictTransition" class="quiz-verdict-transition">生疏 → 模糊</span>
                    </div>
                    <div id="quizVerdictSub" class="quiz-verdict-sub"></div>
                    <div class="quiz-override-row">
                      <span class="quiz-override-label">調整熟練度</span>
                      <button type="button" class="quiz-ov-btn lvl-1" data-lvl="1"><span class="lvl-dot"></span><span>生疏</span></button>
                      <button type="button" class="quiz-ov-btn lvl-2" data-lvl="2"><span class="lvl-dot"></span><span>模糊</span></button>
                      <button type="button" class="quiz-ov-btn lvl-3" data-lvl="3"><span class="lvl-dot"></span><span>精通</span></button>
                    </div>
                  </div>

                  <!-- 主要解釋檢視與即時修改（整合於單一回饋卡片中） -->
                  <div id="quizMainTransWrap" class="quiz-main-trans-wrap">
                    <div id="quizMainTransRow" class="quiz-main-trans-row">
                      <div class="quiz-main-left">
                        <span class="quiz-main-label">主要解釋</span>
                        <span id="quizMainTrans" class="quiz-main-trans">翻譯</span>
                        <span id="quizTransSavedBadge" class="quiz-saved-badge" style="display:none;">已儲存</span>
                      </div>
                      <div class="quiz-main-actions">
                        <button id="quizEditTransBtn" class="trans-action-btn" type="button" title="自訂此單字主要解釋">
                          <span class="ic"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></span>
                          <span>編輯</span>
                        </button>
                        <button id="quizResetTransBtn" class="trans-action-btn" type="button" style="display:none;" title="恢復詞典預設解釋" aria-label="恢復預設解釋">
                          <span class="ic"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg></span>
                        </button>
                        <button id="quizToggleDefsBtn" class="trans-action-btn" type="button" style="display:none;" title="展開或收合全部釋義膠囊以供點選切換">
                          <span class="ic"><svg class="chevron-ic" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><polyline points="6 9 12 15 18 9"/></svg></span>
                          <span id="quizToggleDefsLabel">換釋義</span>
                        </button>
                      </div>
                    </div>
                    <div id="quizEditTransBox" class="edit-trans-box" style="display:none;">
                      <input type="text" id="quizEditTransInput" class="edit-trans-input" placeholder="輸入自訂主要解釋...">
                      <button id="quizSaveTransBtn" class="edit-trans-btn save" type="button" aria-label="儲存">
                        <span class="ic"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><polyline points="20 6 9 17 4 12"/></svg></span>
                      </button>
                      <button id="quizCancelTransBtn" class="edit-trans-btn cancel" type="button" aria-label="取消">
                        <span class="ic"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
                      </button>
                    </div>
                  </div>

                  <div id="quizDefList" class="quiz-def-list def-list" style="display:none;"></div>
                </div>

                <button id="quizNextBtn" class="quiz-next-btn" type="button">
                  <span id="quizNextLabel">下一題 (Space / Enter)</span>
                  <span class="ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部快捷鍵提示列（預設極簡收合） -->
    <div class="hint-wrapper">
      <div id="hintBar" class="keyboard-hint" style="display:none;">
        <div class="hint-text">
          快捷鍵：<kbd>Tab</kbd> 查詢 ｜ <kbd>Enter</kbd> 送出 ｜ <kbd>Alt</kbd> 收藏 ｜ <kbd>ddd</kbd> 清空 ｜ <kbd>Space</kbd> 翻面/下一題 ｜ <kbd>1</kbd>-<kbd>4</kbd> 作答 ｜ <kbd>R</kbd> 聽發音
        </div>
        <button id="hideHintBtn" class="hint-toggle-btn" title="收合快捷鍵提示">
          <span class="ic"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
          <span>收合</span>
        </button>
      </div>
      <button id="showHintBtn" class="hint-restore-btn" title="查看快捷鍵說明">
        <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></span>
        <span>快捷鍵</span>
      </button>
    </div>
  </div>

  <!-- 1. 個人雲端同步彈窗 -->
  <div id="syncModal" class="modal-backdrop">
    <div class="modal-card">
      <div class="modal-header">
        <div class="modal-title">
          <span class="ic"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg></span>
          <span>個人專屬雲端同步 (Cloudflare KV)</span>
        </div>
        <button id="closeSyncModalBtn" class="modal-close" aria-label="關閉">
          <span class="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
        </button>
      </div>
      <div class="modal-body">
        <div class="sync-banner">
          <strong>個人防護架構：</strong><br>
          • <strong>方案一（專屬密碼）</strong>：未授權請求在 1ms 攔截，0 消耗 KV 寫入額度。<br>
          • <strong>方案二（鎖定單槽位）</strong>：固定寫入 <code>MY_DECK</code>，永遠零殭屍資料。
        </div>

        <div>
          <label style="display:block; margin-bottom:6px; font-weight:600;">專屬同步密碼 (SYNC_SECRET)：</label>
          <div style="display:flex; gap:6px;">
            <input type="password" id="syncKeyInput" placeholder="請輸入 Cloudflare 設定的密碼..." style="flex:1; padding:8px 10px; font-size:0.9rem;">
            <button id="toggleSyncKeyVisBtn" class="tool-btn" style="padding:0 10px; border-color:var(--border);" aria-label="顯示或隱藏密碼">
              <span class="ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></span>
            </button>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px;">
            <span id="syncKeyStatus" class="sync-status-badge">未設定密碼</span>
            <span id="lastSyncTime" style="color:var(--text-muted); font-size:0.75rem;">上次同步: 從未</span>
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:6px; margin-top:4px;">
          <button id="syncMergeBtn" class="modal-action-btn primary">
            <span class="ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="square"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg></span>
            <span>智慧雙向合併 (Merge &amp; Sync)</span>
          </button>
          <button id="syncPushBtn" class="modal-action-btn">
            <span class="ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg></span>
            <span>上傳本地至雲端 (Push 覆蓋)</span>
          </button>
          <button id="syncPullBtn" class="modal-action-btn">
            <span class="ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></span>
            <span>從雲端拉取至本地 (Pull 覆蓋)</span>
          </button>
        </div>

        <div id="syncLog" style="font-size:0.75rem; text-align:center; min-height:16px;"></div>
      </div>
    </div>
  </div>

  <!-- 2. 單字庫清單管理彈窗 -->
  <div id="listModal" class="modal-backdrop">
    <div class="modal-card" style="max-height:80vh; display:flex; flex-direction:column;">
      <div class="modal-header">
        <div class="modal-title">單字複習庫清單 (<span id="modalTotalCount">0</span>)</div>
        <button id="closeListModalBtn" class="modal-close" aria-label="關閉">
          <span class="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" id="modalSearchInput" placeholder="過濾單字..." style="padding:6px 10px; font-size:0.9rem;">
        <div id="modalWordList" style="flex-grow:1; max-height:360px; overflow-y:auto;"></div>
      </div>
    </div>
  </div>

  <!-- 3. 偏好設定與本機備份彈窗 -->
  <div id="backupModal" class="modal-backdrop">
    <div class="modal-card">
      <div class="modal-header">
        <div class="modal-title">
          <span class="ic"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg></span>
          <span>設定與本機備份</span>
        </div>
        <button id="closeBackupModalBtn" class="modal-close" aria-label="關閉">
          <span class="ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
        </button>
      </div>
      <div class="modal-body">
        <!-- 主題切換 -->
        <div class="settings-section">
          <div class="settings-label">外觀配色風格</div>
          <div class="theme-grid">
            <button type="button" class="theme-opt active" data-theme-choice="slate">
              <span class="theme-swatch"><i style="width:70%;background:#0d131f"></i><i style="width:30%;background:#60a5fa"></i></span>
              <span class="theme-meta"><strong>沉穩霧藍</strong><small>預設 · 柔和降噪</small></span>
            </button>
            <button type="button" class="theme-opt" data-theme-choice="sage">
              <span class="theme-swatch"><i style="width:70%;background:#0c1412"></i><i style="width:30%;background:#34d399"></i></span>
              <span class="theme-meta"><strong>護眼墨綠</strong><small>舒緩青碧低疲勞</small></span>
            </button>
            <button type="button" class="theme-opt" data-theme-choice="mono">
              <span class="theme-swatch"><i style="width:70%;background:#0b0e14"></i><i style="width:30%;background:#e2e8f0"></i></span>
              <span class="theme-meta"><strong>純粹黑白</strong><small>極致 Focus 零彩色</small></span>
            </button>
          </div>
        </div>

        <!-- 學習專注偏好 -->
        <div class="settings-section">
          <div class="settings-label">學習與操作偏好</div>
          <div class="settings-toggles">
            <label class="settings-row">
              <span>四選一：切換下一題時自動發音</span>
              <input type="checkbox" id="settingAutoPlayChk" checked>
            </label>
            <label class="settings-row">
              <span>四選一：答對後自動跳下一題</span>
              <input type="checkbox" id="settingAutoNextChk" checked>
            </label>
            <label class="settings-row">
              <span>顯示底部快捷鍵提示列</span>
              <input type="checkbox" id="settingShowHintChk">
            </label>
          </div>
        </div>

        <!-- 本機備份 -->
        <div class="settings-section">
          <div class="settings-label">本機資料備份</div>
          <div style="display:flex; flex-direction:column; gap:6px;">
            <button id="exportBtn" class="modal-action-btn">
              <span class="ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></span>
              <span>匯出單字庫 (JSON 檔案)</span>
            </button>
            <button id="importTriggerBtn" class="modal-action-btn">
              <span class="ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg></span>
              <span>匯入單字庫 (合併至現有進度)</span>
            </button>
            <input type="file" id="importFileInput" accept=".json" style="display:none;">
            <button id="clearAllBtn" class="modal-action-btn danger">
              <span class="ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></span>
              <span>清空複習庫所有單字</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    // ==========================================
    // 0. 客戶端繁體中文轉換核心 (支援既有歷史單字自動繁化遷移)
    // ==========================================
    const CLIENT_S_CHARS = "㐷㐹㐽㑇㑈㑔㑩㓥㓰㔉㖊㖞㘎㚯㛀㛣㛤㟆㟥㡎㤘㤽㥪㧏㧐㧑㧟㧰㨫㭎㭏㭤㭴㱩㱮㲿㳔㳕㳠㳡㳽㴋㶉㶶㶽㺍㻅䀥䁖䂵䃅䅉䅟䇲䉤䌶䌷䌸䌹䌺䌻䌼䌽䌾䌿䍀䍁䍠䎬䏝䓓䓕䓖䓨䗖䙌䙓䜣䜤䜧䜩䝙䞍䞐䟢䥺䥽䥾䦂䦃䦅䦆䦶䦷䩄䯄䯅䲝䲟䲠䲡䲢䲣䴓䴔䴕䴖䴗䴘䴙䶮万与丑专业丛东丝丢两严丧个丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅仆从仑仓仪们价众优伙会伛伞伟传伡伣伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬侭俣俦俨俩俪俫俭债倾偬偻偾偿傤傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冯冲决况冻净凄准凉减凑凛几凤凫凭凯凶击凿刍划刘则刚创删别刬刭刹刽刾刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勚匀匦匮区医华协单卖占卢卤卧卫却卺厂厅历厉压厌厍厐厕厘厢厣厦厨厩厮县叁参叆叇双发变叙叠台叶号叹叽吁吃后吓吕吗吨听启吴呐呒呓呕呖呗员呙呛呜咏咙咛咝咤咨咸响哑哒哓哔哕哗哙哜哝哟唇唛唝唠唡唢唤啧啬啭啮啯啰啴啸喷喽喾嗫嗳嘘嘤嘱噜嚣团园囱围囵国图圆圣圹场坏块坚坛坜坝坞坟坠垄垅垆垒垦垩垫垭垯垱垲垴埘埙埚堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姹娄娅娆娇娈娱娲娴婳婴婵婶媪媭嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尝尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岚岛岩岭岳岽岿峃峄峡峣峤峥峦峰崂崃崄崭嵘嵚嵝巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂干并广庄庆床庐庑库应庙庞废庼廪开异弃弑张弥弪弯弹强归当录彟彦彨彻征径徕忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恒恳恶恸恹恺恻恼恽悦悫悬悭悮悯惊惧惨惩惫惬惭惮惯愠愤愦愿慑慭懑懒懔戆戋戏戗战戬戯户扑执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捝捞损捡换捣据掳掴掷掸掺掼揽揾揿搀搁搂搄搅携摄摅摆摇摈摊撄撑撵撷撸撺擜擞攒敌敚敛敩数斋斓斗斩断无旧时旷旸昙昵昼昽显晋晒晓晔晕晖暂暧术朴机杀杂权杠条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桠桡桢档桤桥桦桧桨桩桪梦梼梾梿检棁棂椁椝椟椠椢椤椫椭椮楼榄榅榇榈榉榝槚槛槟槠横樯樱橥橱橹橼檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉汤汹沄沟没沣沤沥沦沧沨沩沪泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涚涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溁溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪潆潇潋潍潜潴澛澜濑濒灏灭灯灵灶灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煴熏爱爷牍牦牵牺犊状犷犸犹狈狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珐珑珰珲琎琏琐琼瑶瑷瑸璎瓒瓮瓯电画畅畴疖疗疟疠疡疬疭疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫皂皑皱皲盏盐监盖盗盘眍眦眬睁睐睑瞆瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硕硖硗硙硚确硵碍碛碜碱礼祃祎祢祯祷祸禀禄禅离秃秆种秘积称秽秾稆税稣稳穑穞穷窃窍窎窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹筼签筿简箓箦箧箨箩箪箫篑篓篮篯篱簖籁籴类籼粜粝粤粪粮粽糁糇糍紧絷緼縆纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡群翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肮肴肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑膻臜舆舣舰舱舻艰艳艺节芈芗芜芦苁苇苈苋苌苍苎苏苧苹范茎茏茑茔茕茧荆荐荙荚荛荜荝荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒀蒇蒉蒋蒌蒏蓝蓟蓠蓣蓥蓦蔂蔷蔹蔺蔼蕰蕲蕴薮藓藴蘖虏虑虚虫虬虮虱虽虾虿蚀蚁蚂蚃蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯訚詟誉誊讠计订讣认讥讦讧讨让讪讫讬训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谉谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踌踪踬踯蹑蹒蹰蹿躏躜躯輼车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辟辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郏郐郑郓郦郧郸酂酝酦酱酽酾酿醖采释里鉴銮錾钅钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钜钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铇铈铉铊铋铌铍铎铏铐铑铒铓铔铕铖铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铩铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗锘错锚锛锜锝锞锟锠锡锢锣锤锥锦锧锨锩锪锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镄镅镆镇镈镉镊镋镌镍镎镏镐镑镒镓镔镕镖镗镘镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镵镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陦陧陨险随隐隶隽难雇雏雠雳雾霁霉霡霭靓靔静靥鞑鞒鞯鞲韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饣饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓鬶魇魉鱼鱽鱾鱿鲀鲁鲂鲃鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳚鳛鳜鳝鳞鳟鳠鳡鳢鳣鳤鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹙鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹮鹯鹰鹱鹲鹳鹴鹾麦麸麹麺麽黄黉黡黩黪黾鼋鼌鼍鼹齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟鿎鿏鿒鿔";
    const CLIENT_T_CHARS = "傌㑶偑㑳倲㑯儸劏劃劚噚喎㘚㜄媰㜏孋㠏嵾幓㥮懤慺掆㩳撝擓擽㩜棡椲樢樫殰殨瀇濧灡澾濄瀰潚鸂燶煱獱璯䁻瞜碽磾稏穇筴籔䊷紬縳絅䋙䋚綐綵䋻䋹繿繸䍦䎱膞薵薳藭罃螮䙡襬訢鿁䜀讌貙䝼賰躎釾鏺䥱䥇鐯鐥钁䦛䦟靦騧䯀䱽鮣鰆鰌鰧䱷鳾鵁鴷鶄鶪鷉鸊龑萬與醜專業叢東絲丟兩嚴喪個豐臨為麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅僕從侖倉儀們價眾優夥會傴傘偉傳俥俔傷倀倫傖偽佇體餘傭僉俠侶僥偵側僑儈儕儂儘俁儔儼倆儷倈儉債傾傯僂僨償儎儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農馮衝決況凍淨悽準涼減湊凜幾鳳鳧憑凱兇擊鑿芻劃劉則剛創刪別剗剄剎劊㓨劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳勩勻匭匱區醫華協單賣佔盧滷臥衛卻巹廠廳歷厲壓厭厙龎廁釐廂厴廈廚廄廝縣叄參靉靆雙發變敘疊臺葉號嘆嘰籲吃後嚇呂嗎噸聽啟吳吶嘸囈嘔嚦唄員咼嗆嗚詠嚨嚀噝吒諮鹹響啞噠嘵嗶噦譁噲嚌噥喲唇嘜嗊嘮啢嗩喚嘖嗇囀齧嘓囉嘽嘯噴嘍嚳囁噯噓嚶囑嚕囂團園囪圍圇國圖圓聖壙場壞塊堅壇壢壩塢墳墜壟壠壚壘墾堊墊埡墶壋塏堖塒壎堝塹墮壪牆壯聲殼壺壼處備復夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗媯姍奼婁婭嬈嬌孌娛媧嫻嫿嬰嬋嬸媼嬃嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵嘗堯尷屍盡層屓屜屆屬屢屨嶼歲豈嶇崗峴嵐島巖嶺嶽崬巋嶨嶧峽嶢嶠崢巒峰嶗崍嶮嶄嶸嶔嶁巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪幹並廣莊慶床廬廡庫應廟龐廢廎廩開異棄弒張彌弳彎彈強歸當錄彠彥彲徹徵徑徠憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀恆懇惡慟懨愷惻惱惲悅愨懸慳悞憫驚懼慘懲憊愜慚憚慣慍憤憒願懾憖懣懶懍戇戔戲戧戰戩戱戶撲執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏挩撈損撿換搗據擄摑擲撣摻摜攬搵撳攙擱摟揯攪攜攝攄擺搖擯攤攖撐攆擷擼攛㩵擻攢敵敓斂斆數齋斕鬥斬斷無舊時曠暘曇暱晝曨顯晉曬曉曄暈暉暫曖術樸機殺雜權槓條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒椏橈楨檔榿橋樺檜槳樁樳夢檮棶槤檢梲欞槨槼櫝槧槶欏樿橢槮樓欖榲櫬櫚櫸樧檟檻檳櫧橫檣櫻櫫櫥櫓櫞檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳匯漢湯洶澐溝沒灃漚瀝淪滄渢溈滬濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗湧涗濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣溼濚潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦瀠瀟瀲濰潛瀦瀂瀾瀨瀕灝滅燈靈灶災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾熅燻愛爺牘犛牽犧犢狀獷獁猶狽獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽琺瓏璫琿璡璉瑣瓊瑤璦璸瓔瓚甕甌電畫暢疇癤療瘧癘瘍癧瘲瘡瘋皰痾癰痙癢瘂癆瘓癇痴癉瘮瘞瘻癟癱癮癭癩癬癲皂皚皺皸盞鹽監蓋盜盤瞘眥矓睜睞瞼瞶瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜碩硤磽磑礄確磠礙磧磣鹼禮禡禕禰禎禱禍稟祿禪離禿稈種祕積稱穢穠穭稅穌穩穡穭窮竊竅窵窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌篔籤篠簡籙簀篋籜籮簞簫簣簍籃籛籬籪籟糴類秈糶糲粵糞糧粽糝餱餈緊縶縕緪糹糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺紲紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽鞝緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒韁繾繰繯繳纘罌網羅罰罷羆羈羥羨群翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚骯餚腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕顎膩靦膃騰臏羶臢輿艤艦艙艫艱豔藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇薴蘋範莖蘢蔦塋煢繭荊薦薘莢蕘蓽萴蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蒕蕆蕢蔣蔞醟藍薊蘺蕷鎣驀虆薔蘞藺藹薀蘄蘊藪蘚蘊櫱虜慮虛蟲虯蟣蝨雖蝦蠆蝕蟻螞蠁蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襉褸襤襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶誾讋譽謄訁計訂訃認譏訐訌討讓訕訖託訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談讅誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗贊贇贈贍贏贛赬趙趕趨趲躉躍蹌蹠躒踐躂蹺蹕躚躋躊蹤躓躑躡蹣躕躥躪躦軀轀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭闢辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郟鄶鄭鄆酈鄖鄲酇醞醱醬釅釃釀醞採釋裡鑑鑾鏨釒釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鉅鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷缽鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鉋鈰鉉鉈鉍鈮鈹鐸鉶銬銠鉺鋩錏銪鋮鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鎩鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐧銳銻鋃鋟鋦錒錆鍺鍩錯錨錛錡鍀錁錕錩錫錮鑼錘錐錦鑕鍁錈鍃錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鐨鎇鏌鎮鎛鎘鑷钂鐫鎳鎿鎦鎬鎊鎰鎵鑌鎔鏢鏜鏝鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑱鑲長門閂閃閆閈閉問闖閏闈閒閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隯隉隕險隨隱隸雋難僱雛讎靂霧霽黴霢靄靚靝靜靨韃鞽韉韝韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飈飛饗饜飠飣飢飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢鬹魘魎魚魛魢魷魨魯魴䰾魺鮁鮃鯰鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鯰鯛鯨鰺鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鰲鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅䲁鰼鱖鱔鱗鱒鱯鱤鱧鱣䲘鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鷽鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鵾鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶖鷀鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺䴉鸇鷹鸌鸏鸛鸘鹺麥麩麴麵麼黃黌黶黷黲黽黿鼂鼉鼴齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜䃮䥑鿓鎶";
    const CLIENT_PHRASES = [["复习", "複習"], ["温习", "溫習"], ["联系", "聯繫"], ["关系", "關係"], ["关联", "關聯"], ["过去式", "過去式"], ["过去分词", "過去分詞"], ["现在分词", "現在分詞"], ["进行时", "進行式"], ["完成时", "完成式"], ["及物动词", "及物動詞"], ["不及物动词", "不及物動詞"], ["代词", "代名詞"], ["介词", "介系詞"], ["连词", "連接詞"], ["数词", "數詞"], ["量词", "量詞"], ["冠词", "冠詞"], ["感叹词", "感嘆詞"], ["短语", "片語"], ["词组", "片語"], ["研制", "研製"], ["舍弃", "捨棄"], ["制造", "製造"], ["制作", "製作"], ["发现", "發現"], ["发生", "發生"], ["发展", "發展"], ["发财", "發財"], ["头发", "頭髮"], ["毛发", "毛髮"], ["干杯", "乾杯"], ["干燥", "乾燥"], ["干净", "乾淨"], ["干涸", "乾涸"], ["干部", "幹部"], ["干活", "幹活"], ["蛮干", "蠻幹"], ["干脆", "乾脆"], ["一只", "一隻"], ["两只", "兩隻"], ["只身", "隻身"], ["形单影只", "形單影隻"], ["只有", "只有"], ["只要", "只要"], ["借口", "藉口"], ["凭藉", "憑藉"], ["周一", "週一"], ["周二", "週二"], ["周三", "週三"], ["周四", "週四"], ["周五", "週五"], ["周六", "週六"], ["周日", "週日"], ["周末", "週末"], ["周期", "週期"], ["周年", "週年"], ["分钟", "分鐘"], ["时钟", "時鐘"], ["警钟", "警鐘"], ["时分", "時分"], ["历程", "歷程"], ["历史", "歷史"], ["经历", "經歷"], ["日历", "日曆"], ["台阶", "階梯"], ["台湾", "臺灣"], ["台北", "臺北"], ["台中", "臺中"], ["台南", "臺南"], ["一冲性子", "一沖性子"], ["一出", "一齣"], ["一出剧", "一齣劇"], ["一出子", "一齣子"], ["一出戏", "一齣戲"], ["一分收获", "一分收穫"], ["一分钟", "一分鐘"], ["一别头", "一彆頭"], ["一发之差", "一髮之差"], ["一发之间", "一髮之間"], ["一发千钧", "一髮千鈞"], ["一口钟", "一口鐘"], ["一号木杆", "一號木桿"], ["一周", "一週"], ["一周年", "一週年"], ["一哄", "一鬨"], ["一哄而上", "一鬨而上"], ["一哄而散", "一鬨而散"], ["一哄而起", "一鬨而起"], ["一哄而集", "一鬨而集"], ["一地里", "一地裏"], ["一块面", "一塊麪"], ["一坛", "一罈"], ["一坛坛", "一罈罈"], ["一天星斗", "一天星斗"], ["一天钟", "一天鐘"], ["一干", "一干"], ["一干二净", "一乾二淨"], ["一干人", "一干人"], ["一干家中", "一干家中"], ["一干弟兄", "一干弟兄"], ["一干弟子", "一干弟子"], ["一干而尽", "一乾而盡"], ["一干部下", "一干部下"], ["一并", "一併"], ["一幻拉面", "一幻拉麪"], ["一径", "一逕"], ["一扎", "一紮"], ["一斗", "一斗"], ["一斗斗", "一斗斗"], ["一日千里", "一日千里"], ["一日叫娘", "一日叫孃"], ["一杆进洞", "一桿進洞"], ["一松", "一鬆"], ["一树百获", "一樹百穫"], ["一根烟", "一根菸"], ["一毫一发", "一毫一髮"], ["一泻千里", "一瀉千里"], ["一点钟", "一點鐘"], ["一目了然", "一目瞭然"], ["一碗面", "一碗麪"], ["一秒钟", "一秒鐘"], ["一签", "一簽"], ["一箭双雕", "一箭雙鵰"], ["一粥面", "一粥麪"], ["一赞", "一讚"], ["一递里", "一遞裏"], ["一逞兽欲", "一逞獸慾"], ["一里", "一里"], ["一里一外", "一裏一外"], ["一锅面", "一鍋麪"], ["一飞冲天", "一飛沖天"], ["丁丑", "丁丑"], ["丁里", "丁里"], ["丁铃当啷", "丁鈴噹啷"], ["丁零当啷", "丁零噹啷"], ["七八下里", "七八下裏"], ["七出戏", "七齣戲"], ["七分钟", "七分鐘"], ["七只", "七隻"], ["七周", "七週"], ["七坛", "七罈"], ["七娘妈", "七孃媽"], ["七弦", "七絃"], ["七情六欲", "七情六慾"], ["七扎", "七紮"], ["七点钟", "七點鐘"], ["七秒钟", "七秒鐘"], ["七里", "七里"], ["七里河", "七里河"], ["七里河区", "七里河區"], ["七里香", "七里香"], ["万众", "萬衆"], ["万众一心", "萬衆一心"], ["万众欢腾", "萬衆歡騰"], ["万众瞩目", "萬衆矚目"], ["万余只", "萬餘隻"], ["万余里", "萬餘里"], ["万俟", "万俟"], ["万历", "萬曆"], ["万只", "萬隻"], ["万坛", "萬罈"], ["万年历", "萬年曆"], ["万年历表", "萬年曆錶"], ["万扎", "萬紮"], ["万旗", "万旗"], ["万里", "萬里"], ["万里之望", "萬里之望"], ["万里乡", "萬里鄉"], ["万里侯", "萬里侯"], ["万里同风", "萬里同風"], ["万里封侯", "萬里封侯"], ["万里无云", "萬里無雲"], ["万里晴空", "萬里晴空"], ["万里江山", "萬里江山"], ["万里迢迢", "萬里迢迢"], ["万里追踪", "萬里追蹤"], ["万里长城", "萬里長城"], ["万里长征", "萬里長征"], ["万里长江", "萬里長江"], ["万里长空", "萬里長空"], ["万里鹏程", "萬里鵬程"], ["万里鹏翼", "萬里鵬翼"], ["丈母娘", "丈母孃"], ["三元里", "三元里"], ["三出戏", "三齣戲"], ["三分钟", "三分鐘"], ["三只", "三隻"], ["三只手", "三隻手"], ["三周", "三週"], ["三周年", "三週年"], ["三娘教子", "三孃教子"], ["三尸", "三尸"], ["三尸神", "三尸神"], ["三弦", "三絃"], ["三征七辟", "三徵七辟"], ["三扎", "三紮"], ["三浴三熏", "三浴三熏"], ["三点钟", "三點鐘"], ["三熏三沐", "三熏三沐"], ["三秒钟", "三秒鐘"], ["三统历", "三統曆"], ["三角关系", "三角關係"], ["三辟", "三辟"], ["三里", "三里"], ["三里屯", "三里屯"], ["三里河", "三里河"], ["三鲜面", "三鮮麪"], ["上下游", "上下游"], ["上中下游", "上中下游"], ["上冲下洗", "上沖下洗"], ["上升为", "上升爲"], ["上合屋", "上閤屋"], ["上周", "上週"], ["上复", "上覆"], ["上夸克", "上夸克"], ["上梁", "上樑"], ["上梁不正", "上樑不正"], ["上梁文", "上樑文"], ["上游", "上游"], ["上游工业", "上游工業"], ["上签写", "上簽寫"], ["上签名", "上簽名"], ["上签字", "上簽字"], ["上签收", "上簽收"], ["上课钟", "上課鐘"], ["上野树里", "上野樹里"], ["上链", "上鍊"], ["下仑路", "下崙路"], ["下周", "下週"], ["下咽", "下嚥"], ["下城里", "下城里"], ["下夸克", "下夸克"], ["下摆", "下襬"], ["下梁", "下樑"], ["下注解", "下註解"], ["下游", "下游"], ["下游工业", "下游工業"], ["下签写", "下簽寫"], ["下签名", "下簽名"], ["下签字", "下簽字"], ["下签收", "下簽收"], ["下课钟", "下課鐘"], ["下采", "下采"], ["下里", "下里"], ["下里巴人", "下里巴人"], ["下面条", "下麪條"], ["不上台盘", "不上檯盤"], ["不为牛后", "不爲牛後"], ["不了解", "不瞭解"], ["不克制", "不剋制"], ["不准他", "不准他"], ["不准你", "不准你"], ["不准她", "不准她"], ["不准它", "不准它"], ["不准我", "不准我"], ["不准没", "不准沒"], ["不准翻印", "不准翻印"], ["不准许", "不准許"], ["不准谁", "不准誰"], ["不准问", "不准問"], ["不划算", "不划算"], ["不占凶吉", "不占凶吉"], ["不占卜", "不占卜"], ["不占吉凶", "不占吉凶"], ["不占算", "不占算"], ["不合群", "不合羣"], ["不吊", "不弔"], ["不大精采", "不大精采"], ["不好干涉", "不好干涉"], ["不好干预", "不好干預"], ["不寒而栗", "不寒而慄"], ["不差毫发", "不差毫髮"], ["不干不净", "不乾不淨"], ["不干他", "不干他"], ["不干休", "不干休"], ["不干你", "不干你"], ["不干净", "不乾淨"], ["不干她", "不干她"], ["不干它", "不干它"], ["不干己事", "不干己事"], ["不干性", "不乾性"], ["不干我", "不干我"], ["不干扰", "不干擾"], ["不干杯", "不乾杯"], ["不干涉", "不干涉"], ["不干渴", "不乾渴"], ["不干犯", "不干犯"], ["不干着急", "不乾着急"], ["不干胶", "不乾膠"], ["不干脆", "不乾脆"], ["不干裂", "不乾裂"], ["不干预", "不干預"], ["不并", "不併"], ["不得台盘", "不得檯盤"], ["不惮强御", "不憚強禦"], ["不托", "不託"], ["不放松", "不放鬆"], ["不明就里", "不明就裏"], ["不松下", "不鬆下"], ["不气干", "不氣干"], ["不畏强御", "不畏強禦"], ["不畏彊御", "不畏彊禦"], ["不相干", "不相干"], ["不知所云", "不知所云"], ["不系", "不繫"], ["不系舟", "不繫舟"], ["不肯干休", "不肯干休"], ["不舍", "不捨"], ["不舍得", "不捨得"], ["不舍昼夜", "不捨晝夜"], ["不药而愈", "不藥而癒"], ["不讨采", "不討采"], ["不让须眉", "不讓鬚眉"], ["不谷", "不穀"], ["不赞", "不讚"], ["不赞一词", "不讚一詞"], ["不赞一辞", "不讚一辭"], ["不足为据", "不足爲據"], ["不远万里", "不遠萬里"], ["不远千里", "不遠千里"], ["不通吊庆", "不通弔慶"], ["不避彊御", "不避彊禦"], ["不采声", "不采聲"], ["不食干腊", "不食乾腊"], ["与众不同", "與衆不同"], ["与克制", "與剋制"], ["丑三", "丑三"], ["丑年", "丑年"], ["丑日", "丑日"], ["丑旦", "丑旦"], ["丑时", "丑時"], ["丑月", "丑月"], ["丑牛", "丑牛"], ["丑角", "丑角"], ["专征", "專征"], ["专辑里", "專輯裏"], ["专鉴", "專鑒"], ["世彩堂", "世綵堂"], ["世彩堂帖", "世綵堂帖"], ["世界杯", "世界盃"], ["世界杯室", "世界盃室"], ["世界杯赛", "世界盃賽"], ["世界里", "世界裏"], ["世纪钟", "世紀鐘"], ["世纪钟表", "世紀鐘錶"], ["东仓里", "東倉里"], ["东升", "東昇"], ["东周钟", "東周鐘"], ["东山里", "東山里"]];
    const CLIENT_S2T_MAP = new Map();
    for (let i = 0; i < CLIENT_S_CHARS.length; i++) {
      CLIENT_S2T_MAP.set(CLIENT_S_CHARS[i], CLIENT_T_CHARS[i]);
    }
    function toTraditionalClient(text) {
      if (!text || typeof text !== "string") return text || "";
      let s = text;
      for (let i = 0; i < CLIENT_PHRASES.length; i++) {
        const pair = CLIENT_PHRASES[i];
        if (s.includes(pair[0])) s = s.replaceAll(pair[0], pair[1]);
      }
      let res = "";
      for (let i = 0; i < s.length; i++) {
        res += CLIENT_S2T_MAP.get(s[i]) || s[i];
      }
      return res;
    }

    // ==========================================
    // 1. 核心資料儲存與狀態管理
    // ==========================================
    const STORAGE_KEY = 'deck_flashcards_v1';
    const SYNC_KEY_STORAGE = 'deck_sync_key_v1';
    const LAST_SYNC_STORAGE = 'deck_last_sync_v1';
    const HINT_STORAGE_KEY = 'deck_hide_keyboard_hint_v1';
    const CUSTOM_TRANS_STORAGE = 'deck_custom_trans_v1';
    const REVIEW_MODE_STORAGE = 'deck_review_mode_v1';
    const QUIZ_AUTONEXT_STORAGE = 'deck_quiz_autonext_v1';
    const QUIZ_AUTOPLAY_STORAGE = 'deck_quiz_autoplay_v1';
    const THEME_STORAGE_KEY = 'deck_ui_theme_v1';
    const DAY_MS = 86400000;

    const UI_ICONS = {
      speaker: '<span class="ic"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></span>',
      check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><polyline points="20 6 9 17 4 12"/></svg>',
      x: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
      hand: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square"><path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v6"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-5.9-2.7L3.3 15a2 2 0 0 1 2.8-2.8L8 14"/></svg>'
    };

    const QUIZ_FALLBACK_DISTRACTORS = [
      '猶豫、遲疑',
      '充足的、豐富的',
      '臨時的、暫時的',
      '顯著地、明顯地',
      '維持、保養',
      '拒絕、回絕',
      '擴大、膨脹',
      '精密的、細緻的',
      '獲得、取得',
      '荒謬的、可笑的',
      '妥協、讓步',
      '鼓勵、激勵',
      '脆弱的、易碎的',
      '遵守、觀察',
      '效率、效能',
      '稀有的、罕見的',
      '抱怨、投訴',
      '承諾、保證',
      '謹慎的、小心的',
      '迅速地、立即地'
    ];

    const KNOWN_POS_SUFFIXES = ['形容詞', '動詞', '及物動詞', '不及物動詞', '名詞', '副詞', '介系詞', '連接詞', '代名詞', '冠詞', '數詞', '感嘆詞', '縮寫', '片語'];

    function stripPosSuffix(text) {
      let s = (text || '').trim();
      for (let i = 0; i < KNOWN_POS_SUFFIXES.length; i++) {
        const suffix = ' (' + KNOWN_POS_SUFFIXES[i] + ')';
        if (s.endsWith(suffix)) {
          s = s.slice(0, -suffix.length).trim();
          break;
        }
      }
      return s;
    }

    function loadCustomTranslations() {
      try {
        const raw = localStorage.getItem(CUSTOM_TRANS_STORAGE);
        const map = raw ? JSON.parse(raw) : {};
        let changed = false;
        Object.keys(map).forEach(k => {
          const clean = stripPosSuffix(toTraditionalClient(map[k]));
          if (clean !== map[k]) {
            map[k] = clean;
            changed = true;
          }
        });
        if (changed) {
          try { localStorage.setItem(CUSTOM_TRANS_STORAGE, JSON.stringify(map)); } catch (e) {}
        }
        return map;
      } catch (e) {
        return {};
      }
    }

    function saveCustomTranslations(map) {
      try {
        localStorage.setItem(CUSTOM_TRANS_STORAGE, JSON.stringify(map));
      } catch (e) {}
    }

    function getCustomTranslation(word) {
      if (!word) return null;
      const map = loadCustomTranslations();
      return map[word.trim().toLowerCase()] || null;
    }

    function setCustomTranslation(word, trans) {
      if (!word) return;
      const key = word.trim().toLowerCase();
      const map = loadCustomTranslations();
      if (trans && trans.trim()) {
        map[key] = trans.trim();
      } else {
        delete map[key];
      }
      saveCustomTranslations(map);
    }

    function formatChosenMeaning(meaning) {
      return (meaning || '').trim();
    }

    function syncCustomMapFromDeck(list) {
      if (!Array.isArray(list)) return false;
      const customMap = loadCustomTranslations();
      let customChanged = false;
      let deckChanged = false;
      list.forEach(card => {
        if (!card || !card.word) return;
        const key = card.word.trim().toLowerCase();
        const hasExplicitEdit = Boolean(card.isCustomTranslation || (typeof card.translationUpdatedAt === 'number' && card.translationUpdatedAt > 0));
        if (card.isResetDefault && !card.isCustomTranslation) {
          if (customMap[key]) {
            delete customMap[key];
            customChanged = true;
          }
        } else if (hasExplicitEdit) {
          if (card.translation && customMap[key] !== card.translation) {
            customMap[key] = card.translation;
            customChanged = true;
          }
        } else if (customMap[key] && customMap[key] !== card.translation) {
          card.translation = customMap[key];
          card.isCustomTranslation = true;
          deckChanged = true;
        }
      });
      if (customChanged) saveCustomTranslations(customMap);
      return deckChanged;
    }

    let reviewMode = 'flip';
    let quizAutoNext = true;
    let quizAutoPlay = true;
    try {
      if (localStorage.getItem(REVIEW_MODE_STORAGE) === 'quiz') reviewMode = 'quiz';
      if (localStorage.getItem(QUIZ_AUTONEXT_STORAGE) === 'false') quizAutoNext = false;
      if (localStorage.getItem(QUIZ_AUTOPLAY_STORAGE) === 'false') quizAutoPlay = false;
    } catch (e) {}

    let quizQuestionStartAt = 0;
    let quizAnswered = false;
    let quizCurrentOptions = [];
    let quizActiveWord = null;
    let lastQuizChosenIdx = -1;
    let lastQuizVerdict = null;
    let quizAutoNextTimer = null;
    let quizDefsExpanded = false;
    let quizSavedToastTimer = null;
    let queuedNextCard = null;
    let quizWarmupTimer = null;

    let deck = loadDeck();
    let currentCard = null;
    let isFlipped = false;
    let recentHistory = [];
    let currentSearchData = null;

    function loadDeck() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const list = raw ? JSON.parse(raw) : [];
        let updated = false;
        list.forEach(card => {
          if (card.translation) {
            const t = stripPosSuffix(toTraditionalClient(card.translation));
            if (t !== card.translation) { card.translation = t; updated = true; }
          }
          if (card.defaultTranslation) {
            const dt = stripPosSuffix(toTraditionalClient(card.defaultTranslation));
            if (dt !== card.defaultTranslation) { card.defaultTranslation = dt; updated = true; }
          }
          if (Array.isArray(card.definitions)) {
            card.definitions.forEach(d => {
              if (d.pos) {
                const p = toTraditionalClient(d.pos);
                if (p !== d.pos) { d.pos = p; updated = true; }
              }
              if (Array.isArray(d.meanings)) {
                d.meanings = d.meanings.map(m => {
                  const tm = toTraditionalClient(m);
                  if (tm !== m) updated = true;
                  return tm;
                });
              }
            });
          }
        });
        if (syncCustomMapFromDeck(list)) {
          updated = true;
        }
        if (updated) {
          try { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); } catch (e) {}
        }
        return list;
      } catch (e) {
        return [];
      }
    }

    function saveDeck() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(deck));
      } catch (e) {}
      updateDeckUI();
    }

    function isWordInDeck(word) {
      if (!word) return false;
      return deck.some(item => item.word.toLowerCase() === word.trim().toLowerCase());
    }

    // ==========================================
    // 2. DOM 元素選取
    // ==========================================
    const input = document.getElementById('wordInput');
    const status = document.getElementById('status');
    const wordHeader = document.getElementById('wordHeader');
    const wordDisplay = document.getElementById('wordDisplay');
    const starBtn = document.getElementById('starBtn');
    const transSection = document.getElementById('transSection');
    const mainTransRow = document.getElementById('mainTransRow');
    const mainTrans = document.getElementById('mainTrans');
    const editTransBtn = document.getElementById('editTransBtn');
    const resetTransBtn = document.getElementById('resetTransBtn');
    const editTransBox = document.getElementById('editTransBox');
    const editTransInput = document.getElementById('editTransInput');
    const saveTransBtn = document.getElementById('saveTransBtn');
    const cancelTransBtn = document.getElementById('cancelTransBtn');
    const defList = document.getElementById('defList');
    const playBtn = document.getElementById('playBtn');
    const examplesSection = document.getElementById('examplesSection');
    const exampleList = document.getElementById('exampleList');
    const exampleMoreBtn = document.getElementById('exampleMoreBtn');

    // 複習面板 DOM
    const reviewPanel = document.getElementById('reviewPanel');
    const lookupPanel = document.getElementById('lookupPanel');
    const tabLookupBtn = document.getElementById('tabLookupBtn');
    const tabReviewBtn = document.getElementById('tabReviewBtn');
    const tabBadge = document.getElementById('tabBadge');
    const deckCountBadge = document.getElementById('deckCountBadge');
    const modeFlipBtn = document.getElementById('modeFlipBtn');
    const modeQuizBtn = document.getElementById('modeQuizBtn');
    const reviewEmptyState = document.getElementById('reviewEmptyState');
    const reviewCard = document.getElementById('reviewCard');
    const cardLevelTag = document.getElementById('cardLevelTag');
    const cardLevelText = document.getElementById('cardLevelText');
    const cardStats = document.getElementById('cardStats');
    const reviewWord = document.getElementById('reviewWord');
    const reviewPlayBtn = document.getElementById('reviewPlayBtn');
    const flipModeBody = document.getElementById('flipModeBody');
    const flipBtn = document.getElementById('flipBtn');
    const cardBack = document.getElementById('cardBack');
    const reviewMainTransRow = document.getElementById('reviewMainTransRow');
    const reviewMainTrans = document.getElementById('reviewMainTrans');
    const reviewEditTransBtn = document.getElementById('reviewEditTransBtn');
    const reviewEditTransBox = document.getElementById('reviewEditTransBox');
    const reviewEditTransInput = document.getElementById('reviewEditTransInput');
    const reviewSaveTransBtn = document.getElementById('reviewSaveTransBtn');
    const reviewCancelTransBtn = document.getElementById('reviewCancelTransBtn');
    const reviewDefList = document.getElementById('reviewDefList');
    const rateHardBtn = document.getElementById('rateHardBtn');
    const rateMedBtn = document.getElementById('rateMedBtn');
    const rateEasyBtn = document.getElementById('rateEasyBtn');
    const quizModeBody = document.getElementById('quizModeBody');
    const quizAutoPlayChk = document.getElementById('quizAutoPlayChk');
    const quizAutoNextChk = document.getElementById('quizAutoNextChk');
    const quizOptionsGrid = document.getElementById('quizOptionsGrid');
    const quizFeedbackWrap = document.getElementById('quizFeedbackWrap');
    const quizVerdictBox = document.getElementById('quizVerdictBox');
    const quizVerdictTitle = document.getElementById('quizVerdictTitle');
    const quizVerdictIcon = document.getElementById('quizVerdictIcon');
    const quizVerdictText = document.getElementById('quizVerdictText');
    const quizVerdictTransition = document.getElementById('quizVerdictTransition');
    const quizVerdictSub = document.getElementById('quizVerdictSub');
    const quizMainTransRow = document.getElementById('quizMainTransRow');
    const quizMainTrans = document.getElementById('quizMainTrans');
    const quizTransSavedBadge = document.getElementById('quizTransSavedBadge');
    const quizEditTransBtn = document.getElementById('quizEditTransBtn');
    const quizResetTransBtn = document.getElementById('quizResetTransBtn');
    const quizToggleDefsBtn = document.getElementById('quizToggleDefsBtn');
    const quizToggleDefsLabel = document.getElementById('quizToggleDefsLabel');
    const quizEditTransBox = document.getElementById('quizEditTransBox');
    const quizEditTransInput = document.getElementById('quizEditTransInput');
    const quizSaveTransBtn = document.getElementById('quizSaveTransBtn');
    const quizCancelTransBtn = document.getElementById('quizCancelTransBtn');
    const quizDefList = document.getElementById('quizDefList');
    const quizNextBtn = document.getElementById('quizNextBtn');
    const quizNextLabel = document.getElementById('quizNextLabel');
    const quizOvBtns = document.querySelectorAll('.quiz-ov-btn');

    // 提示列 DOM
    const hintBar = document.getElementById('hintBar');
    const hideHintBtn = document.getElementById('hideHintBtn');
    const showHintBtn = document.getElementById('showHintBtn');

    // 彈窗 DOM
    const syncModal = document.getElementById('syncModal');
    const syncDeckBtn = document.getElementById('syncDeckBtn');
    const closeSyncModalBtn = document.getElementById('closeSyncModalBtn');
    const syncKeyInput = document.getElementById('syncKeyInput');
    const toggleSyncKeyVisBtn = document.getElementById('toggleSyncKeyVisBtn');
    const syncKeyStatus = document.getElementById('syncKeyStatus');
    const lastSyncTime = document.getElementById('lastSyncTime');
    const syncMergeBtn = document.getElementById('syncMergeBtn');
    const syncPushBtn = document.getElementById('syncPushBtn');
    const syncPullBtn = document.getElementById('syncPullBtn');
    const syncLog = document.getElementById('syncLog');

    const listModal = document.getElementById('listModal');
    const manageDeckBtn = document.getElementById('manageDeckBtn');
    const closeListModalBtn = document.getElementById('closeListModalBtn');
    const modalSearchInput = document.getElementById('modalSearchInput');
    const modalWordList = document.getElementById('modalWordList');
    const modalTotalCount = document.getElementById('modalTotalCount');

    const backupModal = document.getElementById('backupModal');
    const backupDeckBtn = document.getElementById('backupDeckBtn');
    const closeBackupModalBtn = document.getElementById('closeBackupModalBtn');
    const exportBtn = document.getElementById('exportBtn');
    const importTriggerBtn = document.getElementById('importTriggerBtn');
    const importFileInput = document.getElementById('importFileInput');
    const clearAllBtn = document.getElementById('clearAllBtn');
    const settingAutoPlayChk = document.getElementById('settingAutoPlayChk');
    const settingAutoNextChk = document.getElementById('settingAutoNextChk');
    const settingShowHintChk = document.getElementById('settingShowHintChk');
    const themeOptBtns = document.querySelectorAll('.theme-opt');

    let audioPlayer = new Audio();
    const AUDIO_BLOB_CACHE = new Map();
    const AUDIO_INFLIGHT = new Map();
    let playRequestSeq = 0;
    let searchRequestSeq = 0;
    let dPressCount = 0;
    let dTimer = null;

    function escapeHtml(str) {
      return (str || '').replace(/[&<>"']/g, m => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      })[m]);
    }

    // ==========================================
    // 3. 主題切換 & 快捷鍵提示列顯示/隱藏切換
    // ==========================================
    function applyTheme(theme) {
      const valid = (theme === 'sage' || theme === 'mono' || theme === 'slate') ? theme : 'slate';
      if (document.documentElement && document.documentElement.setAttribute) {
        document.documentElement.setAttribute('data-theme', valid);
      }
      if (themeOptBtns && themeOptBtns.forEach) {
        themeOptBtns.forEach(btn => {
          btn.classList.toggle('active', Boolean(btn.dataset && btn.dataset.themeChoice === valid));
        });
      }
      return valid;
    }

    function setTheme(theme) {
      const valid = applyTheme(theme);
      try { localStorage.setItem(THEME_STORAGE_KEY, valid); } catch (e) {}
    }

    function initThemeState() {
      let saved = 'slate';
      try { saved = localStorage.getItem(THEME_STORAGE_KEY) || 'slate'; } catch (e) {}
      applyTheme(saved);
    }

    if (themeOptBtns && themeOptBtns.forEach) {
      themeOptBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.dataset && btn.dataset.themeChoice) {
            setTheme(btn.dataset.themeChoice);
          }
        });
      });
    }

    function applyHintVisible(shown) {
      if (shown) {
        hintBar.style.display = 'flex';
        showHintBtn.style.display = 'none';
      } else {
        hintBar.style.display = 'none';
        showHintBtn.style.display = 'inline-flex';
      }
      if (settingShowHintChk) settingShowHintChk.checked = Boolean(shown);
    }

    function initHintState() {
      const isShown = localStorage.getItem(HINT_STORAGE_KEY) === 'false';
      applyHintVisible(isShown);
    }

    hideHintBtn.addEventListener('click', () => {
      applyHintVisible(false);
      try { localStorage.setItem(HINT_STORAGE_KEY, 'true'); } catch (e) {}
    });

    showHintBtn.addEventListener('click', () => {
      applyHintVisible(true);
      try { localStorage.setItem(HINT_STORAGE_KEY, 'false'); } catch (e) {}
    });

    if (settingShowHintChk) {
      settingShowHintChk.addEventListener('change', () => {
        const shown = Boolean(settingShowHintChk.checked);
        applyHintVisible(shown);
        try { localStorage.setItem(HINT_STORAGE_KEY, shown ? 'false' : 'true'); } catch (e) {}
      });
    }

    // ==========================================
    // 4. 手機版面板切換 (RWD)
    // ==========================================
    tabLookupBtn.addEventListener('click', () => {
      tabLookupBtn.classList.add('active');
      tabReviewBtn.classList.remove('active');
      lookupPanel.classList.remove('mobile-hidden');
      reviewPanel.classList.add('mobile-hidden');
    });

    tabReviewBtn.addEventListener('click', () => {
      tabReviewBtn.classList.add('active');
      tabLookupBtn.classList.remove('active');
      reviewPanel.classList.remove('mobile-hidden');
      lookupPanel.classList.add('mobile-hidden');
    });

    // ==========================================
    // 5. 左側查詢與星號按鈕邏輯
    // ==========================================
    function updateStarBtnState() {
      if (!currentSearchData) {
        starBtn.classList.remove('active');
        starBtn.title = '加入單字複習庫';
        return;
      }
      const inDeck = isWordInDeck(currentSearchData.word);
      if (inDeck) {
        starBtn.classList.add('active');
        starBtn.title = '已在複習庫中（點擊移出）';
      } else {
        starBtn.classList.remove('active');
        starBtn.title = '加入單字複習庫';
      }
    }

    function toggleBookmarkCurrent() {
      if (!currentSearchData) return;
      const targetWord = currentSearchData.word;
      const existingIdx = deck.findIndex(item => item.word.toLowerCase() === targetWord.toLowerCase());

      if (existingIdx >= 0) {
        if (queuedNextCard && queuedNextCard.word.toLowerCase() === targetWord.toLowerCase()) queuedNextCard = null;
        deck.splice(existingIdx, 1);
        saveDeck();
        updateStarBtnState();
        if (currentCard && currentCard.word.toLowerCase() === targetWord.toLowerCase()) {
          loadNextReviewCard();
        }
      } else {
        const chosenTrans = (mainTrans.innerText || '').trim() || currentSearchData.translation || '';
        const defaultTrans = stripPosSuffix(toTraditionalClient(currentSearchData.translation || ''));
        const isCustom = Boolean(defaultTrans && chosenTrans !== defaultTrans);
        const newCard = {
          word: currentSearchData.word,
          translation: chosenTrans,
          defaultTranslation: defaultTrans,
          isCustomTranslation: isCustom,
          isResetDefault: false,
          translationUpdatedAt: isCustom ? Date.now() : 0,
          definitions: currentSearchData.definitions || [],
          audioUrl: normalizeAudioUrl(currentSearchData.audioUrl || ''),
          level: 1,
          reviewCount: 0,
          lastReviewed: 0,
          streak: 0,
          ease: 2.3,
          intervalDays: 0.5,
          nextReviewAt: 0,
          addedAt: Date.now()
        };
        deck.unshift(newCard);
        saveDeck();
        updateStarBtnState();
        if (deck.length === 1 || !currentCard) {
          loadNextReviewCard();
        }
      }
      starBtn.style.transform = 'scale(1.35)';
      setTimeout(() => { starBtn.style.transform = 'scale(1)'; }, 150);
    }

    starBtn.addEventListener('click', toggleBookmarkCurrent);

    function updateDefPillsHighlight(currentTransText, targetContainer) {
      const clean = (currentTransText || '').trim();
      const tokens = clean ? clean.split(/[、;；,，]+/).map(s => s.trim()).filter(Boolean) : [];
      const container = targetContainer || defList;
      if (!container) return;
      const rows = container.querySelectorAll('.def-row');
      rows.forEach(row => {
        const posTag = row.querySelector('.pos-tag');
        const pills = row.querySelectorAll('.meaning-pill');

        let anyPillActive = false;
        pills.forEach(pill => {
          const mText = pill.innerText.trim();
          const isActive = Boolean(clean && mText && (tokens.includes(mText) || clean === mText));
          if (isActive) {
            pill.classList.add('active');
            anyPillActive = true;
          } else {
            pill.classList.remove('active');
          }
        });

        if (posTag) {
          if (anyPillActive) {
            posTag.classList.add('active');
          } else {
            posTag.classList.remove('active');
          }
        }
      });
    }

    function getCardDefaultTranslation(card) {
      if (!card) return '';
      if (card.defaultTranslation) {
        return stripPosSuffix(toTraditionalClient(card.defaultTranslation));
      }
      if (currentSearchData && currentSearchData.word && currentSearchData.word.toLowerCase() === card.word.toLowerCase() && currentSearchData.translation) {
        return stripPosSuffix(toTraditionalClient(currentSearchData.translation));
      }
      if (Array.isArray(card.definitions) && card.definitions.length > 0 && Array.isArray(card.definitions[0].meanings) && card.definitions[0].meanings.length > 0) {
        return card.definitions[0].meanings.slice(0, 2).map(m => toTraditionalClient(m)).join('、').trim();
      }
      return '';
    }

    function showQuizSavedBadge(text) {
      if (!quizTransSavedBadge) return;
      quizTransSavedBadge.innerText = text || '已儲存';
      quizTransSavedBadge.style.display = 'inline-block';
      if (quizSavedToastTimer) clearTimeout(quizSavedToastTimer);
      quizSavedToastTimer = setTimeout(() => {
        quizTransSavedBadge.style.display = 'none';
      }, 2200);
    }

    function syncCardPrimaryTranslation(word, newTrans, opts) {
      if (!word) return;
      const cleanTrans = toTraditionalClient((newTrans || '').trim());
      if (!cleanTrans) return;

      const options = opts || {};
      const key = word.trim().toLowerCase();
      const now = Date.now();
      const matchedCards = deck.filter(item => item && item.word && item.word.toLowerCase() === key);
      const firstCard = matchedCards[0] || (currentCard && currentCard.word.toLowerCase() === key ? currentCard : null);

      const searchDefTrans = (currentSearchData && currentSearchData.word && currentSearchData.word.toLowerCase() === key)
        ? stripPosSuffix(toTraditionalClient(currentSearchData.translation || ''))
        : '';
      const preEditFallback = (firstCard && !firstCard.isCustomTranslation && firstCard.translation)
        ? stripPosSuffix(toTraditionalClient(firstCard.translation))
        : '';
      const defHint = searchDefTrans || getCardDefaultTranslation(firstCard) || preEditFallback;
      const isDefaultMatch = Boolean(options.isReset || (defHint && cleanTrans === defHint));

      setCustomTranslation(word, isDefaultMatch ? null : cleanTrans);

      if (currentSearchData && currentSearchData.word && currentSearchData.word.toLowerCase() === key) {
        mainTrans.innerText = cleanTrans;
        if (isDefaultMatch) {
          delete currentSearchData.customTranslation;
        } else {
          currentSearchData.customTranslation = cleanTrans;
        }
        resetTransBtn.style.display = (!isDefaultMatch && searchDefTrans && cleanTrans !== searchDefTrans) ? 'inline-flex' : 'none';
        updateDefPillsHighlight(cleanTrans, defList);
      }

      let deckUpdated = false;
      matchedCards.forEach(c => {
        c.translation = cleanTrans;
        c.translationUpdatedAt = now;
        c.isCustomTranslation = !isDefaultMatch;
        c.isResetDefault = Boolean(options.isReset);
        if (!c.defaultTranslation && defHint) {
          c.defaultTranslation = defHint;
        }
        deckUpdated = true;
      });

      if (currentCard && currentCard.word.toLowerCase() === key) {
        currentCard.translation = cleanTrans;
        currentCard.translationUpdatedAt = now;
        currentCard.isCustomTranslation = !isDefaultMatch;
        currentCard.isResetDefault = Boolean(options.isReset);
        if (!currentCard.defaultTranslation && defHint) {
          currentCard.defaultTranslation = defHint;
        }
        reviewMainTrans.innerText = cleanTrans;
        updateDefPillsHighlight(cleanTrans, reviewDefList);
        if (quizMainTrans) quizMainTrans.innerText = cleanTrans;
        updateDefPillsHighlight(cleanTrans, quizDefList);

        if (reviewMode === 'quiz') {
          if (!quizAnswered) {
            prepareQuizQuestionForCard(currentCard);
          } else if (Array.isArray(quizCurrentOptions)) {
            quizCurrentOptions.forEach(opt => {
              if (opt.isCorrect) opt.text = cleanTrans;
            });
          }
        }
      }

      if (deckUpdated) {
        saveDeck();
      } else if (reviewMode === 'quiz' && currentCard && currentCard.word.toLowerCase() === key) {
        renderQuizUI();
      }

      if (options.showQuizToast) {
        showQuizSavedBadge(options.isReset ? '已還原預設' : '已更新並儲存');
      }
    }

    function applyChosenTranslation(newTrans) {
      if (!currentSearchData) return;
      syncCardPrimaryTranslation(currentSearchData.word, newTrans, { isReset: false });
    }

    function resetChosenTranslation() {
      if (!currentSearchData) return;
      const defTrans = toTraditionalClient(currentSearchData.translation || '釋義');
      syncCardPrimaryTranslation(currentSearchData.word, defTrans, { isReset: true });
    }

    function closeInlineEdit() {
      if (editTransBox) editTransBox.style.display = 'none';
      if (mainTransRow) mainTransRow.style.display = 'flex';
    }

    function saveInlineEdit() {
      const val = editTransInput.value.trim();
      if (val) {
        applyChosenTranslation(val);
      }
      closeInlineEdit();
    }

    editTransBtn.addEventListener('click', () => {
      mainTransRow.style.display = 'none';
      editTransBox.style.display = 'flex';
      editTransInput.value = mainTrans.innerText.trim();
      editTransInput.focus();
      editTransInput.select();
    });

    saveTransBtn.addEventListener('click', saveInlineEdit);
    cancelTransBtn.addEventListener('click', closeInlineEdit);
    editTransInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        saveInlineEdit();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeInlineEdit();
      }
    });
    resetTransBtn.addEventListener('click', resetChosenTranslation);

    function closeReviewInlineEdit() {
      if (reviewEditTransBox) reviewEditTransBox.style.display = 'none';
      if (reviewMainTransRow) reviewMainTransRow.style.display = 'flex';
    }

    reviewEditTransBtn.addEventListener('click', () => {
      reviewMainTransRow.style.display = 'none';
      reviewEditTransBox.style.display = 'flex';
      reviewEditTransInput.value = (currentCard && currentCard.translation) ? currentCard.translation : reviewMainTrans.innerText.trim();
      reviewEditTransInput.focus();
      reviewEditTransInput.select();
    });

    reviewSaveTransBtn.addEventListener('click', () => {
      const val = reviewEditTransInput.value.trim();
      if (val && currentCard) {
        syncCardPrimaryTranslation(currentCard.word, val, { isReset: false });
      }
      closeReviewInlineEdit();
    });

    reviewCancelTransBtn.addEventListener('click', closeReviewInlineEdit);
    reviewEditTransInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        reviewSaveTransBtn.click();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeReviewInlineEdit();
      }
    });

    function pauseQuizAutoNext() {
      clearQuizAutoNextTimer();
      if (quizAnswered && quizNextLabel) {
        quizNextLabel.innerText = '下一題 (Space / Enter)';
      }
    }

    function closeQuizInlineEdit() {
      if (quizEditTransBox) quizEditTransBox.style.display = 'none';
      if (quizMainTransRow) quizMainTransRow.style.display = 'flex';
    }

    quizEditTransBtn.addEventListener('click', () => {
      if (!currentCard) return;
      pauseQuizAutoNext();
      quizMainTransRow.style.display = 'none';
      quizEditTransBox.style.display = 'flex';
      quizEditTransInput.value = getCleanCardTranslation(currentCard) || (quizMainTrans ? quizMainTrans.innerText.trim() : '');
      quizEditTransInput.focus();
      quizEditTransInput.select();
    });

    quizSaveTransBtn.addEventListener('click', () => {
      const val = quizEditTransInput.value.trim();
      if (val && currentCard) {
        pauseQuizAutoNext();
        syncCardPrimaryTranslation(currentCard.word, val, { isReset: false, showQuizToast: true });
      }
      closeQuizInlineEdit();
    });

    quizCancelTransBtn.addEventListener('click', closeQuizInlineEdit);

    quizResetTransBtn.addEventListener('click', () => {
      if (!currentCard) return;
      const defT = getCardDefaultTranslation(currentCard);
      if (defT) {
        pauseQuizAutoNext();
        syncCardPrimaryTranslation(currentCard.word, defT, { isReset: true, showQuizToast: true });
      }
      closeQuizInlineEdit();
    });

    quizToggleDefsBtn.addEventListener('click', () => {
      if (!currentCard) return;
      pauseQuizAutoNext();
      quizDefsExpanded = !quizDefsExpanded;
      renderQuizUI();
    });

    quizEditTransInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        quizSaveTransBtn.click();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        closeQuizInlineEdit();
      }
    });

    let examplesExpanded = false;
    let currentExamples = [];

    function resetExamplesUI() {
      examplesExpanded = false;
      currentExamples = [];
      examplesSection.style.display = 'none';
      exampleList.innerHTML = '';
      exampleMoreBtn.style.display = 'none';
    }

    function appendMarkedSentence(container, enMarked, enPlain, targetWord) {
      if (enMarked && enMarked.indexOf('<b>') !== -1) {
        const chunks = enMarked.split('<b>');
        chunks.forEach((chunk, idx) => {
          if (!chunk) return;
          if (idx === 0) {
            container.appendChild(document.createTextNode(chunk));
            return;
          }
          const closeIdx = chunk.indexOf('</b>');
          if (closeIdx !== -1) {
            const hlText = chunk.slice(0, closeIdx);
            const restText = chunk.slice(closeIdx + 4);
            if (hlText) {
              const span = document.createElement('span');
              span.className = 'ex-highlight';
              span.innerText = hlText;
              container.appendChild(span);
            }
            if (restText) container.appendChild(document.createTextNode(restText));
          } else {
            container.appendChild(document.createTextNode(chunk));
          }
        });
        return;
      }

      const plain = enPlain || '';
      const cleanTarget = (targetWord || '').trim().toLowerCase();
      if (cleanTarget) {
        const lowerPlain = plain.toLowerCase();
        const tLen = cleanTarget.length;
        const isWordChar = ch => (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9');
        let cursor = 0;
        let searchFrom = 0;
        let idx = lowerPlain.indexOf(cleanTarget, searchFrom);
        while (idx !== -1) {
          const beforeOk = idx === 0 || !isWordChar(lowerPlain[idx - 1]);
          if (beforeOk) {
            let end = idx + tLen;
            while (end < plain.length && lowerPlain[end] >= 'a' && lowerPlain[end] <= 'z') end++;
            if (idx > cursor) container.appendChild(document.createTextNode(plain.slice(cursor, idx)));
            const span = document.createElement('span');
            span.className = 'ex-highlight';
            span.innerText = plain.slice(idx, end);
            container.appendChild(span);
            cursor = end;
            searchFrom = end;
          } else {
            searchFrom = idx + 1;
          }
          idx = lowerPlain.indexOf(cleanTarget, searchFrom);
        }
        if (cursor < plain.length) container.appendChild(document.createTextNode(plain.slice(cursor)));
        return;
      }
      container.appendChild(document.createTextNode(plain));
    }

    function renderExamples(examples, targetWord) {
      examplesExpanded = false;
      currentExamples = Array.isArray(examples) ? examples : [];
      exampleList.innerHTML = '';

      if (currentExamples.length === 0) {
        examplesSection.style.display = 'none';
        exampleMoreBtn.style.display = 'none';
        return;
      }

      currentExamples.forEach((ex, idx) => {
        const card = document.createElement('div');
        card.className = 'example-card';
        if (idx >= 2) {
          card.style.display = 'none';
          card.setAttribute('data-extra', '1');
        }

        const enRow = document.createElement('div');
        enRow.className = 'example-en-row';

        const enEl = document.createElement('div');
        enEl.className = 'example-en';
        appendMarkedSentence(enEl, ex.enMarked, ex.en, targetWord);

        const exPlayBtn = document.createElement('button');
        exPlayBtn.className = 'example-play-btn';
        exPlayBtn.title = '朗讀此例句';
        exPlayBtn.setAttribute('aria-label', '朗讀此例句');
        exPlayBtn.innerHTML = UI_ICONS.speaker;
        exPlayBtn.addEventListener('click', () => {
          document.querySelectorAll('.example-play-btn.playing').forEach(b => b.classList.remove('playing'));
          exPlayBtn.classList.add('playing');
          playAudio('/api/audio?type=sentence&word=' + encodeURIComponent(ex.en), () => {
            exPlayBtn.classList.remove('playing');
          });
        });

        enRow.appendChild(enEl);
        enRow.appendChild(exPlayBtn);

        const zhEl = document.createElement('div');
        zhEl.className = 'example-zh';
        zhEl.innerText = toTraditionalClient(ex.zh || '');

        card.appendChild(enRow);
        card.appendChild(zhEl);
        exampleList.appendChild(card);
      });

      if (currentExamples.length > 2) {
        exampleMoreBtn.innerText = '展開更多例句 (共 ' + currentExamples.length + ' 句)';
        exampleMoreBtn.style.display = 'block';
      } else {
        exampleMoreBtn.style.display = 'none';
      }

      examplesSection.style.display = 'flex';
    }

    exampleMoreBtn.addEventListener('click', () => {
      examplesExpanded = !examplesExpanded;
      const extras = exampleList.querySelectorAll('[data-extra="1"]');
      extras.forEach(el => {
        el.style.display = examplesExpanded ? 'flex' : 'none';
      });
      exampleMoreBtn.innerText = examplesExpanded
        ? '收合多餘例句'
        : ('展開更多例句 (共 ' + currentExamples.length + ' 句)');
    });

    function clearInputField() {
      input.value = '';
      input.focus();
      currentSearchData = null;
      wordHeader.style.display = 'none';
      transSection.style.display = 'none';
      playBtn.style.display = 'none';
      resetExamplesUI();
      closeInlineEdit();
      resetTransBtn.style.display = 'none';

      status.style.display = 'block';
      status.className = 'status notice';
      status.innerText = '已清空輸入框';
      
      setTimeout(() => {
        if (input.value === '') {
          status.className = 'status';
          status.innerText = '請輸入英文單字';
        }
      }, 700);
    }

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        dPressCount = 0;
        handleSearch(input.value.trim());
        return;
      }
      if (e.key.toLowerCase() === 'd') {
        dPressCount++;
        clearTimeout(dTimer);
        dTimer = setTimeout(() => { dPressCount = 0; }, 500);
        if (dPressCount >= 3) {
          e.preventDefault();
          dPressCount = 0;
          clearInputField();
        }
      } else if (!['Shift', 'Control', 'Alt', 'Meta'].includes(e.key)) {
        dPressCount = 0;
      }
    });

    input.addEventListener('input', () => {
      if (input.value.toLowerCase().includes('ddd')) {
        clearInputField();
      }
    });

    async function handleSearch(word) {
      if (!word) return;
      const mySearchSeq = ++searchRequestSeq;
      const cleanQuery = word.trim();
      if (cleanQuery.length > 0 && cleanQuery.length <= 45 && /^[a-zA-Z0-9\s'-]+$/.test(cleanQuery)) {
        prefetchAudio('/api/audio?word=' + encodeURIComponent(cleanQuery.toLowerCase()));
      }

      status.style.display = "block";
      status.className = "status";
      status.innerText = "查詢中...";
      wordHeader.style.display = "none";
      transSection.style.display = "none";
      playBtn.style.display = "none";
      resetExamplesUI();
      closeInlineEdit();

      try {
        const res = await fetch("/api/pronounce?word=" + encodeURIComponent(word));
        if (mySearchSeq !== searchRequestSeq) return;
        const data = await res.json();
        if (mySearchSeq !== searchRequestSeq) return;

        if (!res.ok && !data.word) {
          status.innerText = data.error || "查無此單字";
          status.className = "status error";
          return;
        }

        currentSearchData = data;
        wordDisplay.innerText = data.word || word;
        updateStarBtnState();
        wordHeader.style.display = "flex";

        if (data.translation || (data.definitions && data.definitions.length > 0)) {
          const custom = getCustomTranslation(data.word || word);
          const chosen = custom || toTraditionalClient(data.translation || "釋義");
          mainTrans.innerText = chosen;
          if (custom && custom !== toTraditionalClient(data.translation || "")) {
            resetTransBtn.style.display = "inline-flex";
          } else {
            resetTransBtn.style.display = "none";
          }

          defList.innerHTML = "";
          
          if (Array.isArray(data.definitions)) {
            data.definitions.forEach(d => {
              const row = document.createElement("div");
              row.className = "def-row";
              
              const posSpan = document.createElement("span");
              posSpan.className = "pos-tag";
              const posText = toTraditionalClient(d.pos);
              posSpan.innerText = posText;
              posSpan.title = "點擊設為此詞性主要釋義";
              posSpan.addEventListener("click", () => {
                const combined = (d.meanings || []).slice(0, 2).map(m => toTraditionalClient(m)).join("、");
                if (combined) {
                  applyChosenTranslation(formatChosenMeaning(combined));
                }
              });
              row.appendChild(posSpan);

              const wrap = document.createElement("div");
              wrap.className = "meaning-wrap";
              (d.meanings || []).forEach(m => {
                const pill = document.createElement("span");
                pill.className = "meaning-pill";
                const mText = toTraditionalClient(m);
                pill.innerText = mText;
                pill.title = "點擊設為主要釋義：" + formatChosenMeaning(mText);
                pill.addEventListener("click", (e) => {
                  if (e.ctrlKey || e.shiftKey) {
                    const cur = mainTrans.innerText.trim();
                    const parts = cur.split(/[、;；,，]+/).map(p => p.trim()).filter(Boolean);
                    let newParts = [];
                    if (parts.includes(mText)) {
                      newParts = parts.filter(p => p !== mText);
                    } else {
                      newParts = parts.concat([mText]);
                    }
                    if (newParts.length > 0) {
                      applyChosenTranslation(formatChosenMeaning(newParts.join("、")));
                      return;
                    }
                  }
                  applyChosenTranslation(formatChosenMeaning(mText));
                });
                wrap.appendChild(pill);
              });
              row.appendChild(wrap);
              defList.appendChild(row);
            });
          }
          updateDefPillsHighlight(chosen, defList);
          transSection.style.display = "flex";
        } else {
          transSection.style.display = "none";
        }

        status.style.display = "none";
        playBtn.style.display = "inline-flex";
        renderExamples(data.examples, data.word || word);

        playAudio(data.audioUrl || ("/api/audio?word=" + encodeURIComponent((data.word || word).toLowerCase())));

      } catch (err) {
        if (mySearchSeq !== searchRequestSeq) return;
        status.style.display = "block";
        status.innerText = "查詢失敗，請檢查網路連線";
        status.className = "status error";
      }
    }

    playBtn.addEventListener('click', () => {
      if (currentSearchData) {
        playAudio(currentSearchData.audioUrl || ("/api/audio?word=" + encodeURIComponent(currentSearchData.word.toLowerCase())));
      }
    });

    function normalizeAudioUrl(url) {
      if (!url) return '';
      if (url.startsWith('/api/audio?word=')) {
        try {
          const q = decodeURIComponent(url.slice('/api/audio?word='.length));
          if (q && !q.includes('&') && !q.includes(' ')) {
            return '/api/audio?word=' + encodeURIComponent(q.trim().toLowerCase());
          }
        } catch (e) {}
      }
      return url;
    }

    function getCardAudioUrl(card) {
      if (!card || !card.word) return '';
      if (card.audioUrl) return normalizeAudioUrl(card.audioUrl);
      return '/api/audio?word=' + encodeURIComponent(card.word.trim().toLowerCase());
    }

    function prefetchAudio(rawUrl) {
      const url = normalizeAudioUrl(rawUrl);
      if (!url || typeof fetch !== 'function') return Promise.resolve(null);
      if (AUDIO_BLOB_CACHE.has(url)) {
        const hit = AUDIO_BLOB_CACHE.get(url);
        AUDIO_BLOB_CACHE.delete(url);
        AUDIO_BLOB_CACHE.set(url, hit);
        return Promise.resolve(hit);
      }
      if (AUDIO_INFLIGHT.has(url)) return AUDIO_INFLIGHT.get(url);
      if (typeof URL === 'undefined' || typeof URL.createObjectURL !== 'function') {
        return Promise.resolve(null);
      }
      const p = fetch(url).then(async res => {
        if (!res || !res.ok || typeof res.blob !== 'function') return null;
        const blob = await res.blob();
        if (!blob || !blob.size) return null;
        const objUrl = URL.createObjectURL(blob);
        if (!objUrl) return null;
        if (AUDIO_BLOB_CACHE.size >= 150) {
          const oldestKey = AUDIO_BLOB_CACHE.keys().next().value;
          const oldestVal = AUDIO_BLOB_CACHE.get(oldestKey);
          AUDIO_BLOB_CACHE.delete(oldestKey);
          try {
            if (oldestVal && typeof URL.revokeObjectURL === 'function') URL.revokeObjectURL(oldestVal);
          } catch (e) {}
        }
        AUDIO_BLOB_CACHE.set(url, objUrl);
        return objUrl;
      }).catch(() => null).finally(() => {
        AUDIO_INFLIGHT.delete(url);
      });
      AUDIO_INFLIGHT.set(url, p);
      return p;
    }

    function prefetchUpcomingQuizAudio(excludeCard) {
      if (quizWarmupTimer) {
        clearTimeout(quizWarmupTimer);
        quizWarmupTimer = null;
      }
      if (reviewMode !== 'quiz' || !Array.isArray(deck) || deck.length === 0) return;
      quizWarmupTimer = setTimeout(() => {
        quizWarmupTimer = null;
        if (reviewMode !== 'quiz' || !Array.isArray(deck) || deck.length === 0) return;
        const exWord = excludeCard && excludeCard.word ? excludeCard.word.toLowerCase() : '';
        const list = [];
        if (queuedNextCard && isWordInDeck(queuedNextCard.word)) list.push(queuedNextCard);
        for (let i = 0; i < deck.length && list.length < 3; i++) {
          const c = deck[i];
          if (!c || !c.word) continue;
          const wLow = c.word.toLowerCase();
          if (wLow === exWord || list.some(x => x.word.toLowerCase() === wLow)) continue;
          const u = getCardAudioUrl(c);
          if (u && !AUDIO_BLOB_CACHE.has(u) && !AUDIO_INFLIGHT.has(u)) {
            list.push(c);
          }
        }
        list.slice(0, 3).forEach(c => prefetchAudio(getCardAudioUrl(c)));
      }, 90);
    }

    function playAudio(rawUrl, onEnded) {
      const url = normalizeAudioUrl(rawUrl);
      if (!url) return;
      const seq = ++playRequestSeq;
      document.querySelectorAll('.example-play-btn.playing').forEach(b => b.classList.remove('playing'));
      audioPlayer.onended = null;
      audioPlayer.onerror = null;
      try {
        if (typeof audioPlayer.pause === 'function') audioPlayer.pause();
        audioPlayer.currentTime = 0;
      } catch (e) {}
      if (typeof onEnded === 'function') {
        audioPlayer.onended = onEnded;
        audioPlayer.onerror = onEnded;
      }

      const cached = AUDIO_BLOB_CACHE.get(url);
      if (cached) {
        AUDIO_BLOB_CACHE.delete(url);
        AUDIO_BLOB_CACHE.set(url, cached);
        audioPlayer.src = cached;
        const p = audioPlayer.play();
        if (p && typeof p.catch === 'function') p.catch(() => { if (typeof onEnded === 'function') onEnded(); });
        return;
      }

      if (AUDIO_INFLIGHT.has(url)) {
        AUDIO_INFLIGHT.get(url).then(blobUrl => {
          if (seq !== playRequestSeq) return;
          audioPlayer.src = blobUrl || url;
          const p = audioPlayer.play();
          if (p && typeof p.catch === 'function') p.catch(() => { if (typeof onEnded === 'function') onEnded(); });
        });
        return;
      }

      audioPlayer.src = url;
      const p = audioPlayer.play();
      if (p && typeof p.catch === 'function') p.catch(() => { if (typeof onEnded === 'function') onEnded(); });
    }

    // ==========================================
    // 6. 右側單字複習庫：翻面記憶 ＋ 四選一（英翻中）＋ 艾賓浩斯記憶評估
    // ==========================================
    function clearQuizAutoNextTimer() {
      if (quizAutoNextTimer) {
        clearTimeout(quizAutoNextTimer);
        quizAutoNextTimer = null;
      }
    }

    function levelLabelText(lvl) {
      if (lvl === 1) return '生疏';
      if (lvl === 2) return '模糊';
      return '精通';
    }

    function getCardMemoryMeta(card) {
      const lvl = (card && (card.level === 1 || card.level === 2 || card.level === 3)) ? card.level : 1;
      const defaultInt = lvl === 3 ? 6 : (lvl === 2 ? 2 : 0.5);
      const intervalDays = (card && typeof card.intervalDays === 'number' && card.intervalDays > 0) ? card.intervalDays : defaultInt;
      const ease = (card && typeof card.ease === 'number' && card.ease >= 1.3) ? card.ease : 2.3;
      const streak = (card && typeof card.streak === 'number' && card.streak >= 0) ? card.streak : 0;
      const lastReviewed = (card && typeof card.lastReviewed === 'number') ? card.lastReviewed : 0;
      const nextReviewAt = (card && typeof card.nextReviewAt === 'number')
        ? card.nextReviewAt
        : (lastReviewed > 0 ? lastReviewed + Math.round(intervalDays * DAY_MS) : 0);
      return { level: lvl, intervalDays, ease, streak, lastReviewed, nextReviewAt };
    }

    function computeEbbinghausRetention(card, nowMs) {
      const now = nowMs || Date.now();
      const meta = getCardMemoryMeta(card);
      let elapsedDays = 0;
      let stabilityDays = Math.max(0.25, meta.intervalDays);
      if (meta.lastReviewed > 0) {
        elapsedDays = Math.max(0, (now - meta.lastReviewed) / DAY_MS);
      } else {
        const added = (card && typeof card.addedAt === 'number' && card.addedAt > 0) ? card.addedAt : now;
        elapsedDays = Math.max(0, (now - added) / DAY_MS);
        stabilityDays = 0.5;
      }
      const ret = Math.exp(-0.2877 * (elapsedDays / stabilityDays));
      return Math.max(5, Math.min(100, Math.round(ret * 100)));
    }

    function formatIntervalZh(days) {
      if (days < 1) {
        return Math.max(1, Math.round(days * 24)) + ' 小時';
      }
      if (days < 2 && !Number.isInteger(days)) {
        return days.toFixed(1) + ' 天';
      }
      return Math.round(days) + ' 天';
    }

    function formatElapsedZh(days) {
      if (days < (1 / 24)) {
        return Math.max(1, Math.round(days * 24 * 60)) + ' 分鐘';
      }
      if (days < 1) {
        return Math.max(1, Math.round(days * 24)) + ' 小時';
      }
      return (Math.round(days * 10) / 10) + ' 天';
    }

    function shuffleArray(list) {
      const arr = list.slice();
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
      return arr;
    }

    function getCleanCardTranslation(card) {
      if (!card) return '';
      const raw = stripPosSuffix(toTraditionalClient((card.translation || '').trim()));
      if (raw) return raw;
      if (Array.isArray(card.definitions) && card.definitions.length > 0) {
        const firstMeanings = card.definitions[0].meanings || [];
        if (firstMeanings.length > 0) {
          return firstMeanings.slice(0, 2).map(m => toTraditionalClient(m)).join('、').trim();
        }
      }
      return '';
    }

    function tokenizeMeaningParts(str) {
      return (str || '').split(/[、;；,，]+/).map(s => s.trim().toLowerCase()).filter(Boolean);
    }

    function buildQuizOptions(targetCard) {
      const targetText = getCleanCardTranslation(targetCard) || '（無翻譯）';
      const targetForbidden = new Set();
      const targetTokens = new Set();

      const registerForbidden = (txt) => {
        const clean = stripPosSuffix(toTraditionalClient((txt || '').trim())).toLowerCase();
        if (!clean) return;
        targetForbidden.add(clean);
        tokenizeMeaningParts(clean).forEach(tok => targetTokens.add(tok));
      };

      registerForbidden(targetText);
      if (Array.isArray(targetCard.definitions)) {
        targetCard.definitions.forEach(d => {
          const ms = (d.meanings || []).map(m => toTraditionalClient(m));
          ms.forEach(m => registerForbidden(m));
          if (ms.length >= 2) registerForbidden(ms.slice(0, 2).join('、'));
        });
      }

      const usedTexts = new Set([targetText.toLowerCase()]);
      const distractors = [];

      const isCollision = (candText) => {
        const low = (candText || '').trim().toLowerCase();
        if (!low) return true;
        if (usedTexts.has(low) || targetForbidden.has(low)) return true;
        const toks = tokenizeMeaningParts(low);
        for (let i = 0; i < toks.length; i++) {
          if (targetTokens.has(toks[i])) return true;
        }
        return false;
      };

      const otherCards = shuffleArray(
        deck.filter(c => c && c.word && c.word.toLowerCase() !== targetCard.word.toLowerCase())
      );

      for (let i = 0; i < otherCards.length && distractors.length < 3; i++) {
        const candText = getCleanCardTranslation(otherCards[i]);
        if (candText && !isCollision(candText)) {
          usedTexts.add(candText.toLowerCase());
          distractors.push({ text: candText, isCorrect: false, sourceWord: otherCards[i].word });
        }
      }

      if (distractors.length < 3) {
        const fallbacks = shuffleArray(QUIZ_FALLBACK_DISTRACTORS);
        for (let i = 0; i < fallbacks.length && distractors.length < 3; i++) {
          const fb = toTraditionalClient(fallbacks[i]).trim();
          if (fb && !isCollision(fb)) {
            usedTexts.add(fb.toLowerCase());
            distractors.push({ text: fb, isCorrect: false, sourceWord: null });
          }
        }
      }

      const options = [{ text: targetText, isCorrect: true, sourceWord: targetCard.word }].concat(distractors);
      return shuffleArray(options);
    }

    function prepareQuizQuestionForCard(card) {
      clearQuizAutoNextTimer();
      quizAnswered = false;
      quizDefsExpanded = false;
      lastQuizChosenIdx = -1;
      lastQuizVerdict = null;
      closeQuizInlineEdit();
      if (quizTransSavedBadge) quizTransSavedBadge.style.display = 'none';
      quizActiveWord = card ? card.word.toLowerCase() : null;
      quizCurrentOptions = card ? buildQuizOptions(card) : [];
      quizQuestionStartAt = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
    }

    function evaluateEbbinghausQuizAnswer(card, isCorrect, responseMs, nowMs) {
      const now = nowMs || Date.now();
      const meta = getCardMemoryMeta(card);
      const oldLevel = meta.level;
      const retentionPct = computeEbbinghausRetention(card, now);
      const elapsedDays = meta.lastReviewed > 0 ? Math.max(0.01, (now - meta.lastReviewed) / DAY_MS) : 0;
      const isSpaced = meta.lastReviewed > 0 && elapsedDays >= 0.5;
      const secText = responseMs >= 60000
        ? (Math.round(responseMs / 1000) + ' 秒')
        : ((responseMs / 1000).toFixed(1) + ' 秒');

      let newLevel = oldLevel;
      let newStreak = meta.streak;
      let newEase = meta.ease;
      let newIntervalDays = meta.intervalDays;
      let speedTier = 'normal';
      let reason = '';

      if (!isCorrect) {
        speedTier = 'wrong';
        newLevel = 1;
        newStreak = 0;
        newEase = Math.max(1.3, +(meta.ease - 0.25).toFixed(2));
        newIntervalDays = 0.25;
        reason = oldLevel > 1
          ? ('答錯遺忘：記憶曲線中斷，降回「生疏」並在 6 小時內優先鞏固。')
          : ('答錯需重記：已縮短間隔週期為 6 小時，強化初始記憶迴路。');
      } else if (responseMs <= 2600) {
        speedTier = 'fast';
        newStreak = meta.streak + 1;
        newEase = Math.min(2.8, +(meta.ease + 0.1).toFixed(2));
        if (oldLevel === 1) {
          newLevel = 2;
          newIntervalDays = isSpaced ? 2 : 1;
          reason = isSpaced
            ? ('間隔 ' + formatElapsedZh(elapsedDays) + ' 後極速提取（' + secText + '），記憶穩步上升為「模糊」。')
            : ('反應極快（' + secText + '）！為避免初學單次猜中，先升為「模糊」進入間隔驗證。');
        } else if (oldLevel === 2) {
          if (newStreak >= 2 || isSpaced || (card.reviewCount || 0) >= 1) {
            newLevel = 3;
            newIntervalDays = Math.min(30, Math.max(4, Math.round(meta.intervalDays * newEase)));
            reason = isSpaced
              ? ('跨間隔快速秒答（' + secText + '），長期保留達標，晉升「精通」！')
              : ('連續穩定且極速回憶（' + secText + '），艾賓浩斯曲線確認「精通」。');
          } else {
            newLevel = 2;
            newIntervalDays = 2;
            reason = '首次快速答對（' + secText + '），延長間隔至 2 天驗證即可晉升「精通」。';
          }
        } else {
          newLevel = 3;
          const baseInt = Math.max(meta.intervalDays, elapsedDays >= meta.intervalDays ? elapsedDays : meta.intervalDays);
          newIntervalDays = Math.min(60, Math.max(meta.intervalDays + 2, Math.round(baseInt * newEase)));
          reason = '長期記憶極為穩固（' + secText + '），維持「精通」並延展至 ' + formatIntervalZh(newIntervalDays) + '。';
        }
      } else if (responseMs <= 5500) {
        speedTier = 'normal';
        newStreak = meta.streak + 1;
        newEase = Math.max(1.5, Math.min(2.6, meta.ease));
        if (oldLevel === 1) {
          if (newStreak >= 2 || elapsedDays >= 1) {
            newLevel = 2;
            newIntervalDays = 1.5;
            reason = '正常思考後穩定答對（' + secText + '），累積連對進入「模糊」鞏固期。';
          } else {
            newLevel = 1;
            newIntervalDays = 0.5;
            reason = '雖有答對但仍在提取思考（' + secText + '），暫維持「生疏」等待下次確認。';
          }
        } else if (oldLevel === 2) {
          if (elapsedDays >= 1.5 && newStreak >= 2) {
            newLevel = 3;
            newIntervalDays = Math.min(14, Math.max(4, Math.round(meta.intervalDays * 1.8)));
            reason = '經歷遺忘谷底後仍穩定回憶（' + secText + '），晉升「精通」。';
          } else {
            newLevel = 2;
            newIntervalDays = Math.min(5, Math.max(2, +(meta.intervalDays * 1.4).toFixed(1)));
            reason = '正常時間內正確回憶（' + secText + '），維持「模糊」並適度拉長間隔。';
          }
        } else {
          newLevel = 3;
          newIntervalDays = Math.min(30, Math.max(meta.intervalDays + 1, Math.round(meta.intervalDays * 1.35)));
          reason = '穩定提取中（' + secText + '），維持「精通」並將下次複習延後至 ' + formatIntervalZh(newIntervalDays) + '。';
        }
      } else {
        speedTier = 'slow';
        newStreak = 0;
        newEase = Math.max(1.3, +(meta.ease - 0.15).toFixed(2));
        if (oldLevel === 3) {
          newLevel = 2;
          newIntervalDays = 1;
          reason = '長考警示：耗時 ' + secText + ' 才回憶出釋義，記憶已出現衰退徵兆，降為「模糊」於 1 天後重溫。';
        } else if (oldLevel === 2) {
          newLevel = 2;
          newIntervalDays = 1;
          reason = '思考較久才作答成功（' + secText + '），提取尚不順暢，維持「模糊」並縮短至 1 天。';
        } else {
          newLevel = 1;
          newIntervalDays = 0.5;
          reason = '回憶耗時過長（' + secText + '），代表記憶連結仍薄弱，維持「生疏」優先出現。';
        }
      }

      const nextReviewAt = now + Math.round(newIntervalDays * DAY_MS);
      return {
        oldLevel,
        newLevel,
        newStreak,
        newEase,
        newIntervalDays,
        nextReviewAt,
        retentionPct,
        responseMs,
        secText,
        speedTier,
        isCorrect,
        reason,
        manualOverride: false
      };
    }

    function applyEbbinghausManualRating(card, manualLvl) {
      if (!card) return;
      clearQuizAutoNextTimer();
      const now = Date.now();
      const meta = getCardMemoryMeta(card);
      const prevAutoLvl = card.level;
      let newInterval = 0.5;
      let newEase = meta.ease;
      let newStreak = meta.streak;

      if (manualLvl === 1) {
        newInterval = 0.25;
        newStreak = 0;
        newEase = Math.max(1.3, +(meta.ease - 0.15).toFixed(2));
      } else if (manualLvl === 2) {
        newInterval = Math.max(1, Math.min(3, Math.round(meta.intervalDays)));
        newStreak = Math.max(1, meta.streak);
      } else {
        newInterval = Math.max(5, Math.min(30, Math.round(meta.intervalDays * 2)));
        newStreak = Math.max(2, meta.streak + 1);
        newEase = Math.min(2.8, +(meta.ease + 0.08).toFixed(2));
      }

      card.level = manualLvl;
      card.intervalDays = newInterval;
      card.ease = newEase;
      card.streak = newStreak;
      card.nextReviewAt = now + Math.round(newInterval * DAY_MS);

      if (lastQuizVerdict) {
        lastQuizVerdict.newLevel = manualLvl;
        lastQuizVerdict.newIntervalDays = newInterval;
        lastQuizVerdict.nextReviewAt = card.nextReviewAt;
        lastQuizVerdict.manualOverride = true;
        lastQuizVerdict.reason = '已手動由 ' + levelLabelText(prevAutoLvl) + ' 調整為 ' + levelLabelText(manualLvl) + '，下次間隔重設為 ' + formatIntervalZh(newInterval) + '。';
      }

      saveDeck();
    }

    function submitQuizAnswer(optIdx) {
      if (!currentCard || reviewMode !== 'quiz' || quizAnswered) return;
      if (!quizCurrentOptions || !quizCurrentOptions[optIdx]) return;

      clearQuizAutoNextTimer();
      const nowPerf = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
      const responseMs = Math.max(120, Math.round(nowPerf - quizQuestionStartAt));
      const chosen = quizCurrentOptions[optIdx];
      const now = Date.now();

      const verdict = evaluateEbbinghausQuizAnswer(currentCard, chosen.isCorrect, responseMs, now);
      currentCard.level = verdict.newLevel;
      currentCard.reviewCount = (currentCard.reviewCount || 0) + 1;
      currentCard.lastReviewed = now;
      currentCard.streak = verdict.newStreak;
      currentCard.ease = verdict.newEase;
      currentCard.intervalDays = verdict.newIntervalDays;
      currentCard.nextReviewAt = verdict.nextReviewAt;
      currentCard.lastResponseMs = responseMs;

      quizAnswered = true;
      quizDefsExpanded = !chosen.isCorrect;
      lastQuizChosenIdx = optIdx;
      lastQuizVerdict = verdict;

      if (chosen.isCorrect && quizAutoNext) {
        quizAutoNextTimer = setTimeout(() => {
          advanceQuizNext();
        }, 1600);
      }

      saveDeck();

      queuedNextCard = getWeightedNextCard();
      if (queuedNextCard && reviewMode === 'quiz') {
        prefetchAudio(getCardAudioUrl(queuedNextCard));
      }
    }

    function advanceQuizNext() {
      clearQuizAutoNextTimer();
      loadNextReviewCard({ autoPlayQuiz: true });
    }

    function renderQuizDefsForReview(card) {
      quizDefList.innerHTML = '';
      if (!card || !Array.isArray(card.definitions) || card.definitions.length === 0) {
        quizDefList.style.display = 'none';
        return;
      }
      const curTrans = getCleanCardTranslation(card);
      card.definitions.forEach(d => {
        const row = document.createElement('div');
        row.className = 'def-row';
        const pos = document.createElement('span');
        pos.className = 'pos-tag';
        pos.innerText = toTraditionalClient(d.pos || '');
        pos.title = '點擊設為此詞性主要解釋（會持久儲存）';
        pos.addEventListener('click', () => {
          const combined = (d.meanings || []).slice(0, 2).map(m => toTraditionalClient(m)).join('、');
          if (combined) {
            pauseQuizAutoNext();
            syncCardPrimaryTranslation(card.word, formatChosenMeaning(combined), { isReset: false, showQuizToast: true });
          }
        });
        row.appendChild(pos);

        const wrap = document.createElement('div');
        wrap.className = 'meaning-wrap';
        (d.meanings || []).forEach(m => {
          const pill = document.createElement('span');
          pill.className = 'meaning-pill';
          const mText = toTraditionalClient(m);
          pill.innerText = mText;
          pill.title = '點擊設為主要解釋：' + formatChosenMeaning(mText) + '（按住 Ctrl/Shift 可複選）';
          pill.addEventListener('click', (e) => {
            pauseQuizAutoNext();
            if (e.ctrlKey || e.shiftKey) {
              const cur = getCleanCardTranslation(card);
              const parts = cur.split(/[、;；,，]+/).map(p => p.trim()).filter(Boolean);
              let newParts = [];
              if (parts.includes(mText)) {
                newParts = parts.filter(p => p !== mText);
              } else {
                newParts = parts.concat([mText]);
              }
              if (newParts.length > 0) {
                syncCardPrimaryTranslation(card.word, formatChosenMeaning(newParts.join('、')), { isReset: false, showQuizToast: true });
                return;
              }
            }
            syncCardPrimaryTranslation(card.word, formatChosenMeaning(mText), { isReset: false, showQuizToast: true });
          });
          wrap.appendChild(pill);
        });
        row.appendChild(wrap);
        quizDefList.appendChild(row);
      });
      updateDefPillsHighlight(curTrans, quizDefList);
      quizDefList.style.display = 'flex';
    }

    function renderQuizUI() {
      if (!currentCard) return;
      if (quizAutoPlayChk) quizAutoPlayChk.checked = quizAutoPlay;
      if (settingAutoPlayChk) settingAutoPlayChk.checked = quizAutoPlay;
      if (quizAutoNextChk) quizAutoNextChk.checked = quizAutoNext;
      if (settingAutoNextChk) settingAutoNextChk.checked = quizAutoNext;
      reviewCard.classList.toggle('quiz-answered', Boolean(quizAnswered && lastQuizVerdict));
      quizOptionsGrid.innerHTML = '';

      quizCurrentOptions.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quiz-option-btn';

        const keyBadge = document.createElement('span');
        keyBadge.className = 'quiz-opt-key';
        keyBadge.innerText = String(idx + 1);

        const txtSpan = document.createElement('span');
        txtSpan.className = 'quiz-opt-text';
        txtSpan.innerText = opt.text;

        btn.appendChild(keyBadge);
        btn.appendChild(txtSpan);

        if (quizAnswered) {
          btn.disabled = true;
          if (opt.isCorrect) {
            btn.classList.add('correct');
            const mk = document.createElement('span');
            mk.className = 'quiz-opt-mark';
            mk.innerHTML = UI_ICONS.check;
            btn.appendChild(mk);
          } else if (idx === lastQuizChosenIdx) {
            btn.classList.add('wrong');
            const mk = document.createElement('span');
            mk.className = 'quiz-opt-mark';
            mk.innerHTML = UI_ICONS.x;
            btn.appendChild(mk);
          } else {
            btn.classList.add('dimmed');
          }
        } else {
          btn.addEventListener('click', () => submitQuizAnswer(idx));
        }

        quizOptionsGrid.appendChild(btn);
      });

      if (quizAnswered && lastQuizVerdict) {
        const v = lastQuizVerdict;
        quizVerdictBox.className = 'quiz-verdict-box verdict-' + v.newLevel;

        if (v.manualOverride) {
          if (quizVerdictIcon) quizVerdictIcon.innerHTML = UI_ICONS.hand;
          if (quizVerdictText) quizVerdictText.innerText = '手動調整熟悉度';
          quizVerdictTransition.innerText = levelLabelText(v.newLevel) + ' · 下次 ' + formatIntervalZh(v.newIntervalDays);
        } else {
          if (quizVerdictIcon) quizVerdictIcon.innerHTML = v.isCorrect ? UI_ICONS.check : UI_ICONS.x;
          if (quizVerdictText) quizVerdictText.innerText = v.isCorrect
            ? ('答對 · 艾賓浩斯判讀（' + v.secText + ' · 保留率 ' + v.retentionPct + '%）')
            : ('答錯 · 艾賓浩斯重置（' + v.secText + ' · 保留率 ' + v.retentionPct + '%）');
          quizVerdictTransition.innerText = (v.oldLevel === v.newLevel)
            ? ('維持 ' + levelLabelText(v.newLevel) + ' · 下次 ' + formatIntervalZh(v.newIntervalDays))
            : (levelLabelText(v.oldLevel) + ' → ' + levelLabelText(v.newLevel) + ' · 下次 ' + formatIntervalZh(v.newIntervalDays));
        }

        quizVerdictSub.innerText = v.reason;

        quizOvBtns.forEach(btn => {
          const lvl = parseInt(btn.getAttribute('data-lvl'), 10);
          if (lvl === currentCard.level) btn.classList.add('active');
          else btn.classList.remove('active');
        });

        closeQuizInlineEdit();
        const curCleanTrans = getCleanCardTranslation(currentCard) || '無翻譯';
        if (quizMainTrans) quizMainTrans.innerText = curCleanTrans;
        const defTrans = getCardDefaultTranslation(currentCard);
        if (quizResetTransBtn) {
          quizResetTransBtn.style.display = (defTrans && curCleanTrans !== defTrans) ? 'inline-flex' : 'none';
        }

        const hasDefs = Array.isArray(currentCard.definitions) && currentCard.definitions.length > 0;
        if (quizToggleDefsBtn) {
          if (hasDefs) {
            quizToggleDefsBtn.style.display = 'inline-flex';
            quizToggleDefsBtn.classList.toggle('expanded', Boolean(quizDefsExpanded));
            if (quizToggleDefsLabel) quizToggleDefsLabel.innerText = quizDefsExpanded ? '收合釋義' : '換釋義';
          } else {
            quizToggleDefsBtn.style.display = 'none';
            quizToggleDefsBtn.classList.remove('expanded');
          }
        }

        if (hasDefs && quizDefsExpanded) {
          renderQuizDefsForReview(currentCard);
        } else {
          quizDefList.style.display = 'none';
        }

        if (quizNextLabel) {
          quizNextLabel.innerText = (v.isCorrect && quizAutoNext && quizAutoNextTimer && !v.manualOverride)
            ? '下一題 (1.6 秒後自動切換 · Space)'
            : '下一題 (Space / Enter)';
        }

        quizFeedbackWrap.style.display = 'flex';
      } else {
        closeQuizInlineEdit();
        quizFeedbackWrap.style.display = 'none';
        quizDefList.style.display = 'none';
      }
    }

    function updateModeSwitchUI() {
      if (reviewMode === 'quiz') {
        modeQuizBtn.classList.add('active');
        modeQuizBtn.setAttribute('aria-selected', 'true');
        modeFlipBtn.classList.remove('active');
        modeFlipBtn.setAttribute('aria-selected', 'false');
      } else {
        modeFlipBtn.classList.add('active');
        modeFlipBtn.setAttribute('aria-selected', 'true');
        modeQuizBtn.classList.remove('active');
        modeQuizBtn.setAttribute('aria-selected', 'false');
      }
    }

    function setReviewMode(mode) {
      const target = mode === 'quiz' ? 'quiz' : 'flip';
      if (reviewMode === target && ((target === 'flip') || (quizActiveWord && (!currentCard || quizActiveWord === currentCard.word.toLowerCase())))) {
        updateModeSwitchUI();
        return;
      }
      clearQuizAutoNextTimer();
      queuedNextCard = null;
      reviewMode = target;
      try { localStorage.setItem(REVIEW_MODE_STORAGE, reviewMode); } catch (e) {}
      updateModeSwitchUI();
      isFlipped = false;
      if (currentCard) {
        if (reviewMode === 'quiz') {
          prepareQuizQuestionForCard(currentCard);
        } else {
          quizAnswered = false;
          quizActiveWord = null;
        }
        renderCardState();
        if (reviewMode === 'quiz') {
          if (quizAutoPlay) playAudio(getCardAudioUrl(currentCard));
          prefetchUpcomingQuizAudio(currentCard);
        }
      }
    }

    modeFlipBtn.addEventListener('click', () => setReviewMode('flip'));
    modeQuizBtn.addEventListener('click', () => setReviewMode('quiz'));

    function syncQuizPrefsUI() {
      if (quizAutoPlayChk) quizAutoPlayChk.checked = quizAutoPlay;
      if (settingAutoPlayChk) settingAutoPlayChk.checked = quizAutoPlay;
      if (quizAutoNextChk) quizAutoNextChk.checked = quizAutoNext;
      if (settingAutoNextChk) settingAutoNextChk.checked = quizAutoNext;
    }

    function setQuizAutoPlay(enabled) {
      quizAutoPlay = Boolean(enabled);
      try { localStorage.setItem(QUIZ_AUTOPLAY_STORAGE, String(quizAutoPlay)); } catch (e) {}
      syncQuizPrefsUI();
      if (quizAutoPlay && reviewMode === 'quiz' && currentCard) {
        prefetchUpcomingQuizAudio(currentCard);
      }
    }

    function setQuizAutoNext(enabled) {
      quizAutoNext = Boolean(enabled);
      try { localStorage.setItem(QUIZ_AUTONEXT_STORAGE, String(quizAutoNext)); } catch (e) {}
      syncQuizPrefsUI();
      if (!quizAutoNext) {
        clearQuizAutoNextTimer();
        if (quizAnswered && lastQuizVerdict && quizNextLabel) {
          quizNextLabel.innerText = '下一題 (Space / Enter)';
        }
      }
    }

    if (quizAutoPlayChk) {
      quizAutoPlayChk.addEventListener('change', () => setQuizAutoPlay(quizAutoPlayChk.checked));
    }
    if (settingAutoPlayChk) {
      settingAutoPlayChk.addEventListener('change', () => setQuizAutoPlay(settingAutoPlayChk.checked));
    }
    if (quizAutoNextChk) {
      quizAutoNextChk.addEventListener('change', () => setQuizAutoNext(quizAutoNextChk.checked));
    }
    if (settingAutoNextChk) {
      settingAutoNextChk.addEventListener('change', () => setQuizAutoNext(settingAutoNextChk.checked));
    }

    quizNextBtn.addEventListener('click', advanceQuizNext);

    quizOvBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const lvl = parseInt(btn.getAttribute('data-lvl'), 10);
        if (currentCard && (lvl === 1 || lvl === 2 || lvl === 3)) {
          applyEbbinghausManualRating(currentCard, lvl);
        }
      });
    });

    function updateDeckUI() {
      deckCountBadge.innerText = deck.length + ' 個';
      tabBadge.innerText = deck.length;

      if (deck.length === 0) {
        clearQuizAutoNextTimer();
        queuedNextCard = null;
        reviewEmptyState.style.display = 'block';
        reviewCard.style.display = 'none';
        currentCard = null;
        quizActiveWord = null;
        quizAnswered = false;
        quizCurrentOptions = [];
        lastQuizVerdict = null;
      } else {
        reviewEmptyState.style.display = 'none';
        if (!currentCard || !isWordInDeck(currentCard.word)) {
          loadNextReviewCard();
        } else {
          const fresh = deck.find(c => c.word.toLowerCase() === currentCard.word.toLowerCase());
          if (fresh) currentCard = fresh;
          renderCardState();
        }
      }
    }

    function getWeightedNextCard() {
      if (deck.length === 0) return null;
      if (deck.length === 1) return deck[0];

      const curWordLow = (currentCard && currentCard.word) ? currentCard.word.toLowerCase() : '';
      const nonCurrent = deck.filter(c => c && c.word && c.word.toLowerCase() !== curWordLow);
      const candidates = nonCurrent.filter(c => !recentHistory.includes(c.word.toLowerCase()));
      const pool = candidates.length > 0 ? candidates : (nonCurrent.length > 0 ? nonCurrent : deck);
      const now = Date.now();

      const weights = pool.map(c => {
        let base = 1;
        if (c.level === 1) base = 6;
        else if (c.level === 2) base = 3;
        const meta = getCardMemoryMeta(c);
        const isDue = (meta.nextReviewAt === 0 || now >= meta.nextReviewAt);
        return isDue ? base * 1.8 : base;
      });

      const totalWeight = weights.reduce((a, b) => a + b, 0);
      let rand = Math.random() * totalWeight;

      for (let i = 0; i < pool.length; i++) {
        if (rand < weights[i]) return pool[i];
        rand -= weights[i];
      }
      return pool[0];
    }

    function loadNextReviewCard(opts) {
      clearQuizAutoNextTimer();
      if (deck.length === 0) {
        queuedNextCard = null;
        updateDeckUI();
        return;
      }
      let picked = null;
      if (queuedNextCard && isWordInDeck(queuedNextCard.word)) {
        const curLow = (currentCard && currentCard.word) ? currentCard.word.toLowerCase() : '';
        if (deck.length === 1 || queuedNextCard.word.toLowerCase() !== curLow) {
          picked = deck.find(c => c.word.toLowerCase() === queuedNextCard.word.toLowerCase()) || null;
        }
      }
      queuedNextCard = null;
      currentCard = picked || getWeightedNextCard();
      if (currentCard) {
        recentHistory.push(currentCard.word.toLowerCase());
        if (recentHistory.length > Math.min(5, Math.floor(deck.length / 2))) {
          recentHistory.shift();
        }
      }
      isFlipped = false;
      if (reviewMode === 'quiz' && currentCard) {
        prepareQuizQuestionForCard(currentCard);
      } else {
        quizAnswered = false;
        quizActiveWord = null;
        quizCurrentOptions = [];
        lastQuizVerdict = null;
      }
      renderCardState();
      if (reviewMode === 'quiz' && currentCard) {
        if (opts && opts.autoPlayQuiz && quizAutoPlay) {
          playAudio(getCardAudioUrl(currentCard));
        }
        prefetchUpcomingQuizAudio(currentCard);
      }
    }

    function renderCardState() {
      if (!currentCard) return;

      reviewCard.style.display = 'flex';
      reviewWord.innerText = currentCard.word;
      const revCount = currentCard.reviewCount || 0;
      if (revCount > 0 && currentCard.lastReviewed > 0) {
        const estRet = computeEbbinghausRetention(currentCard, Date.now());
        cardStats.innerText = '已複習 ' + revCount + ' 次 · 保留率 ' + estRet + '%';
      } else {
        cardStats.innerText = '已複習 ' + revCount + ' 次';
      }

      cardLevelTag.className = 'level-badge lvl-' + currentCard.level;
      if (cardLevelText) cardLevelText.innerText = levelLabelText(currentCard.level);

      reviewCard.classList.toggle('quiz-active', reviewMode === 'quiz');

      if (reviewMode === 'quiz') {
        flipModeBody.style.display = 'none';
        quizModeBody.style.display = 'flex';
        closeReviewInlineEdit();
        if (!quizActiveWord || quizActiveWord !== currentCard.word.toLowerCase() || quizCurrentOptions.length !== 4) {
          prepareQuizQuestionForCard(currentCard);
        }
        renderQuizUI();
        return;
      }

      reviewCard.classList.remove('quiz-answered');

      flipModeBody.style.display = 'block';
      quizModeBody.style.display = 'none';

      if (!isFlipped) {
        closeReviewInlineEdit();
        cardBack.classList.remove('show');
        document.getElementById('flipBtnWrap').style.display = 'block';
      } else {
        closeReviewInlineEdit();
        const curTrans = getCleanCardTranslation(currentCard) || '無翻譯';
        reviewMainTrans.innerText = curTrans;
        reviewDefList.innerHTML = '';
        if (Array.isArray(currentCard.definitions)) {
          currentCard.definitions.forEach(d => {
            const row = document.createElement('div');
            row.className = 'def-row';
            const pos = document.createElement('span');
            pos.className = 'pos-tag';
            const posText = toTraditionalClient(d.pos);
            pos.innerText = posText;
            pos.title = '點擊設為此卡片主要釋義';
            pos.addEventListener('click', () => {
              const combined = (d.meanings || []).slice(0, 2).map(m => toTraditionalClient(m)).join('、');
              if (combined) {
                syncCardPrimaryTranslation(currentCard.word, formatChosenMeaning(combined), { isReset: false });
              }
            });
            row.appendChild(pos);

            const wrap = document.createElement('div');
            wrap.className = 'meaning-wrap';
            (d.meanings || []).forEach(m => {
              const pill = document.createElement('span');
              pill.className = 'meaning-pill';
              const mText = toTraditionalClient(m);
              pill.innerText = mText;
              pill.title = '點擊設為卡片釋義：' + formatChosenMeaning(mText);
              pill.addEventListener('click', (e) => {
                if (e.ctrlKey || e.shiftKey) {
                  const cur = getCleanCardTranslation(currentCard);
                  const parts = cur.split(/[、;；,，]+/).map(p => p.trim()).filter(Boolean);
                  let newParts = [];
                  if (parts.includes(mText)) {
                    newParts = parts.filter(p => p !== mText);
                  } else {
                    newParts = parts.concat([mText]);
                  }
                  if (newParts.length > 0) {
                    syncCardPrimaryTranslation(currentCard.word, formatChosenMeaning(newParts.join('、')), { isReset: false });
                    return;
                  }
                }
                syncCardPrimaryTranslation(currentCard.word, formatChosenMeaning(mText), { isReset: false });
              });
              wrap.appendChild(pill);
            });
            row.appendChild(wrap);
            reviewDefList.appendChild(row);
          });
          updateDefPillsHighlight(curTrans, reviewDefList);
          reviewDefList.style.display = 'flex';
        } else {
          reviewDefList.style.display = 'none';
        }
        cardBack.classList.add('show');
        document.getElementById('flipBtnWrap').style.display = 'none';
      }
    }

    function flipCard() {
      if (!currentCard || isFlipped || reviewMode !== 'flip') return;
      isFlipped = true;
      renderCardState();
    }

    flipBtn.addEventListener('click', flipCard);

    reviewPlayBtn.addEventListener('click', () => {
      if (currentCard) {
        playAudio(getCardAudioUrl(currentCard));
      }
    });

    function rateFamiliarity(level) {
      if (!currentCard || !isFlipped || reviewMode !== 'flip') return;
      const now = Date.now();
      const meta = getCardMemoryMeta(currentCard);
      let nextInterval = 0.5;
      let nextStreak = meta.streak;
      let nextEase = meta.ease;
      if (level === 1) {
        nextInterval = 0.25;
        nextStreak = 0;
        nextEase = Math.max(1.3, +(meta.ease - 0.2).toFixed(2));
      } else if (level === 2) {
        nextInterval = Math.max(1, Math.min(3, Math.round(meta.intervalDays * 1.2)));
        nextStreak = meta.streak + 1;
      } else {
        nextInterval = Math.min(30, Math.max(4, Math.round(meta.intervalDays * meta.ease)));
        nextStreak = meta.streak + 1;
        nextEase = Math.min(2.8, +(meta.ease + 0.1).toFixed(2));
      }
      currentCard.level = level;
      currentCard.reviewCount = (currentCard.reviewCount || 0) + 1;
      currentCard.lastReviewed = now;
      currentCard.streak = nextStreak;
      currentCard.ease = nextEase;
      currentCard.intervalDays = nextInterval;
      currentCard.nextReviewAt = now + Math.round(nextInterval * DAY_MS);
      saveDeck();
      loadNextReviewCard();
    }

    rateHardBtn.addEventListener('click', () => rateFamiliarity(1));
    rateMedBtn.addEventListener('click', () => rateFamiliarity(2));
    rateEasyBtn.addEventListener('click', () => rateFamiliarity(3));

    // ==========================================
    // 7. 個人雲端同步 (KV 零佔用防護)
    // ==========================================
    function initSyncKey() {
      const savedKey = localStorage.getItem(SYNC_KEY_STORAGE) || '';
      syncKeyInput.value = savedKey;
      updateSyncKeyStatus();

      const lastSync = localStorage.getItem(LAST_SYNC_STORAGE);
      if (lastSync) {
        const d = new Date(parseInt(lastSync, 10));
        lastSyncTime.innerText = '上次同步: ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      }
    }

    function updateSyncKeyStatus() {
      const val = syncKeyInput.value.trim();
      if (val) {
        syncKeyStatus.className = 'sync-status-badge connected';
        syncKeyStatus.innerText = '密鑰已保存';
      } else {
        syncKeyStatus.className = 'sync-status-badge';
        syncKeyStatus.innerText = '未設定密碼';
      }
    }

    syncKeyInput.addEventListener('input', () => {
      const val = syncKeyInput.value.trim();
      localStorage.setItem(SYNC_KEY_STORAGE, val);
      updateSyncKeyStatus();
    });

    toggleSyncKeyVisBtn.addEventListener('click', () => {
      syncKeyInput.type = syncKeyInput.type === 'password' ? 'text' : 'password';
    });

    function normalizeSyncCard(raw) {
      if (!raw || !raw.word) return null;
      const c = Object.assign({}, raw);
      if (c.translation) c.translation = stripPosSuffix(toTraditionalClient(c.translation));
      if (c.defaultTranslation) c.defaultTranslation = stripPosSuffix(toTraditionalClient(c.defaultTranslation));
      if (Array.isArray(c.definitions)) {
        c.definitions = c.definitions.map(d => ({
          pos: d.pos ? toTraditionalClient(d.pos) : '',
          meanings: Array.isArray(d.meanings) ? d.meanings.map(m => toTraditionalClient(m)) : []
        }));
      }
      if (typeof c.translationUpdatedAt !== 'number') c.translationUpdatedAt = 0;
      c.isCustomTranslation = Boolean(c.isCustomTranslation);
      c.isResetDefault = Boolean(c.isResetDefault);
      return c;
    }

    function refreshLookupTranslationFromDeck() {
      if (!currentSearchData || !currentSearchData.word) return;
      const key = currentSearchData.word.trim().toLowerCase();
      const custom = getCustomTranslation(currentSearchData.word);
      const matched = deck.find(c => c && c.word && c.word.toLowerCase() === key);
      const searchDef = stripPosSuffix(toTraditionalClient(currentSearchData.translation || ''));
      const chosen = custom || (matched && matched.translation ? getCleanCardTranslation(matched) : '') || searchDef || '釋義';
      mainTrans.innerText = chosen;
      if (custom) {
        currentSearchData.customTranslation = custom;
      } else {
        delete currentSearchData.customTranslation;
      }
      resetTransBtn.style.display = (searchDef && chosen !== searchDef) ? 'inline-flex' : 'none';
      updateDefPillsHighlight(chosen, defList);
      updateStarBtnState();
    }

    function mergeDecks(localDeck, remoteDeck) {
      const map = new Map();
      (remoteDeck || []).forEach(raw => {
        const card = normalizeSyncCard(raw);
        if (card) map.set(card.word.toLowerCase(), card);
      });
      (localDeck || []).forEach(raw => {
        const card = normalizeSyncCard(raw);
        if (!card) return;
        const key = card.word.toLowerCase();
        const existing = map.get(key);
        if (!existing) {
          map.set(key, card);
        } else {
          const remoteTime = existing.lastReviewed || 0;
          const localTime = card.lastReviewed || 0;
          const remoteCount = existing.reviewCount || 0;
          const localCount = card.reviewCount || 0;
          const localWinsProgress = localTime > remoteTime || (localTime === remoteTime && localCount >= remoteCount);

          const winner = Object.assign({}, localWinsProgress ? card : existing);
          const loser = localWinsProgress ? existing : card;

          // 獨立比對「主要解釋」的更新時間，防止較新的翻譯編輯被較舊的複習進度覆蓋
          const localTransAt = card.translationUpdatedAt || 0;
          const remoteTransAt = existing.translationUpdatedAt || 0;
          let transSource = winner;
          if (localTransAt > remoteTransAt) {
            transSource = card;
          } else if (remoteTransAt > localTransAt) {
            transSource = existing;
          } else if (card.isCustomTranslation && !existing.isCustomTranslation) {
            transSource = card;
          } else if (existing.isCustomTranslation && !card.isCustomTranslation) {
            transSource = existing;
          }

          winner.translation = transSource.translation || winner.translation;
          winner.translationUpdatedAt = Math.max(localTransAt, remoteTransAt);
          winner.isCustomTranslation = Boolean(transSource.isCustomTranslation);
          winner.isResetDefault = Boolean(transSource.isResetDefault);
          winner.defaultTranslation = card.defaultTranslation || existing.defaultTranslation || '';
          if ((!winner.definitions || winner.definitions.length === 0) && Array.isArray(loser.definitions) && loser.definitions.length > 0) {
            winner.definitions = loser.definitions;
          }
          if (!winner.audioUrl && loser.audioUrl) {
            winner.audioUrl = loser.audioUrl;
          }

          map.set(key, winner);
        }
      });
      return Array.from(map.values());
    }

    async function doSyncPush() {
      const key = syncKeyInput.value.trim();
      if (!key) return alert('請先輸入專屬同步密碼！');

      syncLog.style.color = 'var(--accent)';
      syncLog.innerText = '正在上傳...';

      try {
        const res = await fetch('/api/sync', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Sync-Key': key
          },
          body: JSON.stringify({ deck })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || '同步失敗');

        localStorage.setItem(LAST_SYNC_STORAGE, Date.now().toString());
        lastSyncTime.innerText = '剛剛已上傳';
        syncLog.style.color = 'var(--status-3)';
        syncLog.innerText = '上傳成功！已同步 ' + data.count + ' 個單字';
      } catch (err) {
        syncLog.style.color = 'var(--wrong)';
        syncLog.innerText = '同步失敗：' + err.message;
      }
    }

    async function doSyncPull() {
      const key = syncKeyInput.value.trim();
      if (!key) return alert('請先輸入專屬同步密碼！');

      syncLog.style.color = 'var(--accent)';
      syncLog.innerText = '正在下載...';

      try {
        const res = await fetch('/api/sync', {
          method: 'GET',
          headers: { 'X-Sync-Key': key }
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || '拉取失敗');

        const pulled = (data.deck || []).map(normalizeSyncCard).filter(Boolean);
        const customMap = loadCustomTranslations();
        let customMapDirty = false;
        pulled.forEach(c => {
          const k = c.word.trim().toLowerCase();
          if (c.isCustomTranslation && c.translation) {
            if (customMap[k] !== c.translation) {
              customMap[k] = c.translation;
              customMapDirty = true;
            }
          } else if (customMap[k]) {
            delete customMap[k];
            customMapDirty = true;
          }
        });
        if (customMapDirty) saveCustomTranslations(customMap);

        deck = pulled;
        queuedNextCard = null;
        quizActiveWord = null;
        quizAnswered = false;
        saveDeck();
        refreshLookupTranslationFromDeck();
        localStorage.setItem(LAST_SYNC_STORAGE, Date.now().toString());
        lastSyncTime.innerText = '剛剛已下載';
        syncLog.style.color = 'var(--status-3)';
        syncLog.innerText = '下載成功！已載入 ' + deck.length + ' 個單字';
      } catch (err) {
        syncLog.style.color = 'var(--wrong)';
        syncLog.innerText = '下載失敗：' + err.message;
      }
    }

    async function doSyncMerge() {
      const key = syncKeyInput.value.trim();
      if (!key) return alert('請先輸入專屬同步密碼！');

      syncLog.style.color = 'var(--accent)';
      syncLog.innerText = '正在進行雙向合併...';

      try {
        const res = await fetch('/api/sync', {
          method: 'GET',
          headers: { 'X-Sync-Key': key }
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || '拉取失敗');

        const remoteDeck = data.deck || [];
        const merged = mergeDecks(deck, remoteDeck);
        syncCustomMapFromDeck(merged);

        const pushRes = await fetch('/api/sync', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Sync-Key': key
          },
          body: JSON.stringify({ deck: merged })
        });
        const pushData = await pushRes.json();
        if (!pushRes.ok) throw new Error(pushData.error || '回寫雲端失敗');

        deck = merged;
        queuedNextCard = null;
        quizActiveWord = null;
        quizAnswered = false;
        saveDeck();
        refreshLookupTranslationFromDeck();
        localStorage.setItem(LAST_SYNC_STORAGE, Date.now().toString());
        lastSyncTime.innerText = '剛剛已同步';
        syncLog.style.color = 'var(--status-3)';
        syncLog.innerText = '雙向合併成功！共 ' + deck.length + ' 個單字';
      } catch (err) {
        syncLog.style.color = 'var(--wrong)';
        syncLog.innerText = '合併失敗：' + err.message;
      }
    }

    syncPushBtn.addEventListener('click', doSyncPush);
    syncPullBtn.addEventListener('click', doSyncPull);
    syncMergeBtn.addEventListener('click', doSyncMerge);

    syncDeckBtn.addEventListener('click', () => {
      initSyncKey();
      syncLog.innerText = '';
      syncModal.classList.add('active');
    });
    closeSyncModalBtn.addEventListener('click', () => syncModal.classList.remove('active'));

    // ==========================================
    // 8. 清單管理與本地備份彈窗
    // ==========================================
    manageDeckBtn.addEventListener('click', () => {
      renderModalWordList();
      listModal.classList.add('active');
    });
    closeListModalBtn.addEventListener('click', () => listModal.classList.remove('active'));

    function renderModalWordList() {
      const q = modalSearchInput.value.trim().toLowerCase();
      const filtered = deck.filter(c => c.word.toLowerCase().includes(q) || (c.translation && c.translation.includes(q)));
      modalTotalCount.innerText = deck.length;

      modalWordList.innerHTML = '';
      if (filtered.length === 0) {
        modalWordList.innerHTML = '<div style="text-align:center; color:var(--text-muted); padding:1rem;">無相符單字</div>';
        return;
      }

      filtered.forEach(item => {
        const row = document.createElement('div');
        row.className = 'word-list-item';
        
        const info = document.createElement('div');
        info.innerHTML = '<strong>' + escapeHtml(item.word) + '</strong> <span style="color:var(--text-muted); font-size:0.8rem; margin-left:6px;">' + escapeHtml(toTraditionalClient(item.translation || '')) + '</span>';
        
        const delBtn = document.createElement('button');
        delBtn.className = 'word-list-del';
        delBtn.innerText = '刪除';
        delBtn.onclick = () => {
          const idx = deck.findIndex(x => x.word.toLowerCase() === item.word.toLowerCase());
          if (idx >= 0) {
            if (queuedNextCard && queuedNextCard.word.toLowerCase() === item.word.toLowerCase()) queuedNextCard = null;
            deck.splice(idx, 1);
            saveDeck();
            renderModalWordList();
            updateStarBtnState();
          }
        };

        row.appendChild(info);
        row.appendChild(delBtn);
        modalWordList.appendChild(row);
      });
    }

    modalSearchInput.addEventListener('input', renderModalWordList);

    backupDeckBtn.addEventListener('click', () => {
      initThemeState();
      syncQuizPrefsUI();
      initHintState();
      backupModal.classList.add('active');
    });
    closeBackupModalBtn.addEventListener('click', () => backupModal.classList.remove('active'));

    exportBtn.addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(deck, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'vocab_deck_' + new Date().toISOString().slice(0, 10) + '.json';
      a.click();
    });

    importTriggerBtn.addEventListener('click', () => importFileInput.click());
    importFileInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const imported = JSON.parse(evt.target.result);
          if (!Array.isArray(imported)) throw new Error('檔案格式錯誤');
          deck = mergeDecks(deck, imported);
          syncCustomMapFromDeck(deck);
          queuedNextCard = null;
          quizActiveWord = null;
          quizAnswered = false;
          saveDeck();
          refreshLookupTranslationFromDeck();
          alert('成功匯入並合併！目前複習庫共有 ' + deck.length + ' 個單字');
          backupModal.classList.remove('active');
        } catch (err) {
          alert('匯入失敗：' + err.message);
        }
      };
      reader.readAsText(file);
      importFileInput.value = '';
    });

    clearAllBtn.addEventListener('click', () => {
      if (confirm('確定要清空單字複習庫的所有單字嗎？此操作無法復原！')) {
        queuedNextCard = null;
        deck = [];
        saveDeck();
        updateStarBtnState();
        backupModal.classList.remove('active');
      }
    });

    window.addEventListener('click', (e) => {
      if (e.target === syncModal) syncModal.classList.remove('active');
      if (e.target === listModal) listModal.classList.remove('active');
      if (e.target === backupModal) backupModal.classList.remove('active');
    });

    // ==========================================
    // 9. 鍵盤快捷鍵 (Tab, Space, 1-4, R, Alt)
    // ==========================================
    window.addEventListener('keydown', (e) => {
      if (syncModal.classList.contains('active') || listModal.classList.contains('active') || backupModal.classList.contains('active')) return;

      if (e.key === 'Alt') {
        e.preventDefault();
        toggleBookmarkCurrent();
        return;
      }

      if (e.key === 'Tab') {
        e.preventDefault();
        tabLookupBtn.classList.add('active');
        tabReviewBtn.classList.remove('active');
        lookupPanel.classList.remove('mobile-hidden');
        reviewPanel.classList.add('mobile-hidden');

        input.focus();
        input.select();
        return;
      }

      const activeTag = document.activeElement?.tagName;
      if (activeTag === 'TEXTAREA') return;
      if (activeTag === 'INPUT' && document.activeElement?.type !== 'checkbox') return;
      if (activeTag === 'INPUT' && document.activeElement?.type === 'checkbox' && e.code === 'Space') return;

      if (e.key.toLowerCase() === 'r') {
        if (currentCard) {
          playAudio(getCardAudioUrl(currentCard));
        }
        return;
      }

      if (reviewMode === 'quiz') {
        if (!quizAnswered && ['1', '2', '3', '4'].includes(e.key)) {
          e.preventDefault();
          submitQuizAnswer(parseInt(e.key, 10) - 1);
        } else if (quizAnswered && (e.code === 'Space' || e.key === 'Enter')) {
          e.preventDefault();
          advanceQuizNext();
        } else if (!quizAnswered && e.code === 'Space') {
          e.preventDefault();
        }
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        flipCard();
      } else if (isFlipped && e.key === '1') {
        rateFamiliarity(1);
      } else if (isFlipped && e.key === '2') {
        rateFamiliarity(2);
      } else if (isFlipped && e.key === '3') {
        rateFamiliarity(3);
      }
    });

    initThemeState();
    syncQuizPrefsUI();
    updateModeSwitchUI();
    updateDeckUI();
    initSyncKey();
    initHintState();
    if (reviewMode === 'quiz' && currentCard) {
      prefetchAudio(getCardAudioUrl(currentCard));
    }
  </script>
</body>
</html>`;

    return new Response(html, {
      headers: { "Content-Type": "text/html;charset=UTF-8" }
    });
  }
};
