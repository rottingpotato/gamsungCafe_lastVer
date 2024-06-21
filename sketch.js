// 사운드 에셋
let script_bgm_00, script_bgm_01, script_bgm_02, script_bgm_03, game_bgm;
let key_sound, mouse_click_sound, bad_sound, camera_sound, bit_key_sound, good_sound, hit_sound;
let userStarted; // 사운드 시작 제어 - 보안 뚫기 위해 필요
let isSoundPlayed = false;

// 공통배경 및 아이템
let cafe_logo; // 카페 로고
let game_bg_green; // 미니게임 배경
let textbox_black_op; // 텍스트박스
let c_try_icon_bla, c_try_icon_blu, c_try_icon_bro, c_try_icon_red;
let customer_default; // 손님 기본 얼굴
let customer_smile; // 손님 웃는 얼굴 
let opening_title; // 시작 화면

let c_cafe_close, c_cafe_close_who, c_cafe_far;
let c_game1_conv_br, c_game1_conv_gr;
let c_game1_insta, c_game1_line;
let c_game2_table, c_game2_tray;
let c_game3_cafe_in, c_game3_cafe_in_hj;
let c_prof_grade_bl;
let c_game1_angry, c_game1_introduce;

let cursor_def_X = 40, cursor_def_Y = 64;
let cursor_mo_X = 55, cursor_mo_Y = 68;

let opening_, game_bg_brown, cafe_out_bg, cafe_in_bg, bar_bg, bar_bg_memo, cafe_bar_bg, counter_bg, bypos, bg_ipad, bg_ipad_com, prof_entr, prof_moody, prof_shade, prof_tabon, prof_v, textbox_brown_op, textbox_green_op, cursor_default, cursor_mo, pt_on_smile, pt_off_smile, pt_on_frown;
let memo = [], memoIndex = 0; // 메모지
let try_b_brown, try_b_grey, try_b_red, try_b_blue, alba_grade_a, alba_grade_b, alba_grade_c, alba_grade_f;

// 손님 미니게임1
let menu_new; // 메뉴판 리뉴얼
let think_bubble; // 메뉴 올릴 말풍선
let orderline_bg; // 줄 선 모습
let instagram; // 인스타 화면
let info; // 주문방식 인포

// 손님 미니게임1, 2, 3 inst
let c_g1_inst1, c_g1_inst2, c_g1_inst3, c_g1_inst4, c_g1_inst5, c_g1_inst6, c_g1_inst7, c_g1_inst8, c_g1_inst9;
let c_g2_inst1, c_g2_inst2, c_g2_inst3, c_g2_inst4, c_g2_inst5, c_g2_inst6, c_g2_inst7, c_g2_inst8;
let c_g3_inst1, c_g3_inst2, c_g3_inst3, c_g3_inst4, c_g3_inst5, c_g3_inst6, c_g3_inst7;

let lastInstChangeTime = 0;
const instChangeInterval = 600;

// 손님 미니게임2
let hand_cursor; // 커서처럼 쓸 오른손
let fixed_bg; // 고정 배경
let laptop_eng; // 영어 자판 노트북
let mailbox; // 왼쪽 메일창
let key_array = new Array(31); // 자판 버튼 만들 때 쓸 애들
let new_key = new Array(31);
let qwertyAlphabet = [ // 자판 값들
  "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "back",
  "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
  "z", "x", "c", "v", "b", "n", "m", ",", ".",
  "space"
];
let key_name;
let target_sen = ["to professor", "assignment here", "thank you"]; // 목표 입력 문장
let correct_sen = false; // 입력된 문장이 정답과 일치하는지 여부
let enter_pushed = false; // 엔터키 눌렀는지 여부
let game2_trial1_success; // 트라이1 성공여부
let game2_trial2_success; // 트라이2 성공여부
let input_str1 = ''; // 각 트라이에서 입력된 스트링 저장용
let input_str2 = '';
let input_str3 = '';
let c_g2_bad_wrong, c_g2_bad_timeout, c_g2_good;

// 손님 미니게임3
let stage3_bg; // 배경화면
let stage3_obstacle; // 배경화면 속 장애물
let camera_default; // 카메라 디폴트
let camera_pressed; // 카메라 찍을 때
let p_anim_controller, l_anim_controller, c_anim_controller;
let g3_space_pressed = false, g3_mouse_pressed = false;
let camera_width = 445, camera_height = 845;
let imageX, imageY;

// 사람 애니메이션
let hj_ani_00, hj_ani_01, hj_ani_02, hj_ani_03, hj_ani_04, hj_ani_05;
let hj_ani_b00, hj_ani_b01, hj_ani_b02, hj_ani_b03, hj_ani_b04, hj_ani_b05;

// 고양이 애니메이션
let c_ani_00, c_ani_01, c_ani_02, c_ani_03, c_ani_04, c_ani_05, c_ani_06;
let c_ani_07, c_ani_08, c_ani_09, c_ani_10, c_ani_11, c_ani_12;
let c_answer_key = [10, 11, 12, 13, 14, 15]; // 고양이 컨디션이 맞게 되는 클래스의 status 값들 (c_ani_11, 12일 때)

// 빛 애니메이션
let l_ani_00, l_ani_01, l_ani_02, l_ani_03, l_ani_04, l_ani_05;
let l_ani_06, l_ani_07, l_ani_08, l_ani_09, l_ani_10, l_ani_11;
let l_answer_key = [8, 9, 10, 11, 12, 13, 14, 15]; // 빛 컨디션이 맞게 되는 클래스의 status 값들 (c_ani_09, 10, 11일 때)

// 컨디션 맞는지 확인할 좌표 저장값
let camera_x1, camera_y1, camera_x2, camera_y2;
let person_x1, person_y1, person_x2, person_y2;

// 사람 이미지 불러올 때 이미지 x좌측상단 좌표
let hj_images_X =  [
  750, 680, 610, 540, 470, 400, 335, 270, 215, 140, 75, 10, -20,
  10, 75, 140, 215, 270, 335, 400, 470, 540, 610, 680, 750, 750
];

// 엔딩 성적표
let cust_grade_a, cust_grade_b, cust_grade_c, cust_grade_f; 

// 트라이 아이콘 위한 게임 trial별 성공여부 저장
let c_t1_success, c_t2_success;

// 알바생 미니게임1
let inst11, inst12, inst13, inst14, inst15, inst16, inst17;
let pos, posList; // 포스기 기본 배경, mouseOver시 파란색 창
let posImages = [];
let bubble, npc1, npc2, npc3; // 손님 이미지
let smile_gauge, smile_gaugepoint; // 스마일 게이지 창(알바생, 손님 미니게임1), 스마일 게이지 포인트(알바생, 손님 미니게임1)
let gaugepointX; // 게이지 포인트의 X 좌표
let smile_count = 7; // 스마일 게이지 값 초기화 (어렵다 한 피드백 반영, 높게)
let smile_alright = true; // 스마일 게이지 역치 체크
let rects = []; // 버튼 영역 저장
let clickedIndex = -1;  // 클릭된 버튼 인덱스
let hoverIndex = -1; // 마우스 오버된 버튼 인덱스
let alba_st1_bad;
let alba_st1_badbad;
let alba_st1_good;
let p_t1_success, p_t2_success;

// 알바생 미니게임2
let bar_bg2;
let inst21, inst22, inst23, inst24, inst25, inst26, inst27, inst28, inst29, inst210, inst211;
let mocha_default, mocha_fin, mocha_fin_;
let mochaFinIncremented = false;
let fin_default, fin_mo;
let stage2_bg;
let in1, in2, in3, in4, in5, in6, in7, in8, in9, in10, in11, in12, in13, in14, in15, in16, in17, in18, in19, in20, in21, in22, in23, in24;
let indi1, indi2, indi3, indi4, indi5;
let int1, int2, int3, int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, int14, int15, int16, int17, int18, int19, int20, int21, int22, int23, int24;
let mocha_success = false;

// 알바생 미니게임2 재료 관련
let ingredients = [], dpIngredients = [], selectedIngredient = null;
let dp_x = 574.533, dp_y = 450.962, dp_width = 357.424, dp_height = 366.358;
let isFinDefault = true, showFinMo = false, finMoTimer = 0, showMochaFin = false;
let goalIn10 = 0, goalIn16 = 0, goalIn22 = 0, invalidIngredient = false;
let finDefaultClickCount = 0; // fin_default 클릭 카운트
let mouseTrail = []; // 마우스 궤적 저장
let blinkState = 0;
let previousResult1 = "", previousResult2 = "", resultText = "", showResult = false;
let stage = 1, messageTimer = 0;

// 알바생 미니게임3
let inst31, inst32, inst33, inst34, inst35, inst36;
let phone, commentbox2nd, commentbox3rd, swipe_bad_clicked, swipe_bad_none, swipe_good_clicked, swipe_good_none;
let comment1, comment2, comment3, comment4, comment5, comment6, comment7, comment8, comment9;
let feedback;
let imgX, imgY;
let isBadKeyPressed = false, isGoodKeyPressed = false;
let blinkStartTime = 0, timerDuration = 5000; // 5 seconds for each comment
let currentCommentIndex = 0, comments = [];
let correctActions = [true, false, true, false, false, true, false, true, true]; // true for like, false for delete
let isWrongAnswer = false, badCount = 0, goodCount = 0, gameSuccess = false, remainingTime;
let timerInterval, blinkInterval, showBad = false, showGameSuccess = false, showGameOver = false;
let feedbackMessages = [
  "내 예술혼을 칭찬하는데 왜 지우나?",
  "고양이'는' 귀여우면 나는 안 귀엽다는 거 아닌가? 지워버려.",
  "이거는 댓글알바 풀어서 쓴 댓글이네!! \n이걸 지우면 어떡하나!!",
  "모두 웃자는 우리 가게 철칙을 비난하는 댓글인데??",
  "정신 똑바로 차리게!!! \n저 뒤에 내용을 제대로 보란 말이다!",
  "이렇게 감동적인 댓글을 지워버리다니...",
  "교묘하게 비꼬는 저 솜씨, 한 두번 해본 게 아니다. \n정신을 똑바로 차리시게!!!",
  "감히 이 댓글을 지워? 이거는 용납할 수 없네.",
  "이렇게 위트있는 댓글을 지우다니... \n자네 정말 SNS 관리엔 소질이 없군."
];
let showFeedback = false, feedbackText = '';

// 게임 제어용 변수
let charIndex = 0, currentText = "", fullText = [], typing = true, currentTextIndex = 0;
let textBoxClicked = false; // 텍스트박스 클릭 상태
let game_stage_controller = 997; // draw에서 스테이지 이동 제어 //테스트용
let next_condition = false; // 다음 스테이지 넘어갈 조건 되는지 판단
let std_textSize = 50; // 표준 텍스트 사이즈
let myFont; // 폰트 저장
let start_time, elapsed_time; // (매 스테이지) 시작시간 저장, (매 스테이지) 경과시간 저장
let good_count = 0, bad_count = 0; // good, bad 받은 횟수
let isFeedbackShowing = false; // result 보여줄지 여부 결정
let currentFeedback; // 미니게임 trial에서 받은 평가 저장
let trial_start = false; // trial 본격 시작 제어
let Timer1, Timer3; // 타이머 클래스 인스턴스 - 미니게임1,3에 사용
let Timer4, Timer5, Timer6; // 타이머 클래스 인스턴스 - 미니게임1,2,3에 사용
let show_step = 0; // 각 함수 안에서 다음 장면으로 넘어가기 위해. direct_next_condition과 함께 사용
let next_show = false; // show_step 늘리기 위해 활용
let keyPressedTime = 0, instIndex = 0;
let initialGoodCount = 0, initialBadCount = 0;
let game_try_count = 3; // 게임1, 3에서 사용. 횟수 차감식 
const textDisplayDuration = 100;
const imageDisplayDuration = 100; 

function preload() {
  // 사운드 파일 로드
  game_bgm = loadSound('sound/game_bgm.mp3');
  script_bgm_00 = loadSound('sound/script_bgm_00.mp3');
  script_bgm_01 = loadSound('sound/script_bgm_01.mp3');
  script_bgm_02 = loadSound('sound/script_bgm_02.mp3');
  script_bgm_03 = loadSound('sound/script_bgm_03.mp3');
  key_sound = loadSound('sound/key_sound.mp3');
  bit_key_sound = loadSound('sound/bit_key_sound.mp3');
  mouse_click_sound = loadSound('sound/mouse_click_sound.mp3');
  bad_sound = loadSound('sound/bad_sound.mp3');
  good_sound = loadSound('sound/good_sound.mp3');
  camera_sound = loadSound('sound/camera_sound.mp3');
  hit_sound = loadSound('sound/hit_sound.mp3');

  opening_ = loadImage('(assets)common_bg_items/9_opening.png');
  game_bg_brown = loadImage('(assets)common_bg_items/9_game_bg_brown.png');
  cafe_out_bg = loadImage('(assets)common_bg_items/9_cafe_out_bg.png');
  cafe_in_bg = loadImage('(assets)common_bg_items/9_cafe_in_bg.png');
  cafe_bar_bg = loadImage('(assets)common_bg_items/9_cafe_bar_bg.png');
  bar_bg = loadImage('(assets)common_bg_items/9_bar_bg.png');
  bar_bg_memo = loadImage('(assets)common_bg_items/9_bar_bg_memo.png');
  counter_bg = loadImage('(assets)common_bg_items/9_counter_bg.png');
  bypos = loadImage('(assets)common_bg_items/9_bypos.png');
  bg_ipad = loadImage('(assets)common_bg_items/9_pt_ipad.png');
  bg_ipad_com = loadImage('(assets)common_bg_items/9_pt_ipad_com.png');
  prof_entr = loadImage('(assets)common_bg_items/9_prof_entr.png');
  prof_moody = loadImage('(assets)common_bg_items/9_prof_moody.png');
  prof_shade = loadImage('(assets)common_bg_items/9_prof_shade.png');
  prof_tabon = loadImage('(assets)common_bg_items/9_prof_tabon.png');
  prof_v = loadImage('(assets)common_bg_items/9_prof_v.png');
  pt_on_smile = loadImage('(assets)common_bg_items/9_pt_on_smile.png');
  pt_on_frown = loadImage('(assets)common_bg_items/pt_on_frown.png');
  pt_off_smile = loadImage('(assets)common_bg_items/9_pt_off_smile.png');
  textbox_brown_op = loadImage('(assets)common_bg_items/9_textbox_brown_op.png');
  textbox_green_op = loadImage('(assets)common_bg_items/9_textbox_green_op.png');
  cursor_default = loadImage('(assets)common_bg_items/9_cursor_default.png');
  cursor_mo = loadImage('(assets)common_bg_items/9_cursor_mo.png');
  memo[0] = loadImage('(assets)common_bg_items/9_memo.png');
  memo[1] = loadImage('(assets)common_bg_items/9_memo.png');
  memo[2] = loadImage('(assets)common_bg_items/9_memo.png');
  memo[3] = loadImage('(assets)common_bg_items/9_memo.png');
  try_b_brown = loadImage('(assets)common_bg_items/9_try_b_brown.png');
  try_b_grey = loadImage('(assets)common_bg_items/9_try_b_grey.png');
  try_b_blue = loadImage('(assets)common_bg_items/9_try_b_blue.png');
  try_b_red = loadImage('(assets)common_bg_items/9_try_b_red.png');
  alba_grade_a = loadImage('(assets)common_bg_items/9_alba_grade_a.png');
  alba_grade_b = loadImage('(assets)common_bg_items/9_alba_grade_b.png');
  alba_grade_c = loadImage('(assets)common_bg_items/9_alba_grade_c.png');
  alba_grade_f = loadImage('(assets)common_bg_items/9_alba_grade_f.png');
  myFont = loadFont('(assets)common_bg_items/0_neodgm.ttf');

  inst11 = loadImage('(assets)pt_only/1_inst_1.png');
  inst12 = loadImage('(assets)pt_only/1_inst_2.png');
  inst13 = loadImage('(assets)pt_only/1_inst_3.png');
  inst14 = loadImage('(assets)pt_only/1_inst_4.png');
  inst15 = loadImage('(assets)pt_only/1_inst_5.png');
  inst16 = loadImage('(assets)pt_only/1_inst_6.png');
  inst17 = loadImage('(assets)pt_only/1_inst_7.png');
  pos = loadImage('(assets)pt_only/1_pos.png');
  smile_gauge = loadImage('(assets)pt_only/1_smile_gaugebar.png');
  smile_gaugepoint = loadImage('(assets)pt_only/1_smile_gaugepoint.png');
  posImages.push(loadImage('(assets)pt_only/1_pos1-1.png'));
  posImages.push(loadImage('(assets)pt_only/1_pos1-2.png'));
  posImages.push(loadImage('(assets)pt_only/1_pos1-3.png'));
  posImages.push(loadImage('(assets)pt_only/1_pos2-1.png'));
  posImages.push(loadImage('(assets)pt_only/1_pos2-2.png'));
  posImages.push(loadImage('(assets)pt_only/1_pos2-3.png'));
  posImages.push(loadImage('(assets)pt_only/1_pos3-1.png'));
  posImages.push(loadImage('(assets)pt_only/1_pos3-2.png'));
  posImages.push(loadImage('(assets)pt_only/1_pos3-3.png'));
  posImages.push(loadImage('(assets)pt_only/1_pos4-1.png'));
  posImages.push(loadImage('(assets)pt_only/1_pos4-2.png'));
  posImages.push(loadImage('(assets)pt_only/1_pos4-3.png'));
  posImages.push(loadImage('(assets)pt_only/1_pos5-1.png'));
  posImages.push(loadImage('(assets)pt_only/1_pos5-2.png'));
  posImages.push(loadImage('(assets)pt_only/1_pos5-3.png'));
  posImages.push(loadImage('(assets)pt_only/1_pos6-1.png'));
  posImages.push(loadImage('(assets)pt_only/1_pos6-2.png'));
  posImages.push(loadImage('(assets)pt_only/1_pos6-3.png'));
  bubble = loadImage('(assets)pt_only/1_speech_bubble.png');
  npc1 = loadImage('(assets)pt_only/1_npc1.png');
  npc2 = loadImage('(assets)pt_only/1_npc2.png');
  npc3 = loadImage('(assets)pt_only/1_npc3.png');
  posList = loadImage('(assets)pt_only/1_pos_list.png');
  alba_st1_bad = loadImage('(assets)pt_only/1_alba_st1_bad.png');
  alba_st1_badbad = loadImage('(assets)pt_only/1_alba_st1_badbad.png');
  alba_st1_good = loadImage('(assets)pt_only/1_alba_st1_good.png');

  bar_bg2 = loadImage('(assets)pt_only/2_bar_bg.png');
  inst21 = loadImage('(assets)pt_only/2_inst_1.png');
  inst22 = loadImage('(assets)pt_only/2_inst_2.png');
  inst23 = loadImage('(assets)pt_only/2_inst_3.png');
  inst24 = loadImage('(assets)pt_only/2_inst_4.png');
  inst25 = loadImage('(assets)pt_only/2_inst_5.png');
  inst26 = loadImage('(assets)pt_only/2_inst_6.png');
  inst27 = loadImage('(assets)pt_only/2_inst_7.png');
  inst28 = loadImage('(assets)pt_only/2_inst_8.png');
  inst29 = loadImage('(assets)pt_only/2_inst_9.png');
  inst210 = loadImage('(assets)pt_only/2_inst_10.png');
  inst211 = loadImage('(assets)pt_only/2_inst_11.png');
  mocha_default = loadImage('(assets)pt_only/2_default.png');
  mocha_fin = loadImage('(assets)pt_only/2_mocha_fin.png');
  mocha_fin_ = loadImage('(assets)pt_only/2_mocha_fin_.png');
  fin_default = loadImage('(assets)pt_only/2_fin_default.png');
  fin_mo = loadImage('(assets)pt_only/2_fin_mo.png');
  stage2_bg = loadImage('(assets)pt_only/2_stage2_bg.png');
  in1 = loadImage('(assets)pt_only/2_in1_waterjelly.png');
  in2 = loadImage('(assets)pt_only/2_in2_chocochip.png');
  in3 = loadImage('(assets)pt_only/2_in3_instick.png');
  in4 = loadImage('(assets)pt_only/2_in4_umbrella.png');
  in5 = loadImage('(assets)pt_only/2_in5_whipping.png');
  in6 = loadImage('(assets)pt_only/2_in6_milkfoam.png');
  in7 = loadImage('(assets)pt_only/2_in7_tapioka.png');
  in8 = loadImage('(assets)pt_only/2_in8_chocolatebar.png');
  in9 = loadImage('(assets)pt_only/2_in9_cinamonpo.png');
  in10 = loadImage('(assets)pt_only/2_in10_chocopo.png');
  in11 = loadImage('(assets)pt_only/2_in11_caramelsyr.png');
  in12 = loadImage('(assets)pt_only/2_in12_chocoroll.png');
  in13 = loadImage('(assets)pt_only/2_in13_pepero.png');
  in14 = loadImage('(assets)pt_only/2_in14_blueberry.png');
  in15 = loadImage('(assets)pt_only/2_in15_strawberrysliced.png');
  in16 = loadImage('(assets)pt_only/2_in16_brocoli.png');
  in17 = loadImage('(assets)pt_only/2_in17_mint.png');
  in18 = loadImage('(assets)pt_only/2_in18_carrotchoco.png');
  in19 = loadImage('(assets)pt_only/2_in19_herb.png');
  in20 = loadImage('(assets)pt_only/2_in20_grapefruitsliced.png');
  in21 = loadImage('(assets)pt_only/2_in21_duck.png');
  in22 = loadImage('(assets)pt_only/2_in22_squi.png');
  in23 = loadImage('(assets)pt_only/2_in23_stone.png');
  in24 = loadImage('(assets)pt_only/2_in24_gold.png');
  indi1 = loadImage('(assets)pt_only/2_indi1_cinamonpo.png');
  indi2 = loadImage('(assets)pt_only/2_indi2_chocopo.png');
  indi3 = loadImage('(assets)pt_only/2_indi3_caramelsyr.png');
  indi4 = loadImage('(assets)pt_only/2_indi4_gold.png');
  indi5 = loadImage('(assets)pt_only/2_indi5_milkfoam.png');
  int1 = loadImage('(assets)pt_only/2_1-1.png');
  int2 = loadImage('(assets)pt_only/2_1-2.png');
  int3 = loadImage('(assets)pt_only/2_1-3.png');
  int4 = loadImage('(assets)pt_only/2_1-4.png');
  int5 = loadImage('(assets)pt_only/2_1-5.png');
  int6 = loadImage('(assets)pt_only/2_1-6.png');
  int7 = loadImage('(assets)pt_only/2_1-7.png');
  int8 = loadImage('(assets)pt_only/2_1-8.png');
  int9 = loadImage('(assets)pt_only/2_2-1.png');
  int10 = loadImage('(assets)pt_only/2_2-2.png');
  int11 = loadImage('(assets)pt_only/2_2-3.png');
  int12 = loadImage('(assets)pt_only/2_2-4.png');
  int13 = loadImage('(assets)pt_only/2_2-5.png');
  int14 = loadImage('(assets)pt_only/2_2-6.png');
  int15 = loadImage('(assets)pt_only/2_2-7.png');
  int16 = loadImage('(assets)pt_only/2_2-8.png');
  int17 = loadImage('(assets)pt_only/2_3-1.png');
  int18 = loadImage('(assets)pt_only/2_3-2.png');
  int19 = loadImage('(assets)pt_only/2_3-3.png');
  int20 = loadImage('(assets)pt_only/2_3-4.png');
  int21 = loadImage('(assets)pt_only/2_3-5.png');
  int22 = loadImage('(assets)pt_only/2_3-6.png');
  int23 = loadImage('(assets)pt_only/2_3-7.png');
  int24 = loadImage('(assets)pt_only/2_3-8.png');

  inst31 = loadImage('(assets)pt_only/3_inst_1.png');
  inst32 = loadImage('(assets)pt_only/3_inst_2.png');
  inst33 = loadImage('(assets)pt_only/3_inst_3.png');
  inst34 = loadImage('(assets)pt_only/3_inst_4.png');
  inst35 = loadImage('(assets)pt_only/3_inst_5.png');
  inst36 = loadImage('(assets)pt_only/3_inst_6.png');
  phone = loadImage('(assets)pt_only/3_phone.png');
  commentbox2nd = loadImage('(assets)pt_only/3_2nd_commentbox.png');
  commentbox3rd = loadImage('(assets)pt_only/3_3rd_commentbox.png');
  swipe_bad_clicked = loadImage('(assets)pt_only/3_swipe_bad_clicked.png');
  swipe_bad_none = loadImage('(assets)pt_only/3_swipe_bad_none.png');
  swipe_good_clicked = loadImage('(assets)pt_only/3_swipe_good_clicked.png');
  swipe_good_none = loadImage('(assets)pt_only/3_swipe_good_none.png');
  comment1 = loadImage('(assets)pt_only/3_comment1.png');
  comment2 = loadImage('(assets)pt_only/3_comment2.png');
  comment3 = loadImage('(assets)pt_only/3_comment3.png');
  comment4 = loadImage('(assets)pt_only/3_comment4.png');
  comment5 = loadImage('(assets)pt_only/3_comment5.png');
  comment6 = loadImage('(assets)pt_only/3_comment6.png');
  comment7 = loadImage('(assets)pt_only/3_comment7.png');
  comment8 = loadImage('(assets)pt_only/3_comment8.png');
  comment9 = loadImage('(assets)pt_only/3_comment9.png');
  feedback = loadImage('(assets)pt_only/3_feedback.png');

  // 이미지
  cafe_logo = loadImage('(assets)common_bg_items/cafe_logo.png');
  game_bg_green = loadImage('(assets)common_bg_items/game_bg_green.png');
  textbox_black_op = loadImage('(assets)common_bg_items/textbox_black_op.png');
  textbox_brown_op = loadImage('(assets)common_bg_items/textbox_brown_op.png');
  textbox_green_op = loadImage('(assets)common_bg_items/textbox_green_op.png');
  c_try_icon_bla = loadImage('(assets)common_bg_items/c_try_icon_bla.png');
  c_try_icon_blu = loadImage('(assets)common_bg_items/c_try_icon_blu.png');
  c_try_icon_bro = loadImage('(assets)common_bg_items/c_try_icon_bro.png');
  c_try_icon_red = loadImage('(assets)common_bg_items/c_try_icon_red.png');
  opening_title = loadImage('(assets)common_bg_items/opening_title.png');

  c_cafe_close = loadImage('(assets)common_bg_items/c_cafe_close.png');
  c_cafe_close_who = loadImage('(assets)common_bg_items/c_cafe_close_who.png');
  c_cafe_far = loadImage('(assets)common_bg_items/c_cafe_far.png');
  c_game1_conv_br = loadImage('(assets)common_bg_items/c_game1_conv_br.png');
  c_game1_conv_gr = loadImage('(assets)common_bg_items/c_game1_conv_gr.png');
  c_game1_insta = loadImage('(assets)common_bg_items/c_game1_insta.png');
  c_game1_line = loadImage('(assets)common_bg_items/c_game1_line.png');
  c_game2_tray = loadImage('(assets)common_bg_items/c_game2_tray.png');
  c_game2_table = loadImage('(assets)common_bg_items/c_game2_table.png');
  c_game3_cafe_in = loadImage('(assets)common_bg_items/c_game3_cafe_in.png');
  c_game3_cafe_in_hj = loadImage('(assets)common_bg_items/c_game3_cafe_in_hj.png');
  c_prof_grade_bl = loadImage('(assets)common_bg_items/c_prof_grade_bl.png');
  c_game1_angry = loadImage('(assets)common_bg_items/c_game1_angry.png');
  c_game1_introduce = loadImage('(assets)common_bg_items/c_game1_introduce.png');

  c_g1_inst1 = loadImage('(assets)customer_only/game1/c_g1_inst1.png');
  c_g1_inst2 = loadImage('(assets)customer_only/game1/c_g1_inst2.png');
  c_g1_inst3 = loadImage('(assets)customer_only/game1/c_g1_inst3.png');
  c_g1_inst4 = loadImage('(assets)customer_only/game1/c_g1_inst4.png');
  c_g1_inst5 = loadImage('(assets)customer_only/game1/c_g1_inst5.png');
  c_g1_inst6 = loadImage('(assets)customer_only/game1/c_g1_inst6.png');
  c_g1_inst7 = loadImage('(assets)customer_only/game1/c_g1_inst7.png');
  c_g1_inst8 = loadImage('(assets)customer_only/game1/c_g1_inst8.png');
  c_g1_inst9 = loadImage('(assets)customer_only/game1/c_g1_inst9.png');

  c_g2_inst1 = loadImage('(assets)customer_only/game2/c_g2_inst1.png');
  c_g2_inst2 = loadImage('(assets)customer_only/game2/c_g2_inst2.png');
  c_g2_inst3 = loadImage('(assets)customer_only/game2/c_g2_inst3.png');
  c_g2_inst4 = loadImage('(assets)customer_only/game2/c_g2_inst4.png');
  c_g2_inst5 = loadImage('(assets)customer_only/game2/c_g2_inst5.png');
  c_g2_inst6 = loadImage('(assets)customer_only/game2/c_g2_inst6.png');
  c_g2_inst7 = loadImage('(assets)customer_only/game2/c_g2_inst7.png');
  c_g2_inst8 = loadImage('(assets)customer_only/game2/c_g2_inst8.png');

  c_g3_inst1 = loadImage('(assets)customer_only/game3/c_g3_inst1.png');
  c_g3_inst2 = loadImage('(assets)customer_only/game3/c_g3_inst2.png');
  c_g3_inst3 = loadImage('(assets)customer_only/game3/c_g3_inst3.png');
  c_g3_inst4 = loadImage('(assets)customer_only/game3/c_g3_inst4.png');
  c_g3_inst5 = loadImage('(assets)customer_only/game3/c_g3_inst5.png');
  c_g3_inst6 = loadImage('(assets)customer_only/game3/c_g3_inst6.png');
  c_g3_inst7 = loadImage('(assets)customer_only/game3/c_g3_inst7.png');

  cust_grade_a = loadImage('(assets)customer_only/cust_grade_a.png');
  cust_grade_b = loadImage('(assets)customer_only/cust_grade_b.png');
  cust_grade_c = loadImage('(assets)customer_only/cust_grade_c.png');
  cust_grade_f = loadImage('(assets)customer_only/cust_grade_f.png');

  customer_default = loadImage('(assets)customer_only/customer_default.png');
  customer_smile = loadImage('(assets)customer_only/customer_smile.png');
  menu_new = loadImage('(assets)customer_only/game1/menu_new.png');
  think_bubble = loadImage('(assets)customer_only/game1/think_bubble.png');
  orderline_bg = loadImage('(assets)customer_only/game1/orderline_bg.png');
  instagram = loadImage('(assets)customer_only/game1/instagram.png');
  info = loadImage('(assets)customer_only/game1/info.png');

  hand_cursor = loadImage('(assets)customer_only/game2/hand_cursor.png');
  fixed_bg = loadImage('(assets)customer_only/game2/fixed_bg.png');
  laptop_eng = loadImage('(assets)customer_only/game2/laptop_eng.png');
  mailbox = loadImage('(assets)customer_only/game2/mailbox.png');
  c_g2_bad_wrong = loadImage('(assets)customer_only/game2/wrong.png');
  c_g2_bad_timeout = loadImage('(assets)customer_only/game2/c_g2_bad_timeout.png'); 
  c_g2_good = loadImage('(assets)customer_only/game2/c_g2_good.png'); 

  stage3_bg = loadImage('(assets)customer_only/game3/stage3_bg.png');
  stage3_obstacle = loadImage('(assets)customer_only/game3/stage3_obstacle.png');
  camera_default = loadImage('(assets)customer_only/game3/camera_default.png');
  camera_pressed = loadImage('(assets)customer_only/game3/camera_pressed.png');
  hj_ani_00 = loadImage('(assets)customer_only/game3/person_anim/hj_ani_00.png');
  hj_ani_01 = loadImage('(assets)customer_only/game3/person_anim/hj_ani_01.png');
  hj_ani_02 = loadImage('(assets)customer_only/game3/person_anim/hj_ani_02.png');
  hj_ani_03 = loadImage('(assets)customer_only/game3/person_anim/hj_ani_03.png');
  hj_ani_04 = loadImage('(assets)customer_only/game3/person_anim/hj_ani_04.png');
  hj_ani_05 = loadImage('(assets)customer_only/game3/person_anim/hj_ani_05.png');
  hj_ani_b00 = loadImage('(assets)customer_only/game3/person_anim/hj_ani_b00.png');
  hj_ani_b01 = loadImage('(assets)customer_only/game3/person_anim/hj_ani_b01.png');
  hj_ani_b02 = loadImage('(assets)customer_only/game3/person_anim/hj_ani_b02.png');
  hj_ani_b03 = loadImage('(assets)customer_only/game3/person_anim/hj_ani_b03.png');
  hj_ani_b04 = loadImage('(assets)customer_only/game3/person_anim/hj_ani_b04.png');
  hj_ani_b05 = loadImage('(assets)customer_only/game3/person_anim/hj_ani_b05.png');

  c_ani_00 = loadImage('(assets)customer_only/game3/cat_anim/c_ani_00.png');
  c_ani_01 = loadImage('(assets)customer_only/game3/cat_anim/c_ani_01.png');
  c_ani_02 = loadImage('(assets)customer_only/game3/cat_anim/c_ani_02.png');
  c_ani_03 = loadImage('(assets)customer_only/game3/cat_anim/c_ani_03.png');
  c_ani_04 = loadImage('(assets)customer_only/game3/cat_anim/c_ani_04.png');
  c_ani_05 = loadImage('(assets)customer_only/game3/cat_anim/c_ani_05.png');
  c_ani_06 = loadImage('(assets)customer_only/game3/cat_anim/c_ani_06.png');
  c_ani_07 = loadImage('(assets)customer_only/game3/cat_anim/c_ani_07.png');
  c_ani_08 = loadImage('(assets)customer_only/game3/cat_anim/c_ani_08.png');
  c_ani_09 = loadImage('(assets)customer_only/game3/cat_anim/c_ani_09.png');
  c_ani_10 = loadImage('(assets)customer_only/game3/cat_anim/c_ani_10.png');
  c_ani_11 = loadImage('(assets)customer_only/game3/cat_anim/c_ani_11.png');
  c_ani_12 = loadImage('(assets)customer_only/game3/cat_anim/c_ani_12.png'); 

  l_ani_00 = loadImage('(assets)customer_only/game3/light_anim/l_ani_00.png');
  l_ani_01 = loadImage('(assets)customer_only/game3/light_anim/l_ani_01.png');
  l_ani_02 = loadImage('(assets)customer_only/game3/light_anim/l_ani_02.png');
  l_ani_03 = loadImage('(assets)customer_only/game3/light_anim/l_ani_03.png');
  l_ani_04 = loadImage('(assets)customer_only/game3/light_anim/l_ani_04.png');
  l_ani_05 = loadImage('(assets)customer_only/game3/light_anim/l_ani_05.png');
  l_ani_06 = loadImage('(assets)customer_only/game3/light_anim/l_ani_06.png');
  l_ani_07 = loadImage('(assets)customer_only/game3/light_anim/l_ani_07.png');
  l_ani_08 = loadImage('(assets)customer_only/game3/light_anim/l_ani_08.png');
  l_ani_09 = loadImage('(assets)customer_only/game3/light_anim/l_ani_09.png');
  l_ani_10 = loadImage('(assets)customer_only/game3/light_anim/l_ani_10.png');
  l_ani_11 = loadImage('(assets)customer_only/game3/light_anim/l_ani_11.png');
}
function setup() {
  // 고정 캔버스 크기
  createCanvas(1800, 1000);

  //사운드 볼륨 설정
  hit_sound.setVolume(0.1);
  bad_sound.setVolume(0.5);
  mouse_click_sound.setVolume(0.5);

  // 텍스트 작성 양식 설정
  textFont(myFont);
  textSize(std_textSize);
  fill(0);
  // 최초 시작시간 초기화
  start_time = millis();

  Timer1 = new TimerS(15000, false);
  Timer3 = new TimerS(5000, true);
  // 10초 타이머 셋팅 
  Timer4 = new Timer(15000);
  // 20초 타이머 셋팅
  Timer5 = new Timer(20000);
  // 30초 타이머 셋팅
  Timer6 = new Timer(30000);

  // 커서 설정
  noCursor();

  // 손님 미니게임 3에서 쓸 클래스들 초기화
  p_anim_controller = new Person();  
  l_anim_controller = new Light();
  c_anim_controller = new Cat();

  // 게임 시작 초기화
  game_stage_controller = 997;
}
function draw() {
  if (!userStarted) {
      return;
    }

  switch(game_stage_controller){
    case 0:
      pt_tutorial_out();
      break;

    case 1:
      pt_tutorial_bar_bg();
      break;

    case 2:
      pt_tutorial_bar_bg_memo();
      break;

    case 3:
      pt_tutorial_counter_bg();
      break;

    case 4:
      // 이전 배경음악 종료
      if (script_bgm_00.isPlaying()) {
        script_bgm_00.stop();
        script_bgm_00.dispose();
      }
      // 배경음악
      if (!game_bgm.isPlaying()) {
        game_bgm.loop();
      }
      pt_game1_inst();
      break;

    case 5:
      pt_game1_trial1();
      break;

    case 6:
      // 첫 번째 미니게임 trial 1 결과
      pt_game1_showResults();
      break;

    case 7:
      pt_game1_trial2();
      break;
  
    case 8:
      // 첫 번째 미니게임 trial 2 결과
      pt_game1_showResults();
      break;

    case 9:
      pt_game1_trial3();
      break;
  
    case 10:
      // 첫 번째 미니게임 trial 3 결과
      pt_game1_showResults();
      break;

    case 11:
      // 이전 배경음악 종료
      if (game_bgm.isPlaying()) {
        game_bgm.stop();
      }
      // 배경음악
      if (!script_bgm_01.isPlaying()) {
        script_bgm_01.play();
      }
      pt_tutorial_cafe_bar_bg2();
      break;

    case 12:
      // 이전 배경음악 종료
      if (script_bgm_01.isPlaying()) {
        script_bgm_01.stop();
        script_bgm_01.dispose();
      }
      // 배경음악
      if (!game_bgm.isPlaying()) {
        game_bgm.loop();
      }
      pt_game2_inst();
      break;

    case 13:
      pt_game2_trial1();
      break;

    case 14:
      pt_game2_result();
      break;

    case 15:
      pt_game2_trial2();
      break;

    case 16:
      pt_game2_result();
      break;

    case 17:
      pt_game2_trial3();
      break;

    case 18:
      pt_game2_final_result();
      break;
  
    case 19:
      // 이전 배경음악 종료
      if (game_bgm.isPlaying()) {
        game_bgm.stop();
      }
      // 배경음악
      if (!script_bgm_02.isPlaying()) {
        script_bgm_02.play();
      }
      pt_bypos1();
      break;

    case 20:
      pt_ipad();
      break;
      
    case 21:
      pt_ipad_com();
      break;

    case 22:
      pt_bypos2();
      break;

    case 23:
      // 이전 배경음악 종료
      if (script_bgm_02.isPlaying()) {
        script_bgm_02.stop();
        script_bgm_02.dispose();
      }
      // 배경음악
      if (!game_bgm.isPlaying()) {
        game_bgm.loop();
      }
      pt_game3_inst();
      break;

    case 24:
      pt_game3();
      break;

    case 25:
      pt_game3_result();
      break;

    case 26:
      // 이전 배경음악 종료
      if (game_bgm.isPlaying()) {
        game_bgm.stop();
      }
      // 배경음악
      if (!script_bgm_03.isPlaying()) {
        script_bgm_03.play();
      }
      pt_bypos3();
      break;

    case 27:
      pt_prof_shade();
      break;

    case 28:
      pt_prof_entr();
      break;

    case 29:
      pt_prof_moody();
      break;

    case 30:
      pt_prof_tabon();
      break;

    case 31:
      pt_prof_v();
      break;

    case 32:
      pt_grade();
      break;

    case 33:
      pt_restart();
      break;


    case 51:
    // 튜토리얼 화면
      customer_tutorial();
      break;
    
    case 52:
      // 첫 번째 미니게임 스크립트
      customer_game1();
      break;
  
    case 53:
      // 이전 배경음악 종료
      if (script_bgm_00.isPlaying()) {
        script_bgm_00.stop();
        script_bgm_00.dispose();
      }
      // 배경음악
      if (!game_bgm.isPlaying()) {
        game_bgm.loop();
      }
      // 첫 번째 미니게임 inst
      game1_inst();
      break;

    case 54:
      // 첫 번째 미니게임 trial 1
      game1_trial1(13);
      break;

    case 55:
      // 첫 번째 미니게임 trial 1 결과
      game1_showResults();
      break;

    case 56:
      // 첫 번째 미니게임 trial 2
      game1_trial2(5);
      break;

    case 57:
      // 첫 번째 미니게임 trial 2 결과
      game1_showResults();
      break;

    case 58:
      // 첫 번째 미니게임 trial 3
      game1_trial3(17);
      break;

    case 59:
      // 첫 번째 미니게임 trial 3 결과
      game1_showResults();
      break;
  
    case 60:
      // 이전 배경음악 종료
      if (game_bgm.isPlaying()) {
        game_bgm.stop();
      }
      // 배경음악
      if (!script_bgm_01.isPlaying()) {
        script_bgm_01.play();
      }
      // 두 번째 미니게임 스크립트
      customer_game2();
      break;

    case 61:
      // 이전 배경음악 종료
      if (script_bgm_01.isPlaying()) {
        script_bgm_01.stop();
        script_bgm_01.dispose();
      }
      // 배경음악
      if (!game_bgm.isPlaying()) {
        game_bgm.loop();
      }
      // 두 번째 미니게임 inst
      game2_inst();
      break;

    case 62:
      // 두 번째 미니게임 trial 1 
      game2_trial1();
      break;
    
    case 63:
      // 두 번째 미니게임 trial 1 결과
      game2_showResults();
      break;
    
    case 64:
      // 두 번째 미니게임 trial 2
      game2_trial2();
      break;
    
    case 65:
      // 두 번째 미니게임 trial 2 결과
      game2_showResults();
      break;
    
    case 66:
      // 두 번째 미니게임 trial 3
      game2_trial3();
      break;
    
    case 67:
      // 두 번째 미니게임 trial 3 결과
      game2_showResults();
      break;
    
    case 68:
      // 이전 배경음악 종료
      if (game_bgm.isPlaying()) {
        game_bgm.stop();
      }
      // 배경음악
      if (!script_bgm_02.isPlaying()) {
        script_bgm_02.loop();
      }
      // 세 번째 미니게임
      customer_game3();
      break;
    
    case 69:
      // 이전 배경음악 종료
      if (script_bgm_02.isPlaying()) {
        script_bgm_02.stop();
        script_bgm_02.dispose();
      }
      // 배경음악
      if (!game_bgm.isPlaying()) {
        game_bgm.loop();
      }
      // 세 번째 미니게임 inst
      game3_inst();
      break;
    
    case 70:
      // 세 번째 미니게임 trial 1
      game3_trial1();
      break;
    
    case 71:
      // 세 번째 미니게임 trial 1 결과
      game3_showResults();
      break;
    
    case 72:
      // 세 번째 미니게임 trial 2
      game3_trial2();
      break;
    
    case 73:
      // 세 번째 미니게임 trial 2 결과
      game3_showResults();
      break;
    
    case 74:
      // 세 번째 미니게임 trial 3
      game3_trial3();
      break;
    
    case 75:
      // 세 번째 미니게임 trial 3 결과
      game3_showResults();
      break;
    
    case 76:
      // 이전 배경음악 종료
      if (game_bgm.isPlaying()) {
        game_bgm.stop();
      }
      // 배경음악
      if (!script_bgm_03.isPlaying()) {
        script_bgm_03.loop();
      }
      // 엔딩 스크린
      customer_ending();
      break;

    case 997:
      // 배경음악
      if (!script_bgm_00.isPlaying()) {
        script_bgm_00.loop();
      }
      opening();
      break;

    case 998:
      choose_character();
      break;

    default:
      // game_stage_controller에 문제 있을 시 
      fill(255, 0, 0, 100); // 빨간 화면
      rect(0, 0, width, height);
      textAlign(CENTER, CENTER);
      fill(0); 
      textSize(std_textSize + 20);
      // 초기화 조건 실행 종용
      text("잘못된 접근입니다.", width / 2, (height / 2) - 100);
      text("다시 시작하려면 'r'키를 누르세요.", width / 2, (height / 2) + 100);
      break;
  }

  if (showMochaFin && millis() - start_time > 18000) {
    game_stage_controller = 18;
  }
}

// game_stage_controller = 997일 때 시행
function opening() {
  let startButtonX = 668;
  let startButtonY = 830;
  let startButtonWidth = 600;
  let startButtonHeight = 100;
  let start_button = new Button(startButtonX, startButtonY, startButtonWidth, startButtonHeight);

  background(opening_title);

  // 텍스트를 감싸는 rect 그리기
  push();
  if (start_button.mouseOver()) {
    fill(153, 153, 255);
  } else fill(207, 255, 229);
  stroke(0);
  strokeWeight(15);
  rect(startButtonX, startButtonY, startButtonWidth, startButtonHeight, 100);
  settingInitialize();
  pop();


  // 텍스트 그리기
  push();
  textSize(80);
  fill(0);
  strokeWeight(10);
  textAlign(CENTER, BASELINE);
  text("PRESS START", 980, 900);  
  pop();

  // 클릭 이벤트 처리
  if (mouseIsPressed) {
    // 마우스 클릭 위치가 rect 내부에 있는지 확인
    if (start_button.mouseOver()) {
      game_stage_controller = 998;
    }
  }

  // 커서
  image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
}
// game_stage_controller = 998일 때 시행
function choose_character(){  
  setTimeout(()=>{
    fill(147, 128, 88);
    rect(0, 0, width, height);
    settingInitialize();

    let pt_x = 300, pt_y = 300;
    let cus_x = 1000, cus_y = 300;
    let character_width = 500;
    let character_height = 500;

    let pt_choose = new Button(pt_x, pt_y, character_width, character_height);
    let cus_choose = new Button(cus_x, cus_y, character_width, character_height);
    textAlign(CENTER, CENTER);
    text("무슨 역할로 플레이하시겠습니까?", 900, 80);
    textSize(std_textSize+20);
    text("알바생", 550, 200);
    text("손님", 1250, 200);
    settingInitialize();

    // 알바생 - 마우스 오버 시 웃음
    if (pt_choose.mouseOver()){
      fill(242, 226, 192); 
      rect(pt_x, pt_y, character_width, character_height, 15);
      image(pt_on_smile, pt_x, pt_y, character_width, character_height);
    } else {
      fill(255); 
      rect(pt_x, pt_y, character_width, character_height, 15);
      image(pt_on_frown, pt_x, pt_y, character_width, character_height);
    }
    settingInitialize(); // 세팅 초기화 

    // 손님 - 마우스 오버 시 웃음
    if (cus_choose.mouseOver()){
      fill(242, 226, 192); 
      rect(cus_x, cus_y, character_width, character_height, 15);
      image(customer_smile, cus_x, cus_y, character_width, character_height); 
    } else {
      fill(255); 
      rect(cus_x, cus_y, character_width, character_height, 15);
      image(customer_default, cus_x, cus_y, character_width, character_height); 
    }
    settingInitialize(); // 세팅 초기화 

    if (mouseIsPressed){
      if (pt_choose.mouseOver()){
        game_stage_controller = 0; 
      }
      else if (cus_choose.mouseOver()){
        game_stage_controller = 51; 
      }
    }
      
    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
  }, 500);

}

//**  알바생 **//
// game_stage_controller = 0일 때 시행
function pt_tutorial_out() {
  elapsed_time = millis() - start_time;

  if (!next_condition && show_step == 0) {
    image(cafe_out_bg, 0, 0);
    image(pt_off_smile, width / 2 - 350, height / 2 - 500, 700, 700);
    image(textbox_brown_op, 200, 580, 1400, 400);
    
    fullText = [
      "카페 시급이 15,000원...\n이 알바는 무.조.건. 잡아야 한다!!",
      "시급이 높아서 그런지\n최종 알바 적합성 테스트도 보고...\n신기하네...",
      "뭐, 감성카페라고는 하는데 ㅋ\n이 시급이면 없던 감성도 쥐어짜내서 알바해야지!",
      "설마 내 N년차 알바경력에 어려운 일이 있을꼬~\n일단 들어가보자!"
    ];

    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      text(fullText[currentTextIndex], 350, 700);
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            next_condition = true;
          }
        }
      }
    }
    image(cursor_default, mouseX, mouseY, 40, 64);
  }

  if (next_condition) {
    next_condition = false;
    start_time = millis();
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
    game_stage_controller = 1;
  }
}
// game_stage_controller = 1일 때 시행
function pt_tutorial_bar_bg() {
  elapsed_time = millis() - start_time;

  if (!next_condition && show_step == 0) {
    image(cafe_bar_bg, 0, 0);
    image(textbox_brown_op, 200, 580, 1400, 400);
    
    fullText = [
      "사장님...이 안 계시네?",
      "평가를 어떻게 한다는 거지?",
      "아 저기... 카운터에 메모인가?"
    ];

    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      text(fullText[currentTextIndex], 350, 700);
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            next_condition = true;
          }
        }
      }
    }
    image(cursor_default, mouseX, mouseY, 40, 64);
  }

  if (next_condition) {
    next_condition = false;
    start_time = millis();
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
    game_stage_controller = 2;
  }
}
// game_stage_controller = 2일 때 시행
function pt_tutorial_bar_bg_memo() {
  elapsed_time = millis() - start_time;

  background(bar_bg_memo);

  let memoX = width / 2;
  let memoY = height / 2;

  push();
  imageMode(CENTER, CENTER);
  image(memo[memoIndex], memoX, memoY, 1300, 1300);
  pop();

  push();
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(0);
  let memoTexts = [
    "o.jon 카페 \n일일 알바생으로 온 것을 \n환영하네!",
    "이곳은 나의 예술혼을 \n가득 담아 만든 카페로 \n알바생이 되기 위해서는",
    "그 예술혼을 \n감당할 수 있는지를 \n1순위로 평가한다네.",
    "하루 동안 \n계속 지켜보도록 하지. \nGOOD LUCK..."
  ];

  text(memoTexts[memoIndex], memoX + 30, memoY);
  pop();

  image(cursor_default, mouseX, mouseY, 40, 64);

  if (memoOrSpaceClicked()) {
    memoIndex++;
    if (memoIndex >= memoTexts.length) {
      memoIndex = 0;
      next_condition = true;
    }
  }

  if (next_condition) {
    next_condition = false;
    start_time = millis();
    game_stage_controller = 3;
  }
}
// game_stage_controller = 3일 때 시행
function pt_tutorial_counter_bg() {
  elapsed_time = millis() - start_time;

  if (!next_condition && show_step == 0) {
    image(counter_bg, 0, 0);
    image(pt_off_smile, width / 2 - 350, height / 2 - 500, 700, 700);
    image(textbox_brown_op, 200, 580, 1400, 400);
    
    fullText = [
      "뭐야 이건? 좀 무서운데?",
      "일단은 손님이 온 것 같으니...\n손님부터 받아보자!"
    ];

    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      text(fullText[currentTextIndex], 350, 700);
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            next_condition = true;
          }
        }
      }
    }
    image(cursor_default, mouseX, mouseY, 40, 64);
  }

  if (next_condition) {
    next_condition = false;
    start_time = millis();
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
    game_stage_controller = 4;
  }
}

// game_stage_controller = 4일 때 시행
function pt_game1_inst() {
  elapsed_time = millis() - start_time;

  background(game_bg_brown);

  let instImages = [inst11, inst12, inst13, inst14, inst15, inst16, inst17];
  if (instIndex < instImages.length) {
    image(instImages[instIndex], 0, 0);
  }

  if (elapsed_time > imageDisplayDuration) {
    if (direct_next_condition()) {
      instIndex++;
      start_time = millis(); // Reset the timer for the next image
      if (instIndex >= instImages.length) {
        next_condition = true;
      }
    }
  }

  image(cursor_default, mouseX, mouseY, 40, 64);

  if (next_condition) {
    next_condition = false;
    game_stage_controller = 5;
    start_time = millis();
    show_step = 0;
    Timer1.reset();
    instIndex = 0;
  }
}
// game_stage_controller = 5일 때 시행
function pt_game1_trial1() {
  // 초기화
  if (trial_start === false) {
    smile_count = 7;
    clickedIndex = -1;
    hoverIndex = -1;
    smile_alright = true;
    Timer1.reset();
    trial_start = true;
  }

  // 경과시간 초기화
  elapsed_time = millis() - start_time;
  
  // 0. 게임 세팅
  // 버튼 영역 설정
  let rectWidth = 145;
  let rectHeight = 80;
  let colGap = 10.5;
  let rowGap = 19.5;
  let startX = 956;
  let startY = 255;

  // rects 배열이 비어 있을 때만 버튼 영역 생성
  if (rects.length === 0) {
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 3; col++) {
        let x = startX + col * (rectWidth + colGap);
        let y = startY + row * (rectHeight + rowGap);
        rects.push({ x: x, y: y, width: rectWidth, height: rectHeight, clicked: false });
      }
    }
  }
  
  // 배경 설정
  background(game_bg_brown); 

  // 스마일게이지그리기
  image(smile_gauge, 26, -1, 600, 100);
  image(smile_gaugepoint, 75 + 34 * smile_count, 5, 40, 20);

  
  // 트라이 아이콘 띄우기
  if (frameCount % 40 == (0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19)){
    image(try_b_brown, 1583, 7, 60, 70); 
  } else image(try_b_grey, 1583, 7, 60, 70); 
  image(try_b_brown, 1654.6, 7, 60, 70); 
  image(try_b_brown, 1726.2, 7, 60, 70);

  // 알바생 영역 그리기
  noStroke();
  fill(120, 149, 171, 100); 
  ellipse(1625, 920, 1100, 1100);
  image(pt_on_smile, 1250, 380, 650, 646);

  // 포스 배경 그리기
  image(pos, 420, 90, 1000, 985); 

  // npc 영역 그리기
  fill(0, 0, 0, 60);
  rect(0, 123, 450, 1300, 180);
  image(npc3, -50, 556, 450, 446);

  // 대화 상자 그리기
  let bubbleX = 23; 
  let bubbleY = 250;
  image(bubble, bubbleX, bubbleY, 400, 350);
  fill(0);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("어머니의 어머니가 만든 듯 \n고향의 맛 물씬 풍기는 \nM.S.G.R 하나 \n시원하게 부탁해요~", bubbleX + 207, bubbleY + 140);

  // 타이머그리기
  noStroke();
  fill(180, 180, 180);
  rect(1620, 100, 165, 80, 10, 10, 10, 10);

  // try 텍스트 그리기
  textFont(myFont);
  textSize(55);
  fill(48, 46, 41);
  textAlign(LEFT, BASELINE);
  text('Try', 1480, 60, 400, 70);

  // 버튼 텍스트
  let texts = ["아메리카노", "초코우유", "오종스페셜",
    "딸기라떼", "미숫가루", "수플레 \n팬케이크",
    "카페모카", "쑥스무디", "쌀케이크",
    "페퍼민트티", "생노른자", "앙버터스콘",
    "오렌지주스", "우롱차", "녹차빙수",
    "오이에이드", "타로버블티", "마카롱"
  ];

  textSize(55);
  fill(48, 46, 41);
  textAlign(LEFT, TOP);

  // pos 이미지를 버튼 뒤에 모두 위치시킴
  for (let i = 0; i < rects.length; i++) {
    let posImage = posImages[i];
    if (posImage) {
      image(posImage, rects[i].x - 170, rects[i].y, rects[i].width, rects[i].height);
    } else {
      console.error(`posImage at index ${i} is undefined`);
    }
  }

  // 버튼 그리기
  for (let i = 0; i < rects.length; i++) {
    if (clickedIndex === i) {
      // 정답 클릭 시 파란색, 오답 클릭 시 빨간색
      if (i == 4) {
        fill(0, 0, 255);
      } else {
        fill(255, 0, 0);
      }
      rect(rects[i].x - 170, rects[i].y, rects[i].width, rects[i].height); // 색상이 변경된 버튼 그리기
    } else if (hoverIndex === i && clickedIndex !== i) {
      // hover 시 버튼을 사라지게 함
      noFill();
      noStroke();
      rect(rects[i].x - 170, rects[i].y, rects[i].width, rects[i].height); // 숨겨진 버튼
    } else {
      fill(180, 180, 180);
      rect(rects[i].x - 170, rects[i].y, rects[i].width, rects[i].height);
    }

    // 텍스트 그리기 (텍스트 위치는 고정)
    fill(0);
    let textX = rects[i].x - 163; // x축 -170 이동에 맞게 조정
    let textY = rects[i].y + 5;
    let textToShow = texts[i % texts.length];

    // 텍스트 크기 조절
    if (textWidth(textToShow) > rects[i].width - 10 || textAscent() + textDescent() > rects[i].height) {
      let ratio = min((rects[i].width - 5) / textWidth(textToShow), rects[i].height / (textAscent() + textDescent()));
      textSize(50 * ratio);
    }
    text(textToShow, textX, textY);
  }

  // hover 시 poslist 이미지 표시
  if (hoverIndex !== -1) {
    let posListX = 422; // poslist의 좌푯값을 x축 -170 이동
    let posListY = 135;
    image(posList, posListX, posListY, 992, 700);
  }
    
  // 타이머 시작 
  Timer1.update();
  Timer1.display(myFont, std_textSize);

  // 스마일 게이지 포인트 제어
  if (frameCount % 20 == 0){ // 처음엔 더 느리게 깎이기
    smile_count--;
  }  
  if (keyIsPressed){
    hit_sound.play();
    if (key == ' ' && keyPressedTime === 0){
      keyPressedTime = millis(); // 누른 순간의 시간을 기록
      smile_count++;
    }
  } else {
    keyPressedTime = 0; // 키를 떼면 초기화
  }
  smile_count = constrain(smile_count, 0, 13.5);
  image(smile_gaugepoint, 75 + 34 * smile_count, 5, 40, 20);
  if (smile_count <= 0){
    smile_alright = false;
    bad(0); // 스마일 이슈
    trial_start = false;
    p_t1_success = false;
    Timer1.reset(); // 타이머 리셋
  }
    
  // 게임 메인 동작
  if (!Timer1.isTimeout() && smile_alright){
    if (mouseIsPressed){
      mouse_click_sound.play();
      for (let i = 0; i < rects.length; i++) {
        if (mouseX > rects[i].x - 170 && mouseX < rects[i].x - 170 + rects[i].width && mouseY > rects[i].y && mouseY < rects[i].y + rects[i].height) {
          clickedIndex = i;
          // 스테이지에 따른 정답 인덱스
          let correctIndex = (i == 4);
          // 정답 클릭 시 결과 텍스트 "GOOD", 오답 클릭 시 "BAD"
          if (correctIndex) {
            good();
            trial_start = false;
            p_t1_success = true;
            Timer1.reset(); // 타이머 리셋
          } else {
            bad(2); // 오답 클릭 시
            trial_start = false;
            p_t1_success = false;
            Timer1.reset(); // 타이머 리셋
          }
        }
      }
    }
  } else {
    bad(1); // 시간 부족
    trial_start = false;
    p_t1_success = false;
    Timer1.reset(); // 타이머 리셋
  }    

  // 커서 모양
  image(cursor_mo, mouseX, mouseY, 55, 68);
  
  // 3. 다음 stage로
  if (next_condition) {
    next_condition = false;
    game_stage_controller = 6;
    start_time = millis(); // 시작시간 초기화
    smile_count = 7;
    Timer1.reset(); // 타이머 리셋
  }
}
// game_stage_controller = 7일 때 시행
function pt_game1_trial2() {
  // 초기화
  if (trial_start === false) {
    smile_count = 7;
    clickedIndex = -1;
    hoverIndex = -1;
    smile_alright = true;
    Timer1.reset();
    trial_start = true;
  }
  // 경과시간 초기화
  elapsed_time = millis() - start_time;
  
  // 0. 게임 세팅
  // 버튼 영역 설정
  let rectWidth = 145;
  let rectHeight = 80;
  let colGap = 10.5;
  let rowGap = 19.5;
  let startX = 956;
  let startY = 255;

  // rects 배열이 비어 있을 때만 버튼 영역 생성
  if (rects.length === 0) {
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 3; col++) {
        let x = startX + col * (rectWidth + colGap);
        let y = startY + row * (rectHeight + rowGap);
        rects.push({ x: x, y: y, width: rectWidth, height: rectHeight, clicked: false });
      }
    }
  }
  
  // 배경 설정
  background(game_bg_brown); 

  // 스마일게이지그리기
  image(smile_gauge, 26, -1, 600, 100);
  image(smile_gaugepoint, gaugepointX, 10, 40, 20);

  // 트라이 아이콘 띄우기
  if (p_t1_success) image(try_b_blue, 1583, 7, 60, 70); 
  else image(try_b_red, 1583, 7, 60, 70); 
  if (frameCount % 40 == (0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19)){
    image(try_b_brown, 1654.6, 7, 60, 70); 
  } else image(try_b_grey, 1654.6, 7, 60, 70); 
  image(try_b_brown, 1726.2, 7, 60, 70);


  // 알바생 영역 그리기
  noStroke();
  fill(120, 149, 171, 100); 
  ellipse(1625, 920, 1100, 1100);
  image(pt_on_smile, 1250, 380, 650, 646);

  // 포스 배경 그리기
  image(pos, 420, 90, 1000, 985); 

  // npc 영역 그리기
  fill(0, 0, 0, 60);
  rect(0, 123, 450, 1300, 180);
  image(npc1, -50, 556, 450, 446);

  // 대화 상자 그리기
  let bubbleX = 23; 
  let bubbleY = 250;
  image(bubble, bubbleX, bubbleY, 400, 350);
  fill(0);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("저... 저게뭐야. \n랑케? 저거 줘~ \n근데 랑케오가 뭐야?", bubbleX + 207, bubbleY + 140);

  // 타이머그리기
  noStroke();
  fill(180, 180, 180);
  rect(1620, 100, 165, 80, 10, 10, 10, 10);

  // try 텍스트 그리기
  textFont(myFont);
  textSize(55);
  fill(48, 46, 41);
  textAlign(LEFT, BASELINE);
  text('Try', 1480, 60, 400, 70);

  // 버튼 텍스트
  let texts = ["아메리카노", "초코우유", "오종스페셜",
    "딸기라떼", "미숫가루", "수플레 \n팬케이크",
    "카페모카", "쑥스무디", "쌀케이크",
    "페퍼민트티", "생노른자", "앙버터스콘",
    "오렌지주스", "우롱차", "녹차빙수",
    "오이에이드", "타로버블티", "마카롱"
  ];

  textSize(55);
  fill(48, 46, 41);
  textAlign(LEFT, TOP);

  // pos 이미지를 버튼 뒤에 모두 위치시킴
  for (let i = 0; i < rects.length; i++) {
    let posImage = posImages[i];
    if (posImage) {
      image(posImage, rects[i].x - 170, rects[i].y, rects[i].width, rects[i].height);
    } else {
      console.error(`posImage at index ${i} is undefined`);
    }
  }

  // 버튼 그리기
  for (let i = 0; i < rects.length; i++) {
    if (clickedIndex === i) {
      // 정답 클릭 시 파란색, 오답 클릭 시 빨간색
      if (i == 12) {
        fill(0, 0, 255);
      } else {
        fill(255, 0, 0);
      }
      rect(rects[i].x - 170, rects[i].y, rects[i].width, rects[i].height); // 색상이 변경된 버튼 그리기
    } else if (hoverIndex === i && clickedIndex !== i) {
      // hover 시 버튼을 사라지게 함
      noFill();
      noStroke();
      rect(rects[i].x - 170, rects[i].y, rects[i].width, rects[i].height); // 숨겨진 버튼
    } else {
      fill(180, 180, 180);
      rect(rects[i].x - 170, rects[i].y, rects[i].width, rects[i].height);
    }

    // 텍스트 그리기 (텍스트 위치는 고정)
    fill(0);
    let textX = rects[i].x - 163; // x축 -170 이동에 맞게 조정
    let textY = rects[i].y + 5;
    let textToShow = texts[i % texts.length];

    // 텍스트 크기 조절
    if (textWidth(textToShow) > rects[i].width - 10 || textAscent() + textDescent() > rects[i].height) {
      let ratio = min((rects[i].width - 5) / textWidth(textToShow), rects[i].height / (textAscent() + textDescent()));
      textSize(50 * ratio);
    }
    text(textToShow, textX, textY);
  }

  // hover 시 poslist 이미지 표시
  if (hoverIndex !== -1) {
    let posListX = 422; // poslist의 좌푯값을 x축 -170 이동
    let posListY = 135;
    image(posList, posListX, posListY, 992, 700);
  }
    
  // 타이머 시작 
  Timer1.update();
  Timer1.display(myFont, std_textSize);

  // 스마일 게이지 포인트 제어
  if (frameCount % 20 == 0){ // 처음엔 더 느리게 깎이기
    smile_count--;
  }  
  if (keyIsPressed){
    hit_sound.play();
    if (key == ' ' && keyPressedTime === 0){
      keyPressedTime = millis(); // 누른 순간의 시간을 기록
      smile_count++;
    }
  } else {
    keyPressedTime = 0; // 키를 떼면 초기화
  }
  smile_count = constrain(smile_count, 0, 13.5);
  image(smile_gaugepoint, 75 + 34 * smile_count, 5, 40, 20);
  if (smile_count <= 0){
    smile_alright = false;
    bad(0); // 스마일 이슈
    trial_start = false;
    p_t2_success = false;
    Timer1.reset(); // 타이머 리셋
  }
    
  // 게임 메인 동작
  if (!Timer1.isTimeout() && smile_alright){
    if (mouseIsPressed){
      mouse_click_sound.play();
      for (let i = 0; i < rects.length; i++) {
        if (mouseX > rects[i].x - 170 && mouseX < rects[i].x - 170 + rects[i].width && mouseY > rects[i].y && mouseY < rects[i].y + rects[i].height) {
          clickedIndex = i;
          // 스테이지에 따른 정답 인덱스
          let correctIndex = (i == 12);
          // 정답 클릭 시 결과 텍스트 "GOOD", 오답 클릭 시 "BAD"
          if (correctIndex) {
            good();
            trial_start = false;
            p_t2_success = true;
            Timer1.reset(); // 타이머 리셋
          } else {
            bad(2); // 오답 클릭 시
            trial_start = false;
            p_t2_success = false;
            Timer1.reset(); // 타이머 리셋
          }
        }
      }
    }
  } else {
    bad(1); // 시간 부족
    trial_start = false;
    p_t2_success = false;
    Timer1.reset(); // 타이머 리셋
  }    

  // 커서 모양
  image(cursor_mo, mouseX, mouseY, 55, 68);

  // 3. 다음 stage로
  if (next_condition) {
    next_condition = false;
    game_stage_controller = 8; 
    start_time = millis(); // 시작시간 초기화
    smile_count = 7;
    Timer1.reset(); // 타이머 리셋
  }
}
// game_stage_controller = 9일 때 시행
function pt_game1_trial3() {
  // 초기화
  if (trial_start === false) {
    smile_count = 7;
    clickedIndex = -1;
    hoverIndex = -1;
    smile_alright = true;
    Timer1.reset();
    trial_start = true;
  }
  // 경과시간 초기화
  elapsed_time = millis() - start_time;
  
  // 0. 게임 세팅
  // 버튼 영역 설정
  let rectWidth = 145;
  let rectHeight = 80;
  let colGap = 10.5;
  let rowGap = 19.5;
  let startX = 956;
  let startY = 255;

  // rects 배열이 비어 있을 때만 버튼 영역 생성
  if (rects.length === 0) {
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 3; col++) {
        let x = startX + col * (rectWidth + colGap);
        let y = startY + row * (rectHeight + rowGap);
        rects.push({ x: x, y: y, width: rectWidth, height: rectHeight, clicked: false });
      }
    }
  }
  
  // 배경 설정
  background(game_bg_brown); 

  // 스마일게이지그리기
  image(smile_gauge, 26, -1, 600, 100);
  image(smile_gaugepoint, gaugepointX, 10, 40, 20);

  // 트라이 아이콘 띄우기
  if (p_t1_success) image(try_b_blue, 1583, 7, 60, 70); 
  else image(try_b_red, 1583, 7, 60, 70); 
  if (p_t2_success) image(try_b_blue, 1654.6, 7, 60, 70); 
  else image(try_b_red, 1654.6, 7, 60, 70); 
  if (frameCount % 40 == (0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19)){
    image(try_b_brown, 1726.2, 7, 60, 70); 
  } else image(try_b_grey, 1726.2, 7, 60, 70); 

  // 알바생 영역 그리기
  noStroke();
  fill(120, 149, 171, 100); 
  ellipse(1625, 920, 1100, 1100);
  image(pt_on_smile, 1250, 380, 650, 646);

  // 포스 배경 그리기
  image(pos, 420, 90, 1000, 985); 

  // npc 영역 그리기
  fill(0, 0, 0, 60);
  rect(0, 123, 450, 1300, 180);
  image(npc2, -50, 556, 450, 446);

  // 대화 상자 그리기
  let bubbleX = 23; 
  let bubbleY = 250;
  image(bubble, bubbleX, bubbleY, 400, 350);
  fill(0);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("목이 꽉 막힐 정도로 \n느끼하고 퍽퍽한 \nB.S.ANN 하나 부탁해요~", bubbleX + 207, bubbleY + 140);

  // 타이머그리기
  noStroke();
  fill(180, 180, 180);
  rect(1620, 100, 165, 80, 10, 10, 10, 10);

  // try 텍스트 그리기
  textFont(myFont);
  textSize(55);
  fill(48, 46, 41);
  textAlign(LEFT, BASELINE);
  text('Try', 1480, 60, 400, 70);

  // 버튼 텍스트
  let texts = ["아메리카노", "초코우유", "오종스페셜",
    "딸기라떼", "미숫가루", "수플레 \n팬케이크",
    "카페모카", "쑥스무디", "쌀케이크",
    "페퍼민트티", "생노른자", "앙버터스콘",
    "오렌지주스", "우롱차", "녹차빙수",
    "오이에이드", "타로버블티", "마카롱"
  ];

  textSize(55);
  fill(48, 46, 41);
  textAlign(LEFT, TOP);

  // pos 이미지를 버튼 뒤에 모두 위치시킴
  for (let i = 0; i < rects.length; i++) {
    let posImage = posImages[i];
    if (posImage) {
      image(posImage, rects[i].x - 170, rects[i].y, rects[i].width, rects[i].height);
    } else {
      console.error(`posImage at index ${i} is undefined`);
    }
  }

  // 버튼 그리기
  for (let i = 0; i < rects.length; i++) {
    if (clickedIndex === i) {
      // 정답 클릭 시 파란색, 오답 클릭 시 빨간색
      if (i == 11) {
        fill(0, 0, 255);
      } else {
        fill(255, 0, 0);
      }
      rect(rects[i].x - 170, rects[i].y, rects[i].width, rects[i].height); // 색상이 변경된 버튼 그리기
    } else if (hoverIndex === i && clickedIndex !== i) {
      // hover 시 버튼을 사라지게 함
      noFill();
      noStroke();
      rect(rects[i].x - 170, rects[i].y, rects[i].width, rects[i].height); // 숨겨진 버튼
    } else {
      fill(180, 180, 180);
      rect(rects[i].x - 170, rects[i].y, rects[i].width, rects[i].height);
    }

    // 텍스트 그리기 (텍스트 위치는 고정)
    fill(0);
    let textX = rects[i].x - 163; // x축 -170 이동에 맞게 조정
    let textY = rects[i].y + 5;
    let textToShow = texts[i % texts.length];

    // 텍스트 크기 조절
    if (textWidth(textToShow) > rects[i].width - 10 || textAscent() + textDescent() > rects[i].height) {
      let ratio = min((rects[i].width - 5) / textWidth(textToShow), rects[i].height / (textAscent() + textDescent()));
      textSize(50 * ratio);
    }
    text(textToShow, textX, textY);
  }

  // hover 시 poslist 이미지 표시
  if (hoverIndex !== -1) {
    let posListX = 422; // poslist의 좌푯값을 x축 -170 이동
    let posListY = 135;
    image(posList, posListX, posListY, 992, 700);
  }
    
  // 타이머 시작 
  Timer1.update();
  Timer1.display(myFont, std_textSize);

  // 스마일 게이지 포인트 제어
  if (frameCount % 20 == 0){ // 처음엔 더 느리게 깎이기
    smile_count--;
  }  
  if (keyIsPressed){
    hit_sound.play();
    if (key == ' ' && keyPressedTime === 0){
      keyPressedTime = millis(); // 누른 순간의 시간을 기록
      smile_count++;
    }
  } else {
    keyPressedTime = 0; // 키를 떼면 초기화
  }
  smile_count = constrain(smile_count, 0, 13.5);
  image(smile_gaugepoint, 75 + 34 * smile_count, 5, 40, 20);
  if (smile_count <= 0){
    smile_alright = false;
    bad(0); // 스마일 이슈
    trial_start = false;
    p_t3_success = false;
    Timer1.reset(); // 타이머 리셋
  }
    
  // 게임 메인 동작
  if (!Timer1.isTimeout() && smile_alright){
    if (mouseIsPressed){
      mouse_click_sound.play();
      for (let i = 0; i < rects.length; i++) {
        if (mouseX > rects[i].x - 170 && mouseX < rects[i].x - 170 + rects[i].width && mouseY > rects[i].y && mouseY < rects[i].y + rects[i].height) {
          clickedIndex = i;
          // 스테이지에 따른 정답 인덱스
          let correctIndex = (i == 11);
          // 정답 클릭 시 결과 텍스트 "GOOD", 오답 클릭 시 "BAD"
          if (correctIndex) {
            good();
            trial_start = false;
            p_t3_success = true;
            Timer1.reset(); // 타이머 리셋
          } else {
            bad(2); // 오답 클릭 시
            trial_start = false;
            p_t3_success = false;
            Timer1.reset(); // 타이머 리셋
          }
        }
      }
    }
  } else {
    bad(1); // 시간 부족
    trial_start = false;
    p_t3_success = false;
    Timer1.reset(); // 타이머 리셋
  } 

  // 커서 모양
  image(cursor_mo, mouseX, mouseY, 55, 68);
   
  // 3. 다음 stage로
  if (next_condition) {
    next_condition = false;
    game_stage_controller = 10;
    start_time = millis(); // 시작시간 초기화
    smile_count = 7;
    Timer1.reset(); // 타이머 리셋
  }
}
// game_stage_controller = 6, 8, 10일 때 시행
function pt_game1_showResults(){
  // 경과시간 초기화
  elapsed_time = millis()- start_time;  

  if (isFeedbackShowing){
    switch (currentFeedback){
      case "GOOD":
        if (!next_condition && (elapsed_time < 2000)) {
          push();
          background(alba_st1_good);
          pop();
          fill(128, 128, 128, 0);
          rect(0, 0, width, height);
          settingInitialize();
          image(textbox_brown_op, 200, 580, 1400, 400); // 텍스트 박스 위치
          text("이게 이 메뉴 맞죠?", 320, 700);
          // 커서
          image(cursor_mo, mouseX, mouseY, 55, 68);
          Timer1.reset(); // 타이머 리셋
        } 
        if (!next_condition && (elapsed_time >= 2000) && (elapsed_time < 4000)) {
          push();
          background(alba_st1_good);
          pop();
          // 텍스트 박스 및 대사
          fill(128, 128, 128, 0);
          rect(0, 0, width, height);
          settingInitialize();
          image(textbox_green_op, 200, 580, 1400, 400); // 텍스트 박스 위치
          text("네~ 맞아요!", 320, 700);
          // 커서
          image(cursor_default, mouseX, mouseY, 40, 64);
          Timer1.reset(); // 타이머 리셋
        } 
        if (!next_condition && (elapsed_time >= 4000) && (elapsed_time < 5500)) {
          
        if (!isSoundPlayed) {
          setTimeout(()=>{
            good_sound.play();
          }, 500);
          isSoundPlayed = true;
        }
          background(0); // 화면을 검정색으로 설정
          fill(255);
          textSize(100);
          textAlign(CENTER, CENTER);
          text("GOOD", width / 2, height / 2);
          Timer1.reset(); // 타이머 리셋
        } 
        if (!next_condition && elapsed_time >= 5500) {
          isFeedbackShowing = false; // 시간이 지나면 feedback 화면을 제거
          settingInitialize();
          next_condition = true;
          smile_count = 7;
          isSoundPlayed = false;
          Timer1.reset(); // 타이머 리셋
        }
        break;
      case "BAD0":
        if (!next_condition && (elapsed_time < 2000)) {
          push();
          background(alba_st1_bad);
          pop();
          fill(128, 128, 128, 0);
          rect(0, 0, width, height);
          settingInitialize();
          image(textbox_brown_op, 200, 580, 1400, 400); // 텍스트 박스 위치
          text("웃~짜~~ ^^;;", 320, 700);
          // 커서
          image(cursor_default, mouseX, mouseY, 40, 64);
          Timer1.reset(); // 타이머 리셋
        }  
        if (!next_condition && (elapsed_time >= 2000) && (elapsed_time < 4000)) {
          
          if (!isSoundPlayed) {
          setTimeout(()=>{
            bad_sound.play();
          }, 500);
          isSoundPlayed = true;
        }
          background(0); // 화면을 검정색으로 설정
          fill(255);
          textSize(100);
          textAlign(CENTER, CENTER);
          text("BAD", width / 2, height / 2);
          Timer1.reset(); // 타이머 리셋
        } 
        if (!next_condition && elapsed_time >= 4000) {
          isFeedbackShowing = false; // 시간이 지나면 feedback 화면을 제거
          settingInitialize();
          next_condition = true;
          smile_count = 7;
          isSoundPlayed = false;
          Timer1.reset(); // 타이머 리셋
        }
        break;  

      case "BAD1":
        if (!next_condition && (elapsed_time < 2000)) {
          push();
          background(alba_st1_badbad);
          pop();
          fill(128, 128, 128, 0);
          rect(0, 0, width, height);
          settingInitialize();
          image(textbox_green_op, 200, 580, 1400, 400); // 텍스트 박스 위치
          text("저기요, 주문 안 받으세요?;;;", 320, 700);
          // 커서
          image(cursor_default, mouseX, mouseY, 40, 64);
          Timer1.reset(); // 타이머 리셋
        }
        if (!next_condition && (elapsed_time >= 2000) && (elapsed_time < 4000)) {
          if (!isSoundPlayed) {
          setTimeout(()=>{
            bad_sound.play();
          }, 500);
          isSoundPlayed = true;
        }
          background(0); // 화면을 검정색으로 설정
          fill(255);
          textSize(100);
          textAlign(CENTER, CENTER);
          text("BAD", width / 2, height / 2);
          Timer1.reset(); // 타이머 리셋
        }
        if (!next_condition && elapsed_time >= 4000) {
          isFeedbackShowing = false; // 시간이 지나면 feedback 화면을 제거
          settingInitialize();
          next_condition = true;
          smile_count = 7;
          isSoundPlayed = false;
          Timer1.reset(); // 타이머 리셋
        }
        break;

        case "BAD2":
          if (!next_condition && (elapsed_time < 2000)) {
            push();
            background(alba_st1_badbad);
            pop();
            fill(128, 128, 128, 0);
            rect(0, 0, width, height);
            settingInitialize();
            image(textbox_green_op, 200, 580, 1400, 400); // 텍스트 박스 위치
            text("예? 그 메뉴 아니에요;;;", 320, 700);
            // 커서
            image(cursor_default, mouseX, mouseY, 40, 64);
            Timer1.reset(); // 타이머 리셋
          }
          if (!next_condition && (elapsed_time >= 2000) && (elapsed_time < 4000)) {
            if (!isSoundPlayed) {
          setTimeout(()=>{
            bad_sound.play();
          }, 500);
          isSoundPlayed = true;
        }
            background(0); // 화면을 검정색으로 설정
            fill(255);
            textSize(100);
            textAlign(CENTER, CENTER);
            text("BAD", width / 2, height / 2);
            Timer1.reset(); // 타이머 리셋
          }
          if (!next_condition && elapsed_time >= 4000) {
            isFeedbackShowing = false; // 시간이 지나면 feedback 화면을 제거
            settingInitialize();
            next_condition = true;
            smile_count = 7;
            isSoundPlayed = false;
            Timer1.reset(); // 타이머 리셋
          }
          break;
    }
  }

  // 3. 다음 stage로
  if (next_condition){
    next_condition = false;
    game_stage_controller++; 
    start_time = millis(); // 시작시간 초기화
    clickedIndex = [];
  }
}
// game_stage_controller = 11일 때 시행
function pt_tutorial_cafe_bar_bg2() {
  elapsed_time = millis() - start_time;

  background(cafe_bar_bg);
  image(pt_on_smile, width / 2 - 350, height / 2 - 500, 700, 700);

  if (!next_condition && show_step == 0) {
    image(textbox_brown_op, 200, 580, 1400, 400);
    textAlign(LEFT, TOP);
    
    fullText = [
      "아니 이 카페 michin 거 아냐?\n뭔 B.S.ANN 이러고 있어????\n내가 이게 앙버터스콘인지 어떻게 알아!!!!",
      "아냐 정신차려.\n자본주의는 많은 불합리한 것들을 받들게 하지.\n프롤레타리아 혁명은 나중에.\n일단은 주문부터 처리해야 해.",
      "지금 만들어야 하는 음료가... 이름이...",
      "나한테 대체... 왜 이러는 거야?"
    ];

    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      text(currentText, 320, 645);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      text(fullText[currentTextIndex], 320, 645);
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            next_condition = true;
          }
        }
      }
    }
  }

  image(cursor_default, mouseX, mouseY, 40, 64);

  if (next_condition) {
    next_condition = false;
    game_stage_controller = 12;
    start_time = millis();
    show_step = 0;
    Timer1.reset();
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
  }
}

// game_stage_controller = 12일 때 시행
function pt_game2_inst() {
  elapsed_time = millis() - start_time;

  background(game_bg_brown);

  let instImages = [inst21, inst22, inst23, inst24, inst25, inst26, inst27, inst28, inst29, inst210, inst211];
  if (instIndex < instImages.length) {
    image(instImages[instIndex], 0, 0);
  }

  if (elapsed_time > imageDisplayDuration) {
    if (direct_next_condition()) {
      instIndex++;
      start_time = millis(); // Reset the timer for the next image
      if (instIndex >= instImages.length) {
        next_condition = true;
      }
    }
  }

  image(cursor_default, mouseX, mouseY, 40, 64);

  if (next_condition) {
    next_condition = false;
    game_stage_controller = 13;
    start_time = millis();
    show_step = 0;
    Timer1.reset();
    instIndex = 0;
  }
}
// game_stage_controller = 13일 때 시행
function pt_game2_trial1() {
  // 경과시간 초기화
  elapsed_time = millis()- start_time;  
  // 0. 게임 세팅
  background(stage2_bg);
  // try 텍스트 그리기
  push();
  textFont(myFont);
  textSize(55);
  fill(48, 46, 41);
  textAlign(LEFT, BASELINE);
  text('Try', 1480, 60, 400, 70);
  //try 이미지 그리기
  if (frameCount % 40 == (0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19)){
    image(try_b_brown, 1583, 7, 60, 70); 
  } else image(try_b_grey, 1583, 7, 60, 70); 
  image(try_b_brown, 1654.6, 7, 60, 70); 
  image(try_b_brown, 1726.2, 7, 60, 70);
  //완성 버튼 그리기
  if (showFinMo && frameCount - finMoTimer > 50) {  
    showFinMo = false;
    isFinDefault = true;
  }
  if (isFinDefault) {
    image(fin_default, 1473, 750, 300, 200);
  } else {
    image(fin_mo, 1473, 750, 300, 200);
  }
  //레시피 그리기
  textFont(myFont);
  textSize(30);
  fill(48, 46, 41);
  textAlign(LEFT, BASELINE);
  text('레시피: \n쪼로로롱 산새가 노래하는 숲\n\n사용재료:\n - 코코아파우더\n - 숲 속의 고요한 나무\n - 데코레이션', 1295, 355);
  pop();
  //재료 그리기
  for (let ingredient of dpIngredients) {
    image(ingredient.img, ingredient.x, ingredient.y, ingredient.w, ingredient.h);
  }
  if (selectedIngredient && !selectedIngredient.original) {
    image(selectedIngredient.img, mouseX - selectedIngredient.w / 2, mouseY - selectedIngredient.h / 2, selectedIngredient.w, selectedIngredient.h);
  }
  drawIngredientHints();
  // 커서 그리기
  image(cursor_mo, mouseX, mouseY, 55, 68);
  if(mouseIsPressed){
    mouse_click_sound.play();
  }

  // mocha_fin 이미지 그리기
  if (showMochaFin) {
    image(mocha_fin, 0, 0);
    mocha_success = true;
    if (!mochaFinIncremented) {
      good_count += 3;
      mochaFinIncremented = true;
    }
  }
}
//game_stage_controller = 15일 때 시행
function pt_game2_trial2() {
  // 경과시간 초기화
  elapsed_time = millis()- start_time;  
  // 0. 게임 세팅
  background(stage2_bg);
  // try 텍스트 그리기
  push();
  textFont(myFont);
  textSize(55);
  fill(48, 46, 41);
  textAlign(LEFT, BASELINE);
  text('Try', 1480, 60, 400, 70);
  //try 이미지 그리기
  image(try_b_red, 1583, 7, 60, 70);
  if (frameCount % 40 == (0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19)){
    image(try_b_brown, 1654.6, 7, 60, 70); 
  } else image(try_b_grey, 1654.6, 7, 60, 70); 
  image(try_b_brown, 1726.2, 7, 60, 70);
  //완성 버튼 그리기
  if (showFinMo && frameCount - finMoTimer > 50) {  
    showFinMo = false;
    isFinDefault = true;
  }
  if (isFinDefault) {
    image(fin_default, 1473, 750, 300, 200);
  } else {
    image(fin_mo, 1473, 750, 300, 200);
  }
  //레시피 그리기
  textFont(myFont);
  textSize(30);
  fill(48, 46, 41);
  textAlign(LEFT, BASELINE);
  text('레시피: \n쪼로로롱 산새가 노래하는 숲\n\n사용재료:\n - 코코아파우더\n - 숲 속의 고요한 나무\n - 창작자의 센스있는 데코', 1295, 355);
  pop();
  // 재료 그리기
  for (let ingredient of dpIngredients) {
    image(ingredient.img, ingredient.x, ingredient.y, ingredient.w, ingredient.h);
  }
  if (selectedIngredient && !selectedIngredient.original) {
    image(selectedIngredient.img, mouseX - selectedIngredient.w / 2, mouseY - selectedIngredient.h / 2, selectedIngredient.w, selectedIngredient.h);
  }
  drawIngredientHints();
  // 커서 그리기
  image(cursor_mo, mouseX, mouseY, 55, 68);
  if(mouseIsPressed){
    mouse_click_sound.play();
  }

  // mocha_fin 이미지 그리기
  if (showMochaFin) {
    image(mocha_fin, 0, 0);
    mocha_success = true;
    if (!mochaFinIncremented) {
      good_count += 2;
      bad_count += 1;
      mochaFinIncremented = true;
    }
  }
}
//game_stage_controller = 17일 때 시행
function pt_game2_trial3() {
  // 경과시간 초기화
  elapsed_time = millis()- start_time;  
  // 0. 게임 세팅
  background(stage2_bg);
  // try 텍스트 그리기
  push();
  textFont(myFont);
  textSize(55);
  fill(48, 46, 41);
  textAlign(LEFT, BASELINE);
  text('Try', 1480, 60, 400, 70);
  pop();
  // try 이미지 그리기
  image(try_b_red, 1583, 7, 60, 70);
  image(try_b_red, 1654.6, 7, 60, 70); 
  if (frameCount % 40 == (0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19)) {
    image(try_b_brown, 1726.2, 7, 60, 70); 
  } else {
    image(try_b_grey, 1726.2, 7, 60, 70); 
  }
  // 완성 버튼 그리기
  if (showFinMo && frameCount - finMoTimer > 50) {  
    showFinMo = false;
    isFinDefault = true;
  }
  if (isFinDefault) {
    image(fin_default, 1473, 750, 300, 200);
  } else {
    image(fin_mo, 1473, 750, 300, 200);
  }
  // 레시피 그리기
  push();
  textFont(myFont);
  textSize(30);
  fill(48, 46, 41);
  textAlign(LEFT, BASELINE);
  text('레시피: \n쪼로로롱 산새가 노래하는\n숲속 모카\n\n사용재료:\n - 코코아파우더\n - 숲 속의 고요한 나무\n - 창작자의 센스있는 데코', 1295, 335);
  pop();
  // 재료 그리기
  for (let ingredient of dpIngredients) {
    image(ingredient.img, ingredient.x, ingredient.y, ingredient.w, ingredient.h);
  }
  if (selectedIngredient && !selectedIngredient.original) {
    image(selectedIngredient.img, mouseX - selectedIngredient.w / 2, mouseY - selectedIngredient.h / 2, selectedIngredient.w, selectedIngredient.h);
  }
  drawIngredientHints();
  // 커서 그리기
  image(cursor_mo, mouseX, mouseY, 55, 68);
  if(mouseIsPressed){
    mouse_click_sound.play();
  }

  // mocha_fin 이미지 그리기
  if (showMochaFin) {
    image(mocha_fin, 0, 0);
    mocha_success = true;
    if (!mochaFinIncremented) {
      good_count += 1;
      bad_count += 2;
      mochaFinIncremented = true;
    } 
  }
}
//game_stage_controller = 14, 16일 때 시행
function pt_game2_result() {
  if (!isSoundPlayed) {
          setTimeout(()=>{
            bad_sound.play();
          }, 500);
          isSoundPlayed = true;
        }
  background(game_bg_brown);
  
  let rectWidth = 400;
  let rectHeight = 600;
  let spacing = (width - 3 * rectWidth) / 4; // 4개의 간격으로 나누어 계산

  let x1 = spacing;
  let x2 = x1 + rectWidth + spacing;
  let x3 = x2 + rectWidth + spacing;
  let y = ((height - rectHeight) / 2) - 50; // 화면 중앙에 맞추기 위해 계산
  
  push();
  noStroke();
  fill(254, 242, 224);
  rect(x1, y-30, rectWidth, rectHeight);

  fill(254, 242, 224);
  rect(x2, y-30, rectWidth, rectHeight);

  fill(254, 242, 224);
  rect(x3, y-30, rectWidth, rectHeight);
  pop();

  // rect들의 상단과 화면 상단 사이의 간격
  let gap = height - y;

  let goalIn10Text = "";
  let goalIn16Text = "";
  let goalIn22Text = "";

  switch(game_stage_controller) {
    case 14:
      if(goalIn10<10 && goalIn10>0){
        goalIn10Text = "숲에 흙이\n그렇게 부족해서\n되겠나?\n더 팍팍\n뿌리게!";
      } else if(goalIn10==0){
        goalIn10Text = "아니\n초코파우더를\n적어놨는데도...\n안 넣으면...\n알바하기\n싫다는 건가?";
      } else if(goalIn10>=10) {
        goalIn10Text = "훌륭하네!\n당신은\n혹시 움파룸파~?";
      }
      if(goalIn16>=1){
        goalIn16Text = "이걸 알아듣네?";
      } else if(goalIn16==0){
        goalIn16Text = "산새가\n노래하는\n숲인데...\n나무 어디갔어\n나무!!?";
      }
      if(goalIn22>=1){
        goalIn22Text = "숲이\n활기차구먼!\n여기는\n더 이상\n안 건드려도\n되겠어~";
      } else if(goalIn22==0){
        goalIn22Text = "너의 센스는\n거기까지인가?\n숲에 활력을\n넣어주는...\n센스가\n없다니...";
      }
      break;
    case 16:
      if(goalIn10<10 && goalIn10>0){
        goalIn10Text = "숲에 흙이\n그렇게\n부족해서\n되겠나?\n더 팍팍\n뿌리게!";
      } else if(goalIn10==0){
        goalIn10Text = "파우더 더 많이!!!\n수북하게!!!\n이래도 되나\n할 만큼!!!";
      } else if(goalIn10>=10) {
        goalIn10Text = "훌륭하네!\n당신은\n혹시 움파룸파~?";
      }
      if(goalIn16>=1){
        goalIn16Text = "이걸 알아듣네?";
      } else if(goalIn16==0){
        goalIn16Text = "나무 찾으라고!!\n저기 재료 중에\n나무 닮은 거!!!\n초록색!!!!";
      }
      if(goalIn22>=1){
        goalIn22Text = "숲이\n활기차구먼!\n여기는\n더 이상\n안 건드려도\n되겠어~";
      } else if(goalIn22==0){
        goalIn22Text = "활력!!\n동물 친구\n넣어 달라고!!!\n숲에\n살만 한 애!!!!";
      }
      break;
  }
    
  // 텍스트 그리기
  push();
  textSize(80);
  fill(0);
  textAlign(CENTER, BASELINE);
  text("계속 하려면 아무 데나 더블클릭", width / 2, gap+30);  
  pop();

  // goalIn10Text, goalIn16Text, goalIn22Text 텍스트 그리기
  push();
  textSize(50);
  fill(0);
  textAlign(CENTER, CENTER);
  text(goalIn10Text, x1 + rectWidth / 2, y + rectHeight / 2-20);
  text(goalIn16Text, x2 + rectWidth / 2, y + rectHeight / 2-20);
  text(goalIn22Text, x3 + rectWidth / 2, y + rectHeight / 2-20);
  pop();

  // 커서
  image(cursor_default, mouseX, mouseY, 40, 64);
}
//game_stage_controller = 18일 때 시행
function pt_game2_final_result() {
  elapsed_time = millis() - start_time;
  background(game_bg_green);

  // 결과 화면 그리기
  if (!next_condition && mocha_success && show_step == 0) {
    
        if (!isSoundPlayed) {
          setTimeout(()=>{
            good_sound.play();
          }, 500);
          isSoundPlayed = true;
        }
    push();
    imageMode(CENTER);
    image(mocha_fin_, width/2, height/2-200, 500, 500);
    pop();
    push();
    image(textbox_black_op, 200, 580, 1400, 400);
    pop();
    fullText = [
      "자네, 더티 플레이팅에 정말 소질이 있구먼~"
    ];
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          isSoundPlayed = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      text(fullText[currentTextIndex], 350, 700);
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            next_condition = true;
          }
        }
      }
    }
  } else if (!next_condition && !mocha_success && show_step == 0) {
    if (!isSoundPlayed) {
          setTimeout(()=>{
            bad_sound.play();
          }, 500);
          isSoundPlayed = true;
        }
    push();
    imageMode(CENTER);
    image(mocha_default, width/2, height/2-200, 500, 500);
    pop();
    push();
    image(textbox_black_op, 200, 580, 1400, 400);
    pop();
    fullText = [
      "자네가 만든 건 더티는커녕\n아무 것도 넣지 않은\n커피와 다를 게 없다네 ㅋ"
    ];
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      text(fullText[currentTextIndex], 350, 700);
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            isSoundPlayed = false;
            next_condition = true;
          }
        }
      }
    }
  }

  if (next_condition) {
    next_condition = false;
    start_time = millis();
    typing = true;
    charIndex = 0;
    game_stage_controller = 19; // Ensure game stage is updated here
    currentTextIndex = 0;
    showMochaFin = false;
  }
}
//알바생 미니게임 2 소스
function drawIngredientHints() {
  if (mouseX > 74 && mouseX < 194 && mouseY > 74 && mouseY < 193) {
    image(int1, 0, 0);
  } else if (mouseX > 210 && mouseX < 330 && mouseY > 74 && mouseY < 193) {
    image(int2, 0, 0);
  } else if (mouseX > 346 && mouseX < 466 && mouseY > 74 && mouseY < 193) {
    image(int3, 0, 0);
  } else if (mouseX > 482 && mouseX < 602 && mouseY > 74 && mouseY < 193) {
    image(int4, 0, 0);
  } else if (mouseX > 618 && mouseX < 738 && mouseY > 74 && mouseY < 193) {
    image(int5, 0, 0);
  } else if (mouseX > 754 && mouseX < 874 && mouseY > 74 && mouseY < 193) {
    image(int6, 0, 0);
  } else if (mouseX > 890 && mouseX < 1010 && mouseY > 74 && mouseY < 193) {
    image(int7, 0, 0);
  } else if (mouseX > 1026 && mouseX < 1146 && mouseY > 74 && mouseY < 193) {
    image(int8, 0, 0);
  } else if (mouseX > 74 && mouseX < 194 && mouseY > 210 && mouseY < 329) {
    image(int9, 0, 0);
  } else if (mouseX > 210 && mouseX < 330 && mouseY > 210 && mouseY < 329) {
    image(int10, 0, 0);
  } else if (mouseX > 346 && mouseX < 466 && mouseY > 210 && mouseY < 329) {
    image(int11, 0, 0);
  } else if (mouseX > 482 && mouseX < 602 && mouseY > 210 && mouseY < 329) {
    image(int12, 0, 0);
  } else if (mouseX > 618 && mouseX < 738 && mouseY > 210 && mouseY < 329) {
    image(int13, 0, 0);
  } else if (mouseX > 754 && mouseX < 874 && mouseY > 210 && mouseY < 329) {
    image(int14, 0, 0);
  } else if (mouseX > 890 && mouseX < 1010 && mouseY > 210 && mouseY < 329) {
    image(int15, 0, 0);
  } else if (mouseX > 1026 && mouseX < 1146 && mouseY > 210 && mouseY < 329) {
    image(int16, 0, 0);
  } else if (mouseX > 74 && mouseX < 194 && mouseY > 346 && mouseY < 465) {
    image(int17, 0, 0);
  } else if (mouseX > 210 && mouseX < 330 && mouseY > 346 && mouseY < 465) {
    image(int18, 0, 0);
  } else if (mouseX > 346 && mouseX < 466 && mouseY > 346 && mouseY < 465) {
    image(int19, 0, 0);
  } else if (mouseX > 482 && mouseX < 602 && mouseY > 346 && mouseY < 465) {
    image(int20, 0, 0);
  } else if (mouseX > 618 && mouseX < 738 && mouseY > 346 && mouseY < 465) {
    image(int21, 0, 0);
  } else if (mouseX > 754 && mouseX < 874 && mouseY > 346 && mouseY < 465) {
    image(int22, 0, 0);
  } else if (mouseX > 890 && mouseX < 1010 && mouseY > 346 && mouseY < 465) {
    image(int23, 0, 0);
  } else if (mouseX > 1026 && mouseX < 1146 && mouseY > 346 && mouseY < 465) {
    image(int24, 0, 0);
  }
}
//알바생 미니게임 2 소스
function doubleClicked() {
  switch(game_stage_controller) {
    case 14:
    case 16:
      game_stage_controller++;
      mochaFinIncremented = false;
      break;
  }
}
//알바생 미니게임 2 소스
function mouseDragged() {
  if (selectedIngredient) {
    mouseTrail.push({ x: mouseX, y: mouseY });
  }
}
//알바생 미니게임 2 소스
function mouseReleased() {
  if (gameSuccess || finDefaultClickCount >= 3) return;

  if (selectedIngredient) {
    if (mouseX > dp_x && mouseX < dp_x + 1.5*dp_width && mouseY > dp_y && mouseY < dp_y + 1.4*dp_height) {
      if (selectedIngredient.img === in9) {
        selectedIngredient.img = indi1;
        selectedIngredient.w *= 1.5; // 크기를 1.5배로 늘림
      } else if (selectedIngredient.img === in10) {
        selectedIngredient.img = indi2;
        selectedIngredient.w *= 1.5; // 크기를 1.5배로 늘림
        goalIn10++;
      } else if (selectedIngredient.img === in11) {
        selectedIngredient.img = indi3;
        selectedIngredient.w *= 1.5; // 크기를 1.5배로 늘림
      } else if (selectedIngredient.img === in24) {
        selectedIngredient.img = indi4;
        selectedIngredient.w *= 1.5; // 크기를 1.5배로 늘림
      } else if (selectedIngredient.img === in6) {
        selectedIngredient.img = indi5;
        selectedIngredient.w *= 1.5; // 크기를 1.5배로 늘림
      } else if (selectedIngredient.img === in16) {
        goalIn16++;
      } else if (selectedIngredient.img === in22) {
        goalIn22++;
      } else {
        invalidIngredient = true;
      }

      selectedIngredient.x = mouseX - selectedIngredient.w / 2;
      selectedIngredient.y = mouseY - selectedIngredient.h / 2;

      if (!dpIngredients.includes(selectedIngredient)) {
        dpIngredients.push(selectedIngredient);
      }

      if ([indi1, indi2, indi3, indi4, indi5].includes(selectedIngredient.img)) {
        //scatterIngredient(selectedIngredient);
      }
    } else {
      let index = dpIngredients.indexOf(selectedIngredient);
      if (index > -1) {
        dpIngredients.splice(index, 1);
        if (selectedIngredient.img === indi2) {
          goalIn10--;
        } else if (selectedIngredient.img === indi5) {
          goalIn16--;
        } else if (selectedIngredient.img === indi3) {
          goalIn22--;
        }
      }
    }
    // selectedIngredient를 초기화하여 마우스에 계속 잡혀있지 않도록 함
    selectedIngredient = null;
  }
  mouseTrail = [];
}

//game_stage_controller = 19일 때 시행
function pt_bypos1() {
  elapsed_time = millis() - start_time;
  next_condition = false;
  initialGoodCount = good_count; // 현재 good_count 저장
  initialBadCount = bad_count; // 현재 bad_count 저장

  background(bypos);

  if (!next_condition && show_step == 0) {
    image(textbox_brown_op, 200, 580, 1400, 400);
    textAlign(LEFT, TOP);
    
    fullText = [
      "웩-!!\n이제 메모지 보면 토할 것 같다.\n도대체 이 사장은 어디서 메모지를\n계속 뿌리는 거야?",
      "아니...\n그리고 모카 음료에\n브로콜리는 뭐야?",
      "그리고...\n손잡이에 초코가루 뿌리면\n어떻게 마시라는 거지?",
      "도대체 감성이란...\n\n에휴...\n이제 또 뭔 괴랄한 짓을 시키려나..."
    ];

    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      text(currentText, 320, 645);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      text(fullText[currentTextIndex], 320, 645);
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            next_condition = true;
          }
        }
      }
    }
  }

  image(cursor_default, mouseX, mouseY, 40, 64);

  if (next_condition) {
    next_condition = false;
    game_stage_controller = 20;
    start_time = millis();
    show_step = 0;
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
  }
}
//game_stage_controller = 20일 때 시행
function pt_ipad() {
  elapsed_time = millis() - start_time;

  background(bg_ipad);

  if (!next_condition && show_step == 0) {
    image(textbox_brown_op, 200, 580, 1400, 400);
    textAlign(LEFT, TOP);
    
    fullText = ["음? 웬 패드지?"];

    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      text(currentText, 320, 645);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      text(fullText[currentTextIndex], 320, 645);
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            next_condition = true;
          }
        }
      }
    }
  }

  image(cursor_default, mouseX, mouseY, 40, 64);

  if (next_condition) {
    next_condition = false;
    game_stage_controller = 21;
    start_time = millis();
    show_step = 0;
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
  }
}
//game_stage_controller = 21일 때 시행
function pt_ipad_com() {
  elapsed_time = millis() - start_time;

  background(bg_ipad_com);

  if (!next_condition && show_step == 0) {
    fullText = [
      "사장 :\n메모지가 싫다고 하니 디지털 기기로 업무 지시 주겠네.",
      "감성카페는 \n평판 관리가 가장 중요한 법.",
      "간혹 나의 예술혼을 무시하는 댓글들이 달릴 때가 있는데,\n그것들을 좀 처리해 주면 좋을 것 같네.",
      "마지막 업무까지도\n 유심히 지켜보도록 하지."
    ];

    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      push();
      textAlign(CENTER);
      fill(0);
      textSize(40);
      text(currentText, width / 2, height / 2 - 40);
      pop();
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      push();
      textAlign(CENTER);
      fill(0);
      textSize(40);
      text(fullText[currentTextIndex], width / 2, height / 2 - 40);
      pop();
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            next_condition = true;
          }
        }
      }
    }
  }

  image(cursor_default, mouseX, mouseY, 40, 64);

  if (next_condition) {
    next_condition = false;
    game_stage_controller = 22;
    start_time = millis();
    show_step = 0;
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
  }
}
//game_stage_controller = 22일 때 시행
function pt_bypos2() {
  elapsed_time = millis() - start_time;

  background(bypos);

  if (!next_condition && show_step == 0) {
    image(textbox_brown_op, 200, 580, 1400, 400);
    textAlign(LEFT, TOP);
    
    fullText = ["...\n좀 소름인데.\n걸리기 전에 빨리...\n일... 일을 하자..."];

    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      text(currentText, 320, 645);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      text(fullText[currentTextIndex], 320, 645);
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            next_condition = true;
          }
        }
      }
    }
  }

  image(cursor_default, mouseX, mouseY, 40, 64);

  if (next_condition) {
    next_condition = false;
    game_stage_controller = 23;
    start_time = millis();
    show_step = 0;
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
  }
}


// game_stage_controller = 23일 때 시행
function pt_game3_inst() {
  elapsed_time = millis() - start_time;

  // 배경 그리기
  background(game_bg_brown);

  // 현재 inst 이미지 그리기
  let instImages = [inst31, inst32, inst33, inst34, inst35, inst36];
  if (instIndex < instImages.length) {
    image(instImages[instIndex], 0, 0);
  }

  // inst 이미지 전환을 위한 조건
  if (elapsed_time > imageDisplayDuration) {
    if (direct_next_condition()) {
      instIndex++;
      start_time = millis(); // Reset the timer for the next image
      if (instIndex >= instImages.length) {
        next_condition = true;
      }
    }
  }

  // 커서 그리기
  image(cursor_default, mouseX, mouseY, 40, 64);

  // 다음 단계로
  if (next_condition) {
    next_condition = false;
    game_stage_controller = 24;
    start_time = millis(); // 시작시간 초기화
    show_step = 0; // show_step 초기화
    Timer3.reset(); // 타이머 리셋
    instIndex = 0; // 인덱스 초기화
  }
}
// game_stage_controller = 24일 때 시행
function pt_game3() {
  // 경과시간 초기화
  elapsed_time = millis() - start_time;

  // 변수 설정
  let imgX = width / 2 - phone.width / 2;
  let imgY = height / 2 - phone.height / 2 - 80;

  // comments 배열 설정
  if (comments.length === 0) {
    comments = [comment1, comment2, comment3, comment4, comment5, comment6, comment7, comment8, comment9];
  }

  // 0. 배경 설정
  background(game_bg_brown);
  
  // phone 그리기
  push();
  imageMode(CENTER);
  image(phone, width / 2, height / 2 - 80);
  // commentbox 그리기
  image(commentbox3rd, width / 2, height / 2 - 80);
  image(commentbox2nd, width / 2, height / 2 - 80);

  // 현재 comment 그리기 (Code A 적용)
  if (currentCommentIndex < comments.length && !showFeedback) {
    let commentX = width / 2;
    let commentY = height / 2 - 80;

    if (isBadKeyPressed) {
      commentX -= 100; // 왼쪽으로 움직임
    } else if (isGoodKeyPressed) {
      commentX += 100; // 오른쪽으로 움직임
    }

    image(comments[currentCommentIndex], commentX, commentY);
  }
  pop();

  // pt 그리기
  image(pt_on_smile, 1400, 554, 450, 446);

  // swipe 그리기
  imageMode(CORNER);
  if (isBadKeyPressed) {
    bit_key_sound.play();
    image(swipe_bad_clicked, imgX - 250, 320, 200, 200);
  } else {
    image(swipe_bad_none, imgX - 250, 320, 200, 200);
  }
  if (isGoodKeyPressed) {
    bit_key_sound.play();
    image(swipe_good_clicked, phone.width + 430, 320, 200, 200);
  } else {
    image(swipe_good_none, phone.width + 430, 320, 200, 200);
  }

  // 텍스트 그리기
  push();
  textAlign(CENTER, CENTER);
  textFont(myFont);
  textSize(80); // 텍스트 크기 조정
  fill(138, 7, 0); // 빨간색으로 변경
  text("DELETE", imgX - 140, 250); // swipe_bad_none 위에 텍스트 그리기
  fill(21, 0, 138); // 파란색으로 변경
  text("LIKE", imgX + phone.width + 145, 250); // swipe_good_none 위에 텍스트 그리기
  pop();

  // Try 텍스트 그리기
  push();
  textFont(myFont);
  textSize(55);
  fill(48, 46, 41);
  textAlign(LEFT, BASELINE);
  text('Try', 1050, 60, 400, 70);
  pop();

  // TimerBox 그리기
  push();
  noStroke();
  fill(180, 180, 180);
  rect(1620, 100, 165, 80, 10, 10, 10, 10);
  pop();

  if (!showFeedback) {
    // Timer 업데이트 및 표시
    Timer3.update();
  }
  Timer3.display(myFont, std_textSize);

  // Blinking effect 설정
  let blinkState = frameCount % 40 < 10 ? 0 : 1;
  
  let tryButtons = [];
  let currentCount = badCount + goodCount;

  // 기존 버튼들 그리기
  for (let i = 0; i < currentCount; i++) {
    if (i < badCount) {
      tryButtons.push(try_b_red);
    } else {
      tryButtons.push(try_b_blue);
    }
  }
  // 남은 버튼들 그리기
  for (let i = currentCount; i < 9; i++) {
    if (i === currentCount && blinkState === 0) {
      tryButtons.push(try_b_grey);
    } else {
      tryButtons.push(try_b_brown);
    }
  }
  // 모든 try 버튼 그리기
  for (let i = 0; i < 9; i++) {
    image(tryButtons[i], 1153.4 + (i * 71.6), 7, 60, 70);
  }

  // keyPressed 이벤트 처리 (Code B 적용)
  if (keyIsPressed && !showFeedback) {
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
      let isCorrect = (keyCode === RIGHT_ARROW && correctActions[currentCommentIndex]) || (keyCode === LEFT_ARROW && !correctActions[currentCommentIndex]);

      if (isCorrect) {
        
        if (!isSoundPlayed) {
          setTimeout(()=>{
            good_sound.play();
          }, 500);
          isSoundPlayed = true;
        }
        goodCount++;
        showFeedback = true;
        feedbackText = "자네, 댓글관리에 소질이 있군!!!";
        setTimeout(() => {
          showFeedback = false;
          nextComment();
          Timer3.reset();
        }, 1000); 
      } else {
        isWrongAnswer = true;
        badCount++;
        feedbackText = feedbackMessages[currentCommentIndex];
        showFeedback = true;
        nextComment();
        setTimeout(() => {
          showFeedback = false;
          isSoundPlayed = false;
          Timer3.reset();
        }, 2000); // 2초 동안 피드백 표시
      }

      if (keyCode === LEFT_ARROW) {
        isBadKeyPressed = true;
        setTimeout(() => {
          isBadKeyPressed = false;
        }, 500); // 0.5초 동안만 활성화
      } else if (keyCode === RIGHT_ARROW) {
        isGoodKeyPressed = true;
        setTimeout(() => {
          isGoodKeyPressed = false;
        }, 500); // 0.5초 동안만 활성화
      }
    }
  }

  // 피드백 표시
  if (showFeedback) {
    push();
    imageMode(CENTER);
    image(feedback, width / 2, height / 2 - 95);
    textAlign(CENTER, CENTER);
    textFont(myFont);
    textSize(25);
    fill(255);
    text(feedbackText, width / 2, height / 2 - 250); // feedback 이미지 바로 위에 텍스트 그리기
    pop();
  }

  // 게임 종료 조건 확인
  if (currentCommentIndex >= comments.length) {
    game_stage_controller = 25; // 다음 스테이지로 이동
  }

  // 커서를 없애기 위해 noCursor() 호출
  noCursor();
}
// game_stage_controller = 25일 때 시행
function pt_game3_result() {
  elapsed_time = millis() - start_time;
  background(bg_ipad_com);

  // goodCount와 badCount를 기반으로 점수 계산
  good_count = initialGoodCount + Math.floor(goodCount / 3);
  bad_count = initialBadCount + Math.max(0, 3 - (good_count - initialGoodCount));

  // 결과 화면 그리기
  if (!next_condition && show_step == 0 && goodCount >= 7) {
    fullText = [
      "댓글 관리를 이래 잘한다니...\n탐나는 인재군..."
    ];
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      push();
      textAlign(CENTER);
      fill(0);
      textSize(40);
      text(currentText, width / 2, height / 2 - 40);
      pop();
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      push();
      textAlign(CENTER);
      fill(0);
      textSize(40);
      text(fullText[currentTextIndex], width / 2, height / 2 - 40);
      pop();
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            next_condition = true;
          }
        }
      }
    }
  } else if (!next_condition && show_step == 0 && goodCount < 7 && goodCount >= 4) {
    fullText = [
      "흐음...\n자네는 노오력하다 보면 댓글관리 잘하게 될 걸세."
    ];
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      push();
      textAlign(CENTER);
      fill(0);
      textSize(40);
      text(currentText, width / 2, height / 2 - 40);
      pop();
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      push();
      textAlign(CENTER);
      fill(0);
      textSize(40);
      text(fullText[currentTextIndex], width / 2, height / 2 - 40);
      pop();
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            next_condition = true;
          }
        }
      }
    }
  } else if (!next_condition && show_step == 0 && goodCount < 4) {
    fullText = [
      "ㅋ 댓글 관리 하는 걸 보니\n자네는 우리 카페랑은 안 맞겠다;"
    ];
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      push();
      textAlign(CENTER);
      fill(0);
      textSize(40);
      text(currentText, width / 2, height / 2 - 40);
      pop();
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      push();
      textAlign(CENTER);
      fill(0);
      textSize(40);
      text(fullText[currentTextIndex], width / 2, height / 2 - 40);
      pop();
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            next_condition = true;
          }
        }
      }
    }
  }

  image(cursor_default, mouseX, mouseY, 40, 64);

  if (next_condition) {
    next_condition = false;
    game_stage_controller = 26; // 다음 스테이지로 이동
    start_time = millis();
    show_step = 0;
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
  }
}
// 알바생 미니게임 3 소스
function nextComment() {
  currentCommentIndex++;
  if (currentCommentIndex >= comments.length) {
    game_stage_controller = 25; // 다음 스테이지로 이동
  }
}

// game_stage_controller = 26일 때 시행
function pt_bypos3() {
  elapsed_time = millis() - start_time;

  background(bypos);

  if (!next_condition && show_step == 0) {
    image(textbox_brown_op, 200, 580, 1400, 400);
    textAlign(LEFT, TOP);

    fullText = [
      "끝!!!\n감성 카페는 다 이런 식으로\n댓글조작...을 하는구나... 거 참...",
      "일단 업무는 다 끝났고..."
    ];

    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      text(currentText, 320, 645);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      text(fullText[currentTextIndex], 320, 645);
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            next_condition = true;
          }
        }
      }
    }
  }

  image(cursor_default, mouseX, mouseY, 40, 64);

  if (next_condition) {
    next_condition = false;
    game_stage_controller = 27; // 다음 스테이지로 이동
    start_time = millis();
    show_step = 0;
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
  }
}
// game_stage_controller = 27일 때 시행
function pt_prof_shade() {
  elapsed_time = millis() - start_time;

  background(prof_shade);

  if (!next_condition && show_step == 0) {
    image(textbox_brown_op, 200, 580, 1400, 400);
    textAlign(LEFT, TOP);

    fullText = ["아! 저희 마감인데요 손님...?"];

    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      text(currentText, 320, 645);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      text(fullText[currentTextIndex], 320, 645);
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            next_condition = true;
          }
        }
      }
    }
  }

  image(cursor_default, mouseX, mouseY, 40, 64);

  if (next_condition) {
    next_condition = false;
    game_stage_controller = 28; // 다음 스테이지로 이동
    start_time = millis();
    show_step = 0;
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
  }
}
// game_stage_controller = 28일 때 시행
function pt_prof_entr() {
  elapsed_time = millis() - start_time;

  background(prof_entr);

  if (!next_condition && show_step == 0) {
    image(textbox_black_op, 200, 580, 1400, 400);
    textAlign(LEFT, TOP);

    fullText = [
      "사장님:\n하루동안 고생 많았네.\n나는 o.jon 카페 사장 오종환이라고 하네."
    ];

    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      text(currentText, 320, 645);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      text(fullText[currentTextIndex], 320, 645);
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            next_condition = true;
          }
        }
      }
    }
  }

  image(cursor_default, mouseX, mouseY, 40, 64);

  if (next_condition) {
    next_condition = false;
    game_stage_controller = 29; // 다음 스테이지로 이동
    start_time = millis();
    show_step = 0;
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
  }
}
// game_stage_controller = 29일 때 시행
function pt_prof_moody() {
  elapsed_time = millis() - start_time;

  background(prof_moody);

  if (!next_condition && show_step == 0) {
    image(textbox_black_op, 200, 580, 1400, 400);
    textAlign(LEFT, TOP);

    fullText = [
      "사장님:\n여기는 내 대학시절 감성전공을 살려...\n차린 아주 소중한 카페ez.",
      "감성으로 유학까지 다녀왔달까?"
    ];

    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      text(currentText, 320, 645);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      text(fullText[currentTextIndex], 320, 645);
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            next_condition = true;
          }
        }
      }
    }
  }

  image(cursor_default, mouseX, mouseY, 40, 64);

  if (next_condition) {
    next_condition = false;
    game_stage_controller = 30; // 다음 스테이지로 이동
    start_time = millis();
    show_step = 0;
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
  }
}
// game_stage_controller = 30일 때 시행
function pt_prof_tabon() {
  elapsed_time = millis() - start_time;

  background(prof_tabon);

  if (!next_condition && show_step == 0) {
    image(textbox_black_op, 200, 580, 1400, 400);
    textAlign(LEFT, TOP);

    fullText = ["사장님:\n무튼, 이제 합불 여부를 알려주어야겠지?"];

    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      text(currentText, 320, 645);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      text(fullText[currentTextIndex], 320, 645);
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            next_condition = true;
          }
        }
      }
    }
  }

  image(cursor_default, mouseX, mouseY, 40, 64);

  if (next_condition) {
    next_condition = false;
    game_stage_controller = 31; // 다음 스테이지로 이동
    start_time = millis();
    show_step = 0;
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
  }
}
// game_stage_controller = 31일 때 시행
function pt_prof_v() {
  elapsed_time = millis() - start_time;

  background(prof_v);

  if (!next_condition && show_step == 0) {
    image(textbox_black_op, 200, 580, 1400, 400);
    textAlign(LEFT, TOP);

    fullText = [
      "사장님(앞을 보며):\n내가 아날로그를 좀 좋아해서 말이지.",
      "성적표 형식으로 주려고 하네.\n사실 내가 옛날에는 대학 교수기도 했그든 ^^"
    ];

    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex + 1);
      text(currentText, 320, 645);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length) {
          typing = false;
          start_time = millis(); // Reset the timer for the delay
        }
      }
    } else {
      text(fullText[currentTextIndex], 320, 645);
      if (elapsed_time > textDisplayDuration) {
        if (direct_next_condition()) {
          currentTextIndex++;
          if (currentTextIndex < fullText.length) {
            typing = true;
            charIndex = 0;
            start_time = millis(); // Reset the timer for the next text line
          } else {
            next_condition = true;
          }
        }
      }
    }
  }

  image(cursor_default, mouseX, mouseY, 40, 64);

  if (next_condition) {
    next_condition = false;
    game_stage_controller = 32; // 다음 스테이지로 이동
    start_time = millis();
    show_step = 0;
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
  }
}
// game_stage_controller = 32일 때 시행
function pt_grade() {
  // 경과 시간 측정
  elapsed_time = millis() - start_time;

  if(good_count >= 8){
    background(alba_grade_a);
  } else if(good_count <= 7 && good_count >= 5){
    background(alba_grade_b);
  } else if(good_count <= 4 && good_count >= 3){
    background(alba_grade_c);
  } else if(good_count < 3){
    background(alba_grade_f);
  }

  if (direct_next_condition()){
    next_condition = true;
  }

  // 3. 다음 단계로
  if (next_condition){
    next_condition = false;
    game_stage_controller = 33; // 다음 스테이지로 이동 (32 -> 33 수정)
    start_time = millis(); // 시작시간 초기화
    show_step = 0; // show_step 초기화
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
  }
}
// game_stage_controller = 33일 때 시행
function pt_restart(){
  if (!next_condition){
    fill(0); // 검은 화면
    rect(0, 0, width, height);
    fill(255); // 하얀 글씨
    textSize(70); 
    textAlign(CENTER, CENTER);
    text("다시 시작하려면 새로고침 키를 누르세요", width/2, height/2);
    settingInitialize();
  }
}


//** 손님 **//

// game_controller = 51일 때 시행
function customer_tutorial(){
  // 경과 시간 측정
  elapsed_time = millis() - start_time;

  if (!next_condition && show_step == 0){ 
    image(c_cafe_far, 0, 0);
    image(textbox_green_op, 200, 580, 1400, 400); // 텍스트 박스 위치

    // 대사 목록
    fullText = [
      "아니 어떻게 카페가 주변에 하나도 없지???\n내 대학영어 과제!!!!! 내 졸업!!!! 으아아아",
      "아, 저기 카페 하나 있네!! 얼른 들어가야겠다!!"
    ];

    // 대사 한 글자씩 작성
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex+1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length){
          typing = false;
        } 
      }
    } else { // typing이 false
      if (direct_next_condition()){
        if (currentTextIndex < fullText.length -1) {
          currentTextIndex++; // fullText가 다 끝나지 않았을 때 
          charIndex = 0;
          typing = true;
        } else { // fullText가 다 돌았을 떄
          next_show = true;
        }
      } else { // 대사 한 단락 다 타이핑되긴 했는데 아직 다.넥.컨 입력 안 됐을 때
        text(currentText, 350, 700);
      }
    }

    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
  }

  if (!next_condition && show_step == 1){
    image(c_cafe_close, 0, 0);
    image(textbox_green_op, 200, 580, 1400, 400); // 텍스트 박스 위치

    // 대사 목록
    fullText = [
      "엥? 1인 3주문이라고? 이게 뭔 말도 안되는...",
      "아냐, 그래도 졸업은 해야지.\n과제 마감 1시간 남았다!!\n일단... 이 수상쩍은 카페라도..."
    ];

    // 대사 한 글자씩 작성
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex+1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length){
          typing = false;
        } 
      }
    } else { // typing이 false
      if (direct_next_condition()){
        if (currentTextIndex < fullText.length -1) {
          currentTextIndex++; // fullText가 다 끝나지 않았을 때 
          charIndex = 0;
          typing = true;
        } else { // fullText가 다 돌았을 떄
          next_show = true;
        }
      } else { // 대사 한 단락 다 타이핑되긴 했는데 아직 다.넥.컨 입력 안 됐을 때
        text(currentText, 350, 700);
      }
    }

    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
  }

  if (!next_condition && show_step == 2){
    next_condition = true;
  }

  if (next_condition){
    next_condition = false;
    game_stage_controller++; 
    start_time = millis(); // 시작시간 초기화
    show_step = 0; // show_step 초기화
  }

  // show_step 증가 구현방식
  if (next_show){
    next_show = false;
    show_step++;
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
  }  
}

// game_controller = 52일 때 시행
function customer_game1(){
  // 경과시간 초기화
  elapsed_time = millis() - start_time;

  if (!next_condition && show_step == 0){
    image(c_game1_line, 0, 0);
    image(textbox_green_op, 200, 580, 1400, 400); // 텍스트 박스 위치

    // 대사 목록
    fullText = [
      "1인 3주문... 일단은 미리 메뉴를 좀 봐야겠어."
    ];

    // 대사 한 글자씩 작성
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex+1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length){
          typing = false;
        } 
      }
    } else { // typing이 false
      if (direct_next_condition()){
        if (currentTextIndex < fullText.length -1) {
          currentTextIndex++; // fullText가 다 끝나지 않았을 때 
          charIndex = 0;
          typing = true;
        } else { // fullText가 다 돌았을 때
          next_show = true;
        }
      } else { // 대사 한 단락 다 타이핑되긴 했는데 아직 다.넥.컨 입력 안 됐을 때
        text(currentText, 350, 700);
      }
    }

    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
  }

  if (!next_condition && show_step == 1){
    image(c_game1_insta, 0, 0);
    image(textbox_green_op, 200, 580, 1400, 400); // 텍스트 박스 위치

    // 대사 목록
    fullText = [
      "여기선 메뉴판이 안 보이네....\n인별을 좀 살펴봐야겠다.",
      "오이 에이드는 뭐야? 으...\n일단 무난하게 복숭아 에이드 하나 시키고,\n배가 좀 고프니까...\n모카크림 브륄레 머핀? 도 하나 시키자.",
      "그리고... 시그니처니까 뭐 .. 이름이 왜이래?;;\n케냐의 풍미를 살린 크림 바닐라 예가체프?\n그래... 아이고 내 통장..."
    ];

    // 대사 한 글자씩 작성
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex+1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length){
          typing = false;
        } 
      }
    } else { // typing이 false
      if (direct_next_condition()){
        if (currentTextIndex < fullText.length -1) {
          currentTextIndex++; // fullText가 다 끝나지 않았을 때 
          charIndex = 0;
          typing = true;
        } else { // fullText가 다 돌았을 떄
          next_show = true;
        }
      } else { // 대사 한 단락 다 타이핑되긴 했는데 아직 다.넥.컨 입력 안 됐을 때
        text(currentText, 350, 700);
      }
    }

    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
  }

  if (!next_condition && show_step == 2){
    image(c_game1_line, 0, 0);
    image(textbox_green_op, 200, 580, 1400, 400); // 텍스트 박스 위치

    // 대사 목록
    fullText = [
      "줄이 거의 줄었군.\n빨리 주문하고 과제 제출해야지!!"
    ];

    // 대사 한 글자씩 작성
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex+1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length){
          typing = false;
        } 
      }
    } else { // typing이 false
      if (direct_next_condition()){
        if (currentTextIndex < fullText.length -1) {
          currentTextIndex++; // fullText가 다 끝나지 않았을 때 
          charIndex = 0;
          typing = true;
        } else { // fullText가 다 돌았을 떄
          next_show = true;
        }
      } else { // 대사 한 단락 다 타이핑되긴 했는데 아직 다.넥.컨 입력 안 됐을 때
        text(currentText, 350, 700);
      }
    }

    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
  }

  if (!next_condition && show_step == 3){
    image(c_game1_introduce, 0, 0);
    image(textbox_brown_op, 200, 580, 1400, 400); // 텍스트 박스 위치

    // 대사 목록
    fullText = [
      "안녕하세요!\n상호존중이 부족한 현대사회에서\n서로를 웃음으로 맞이하는 o.jon 카페입니다!^^",
      "1인 3메뉴 원칙이며,\n주문 시에는 웃음으로 알바생을 응대해주세요!^^"
    ];

    // 대사 한 글자씩 작성
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex+1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length){
          typing = false;
        } 
      }
    } else { // typing이 false
      if (direct_next_condition()){
        if (currentTextIndex < fullText.length -1) {
          currentTextIndex++; // fullText가 다 끝나지 않았을 때 
          charIndex = 0;
          typing = true;
        } else { // fullText가 다 돌았을 떄
          next_show = true;
        }
      } else { // 대사 한 단락 다 타이핑되긴 했는데 아직 다.넥.컨 입력 안 됐을 때
        text(currentText, 350, 700);
      }
    }

    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
  }

  if (!next_condition && show_step == 4){
    image(c_game1_conv_gr, 0, 0);

    // 대사 목록
    fullText = [
      "아...ㅎㅎ 네. 저 피치 에이드 하나랑-"
    ];

    // 대사 한 글자씩 작성
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex+1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length){
          typing = false;
        } 
      }
    } else { // typing이 false
      if (direct_next_condition()){
        if (currentTextIndex < fullText.length -1) {
          currentTextIndex++; // fullText가 다 끝나지 않았을 때 
          charIndex = 0;
          typing = true;
        } else { // fullText가 다 돌았을 떄
          next_show = true;
        }
      } else { // 대사 한 단락 다 타이핑되긴 했는데 아직 다.넥.컨 입력 안 됐을 때
        text(currentText, 350, 700);
      }
    }

    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
  }

  if (!next_condition && show_step == 5){
    image(c_game1_introduce, 0, 0);
    image(textbox_brown_op, 200, 580, 1400, 400); // 텍스트 박스 위치

    // 대사 목록
    fullText = [
      "앗 저희 주문은 메뉴판에서 골라주세요!\n저희 카페 규칙이어서요 ㅎㅎ\n물론 아름다운 웃음도 유지해주시고요 ^^"
    ];

    // 대사 한 글자씩 작성
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex+1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length){
          typing = false;
        } 
      }
    } else { // typing이 false
      if (direct_next_condition()){
        if (currentTextIndex < fullText.length -1) {
          currentTextIndex++; // fullText가 다 끝나지 않았을 때 
          charIndex = 0;
          typing = true;
        } else { // fullText가 다 돌았을 떄
          next_show = true;
        }
      } else { // 대사 한 단락 다 타이핑되긴 했는데 아직 다.넥.컨 입력 안 됐을 때
        text(currentText, 350, 700);
      }
    }

    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
  }

  if (!next_condition && show_step == 6){
    next_condition = true;
  }

  if (next_condition){
    next_condition = false;
    game_stage_controller++;
    start_time = millis(); // 시작시간 초기화
    show_step = 0; // show_step 초기화
  }

  // show_step 증가 구현방식
  if (next_show){
    next_show = false;
    show_step++;
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
  }  
}
// game_controller = 53일 때 시행
function game1_inst(){
  // 경과 시간 측정
  elapsed_time = millis() - start_time;

  // 배경 그리기
  background(game_bg_green);

  // 현재 inst 이미지 그리기
  let instImages = [c_g1_inst1, c_g1_inst2, c_g1_inst3, c_g1_inst4, c_g1_inst5, c_g1_inst6, c_g1_inst7, c_g1_inst8, c_g1_inst9];
  if (instIndex < instImages.length) {
    image(instImages[instIndex], 0, 0);
  }

  // inst 이미지 전환을 위한 조건
  if (millis() - lastInstChangeTime >= instChangeInterval) {
    if (direct_next_condition()) {
      instIndex++;
      lastInstChangeTime = millis(); // 마지막 전환 시간 업데이트
      if (instIndex >= instImages.length) {
        next_condition = true;
      }
    }
  }

  // 다음 단계로
  if (next_condition) {
    next_condition = false;
    game_stage_controller++;
    start_time = millis(); // 시작시간 초기화
    show_step = 0; // show_step 초기화
    instIndex = 0; // 인덱스 초기화
  }

  // 커서 그리기
  image(cursor_default, mouseX, mouseY, 60, 70);
}

// game_controller = 54일 때 시행
function game1_trial1(answer_key){
  // 경과시간 초기화
  elapsed_time = millis()- start_time;  

  if (!next_condition && !trial_start && show_step == 0 && elapsed_time > 500) {
    next_show = true;
  }

  // show_step 늘리기
  if (next_show){
    next_show = false;
    show_step++;
    if (show_step == 1){
      trial_start = true;
      Timer4.reset(); // 타이머 리셋
    }
  }

  // trial 시작
  if (!next_condition && trial_start){
    // 1. 배경사진 띄우기
    image(game_bg_green, 0, 0); 

    // 2. 게임 세팅
    // 스마일게이지그리기
    image(smile_gauge, 26, -1, 600, 100);
    image(smile_gaugepoint, 75 + 34 * smile_count, 5, 40, 20);
    smile_alright = true;
    // 트라이 아이콘 띄우기
    if (frameCount % 40 == (0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19)){
      image(c_try_icon_bla, 1583, 7, 60, 70); 
    } else image(c_try_icon_bro, 1583, 7, 60, 70); 
    image(c_try_icon_bla, 1654.6, 7, 60, 70); 
    image(c_try_icon_bla, 1726.2, 7, 60, 70);
    // 말풍선 띄우기
    image(think_bubble, 100, 130, 400, 400);
    // 말풍선 위 메뉴 이름
    textSize(std_textSize-10);
    textAlign(LEFT, CENTER);
    text("피치 에이드", 190, 290);
    settingInitialize();
    // 메뉴판 띄우기
    image(menu_new, 485, 150, 1320, 860); 
    // 손님 들어갈 네모칸
    noStroke(); 
    fill(255); 
    rect(100, 570, 350, 350, 20);
    settingInitialize(); // 세팅 초기화 
    // 손님 이미지 띄우기
    if (smile_count>5){
      image(customer_smile, 100, 570, 350, 350); 
    } else image(customer_default, 100, 570, 350, 350); 
    // 메뉴판 메뉴 각각에 버튼 생성
    let menu_array = Array(19); // 메뉴 버튼 좌표 담을 배열
    let menu_button_width = 370; // 고정
    let menu_button_height = 45; // 고정
    let menu_button = Array(19); // 메뉴 버튼 인스턴스 담을 배열
    // 메뉴 버튼 좌표들 초기화
    for (let j=0; j<menu_array.length; j++){
      if (j<10){
        menu_array[j] = [875, 412+menu_button_height*j, menu_button_width, menu_button_height];
      }
      else if (j<14){
        menu_array[j] = [1300, 412+menu_button_height*(j-10), menu_button_width, menu_button_height];
      } 
      else {
        menu_array[j] = [1300, 675+menu_button_height*(j-14), menu_button_width, menu_button_height];
      }
    }
    // 메뉴 버튼 인스턴스 생성해서 menu_button array에 담기
    for (let k=0; k<menu_button.length; k++){
      menu_button[k] = new Button(menu_array[k][0], menu_array[k][1], menu_array[k][2], menu_array[k][3]);         
      menu_button[k].display();
      settingInitialize();  
    } 
    // 정답이 되는 버튼 설정
    let answer = menu_button[answer_key];

    // 커서
    image(cursor_mo, mouseX, mouseY, cursor_mo_X, cursor_mo_Y);

    // 3. 본격 게임 작동
    // 타이머 시작 
    Timer4.update();
    Timer4.display(myFont, std_textSize);
    
    // 스마일 게이지 포인트 제어
    if (frameCount % 20 == 0){
      smile_count--;
    }  
    if (keyIsPressed){
      if (key == ' ' && keyPressedTime === 0){
        keyPressedTime = millis(); // 누른 순간의 시간을 기록
        smile_count++;
        hit_sound.play();
      }
    } else {
      keyPressedTime = 0; // 키를 떼면 초기화
    }
    smile_count = constrain(smile_count, 0, 13.5);
    image(smile_gaugepoint, 75 + 34 * smile_count, 5, 40, 20);
    if (smile_count <= 0){
      smile_alright = false;
      bad(0); // 스마일 이슈
      c_t1_success = false;
      trial_start = false;
      Timer4.reset(); // 타이머 리셋
    }

    // 게임 메인 동작
    if (!Timer4.isTimeout() && smile_alright){
      if (mouseIsPressed){
        if ((mouseX>answer.x && mouseX<(answer.x+answer.width))&&(mouseY>answer.y && mouseY<(answer.y+answer.height))){
          mouse_click_sound.play();
          good();
          trial_start = false;
          c_t1_success = true;
          Timer4.reset(); // 타이머 리셋
        } else if ((mouseX>875 && mouseX<1245 && mouseY>412 && mouseY<862) 
          | (mouseX>1300 && mouseX<1670 && mouseY>412 && mouseY<592)
          | (mouseX>1300 && mouseX<1670 && mouseY>675 && mouseY<900)) { 
          // 메뉴판 버튼이긴 한데 정답이 아닌 애들
          mouse_click_sound.play();
          bad(2); // 잘못된 답
          trial_start = false;
          c_t1_success = false;
          Timer4.reset(); // 타이머 리셋
        }
      }
    } else {
      bad(1); // 시간 부족
      trial_start = false;
      c_t1_success = false;
      Timer4.reset(); // 타이머 리셋
    }    
  }

  // 3. 다음 stage로
  if (next_condition){
    next_condition = false;
    game_stage_controller++; 
    start_time = millis(); // 시작시간 초기화
    smile_count = 7;
    show_step = 0; // show_step 초기화
  }
}

// game_stage_controller = 56일 때 시행
function game1_trial2(answer_key){
  // 경과시간 초기화
  elapsed_time = millis()- start_time;  

  if (!next_condition && !trial_start && show_step == 0) {
    next_show = true;
  }
    
  // 1. 배경사진 띄우기
  image(game_bg_green, 0, 0); 

  // 2. 게임 세팅
  // 스마일게이지그리기
  image(smile_gauge, 26, -1, 600, 100);
  image(smile_gaugepoint, 75 + 34 * smile_count, 5, 40, 20);
  smile_alright = true;
  // 트라이 아이콘 띄우기
  if (c_t1_success) image(c_try_icon_blu, 1583, 7, 60, 70); 
  else image(c_try_icon_red, 1583, 7, 60, 70); 
  if (frameCount % 40 == (0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19)){
    image(c_try_icon_bla, 1654.6, 7, 60, 70); 
  } else image(c_try_icon_bro, 1654.6, 7, 60, 70); 
  image(c_try_icon_bla, 1726.2, 7, 60, 70);
  // 말풍선 띄우기
  image(think_bubble, 100, 130, 400, 400);
  // 말풍선 위 메뉴 이름
  textSize(std_textSize-10);
  textAlign(LEFT, CENTER);
  text("크림 바닐라\n라떼\nwith coffee", 190, 290);
  settingInitialize();
  // 메뉴판 띄우기
  image(menu_new, 485, 150, 1320, 860); 
  // 손님 들어갈 네모칸
  noStroke(); 
  fill(255); 
  rect(100, 570, 350, 350, 20);
  settingInitialize(); // 세팅 초기화 
  // 손님 이미지 띄우기
  if (smile_count>5){
    image(customer_smile, 100, 570, 350, 350); 
  } else image(customer_default, 100, 570, 350, 350); 
  // 메뉴판 메뉴 각각에 버튼 생성
  let menu_array = Array(19); // 메뉴 버튼 좌표 담을 배열
  let menu_button_width = 370; // 고정
  let menu_button_height = 45; // 고정
  let menu_button = Array(19); // 메뉴 버튼 인스턴스 담을 배열
  // 메뉴 버튼 좌표들 초기화
  for (let j=0; j<menu_array.length; j++){
    if (j<10){
      menu_array[j] = [875, 412+menu_button_height*j, menu_button_width, menu_button_height];
    }
    else if (j<14){
      menu_array[j] = [1300, 412+menu_button_height*(j-10), menu_button_width, menu_button_height];
    } 
    else {
      menu_array[j] = [1300, 675+menu_button_height*(j-14), menu_button_width, menu_button_height];
    }
  }
  // 메뉴 버튼 인스턴스 생성해서 menu_button array에 담기
  for (let k=0; k<menu_button.length; k++){
    menu_button[k] = new Button(menu_array[k][0], menu_array[k][1], menu_array[k][2], menu_array[k][3]);         
    menu_button[k].display();
    settingInitialize();  
  } 
  // 정답이 되는 버튼 설정
  let answer = menu_button[answer_key];
  
  // 1. 게임 스크립트
  if (!next_condition && !trial_start && show_step == 1) {
    image(textbox_green_op, 200, 580, 1400, 400); // 텍스트 박스 위치

    // 대사 목록
    fullText = [
      "이번에는 커피 들어간 크림 바닐라 라떼로..."
    ];

    // 대사 한 글자씩 작성
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex+1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length){
          typing = false;
        } 
      }
    } else { // typing이 false
      if (direct_next_condition()){
        if (currentTextIndex < fullText.length -1) {
          currentTextIndex++; // fullText가 다 끝나지 않았을 때 
          charIndex = 0;
          typing = true;
        } else { // fullText가 다 돌았을 떄
          next_show = true;
        }
      } else { // 대사 한 단락 다 타이핑되긴 했는데 아직 다.넥.컨 입력 안 됐을 때
        text(currentText, 350, 700);
      }
    }

    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
  }

  // 2. 게임 작동
  if (!next_condition && trial_start && elapsed_time > 3000) {
    // 커서
    image(cursor_mo, mouseX, mouseY, cursor_mo_X, cursor_mo_Y);
    
    // 타이머 시작 
    Timer4.update();
    Timer4.display(myFont, std_textSize);

    // 스마일 게이지 포인트 제어
    if (frameCount % 20 == 0){ 
      smile_count--;
    }  
    if (keyIsPressed){
      if (key == ' ' && keyPressedTime === 0){
        keyPressedTime = millis(); // 누른 순간의 시간을 기록
        smile_count++;
        hit_sound.play();
      }
    } else {
      keyPressedTime = 0; // 키를 떼면 초기화
    }
    smile_count = constrain(smile_count, 0, 13.5);
    image(smile_gaugepoint, 75 + 34 * smile_count, 5, 40, 20);
    if (smile_count <= 0){
      smile_alright = false;
      bad(0); // 스마일 이슈
      trial_start = false;
      c_t2_success = false;
      Timer4.reset(); // 타이머 리셋
    }
    
    // 게임 메인 동작
    if (!Timer4.isTimeout() && smile_alright){
      if (mouseIsPressed){
        if ((mouseX>answer.x && mouseX<(answer.x+answer.width))&&(mouseY>answer.y && mouseY<(answer.y+answer.height))){
          mouse_click_sound.play();
          good();
          trial_start = false;
          c_t2_success = true;
          Timer4.reset(); // 타이머 리셋
        } else if ((mouseX>875 && mouseX<1245 && mouseY>412 && mouseY<862) 
          | (mouseX>1300 && mouseX<1670 && mouseY>412 && mouseY<592)
          | (mouseX>1300 && mouseX<1670 && mouseY>675 && mouseY<900)) { 
          // 메뉴판 버튼이긴 한데 정답이 아닌 애들
          mouse_click_sound.play();
          bad(2); // 잘못된 답
          trial_start = false;
          c_t2_success = false;
          Timer4.reset(); // 타이머 리셋
        }
      }
    } else {
      bad(1); // 시간 부족
      trial_start = false;
      c_t2_success = false;
      Timer4.reset(); // 타이머 리셋
    }    
  }
    
  // 3. 다음 stage로
  if (next_condition){
    next_condition = false;
    game_stage_controller++; 
    start_time = millis(); // 시작시간 초기화
    smile_count = 7;
    show_step = 0; // show_step 초기화
  }

  // show_step 증가 구현방식
  if (next_show){
    next_show = false;
    show_step++;
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
    if (show_step == 2){
      trial_start = true;
      Timer4.reset(); // 타이머 리셋
    }
  }  
}

// game_stage_controller = 58일 때 시행
function game1_trial3(answer_key){
  // 경과시간 초기화
  elapsed_time = millis()- start_time;  
  if (!next_condition && !trial_start && show_step == 0) {
    next_show = true;
  }
    
  // 1. 배경사진 띄우기
  image(game_bg_green, 0, 0); 

  // 2. 게임 세팅
  // 스마일게이지그리기
  image(smile_gauge, 26, -1, 600, 100);
  image(smile_gaugepoint, 75 + 34 * smile_count, 5, 40, 20);
  smile_alright = true;
  // 트라이 아이콘 띄우기
  if (c_t1_success) image(c_try_icon_blu, 1583, 7, 60, 70); 
  else image(c_try_icon_red, 1583, 7, 60, 70); 
  if (c_t2_success) image(c_try_icon_blu, 1654.6, 7, 60, 70); 
  else image(c_try_icon_red, 1654.6, 7, 60, 70); 
  if (frameCount % 40 == (0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19)){
    image(c_try_icon_bla, 1726.2, 7, 60, 70); 
  } else image(c_try_icon_bro, 1726.2, 7, 60, 70); 
  // 말풍선 띄우기
  image(think_bubble, 100, 130, 400, 400);
  // 말풍선 위 메뉴 이름
  textSize(std_textSize-10);
 textAlign(LEFT, CENTER);
  text("브륄레 머핀", 190, 290);
  settingInitialize();
  // 메뉴판 띄우기
  image(menu_new, 485, 150, 1320, 860); 
  // 손님 들어갈 네모칸
  noStroke(); 
  fill(255); 
  rect(100, 570, 350, 350, 20);
  settingInitialize(); // 세팅 초기화 
  // 손님 이미지 띄우기
  if (smile_count>5){
    image(customer_smile, 100, 570, 350, 350); 
  } else image(customer_default, 100, 570, 350, 350); 
  // 메뉴판 메뉴 각각에 버튼 생성
  let menu_array = Array(19); // 메뉴 버튼 좌표 담을 배열
  let menu_button_width = 370; // 고정
  let menu_button_height = 45; // 고정
  let menu_button = Array(19); // 메뉴 버튼 인스턴스 담을 배열
  // 메뉴 버튼 좌표들 초기화
  for (let j=0; j<menu_array.length; j++){
    if (j<10){
      menu_array[j] = [875, 412+menu_button_height*j, menu_button_width, menu_button_height];
    }
    else if (j<14){
      menu_array[j] = [1300, 412+menu_button_height*(j-10), menu_button_width, menu_button_height];
    } 
    else {
      menu_array[j] = [1300, 675+menu_button_height*(j-14), menu_button_width, menu_button_height];
    }
  }
  // 메뉴 버튼 인스턴스 생성해서 menu_button array에 담기
  for (let k=0; k<menu_button.length; k++){
    menu_button[k] = new Button(menu_array[k][0], menu_array[k][1], menu_array[k][2], menu_array[k][3]);         
    menu_button[k].display();
    settingInitialize();  
  } 
  // 정답이 되는 버튼 설정
  let answer = menu_button[answer_key];
  
  // 1. 게임 스크립트
  if (!next_condition && !trial_start && show_step == 1) {
    image(textbox_green_op, 200, 580, 1400, 400); // 텍스트 박스 위치

    // 대사 목록
    fullText = [
      "당 떨어진다...\n디저트로 브륄레 머핀 시켜야지..."
    ];

    // 대사 한 글자씩 작성
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex+1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length){
          typing = false;
        } 
      }
    } else { // typing이 false
      if (direct_next_condition()){
        if (currentTextIndex < fullText.length -1) {
          currentTextIndex++; // fullText가 다 끝나지 않았을 때 
          charIndex = 0;
          typing = true;
        } else { // fullText가 다 돌았을 떄
          next_show = true;
        }
      } else { // 대사 한 단락 다 타이핑되긴 했는데 아직 다.넥.컨 입력 안 됐을 때
        text(currentText, 350, 700);
      }
    }

    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
  }

  // 2. 게임 작동
  if (!next_condition && trial_start && elapsed_time > 3000) {
    // 커서
    image(cursor_mo, mouseX, mouseY, cursor_mo_X, cursor_mo_Y);
    
    // 타이머 시작 
    Timer4.update();
    Timer4.display(myFont, std_textSize);

    // 스마일 게이지 포인트 제어
    if (frameCount % 20 == 0){
      smile_count--;
    }  
    if (keyIsPressed){
      if (key == ' ' && keyPressedTime === 0){
        keyPressedTime = millis(); // 누른 순간의 시간을 기록
        smile_count++;
        hit_sound.play();
      }
    } else {
      keyPressedTime = 0; // 키를 떼면 초기화
    }
    smile_count = constrain(smile_count, 0, 13.5);
    image(smile_gaugepoint, 75 + 34 * smile_count, 5, 40, 20);
    if (smile_count <= 0){
      smile_alright = false;
      bad(0); // 스마일 이슈
      trial_start = false;
      Timer4.reset(); // 타이머 리셋
    }
    
    // 게임 메인 동작
    if (!Timer4.isTimeout() && smile_alright){
      if (mouseIsPressed){
        if ((mouseX>answer.x && mouseX<(answer.x+answer.width))&&(mouseY>answer.y && mouseY<(answer.y+answer.height))){
          mouse_click_sound.play();
          good();
          trial_start = false;
          Timer4.reset(); // 타이머 리셋
        } else if ((mouseX>875 && mouseX<1245 && mouseY>412 && mouseY<862) 
          | (mouseX>1300 && mouseX<1670 && mouseY>412 && mouseY<592)
          | (mouseX>1300 && mouseX<1670 && mouseY>675 && mouseY<900)) { 
          // 메뉴판 버튼이긴 한데 정답이 아닌 애들
          mouse_click_sound.play();
          bad(2); // 잘못된 답
          trial_start = false;
          Timer4.reset(); // 타이머 리셋
        }
      }
    } else {
      bad(1); // 시간 부족
      trial_start = false;
      Timer4.reset(); // 타이머 리셋
    }    
  }
    
  // 3. 다음 stage로
  if (next_condition){
    next_condition = false;
    game_stage_controller = 59; 
    start_time = millis(); // 시작시간 초기화
    smile_count = 7;
    show_step = 0; // show_step 초기화
  }

  // show_step 증가 구현방식
  if (next_show){
    next_show = false;
    show_step++;
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
    if (show_step == 2){
      trial_start = true;
      Timer4.reset(); // 타이머 리셋
    }
  }  
}

// game_controller = 55, 57, 59일 때 시행
function game1_showResults(){
  // 경과시간 초기화
  elapsed_time = millis()- start_time;  

  if (isFeedbackShowing){
    switch (currentFeedback){
      case "GOOD":     
        if (!isSoundPlayed) {
          setTimeout(()=>{
            good_sound.play();
          }, 4000);
          isSoundPlayed = true;
        }
        if (!next_condition && (elapsed_time < 2000)) {
          image(c_game1_conv_gr, 0, 0);
          text("이게 이 메뉴 맞죠?", 320, 700);
          // 커서
          image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
        } 
        if (!next_condition && (elapsed_time >= 2000) && (elapsed_time < 4000)) {
          image(c_game1_conv_br, 0, 0);
          text("네~ 준비해드릴게요~", 320, 700);
          // 커서
          image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
        } 
        if (!next_condition && (elapsed_time >= 4000) && (elapsed_time < 5500)) {
          background(0); // 화면을 검정색으로 설정
          fill(255);
          textSize(100);
          textAlign(CENTER, CENTER);
          text("GOOD", width / 2, height / 2);
        } 
        if (!next_condition && elapsed_time >= 5500) {
          isFeedbackShowing = false; // 시간이 지나면 feedback 화면을 제거
          settingInitialize();
          next_condition = true;
          isSoundPlayed = false; // 플래그 초기화
        }
        break;

      case "BAD0":
        if (!isSoundPlayed) {
          setTimeout(()=>{
            bad_sound.play();
          }, 2000);
          isSoundPlayed = true;
        }
        if (!next_condition && (elapsed_time < 2000)) {
          image(c_game1_angry, 0, 0);
          text("손님 웃으셔야죠~ ^^;;", 320, 700);
          // 커서
          image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
        }  
        if (!next_condition && (elapsed_time >= 2000) && (elapsed_time < 4000)) {
          background(0); // 화면을 검정색으로 설정
          fill(255);
          textSize(100);
          textAlign(CENTER, CENTER);
          text("BAD", width / 2, height / 2);
        } 
        if (!next_condition && elapsed_time >= 4000) {
          isFeedbackShowing = false; // 시간이 지나면 feedback 화면을 제거
          settingInitialize();
          next_condition = true;
          isSoundPlayed = false;
        }
        break;  

      case "BAD1":
        if (!isSoundPlayed) {
          setTimeout(()=>{
            bad_sound.play();
          }, 2000);
          isSoundPlayed = true;
        }
        if (!next_condition && (elapsed_time < 2000)) {
          image(c_game1_angry, 0, 0);
          text("이렇게 늦으시면 곤란해요~ ^^;;", 320, 700);
          // 커서
          image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
        }
        if (!next_condition && (elapsed_time >= 2000) && (elapsed_time < 4000)) {
          background(0); // 화면을 검정색으로 설정
          fill(255);
          textSize(100);
          textAlign(CENTER, CENTER);
          text("BAD", width / 2, height / 2);
        }
        if (!next_condition && elapsed_time >= 4000) {
          isFeedbackShowing = false; // 시간이 지나면 feedback 화면을 제거
          settingInitialize();
          next_condition = true;
          isSoundPlayed = false;
        }
        break;
      
      case "BAD2":
        if (!isSoundPlayed) {
          setTimeout(()=>{
            bad_sound.play();
          }, 2000);
          isSoundPlayed = true;
        }
        if (!next_condition && (elapsed_time < 2000)) {
          image(c_game1_angry, 0, 0);
          text("그 메뉴 아닌데요~ ^^;;", 320, 700);
          // 커서
          image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
        }
        if (!next_condition && (elapsed_time >= 2000) && (elapsed_time < 4000)) {
          background(0); // 화면을 검정색으로 설정
          fill(255);
          textSize(100);
          textAlign(CENTER, CENTER);
          text("BAD", width / 2, height / 2);
        }
        if (!next_condition && elapsed_time >= 4000) {
          isFeedbackShowing = false; // 시간이 지나면 feedback 화면을 제거
          settingInitialize();
          next_condition = true;
          isSoundPlayed = false;
        }
        break;
    }
  }

  // 3. 다음 stage로
  if (next_condition){
    next_condition = false;
    game_stage_controller++; 
    start_time = millis(); // 시작시간 초기화
  }
}

// game_controller = 60일 때 시행
function customer_game2(){
  // 경과시간 초기화
  elapsed_time = millis() - start_time;

  if (!next_condition && show_step == 0){
    image(c_game2_tray, 0, 0);
    image(textbox_green_op, 200, 580, 1400, 400); // 텍스트 박스 위치

    // 대사 목록
    fullText = [
      "뭐... 뭐 저딴 주문 시스템이 다 있어?\n웃느라 조커될 뻔;;",
      "그래도 일단 음료를 받았으니,\n빨리 자리를 잡고 메일을 보내야-"
    ];

    // 대사 한 글자씩 작성
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex+1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length){
          typing = false;
        } 
      }
    } else { // typing이 false
      if (direct_next_condition()){
        if (currentTextIndex < fullText.length -1) {
          currentTextIndex++; // fullText가 다 끝나지 않았을 때 
          charIndex = 0;
          typing = true;
        } else { // fullText가 다 돌았을 떄
          next_show = true;
        }
      } else { // 대사 한 단락 다 타이핑되긴 했는데 아직 다.넥.컨 입력 안 됐을 때
        text(currentText, 350, 700);
      }
    }

    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
  }

  if (!next_condition && show_step == 1){
    image(c_game2_table, 0, 0);
    image(textbox_green_op, 200, 580, 1400, 400); // 텍스트 박스 위치

    // 대사 목록
    fullText = [
      "... 진짜 실화?\n발판이 아니라 테이블이라고?"
    ];

    // 대사 한 글자씩 작성
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex+1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length){
          typing = false;
        } 
      }
    } else { // typing이 false
      if (direct_next_condition()){
        if (currentTextIndex < fullText.length -1) {
          currentTextIndex++; // fullText가 다 끝나지 않았을 때 
          charIndex = 0;
          typing = true;
        } else { // fullText가 다 돌았을 떄
          next_show = true;
        }
      } else { // 대사 한 단락 다 타이핑되긴 했는데 아직 다.넥.컨 입력 안 됐을 때
        text(currentText, 350, 700);
      }
    }

    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
  }

  if (!next_condition && show_step == 2){
    next_condition = true;
  }

  if (next_condition){
    next_condition = false;
    game_stage_controller++;
    start_time = millis(); // 시작시간 초기화
    show_step = 0; // show_step 초기화
  }

  // show_step 증가 구현방식
  if (next_show){
    next_show = false;
    show_step++;
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
  }  
}
// game_controller = 61일 때 시행
function game2_inst(){
  // 경과 시간 측정
  elapsed_time = millis() - start_time;

  // 배경 그리기
  background(game_bg_green);

  // 현재 inst 이미지 그리기
  let instImages = [c_g2_inst1, c_g2_inst2, c_g2_inst3, c_g2_inst4, c_g2_inst5, c_g2_inst6, c_g2_inst7, c_g2_inst8];
  if (instIndex < instImages.length) {
    image(instImages[instIndex], 0, 0);
  }

  // inst 이미지 전환을 위한 조건
  if (millis() - lastInstChangeTime >= instChangeInterval) {
    if (direct_next_condition()) {
      instIndex++;
      lastInstChangeTime = millis(); // 마지막 전환 시간 업데이트
      if (instIndex >= instImages.length) {
        next_condition = true;
      }
    }
  }

  // 다음 단계로
  if (next_condition) {
    next_condition = false;
    game_stage_controller++;
    start_time = millis(); // 시작시간 초기화
    show_step = 0; // show_step 초기화
    instIndex = 0; // 인덱스 초기화
  }

  // 커서 그리기
  image(cursor_default, mouseX, mouseY, 60, 70);
}
// game_controller = 62일 때 시행
function game2_trial1(){
  // 경과시간 초기화
  elapsed_time = millis()- start_time;  

 // 0. 게임 셋팅
 // 배경 색상 띄우기
  image(game_bg_green, 0, 0);
  // 고정된 배경
  image(fixed_bg, 0, 0, 1800, 1000);
  // 노트북
  image(laptop_eng, 610, 30, 550, 550);
  // 메일박스
  image(mailbox, 10, 10, 600, 600);
  // 커서 - 오른손으로 대체
  image(hand_cursor, mouseX-9, mouseY-20, 550, 800);
  // 트라이 아이콘 띄우기
  if (frameCount % 40 == (0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19)){
    image(c_try_icon_bla, 1583, 7, 60, 70); 
  } else image(c_try_icon_bro, 1583, 7, 60, 70); 
  image(c_try_icon_bla, 1654.6, 7, 60, 70); 
  image(c_try_icon_bla, 1726.2, 7, 60, 70);

  // 키보드 자판 좌표들
  let key_width  = 24;
  let key_height = 28;
  for (let i=0; i<31; i++){
    if (i<10){
      key_array[i] = [720+(30.5*i), 300, key_width, key_height];
    } else if (i==10){
      key_array[i] = [720+(30.5*i), 300, 36, key_height];
    } else if (i<20){
      key_array[i] = [715+(30.5*(i-11)), 336, key_width, key_height];
    } else if (i==20){
      key_array[i] = [715+(30.5*(i-11)), 336, 80, key_height];
    } else if (i<30){
      key_array[i] = [755+(30.5*(i-21)), 373, key_width, key_height];
    } else key_array[i] = [835, 410, 110, 15];
  }
  // 키보드 버튼 인스턴스 생성해서 new_key array에 담기
  for (let j=0; j<31; j++){
    new_key[j] = new Button(key_array[j][0], key_array[j][1], key_array[j][2], key_array[j][3]);         
    new_key[j].display();
    settingInitialize();  
  } 
  // 각 키별 이름과 좌표 매핑한 변수 key_name 지정
  key_name = Array(31);
  for (let k=0; k<31; k++){
    key_name[k] = [qwertyAlphabet[k], new_key[k]];
  }
  // 게임 우측 화면에 현재 마우스오버된 키 표시
  let hoveredKey = getHoveredKey();
  if (hoveredKey !== null) {
    // 검정 사각형
    fill(0);
    rect(1450, 250, 300, 300);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(std_textSize+20);
    text(hoveredKey, 1600, 400);
    settingInitialize();
  }
  // 마우스 오버된 버튼의 key를 반환하는 함수
  function getHoveredKey() {
    for (let i = 0; i < new_key.length; i++) {
      let btn = new_key[i];
      if (mouseX > btn.x && mouseX < btn.x + btn.width &&
          mouseY > btn.y && mouseY < btn.y + btn.height) {
        return key_name[i][0];
      }
    }
    return null; // 오버된 버튼이 없을 경우
  }
  // 목표 작성 메시지 제시 (메일박스 안에, 회색으로)
  fill(220);
  stroke(220);
  textSize(std_textSize - 5);
  text(target_sen[0], 100, 220); // target_sen: 전역변수
  settingInitialize(); // 세팅 초기화

  // trial 시작
  if (!next_condition && !trial_start){
    trial_start = true;
    Timer5.reset(); // 타이머 리셋
  }

  // 1. 게임 작동
  if (!next_condition && trial_start){ 
    // 간이 입력창: 텍박
    image(textbox_black_op, 200, 580, 1400, 400); 
  
    // 타이머 시작 
    Timer5.update();
    Timer5.display(myFont, std_textSize);

    // 게임 메인 동작 - 커서 넣기, 깜빡임
    if (frameCount % 30 == (0|1|2|3|4|5|6|7|8|9|10|11|12|13|14)){
      text(input_str1+'|', 320, 700);
    } else text(input_str1, 320, 700);

    // 커서 - 오른손으로 대체
    image(hand_cursor, mouseX-9, mouseY-20, 550, 800);

    if (Timer5.isTimeout()){
      trial_start = false;
      bad(1); // 타임아웃
      game2_trial1_success = false; 
    } 
    if (!Timer5.isTimeout() && enter_pushed && correct_sen){
      trial_start = false;
      correct_sen = false;
      enter_pushed = false;
      good();
      game2_trial1_success = true; // 성공 여부 기억해서 다음 장에서 글씨 색 변경
    } 
    if (!Timer5.isTimeout() && enter_pushed && !correct_sen){
      trial_start = false;
      enter_pushed = false;
      bad(0); // enter로 제출한 문장, 틀렸을 때
      game2_trial1_success = false; 
    } 
  }

  // 다음 stage로
  if (next_condition){
    trial_start = false;
    correct_sen = false;
    enter_pushed = false;
    next_condition = false;
    game_stage_controller++;
    start_time = millis(); // 시작시간 초기화
  }
}
// game_stage_controller = 64일 때 시행
function game2_trial2(){
  // 경과시간 초기화
  elapsed_time = millis()- start_time;  

  // 0. 게임 셋팅
  // 배경 색상 띄우기
  image(game_bg_green, 0, 0);
  // 고정된 배경
  image(fixed_bg, 0, 0, 1800, 1000);
  // 노트북
  image(laptop_eng, 610, 30, 550, 550);
  // 메일박스
  image(mailbox, 10, 10, 600, 600);
  // 커서 - 오른손으로 대체
  image(hand_cursor, mouseX-9, mouseY-20, 550, 800);
  // 트라이 아이콘 띄우기
  if (game2_trial1_success) image(c_try_icon_blu, 1583, 7, 60, 70); 
  else image(c_try_icon_red, 1583, 7, 60, 70); 
  if (frameCount % 40 == (0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19)){
    image(c_try_icon_bla, 1654.6, 7, 60, 70); 
  } else image(c_try_icon_bro, 1654.6, 7, 60, 70); 
  image(c_try_icon_bla, 1726.2, 7, 60, 70);

  // 키보드 자판 좌표들
  let key_width  = 24;
  let key_height = 28;
  for (let i=0; i<31; i++){
    if (i<10){
      key_array[i] = [720+(30.5*i), 300, key_width, key_height];
    } else if (i==10){
      key_array[i] = [720+(30.5*i), 300, 36, key_height];
    } else if (i<20){
      key_array[i] = [715+(30.5*(i-11)), 336, key_width, key_height];
    } else if (i==20){
      key_array[i] = [715+(30.5*(i-11)), 336, 80, key_height];
    } else if (i<30){
      key_array[i] = [755+(30.5*(i-21)), 373, key_width, key_height];
    } else key_array[i] = [835, 410, 110, 15];
  }
  // 키보드 버튼 인스턴스 생성해서 new_key array에 담기
  for (let j=0; j<31; j++){
    new_key[j] = new Button(key_array[j][0], key_array[j][1], key_array[j][2], key_array[j][3]);         
    new_key[j].display();
    settingInitialize();  
  } 
  // 각 키별 이름과 좌표 매핑한 변수 key_name 지정
  key_name = Array(31);
  for (let k=0; k<31; k++){
    key_name[k] = [qwertyAlphabet[k], new_key[k]];
  }
  // 게임 우측 화면에 현재 마우스오버된 키 표시
  let hoveredKey = getHoveredKey();
  if (hoveredKey !== null) {
    // 검정 사각형
    fill(0);
    rect(1450, 250, 300, 300);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(std_textSize+20);
    text(hoveredKey, 1600, 400);
    settingInitialize();
  }
  // 마우스 오버된 버튼의 key를 반환하는 함수
  function getHoveredKey() {
    for (let i = 0; i < new_key.length; i++) {
      let btn = new_key[i];
      if (mouseX > btn.x && mouseX < btn.x + btn.width &&
          mouseY > btn.y && mouseY < btn.y + btn.height) {
        return key_name[i][0];
      }
    }
    return null; // 오버된 버튼이 없을 경우
  }
  // 지난 trial 성공 여부에 따라 윗 문장 색깔 다르게 제시
  if (game2_trial1_success){
    // 성공 시 검정색
    fill(0);
  } else {// 실패 시 빨간색
    fill(255, 0, 0);
    stroke(255, 0, 0);
  }
  textSize(std_textSize - 5);
  text(target_sen[0], 100, 220);
  // 목표 작성 메시지 제시 (메일박스 안에, 회색으로)
  fill(220);
  stroke(220);
  text(target_sen[1], 100, 320); // target_sen: 전역변수
  settingInitialize(); // 세팅 초기화

  // trial 시작
  if (!next_condition && !trial_start){
    trial_start = true;
    Timer5.reset(); // 타이머 리셋
  }

  // 1. 게임 작동
  if (!next_condition && trial_start){ 
    // 간이 입력창: 텍박
    image(textbox_black_op, 200, 580, 1400, 400); 
      
    // 타이머 시작 
    Timer5.update();
    Timer5.display(myFont, std_textSize);

    // 게임 메인 동작 - 커서 넣기, 깜빡임
    if (frameCount % 30 == (0|1|2|3|4|5|6|7|8|9|10|11|12|13|14)){
      text(input_str2+'|', 320, 700);
    } else text(input_str2, 320, 700);

    // 커서 - 오른손으로 대체
    image(hand_cursor, mouseX-9, mouseY-20, 550, 800);

    if (Timer5.isTimeout()){
      trial_start = false;
      bad(1); // 타임아웃
      game2_trial2_success = false; 
    }  
    if (!Timer5.isTimeout() && enter_pushed && correct_sen){
      trial_start = false;
      correct_sen = false;
      enter_pushed = false;
      good();
      game2_trial2_success = true; // 성공 여부 기억해서 다음 장에서 글씨 색 변경
    } 
    if (!Timer5.isTimeout() && enter_pushed && !correct_sen){
      trial_start = false;
      enter_pushed = false;
      bad(0); // enter로 제출한 문장, 틀렸을 때
      game2_trial2_success = false; 
    }
  }
  
  // 다음 stage로
  if (next_condition){
    settingInitialize();
    trial_start = false;
    correct_sen = false;
    enter_pushed = false;
    next_condition = false;
    game_stage_controller++; 
    start_time = millis(); // 시작시간 초기화
  }
}
// game_stage_controller = 66일 때 시행
function game2_trial3(){
  // 경과시간 초기화
  elapsed_time = millis()- start_time;  

  // 0. 게임 셋팅
  // 배경 색상 띄우기
  image(game_bg_green, 0, 0);
  // 고정된 배경
  image(fixed_bg, 0, 0, 1800, 1000);
  // 노트북
  image(laptop_eng, 610, 30, 550, 550);
  // 메일박스
  image(mailbox, 10, 10, 600, 600);
  // 커서 - 오른손으로 대체
  image(hand_cursor, mouseX-9, mouseY-20, 550, 800);
  // 트라이 아이콘 띄우기
  if (game2_trial1_success) image(c_try_icon_blu, 1583, 7, 60, 70); 
  else image(c_try_icon_red, 1583, 7, 60, 70); 
  if (game2_trial2_success) image(c_try_icon_blu, 1654.6, 7, 60, 70); 
  else image(c_try_icon_red, 1654.6, 7, 60, 70); 
  if (frameCount % 40 == (0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19)){
    image(c_try_icon_bla, 1726.2, 7, 60, 70); 
  } else image(c_try_icon_bro, 1726.2, 7, 60, 70); 

  // 키보드 자판 좌표들
  let key_width  = 24;
  let key_height = 28;
  for (let i=0; i<31; i++){
    if (i<10){
      key_array[i] = [720+(30.5*i), 300, key_width, key_height];
    } else if (i==10){
      key_array[i] = [720+(30.5*i), 300, 36, key_height];
    } else if (i<20){
      key_array[i] = [715+(30.5*(i-11)), 336, key_width, key_height];
    } else if (i==20){
      key_array[i] = [715+(30.5*(i-11)), 336, 80, key_height];
    } else if (i<30){
      key_array[i] = [755+(30.5*(i-21)), 373, key_width, key_height];
    } else key_array[i] = [835, 410, 110, 15];
  }
  // 키보드 버튼 인스턴스 생성해서 new_key array에 담기
  for (let j=0; j<31; j++){
    new_key[j] = new Button(key_array[j][0], key_array[j][1], key_array[j][2], key_array[j][3]);         
    new_key[j].display();
    settingInitialize();  
  } 
  // 각 키별 이름과 좌표 매핑한 변수 key_name 지정
  key_name = Array(31);
  for (let k=0; k<31; k++){
    key_name[k] = [qwertyAlphabet[k], new_key[k]];
  }
  // 게임 우측 화면에 현재 마우스오버된 키 표시
  let hoveredKey = getHoveredKey();
  if (hoveredKey !== null) {
    // 검정 사각형
    fill(0);
    rect(1450, 250, 300, 300);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(std_textSize+20);
    text(hoveredKey, 1600, 400);
    settingInitialize();
  }
  // 마우스 오버된 버튼의 key를 반환하는 함수
  function getHoveredKey() {
    for (let i = 0; i < new_key.length; i++) {
      let btn = new_key[i];
      if (mouseX > btn.x && mouseX < btn.x + btn.width &&
          mouseY > btn.y && mouseY < btn.y + btn.height) {
        return key_name[i][0];
      }
    }
    return null; // 오버된 버튼이 없을 경우
  }

  // 지난 trial 성공 여부에 따라 윗 문장 색깔 다르게 제시
  if (game2_trial1_success){
    // 성공 시 검정색
    fill(0);
  } else {// 실패 시 빨간색
    fill(255, 0, 0);
    stroke(255, 0, 0);
  }
  textSize(std_textSize - 5);
  text(target_sen[0], 100, 220);

  if (game2_trial2_success){
    // 성공 시 검정색
    fill(0);
  } else {// 실패 시 빨간색
    fill(255, 0, 0);
    stroke(255, 0, 0);
  }
  text(target_sen[1], 100, 320);

  // 목표 작성 메시지 제시 (메일박스 안에, 회색으로)
  fill(220);
  stroke(220);
  text(target_sen[2], 100, 420); // target_sen: 전역변수
  settingInitialize(); // 세팅 초기화

  // trial 시작
  if (!next_condition && !trial_start){
    trial_start = true;
    Timer5.reset(); // 타이머 리셋
  }

  // 1. 게임 작동
  if (!next_condition && trial_start){ 
    // 간이 입력창: 텍박
    image(textbox_black_op, 200, 580, 1400, 400);
      
    // 타이머 시작 
    Timer5.update();
    Timer5.display(myFont, std_textSize);

    // 게임 메인 동작 - 커서 넣기, 깜빡임
    if (frameCount % 30 == (0|1|2|3|4|5|6|7|8|9|10|11|12|13|14)){
      text(input_str3+'|', 320, 700);
    } else text(input_str3, 320, 700);

    // 커서 - 오른손으로 대체
    image(hand_cursor, mouseX-9, mouseY-20, 550, 800);

    if (Timer5.isTimeout()){
      trial_start = false;
      bad(1); // 타임아웃
    }  
    if (!Timer5.isTimeout() && enter_pushed && correct_sen){
      trial_start = false;
      correct_sen = false;
      enter_pushed = false;
      good();
    }  
    if (!Timer5.isTimeout() && enter_pushed && !correct_sen){
      trial_start = false;
      enter_pushed = false;
      bad(0); // enter로 제출한 문장, 틀렸을 때
    }
  }
  
  // 다음 stage로
  if (next_condition){
    settingInitialize();
    trial_start = false;
    correct_sen = false;
    enter_pushed = false;
    next_condition = false;
    game_stage_controller++; 
    start_time = millis(); // 시작시간 초기화
  }
}
// game_stage_controller = 63, 65, 67일 때 시행
function game2_showResults(){
  // 경과시간 초기화
  elapsed_time = millis()- start_time;  

  if (isFeedbackShowing){
    switch (currentFeedback){
      case "GOOD":
        if (!isSoundPlayed) {
          setTimeout(()=>{
            good_sound.play();
          }, 2000);
          isSoundPlayed = true;
        }
        if (!next_condition && (elapsed_time < 2000)) {
          // 피드백 배경
          image(c_g2_good, 0, 0);
      
          image(textbox_black_op, 200, 580, 1400, 400); // 텍스트 박스 위치
          text("허리 숙여 타자치기의 고수?!", 320, 700);
        } 
        if (!next_condition && (elapsed_time >= 2000) && (elapsed_time < 4000)) {
          background(0); // 화면을 검정색으로 설정
          fill(255);
          textSize(100);
          textAlign(CENTER, CENTER);
          text("GOOD", width / 2, height / 2);
        } 
        if (!next_condition && elapsed_time >= 4000) {
          isFeedbackShowing = false; // 시간이 지나면 feedback 화면을 제거
          settingInitialize();
          next_condition = true;
          isSoundPlayed = false;
        }
        break;

      case "BAD0": // enter로 제출한 문장, 틀렸을 때
        if (!isSoundPlayed) {
          setTimeout(()=>{
            bad_sound.play();
          }, 2000);
          isSoundPlayed = true;
        }
        if (!next_condition && (elapsed_time < 2000)) {
          // 피드백 배경
          image(c_g2_bad_wrong, 0, 0);

          image(textbox_black_op, 200, 580, 1400, 400); // 텍스트 박스 위치
          text("영어실력이 형편없네요~", 320, 700);
        }  
        if (!next_condition && (elapsed_time >= 2000) && (elapsed_time < 4000)) {
          background(0); // 화면을 검정색으로 설정
          fill(255);
          textSize(100);
          textAlign(CENTER, CENTER);
          text("BAD", width / 2, height / 2);
        } 
        if (!next_condition && elapsed_time >= 4000) {
          isFeedbackShowing = false; // 시간이 지나면 feedback 화면을 제거
          settingInitialize();
          next_condition = true;
          isSoundPlayed = false;
        }
        break;  

      case "BAD1": // 타임아웃
        if (!isSoundPlayed) {
          setTimeout(()=>{
            bad_sound.play();
          }, 2000);
          isSoundPlayed = true;
        }
        if (!next_condition && (elapsed_time < 2000)) {
          // 피드백 배경
          image(c_g2_bad_timeout, 0, 0);
      
          image(textbox_black_op, 200, 580, 1400, 400); // 텍스트 박스 위치
          text("과제 제출은 시간이 생명!", 320, 700);
        }
        if (!next_condition && (elapsed_time >= 2000) && (elapsed_time < 4000)) {
          background(0); // 화면을 검정색으로 설정
          fill(255);
          textSize(100);
          textAlign(CENTER, CENTER);
          text("BAD", width / 2, height / 2);
        }
        if (!next_condition && elapsed_time >= 4000) {
          isFeedbackShowing = false; // 시간이 지나면 feedback 화면을 제거
          settingInitialize();
          next_condition = true;
          isSoundPlayed = false;
        }
        break;
    }    
  }

  // 3. 다음 stage로
  if (next_condition){
    next_condition = false;
    game_stage_controller++; 
    start_time = millis(); // 시작시간 초기화
  }
}
// 게임2에서 사용 (game_stage_controller 62, 64, 66일 때)
function mouseClicked() {

  switch (game_stage_controller){
    case 62: // game2_trial1 의 경우
    // 클릭한 위치에 있는 버튼을 확인
      if (!next_condition && trial_start){ 
        if (!Timer5.isTimeout() && !enter_pushed){
          // 연한 색으로 목표 문장 써두기
          fill(100, 100, 100, 100);
          text(target_sen[0], 320, 700);
          settingInitialize();
          for (let i = 0; i < new_key.length; i++) {
            let btn = new_key[i];
            if (mouseX > btn.x && mouseX < btn.x + btn.width &&
                mouseY > btn.y && mouseY < btn.y + btn.height) {
              let myKey = key_name[i][0];
    
              // 'back' 버튼 처리 
              if (myKey === 'back' && input_str1.length > 0) {
                key_sound.play();
                // 맨 마지막 문자 삭제
                input_str1 = input_str1.slice(0, -1);
              } else if (myKey === 'space' && myKey !== 'back' && myKey !== 'enter') {
                key_sound.play();
                // ' '일 경우 공백 추가
                input_str1 += ' ';
              } else if (myKey === 'enter') {
                key_sound.play();
                enter_pushed = true;
                // for 문에서 빠져나오기
                break;
              } else if (myKey !== 'back'){
                key_sound.play();
                input_str1 += myKey; // 다른 경우 해당 문자 추가
              }
              // 입력값이 target_sen[0]과 일치하는지 확인 - 다음 trial에서는 target_sen[1], [2]
              if (input_str1 != target_sen[0].slice(0, input_str1.length)) {
                // 일치하지 않을 경우 빨간색으로 출력
                fill(255, 0, 0);
              } else {
                fill(0); // 일치할 경우 검은색으로 출력
              }
            }
          }
          if (input_str1 === target_sen[0]){
            correct_sen = true;
          }
        }
      }
    break;

    case 64: // game2_trial2 의 경우
    // 클릭한 위치에 있는 버튼을 확인
      if (!next_condition && trial_start){ 
        if (!Timer5.isTimeout() && !enter_pushed){
          // 연한 색으로 목표 문장 써두기
          fill(100, 100, 100, 100);
          text(target_sen[1], 320, 700);
          settingInitialize();
          for (let i = 0; i < new_key.length; i++) {
            let btn = new_key[i];
            if (mouseX > btn.x && mouseX < btn.x + btn.width &&
                mouseY > btn.y && mouseY < btn.y + btn.height) {
              let myKey = key_name[i][0];
    
              // 'back' 버튼 처리 
              if (myKey === 'back' && input_str2.length > 0) {
                key_sound.play();
                // 맨 마지막 문자 삭제
                input_str2 = input_str2.slice(0, -1);
              } else if (myKey === 'space' && myKey !== 'back' && myKey !== 'enter') {
                key_sound.play();
                // ' '일 경우 공백 추가
                input_str2 += ' ';
              } else if (myKey === 'enter') {
                key_sound.play();
                enter_pushed = true;
                // for 문에서 빠져나오기
                break;
              } else if (myKey !== 'back'){
                key_sound.play();
                input_str2 += myKey; // 다른 경우 해당 문자 추가
              }
              // 입력값이 target_sen[1]과 일치하는지 확인
              if (input_str2 != target_sen[1].slice(0, input_str2.length)) {
                // 일치하지 않을 경우 빨간색으로 출력
                fill(255, 0, 0);
              } else {
                fill(0); // 일치할 경우 검은색으로 출력
              }
            }
          }
          if (input_str2 === target_sen[1]){
            correct_sen = true;
          }
        }
      }
    break;

    case 66: // game2_trial3 의 경우
    // 클릭한 위치에 있는 버튼을 확인
      if (!next_condition && trial_start){ 
        if (!Timer5.isTimeout() && !enter_pushed){
          // 연한 색으로 목표 문장 써두기
          fill(100, 100, 100, 100);
          text(target_sen[2], 320, 700);
          settingInitialize();
          for (let i = 0; i < new_key.length; i++) {
            let btn = new_key[i];
            if (mouseX > btn.x && mouseX < btn.x + btn.width &&
                mouseY > btn.y && mouseY < btn.y + btn.height) {
              let myKey = key_name[i][0];
    
              // 'back' 버튼 처리 
              if (myKey === 'back' && input_str3.length > 0) {
                key_sound.play();
                // 맨 마지막 문자 삭제
                input_str3 = input_str3.slice(0, -1);
              } else if (myKey === 'space' && myKey !== 'back' && myKey !== 'enter') {
                key_sound.play();
                // ' '일 경우 공백 추가
                input_str3 += ' ';
              } else if (myKey === 'enter') {
                key_sound.play();
                enter_pushed = true;
                // for 문에서 빠져나오기
                break;
              } else if (myKey !== 'back'){
                key_sound.play();
                input_str3 += myKey; // 다른 경우 해당 문자 추가
              }
              // 입력값이 target_sen[0]과 일치하는지 확인 - 다음 trial에서는 target_sen[1], [2]
              if (input_str3 != target_sen[2].slice(0, input_str3.length)) {
                // 일치하지 않을 경우 빨간색으로 출력
                fill(255, 0, 0);
              } else {
                fill(0); // 일치할 경우 검은색으로 출력
              }
            }
          }
          if (input_str3 === target_sen[2]){
            correct_sen = true;
          }
        }
      }
    break;
  }
}

// game_controller = 68일 때 시행
function customer_game3(){
  // 경과시간 초기화
  elapsed_time = millis() - start_time;

  if (!next_condition && show_step == 0){
    image(c_game3_cafe_in, 0, 0);    
    image(textbox_green_op, 200, 580, 1400, 400); // 텍스트 박스 위치

    // 대사 목록
    fullText = [
      "허리디스크와 맞바꾼 졸업이라니 ^^\n정말 감성충만이다 ^^",
      "그래도 일단 과제를 냈으니...\n감성 카페 온 티라도 좀 내볼까?\n인스타를 보니까 다들 카페 고양이\n사진을 찍고 인증하던데..."
    ];

    // 대사 한 글자씩 작성
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex+1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length){
          typing = false;
        } 
      }
    } else { // typing이 false
      if (direct_next_condition()){
        if (currentTextIndex < fullText.length -1) {
          currentTextIndex++; // fullText가 다 끝나지 않았을 때 
          charIndex = 0;
          typing = true;
        } else { // fullText가 다 돌았을 떄
          next_show = true;
        }
      } else { // 대사 한 단락 다 타이핑되긴 했는데 아직 다.넥.컨 입력 안 됐을 때
        text(currentText, 350, 700);
      }
    }

    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
  }

  if (!next_condition && show_step == 1){
    image(c_game3_cafe_in_hj, 0, 0);

    // 대사 목록
    fullText = [
      "아! 저기 있다.\n사진을 좀 잘 찍어서 나도 MZ인 척을 좀 해...\n보려고 했는데 저 뒤에 왔다갔다거리는\n사람 뭐야??",
      "이걸 다 고려해서 사진을 찍는 자만이\n'감성있다'라는 말을 들을 수 있는 것인가???"
    ];

    // 대사 한 글자씩 작성
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex+1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length){
          typing = false;
        } 
      }
    } else { // typing이 false
      if (direct_next_condition()){
        if (currentTextIndex < fullText.length -1) {
          currentTextIndex++; // fullText가 다 끝나지 않았을 때 
          charIndex = 0;
          typing = true;
        } else { // fullText가 다 돌았을 떄
          next_show = true;
        }
      } else { // 대사 한 단락 다 타이핑되긴 했는데 아직 다.넥.컨 입력 안 됐을 때
        text(currentText, 350, 700);
      }
    }

    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
  }

  if (!next_condition && show_step == 2){
    next_condition = true;
  }

  if (next_condition){
    next_condition = false;
    game_stage_controller++;
    start_time = millis(); // 시작시간 초기화
    show_step = 0; // show_step 초기화
  }

  // show_step 증가 구현방식
  if (next_show){
    next_show = false;
    show_step++;
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
  }  
}
// game_controller = 69일 때 시행
function game3_inst(){
  // 경과 시간 측정
  elapsed_time = millis() - start_time;

  // 배경 그리기
  background(game_bg_green);

  // 현재 inst 이미지 그리기
  let instImages = [c_g3_inst1, c_g3_inst2, c_g3_inst3, c_g3_inst4, c_g3_inst5, c_g3_inst6, c_g3_inst7];
  if (instIndex < instImages.length) {
    image(instImages[instIndex], 0, 0);
  }

  // inst 이미지 전환을 위한 조건
  if (millis() - lastInstChangeTime >= instChangeInterval) {
    if (direct_next_condition()) {
      instIndex++;
      lastInstChangeTime = millis(); // 마지막 전환 시간 업데이트
      if (instIndex >= instImages.length) {
        next_condition = true;
      }
    }
  }

  // 다음 단계로
  if (next_condition) {
    next_condition = false;
    game_stage_controller++;
    start_time = millis(); // 시작시간 초기화
    show_step = 0; // show_step 초기화
    instIndex = 0; // 인덱스 초기화
  }

  // 커서 그리기
  image(cursor_default, mouseX, mouseY, 60, 70);
}
// game_controller = 70일 때 시행
function game3_trial1(){
  // 경과시간 초기화
  elapsed_time = millis()- start_time;  

  // 0. 게임 세팅
  // 배경 화면 띄우기
  background(stage3_bg);
  // 커서 -> 커서 대신 카메라긴 하지만 카메라 불러오기 전까지.
  image(cursor_mo, mouseX, mouseY, cursor_mo_X, cursor_mo_Y);

  // 각 애니메이션 그림 바뀌는 속도 조절
  let p_anim_changer = frameCount % 20 // 속도조절
  let l_anim_changer = frameCount % 10
  let c_anim_changer = frameCount % 15

    // 애니메이션 실행 조건 - 스페이스바나 클릭 입력 전까지
  // 사람 애니메이션 - 오른쪽에서부터 걸어움
  if (!next_condition && !g3_space_pressed && !g3_mouse_pressed && p_anim_changer == 0){
    p_anim_controller.update();
  }
  switch (p_anim_controller.status) {
    case 0:
      image(hj_ani_00, hj_images_X[0], 260, 635, 635);
      break;
    case 1:
      image(hj_ani_01, hj_images_X[1], 260, 635, 635);
      break;
    case 2:
      image(hj_ani_02, hj_images_X[2], 260, 635, 635);
      break;
    case 3:
      image(hj_ani_03, hj_images_X[3], 260, 635, 635);
      break;
    case 4:
      image(hj_ani_04, hj_images_X[4], 260, 635, 635);
      break;
    case 5:
      image(hj_ani_05, hj_images_X[5], 260, 635, 635);
      break;
    case 6:
      image(hj_ani_00, hj_images_X[6], 260, 635, 635);
      break;
    case 7:
      image(hj_ani_01, hj_images_X[7], 260, 635, 635);
      break;
    case 8:
      image(hj_ani_02, hj_images_X[8], 260, 635, 635);
      break;
    case 9:
      image(hj_ani_03, hj_images_X[9], 260, 635, 635);
      break;
    case 10:
      image(hj_ani_04, hj_images_X[10], 260, 635, 635);
      break;
    case 11:
      image(hj_ani_05, hj_images_X[11], 260, 635, 635);
      break;
    case 12:
      image(hj_ani_05, hj_images_X[12], 260, 635, 635);
      break;
    case 13:
      image(hj_ani_b00, hj_images_X[13], 260, 635, 635);
      break;
    case 14:
      image(hj_ani_b01, hj_images_X[14], 260, 635, 635);
      break;
    case 15:
      image(hj_ani_b02, hj_images_X[15], 260, 635, 635);
      break;
    case 16:
      image(hj_ani_b03, hj_images_X[16], 260, 635, 635);
      break;
    case 17:
      image(hj_ani_b04, hj_images_X[17], 260, 635, 635);
      break;
    case 18:
      image(hj_ani_b05, hj_images_X[18], 260, 635, 635);
      break;
    case 19:
      image(hj_ani_b00, hj_images_X[19], 260, 635, 635);
      break;
    case 20:
      image(hj_ani_b01, hj_images_X[20], 260, 635, 635);
      break;
    case 21:
      image(hj_ani_b02, hj_images_X[21], 260, 635, 635);
      break;
    case 22:
      image(hj_ani_b03, hj_images_X[22], 260, 635, 635);
      break;
    case 23:
      image(hj_ani_b04, hj_images_X[23], 260, 635, 635);
      break;
    case 24:
      image(hj_ani_b05, hj_images_X[24], 270, 635, 635);
      break;
    case 25:
      image(hj_ani_b05, hj_images_X[25], 270, 635, 635);
      break;
  }

  // 빛 애니메이션
  if (!next_condition && !g3_space_pressed && !g3_mouse_pressed && l_anim_changer == 0){
    l_anim_controller.update();
  }
  switch (l_anim_controller.status) {
    case 0:
      image(l_ani_00, 320, -305, 1355, 1355);
      break;
    case 1:
      image(l_ani_01, 320, -305, 1355, 1355);
      break;
    case 2:
      image(l_ani_02, 320, -305, 1355, 1355);
      break;
    case 3:
      image(l_ani_03, 320, -305, 1355, 1355);
      break;
    case 4:
      image(l_ani_04, 320, -305, 1355, 1355);
      break;
    case 5:
      image(l_ani_05, 320, -305, 1355, 1355);
      break;
    case 6:
      image(l_ani_06, 320, -305, 1355, 1355);
      break;
    case 7:
      image(l_ani_07, 320, -305, 1355, 1355);
      break;
    case 8:
      image(l_ani_08, 320, -305, 1355, 1355);
      break;
    case 9:
      image(l_ani_09, 320, -305, 1355, 1355);
      break;
    case 10:
      image(l_ani_10, 320, -305, 1355, 1355);
      break;
    case 11:
      image(l_ani_11, 320, -305, 1355, 1355);
      break;
    case 12: // 역순으로 다시
      image(l_ani_11, 320, -305, 1355, 1355);
      break;
    case 13:
      image(l_ani_10, 320, -305, 1355, 1355);
      break;
    case 14:
      image(l_ani_09, 320, -305, 1355, 1355);
      break;
    case 15:
      image(l_ani_08, 320, -305, 1355, 1355);
      break;
    case 16:
      image(l_ani_07, 320, -305, 1355, 1355);
      break;
    case 17:
      image(l_ani_06, 320, -305, 1355, 1355);
      break;
    case 18:
      image(l_ani_05, 320, -305, 1355, 1355);
      break;
    case 19:
      image(l_ani_04, 320, -305, 1355, 1355);
      break;
    case 20:
      image(l_ani_03, 320, -305, 1355, 1355);
      break;
    case 21:
      image(l_ani_02, 320, -305, 1355, 1355);
      break;
    case 22:
      image(l_ani_01, 320, -305, 1355, 1355);
      break;
    case 23:
      image(l_ani_00, 320, -305, 1355, 1355);
      break;
  
  }

  // 고양이 애니메이션
  if (!next_condition && !g3_space_pressed && !g3_mouse_pressed && c_anim_changer == 0){
    c_anim_controller.update();
  }
  switch(c_anim_controller.status){
    case 0:
      image(c_ani_00, 520, 50, 1000, 1000);
      break;
    case 1:
      image(c_ani_01, 520, 50, 1000, 1000);
      break;
    case 2:
      image(c_ani_02, 520, 50, 1000, 1000);
      break;
    case 3:
      image(c_ani_03, 520, 50, 1000, 1000);
      break;
    case 4:
      image(c_ani_04, 520, 50, 1000, 1000);
      break;
    case 5:
      image(c_ani_05, 520, 50, 1000, 1000);
      break;
    case 6:
      image(c_ani_06, 520, 50, 1000, 1000);
      break;
    case 7:
      image(c_ani_07, 520, 50, 1000, 1000);
      break;
    case 8:
      image(c_ani_08, 520, 50, 1000, 1000);
      break;
    case 9:
      image(c_ani_09, 520, 50, 1000, 1000);
      break;
    case 10:
      image(c_ani_10, 520, 50, 1000, 1000);
      break;
    case 11:
      image(c_ani_11, 520, 50, 1000, 1000);
      break;
    case 12:
      image(c_ani_12, 520, 50, 1000, 1000);
      break;
    case 13: // 역순으로 다시
      image(c_ani_12, 520, 50, 1000, 1000);
      break;
    case 14:
      image(c_ani_11, 520, 50, 1000, 1000);
      break;
    case 15:
      image(c_ani_10, 520, 50, 1000, 1000);
      break;
    case 16:
      image(c_ani_09, 520, 50, 1000, 1000);
      break;
    case 17:
      image(c_ani_08, 520, 50, 1000, 1000);
      break;
    case 18:
      image(c_ani_07, 520, 50, 1000, 1000);
      break;
    case 19:
      image(c_ani_06, 520, 50, 1000, 1000);
      break;
    case 20:
      image(c_ani_05, 520, 50, 1000, 1000);
      break;
    case 21:
      image(c_ani_04, 520, 50, 1000, 1000);
      break;
    case 22:
      image(c_ani_03, 520, 50, 1000, 1000);
      break;
    case 23:
      image(c_ani_02, 520, 50, 1000, 1000);
      break;
    case 24:
      image(c_ani_01, 520, 50, 1000, 1000);
      break;
    case 25:
      image(c_ani_00, 520, 50, 1000, 1000);
      break;    
  }

  // 배경 장애물
  image(stage3_obstacle, 0, 0);

  // trial 시작
  if (!next_condition && !trial_start && !g3_space_pressed && !g3_mouse_pressed && elapsed_time > instChangeInterval){
    trial_start = true;
    Timer6.reset(); // 타이머 리셋
  }

  // 2. 게임 작동
  if (!next_condition && trial_start && !g3_space_pressed && !g3_mouse_pressed && !Timer6.isTimeout()){
    // 트라이 아이콘 띄우기
    if (frameCount % 40 == (0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19)){
      image(c_try_icon_bla, 1583, 7, 60, 70); 
    } else image(c_try_icon_bro, 1583, 7, 60, 70); 
    image(c_try_icon_bla, 1654.6, 7, 60, 70); 
    image(c_try_icon_bla, 1726.2, 7, 60, 70);

    // 타이머 시작 
    Timer6.update();
    Timer6.display(myFont, std_textSize);

    // 카메라 (기본/눌렸을 때)
    imageX = mouseX - camera_default.width / 2;
    imageY = mouseY - camera_default.height / 2;
    image(camera_default, imageX, imageY);

    // 스페이스바 눌렀을 때 혹은 마우스 클릭했을 때
    if (keyIsPressed | mouseIsPressed){
      if (key === ' ' | mouseIsPressed){
        if (key === ' ') g3_space_pressed = true; // 스위치 ON
        if (mouseIsPressed) g3_mouse_pressed = true; 
    
        // 카메라 효과음
        camera_sound.play();

        // good/bad 판단 - 찍을 당시의 카메라 좌표 필요하므로 저장
        camera_x1 = mouseX - 222.5; // 카메라 사각형의 좌상단 x 좌표
        camera_y1 = mouseY - 422.5; // 카메라 사각형의 좌상단 y 좌표
        camera_x2 = mouseX + 222.5; // 카메라 사각형의 우하단 x 좌표
        camera_y2 = mouseY + 422.5; // 카메라 사각형의 우하단 y 좌표
        // 카메라 에셋 속 핸드폰 이미지의 가로 : 445, 세로 845
        person_x1 = hj_images_X[p_anim_controller.status]+160;  // 사람 사각형의 좌상단 x 좌표
        if (p_anim_controller.status != (24|25)){
          person_y1 = 260;  // 사람 사각형의 좌상단 y 좌표
        } else  person_y1 = 270; 
        person_x2 = person_x1 + 300;  // 사람 사각형의 우하단 x 좌표
        person_y2 = person_y1 + 600;  // 사람 사각형의 우하단 y 
        // 실제 사람 있는 부분 한정, 가로 300 세로 600
      }
    } 
  }
  // 스페이스바/마우스클릭 받으면, good/bad 판단하고 해당 trial 종료
  else if (!next_condition && trial_start && ((g3_space_pressed|g3_mouse_pressed)|Timer6.isTimeout())){
    // 사람이 지나가지 않을 때 찍었는지.
    let no_p_cond = !checkOverlap(camera_x1, camera_y1, camera_x2, camera_y2, 
      person_x1, person_y1, person_x2, person_y2); // 겹치면 true 반환 -> ! 붙임
    // 고양이가 눈 뜨고 있고 + 고양이를 카메라 앵글 안에 포함!되었는지.
    let c_eye_cond = c_answer_key.includes(c_anim_controller.status);
    let c_camera_cond = (camera_x1<950 && camera_x2>1180 && camera_y1<670 && camera_y2>920); 
    // 빛이 밝고 + 빛이 카메라 앵글 안에 잡혔는지
    let l_bright_cond = l_answer_key.includes(l_anim_controller.status);
    let l_camera_cond = checkOverlap(camera_x1, camera_y1, camera_x2, camera_y2, 705, 140, 1270, 960); 

    if (!Timer6.isTimeout()){
      // 적절한 사진인지 판단
      if (no_p_cond && c_eye_cond && c_camera_cond && l_bright_cond && l_camera_cond){
        good();
        trial_start = false;
        c_t1_success = true;
        Timer6.reset(); // 타이머 리셋
        g3_space_pressed = false; // 스위치 OFF
        g3_mouse_pressed = false;
      } // 오답일 때 피드백의 위계:
      // c_camera_cond -> l_camera_cond -> no_p_cond -> l_bright_cond -> c_eye_cond 
      else if (!c_camera_cond){
        bad(3); // 고양이 카메라 앵글에 포함 안 됨
        trial_start = false;
        c_t1_success = false;
        Timer6.reset(); // 타이머 리셋
        g3_space_pressed = false; // 스위치 OFF
        g3_mouse_pressed = false;
      }
      else if (!l_camera_cond){
        bad(4); // 빛이 카메라 앵글에 안 잡힘
        trial_start = false;
        c_t1_success = false;
        Timer6.reset(); // 타이머 리셋
        g3_space_pressed = false; // 스위치 OFF
        g3_mouse_pressed = false;
      } 
      else if (!no_p_cond){
        bad(1); // 사람 찍힘
        trial_start = false;
        c_t1_success = false;
        Timer6.reset(); // 타이머 리셋
        g3_space_pressed = false; // 스위치 OFF
        g3_mouse_pressed = false;
      } 
      else if (!c_eye_cond){
        bad(0); // 고양이 눈 감음
        trial_start = false;
        c_t1_success = false;
        Timer6.reset(); // 타이머 리셋
        g3_space_pressed = false; // 스위치 OFF
        g3_mouse_pressed = false;
      } 
      else if (!l_bright_cond){
        bad(2); // 빛 안 밝음
        trial_start = false;
        c_t1_success = false;
        Timer6.reset(); // 타이머 리셋
        g3_space_pressed = false; // 스위치 OFF
        g3_mouse_pressed = false;
      } 

    } else {
      bad(5); // 타임아웃으로 배드 
      trial_start = false;
      c_t1_success = false;
      Timer6.reset(); // 타이머 리셋
      g3_space_pressed = false; // 스위치 OFF
      g3_mouse_pressed = false;
    }

  }

  // 다음 스테이지로
  if (next_condition){
    next_condition = false;
    game_stage_controller++;
    start_time = millis(); // 시작시간 초기화
  }
}
// game_controller = 72일 때 시행
function game3_trial2(){
  // 경과시간 초기화
  elapsed_time = millis()- start_time;  

  // 0. 게임 세팅
  // 배경 화면 띄우기
  background(stage3_bg);
  // 커서 -> 커서 대신 카메라긴 하지만 카메라 불러오기 전까지.
  image(cursor_mo, mouseX, mouseY, cursor_mo_X, cursor_mo_Y);

  // 각 애니메이션 그림 바뀌는 속도 조절
  let p_anim_changer = frameCount % 20 // 속도조절
  let l_anim_changer = frameCount % 10
  let c_anim_changer = frameCount % 15

    // 애니메이션 실행 조건 - 스페이스바나 클릭 입력 전까지
  // 사람 애니메이션 - 오른쪽에서부터 걸어움
  if (!next_condition && !g3_space_pressed && !g3_mouse_pressed && p_anim_changer == 0){
    p_anim_controller.update();
  }
  switch (p_anim_controller.status) {
    case 0:
      image(hj_ani_00, hj_images_X[0], 260, 635, 635);
      break;
    case 1:
      image(hj_ani_01, hj_images_X[1], 260, 635, 635);
      break;
    case 2:
      image(hj_ani_02, hj_images_X[2], 260, 635, 635);
      break;
    case 3:
      image(hj_ani_03, hj_images_X[3], 260, 635, 635);
      break;
    case 4:
      image(hj_ani_04, hj_images_X[4], 260, 635, 635);
      break;
    case 5:
      image(hj_ani_05, hj_images_X[5], 260, 635, 635);
      break;
    case 6:
      image(hj_ani_00, hj_images_X[6], 260, 635, 635);
      break;
    case 7:
      image(hj_ani_01, hj_images_X[7], 260, 635, 635);
      break;
    case 8:
      image(hj_ani_02, hj_images_X[8], 260, 635, 635);
      break;
    case 9:
      image(hj_ani_03, hj_images_X[9], 260, 635, 635);
      break;
    case 10:
      image(hj_ani_04, hj_images_X[10], 260, 635, 635);
      break;
    case 11:
      image(hj_ani_05, hj_images_X[11], 260, 635, 635);
      break;
    case 12:
      image(hj_ani_05, hj_images_X[12], 260, 635, 635);
      break;
    case 13:
      image(hj_ani_b00, hj_images_X[13], 260, 635, 635);
      break;
    case 14:
      image(hj_ani_b01, hj_images_X[14], 260, 635, 635);
      break;
    case 15:
      image(hj_ani_b02, hj_images_X[15], 260, 635, 635);
      break;
    case 16:
      image(hj_ani_b03, hj_images_X[16], 260, 635, 635);
      break;
    case 17:
      image(hj_ani_b04, hj_images_X[17], 260, 635, 635);
      break;
    case 18:
      image(hj_ani_b05, hj_images_X[18], 260, 635, 635);
      break;
    case 19:
      image(hj_ani_b00, hj_images_X[19], 260, 635, 635);
      break;
    case 20:
      image(hj_ani_b01, hj_images_X[20], 260, 635, 635);
      break;
    case 21:
      image(hj_ani_b02, hj_images_X[21], 260, 635, 635);
      break;
    case 22:
      image(hj_ani_b03, hj_images_X[22], 260, 635, 635);
      break;
    case 23:
      image(hj_ani_b04, hj_images_X[23], 260, 635, 635);
      break;
    case 24:
      image(hj_ani_b05, hj_images_X[24], 270, 635, 635);
      break;
    case 25:
      image(hj_ani_b05, hj_images_X[25], 270, 635, 635);
      break;
  }

  // 빛 애니메이션
  if (!next_condition && !g3_space_pressed && !g3_mouse_pressed && l_anim_changer == 0){
    l_anim_controller.update();
  }
  switch (l_anim_controller.status) {
    case 0:
      image(l_ani_00, 320, -305, 1355, 1355);
      break;
    case 1:
      image(l_ani_01, 320, -305, 1355, 1355);
      break;
    case 2:
      image(l_ani_02, 320, -305, 1355, 1355);
      break;
    case 3:
      image(l_ani_03, 320, -305, 1355, 1355);
      break;
    case 4:
      image(l_ani_04, 320, -305, 1355, 1355);
      break;
    case 5:
      image(l_ani_05, 320, -305, 1355, 1355);
      break;
    case 6:
      image(l_ani_06, 320, -305, 1355, 1355);
      break;
    case 7:
      image(l_ani_07, 320, -305, 1355, 1355);
      break;
    case 8:
      image(l_ani_08, 320, -305, 1355, 1355);
      break;
    case 9:
      image(l_ani_09, 320, -305, 1355, 1355);
      break;
    case 10:
      image(l_ani_10, 320, -305, 1355, 1355);
      break;
    case 11:
      image(l_ani_11, 320, -305, 1355, 1355);
      break;
    case 12: // 역순으로 다시
      image(l_ani_11, 320, -305, 1355, 1355);
      break;
    case 13:
      image(l_ani_10, 320, -305, 1355, 1355);
      break;
    case 14:
      image(l_ani_09, 320, -305, 1355, 1355);
      break;
    case 15:
      image(l_ani_08, 320, -305, 1355, 1355);
      break;
    case 16:
      image(l_ani_07, 320, -305, 1355, 1355);
      break;
    case 17:
      image(l_ani_06, 320, -305, 1355, 1355);
      break;
    case 18:
      image(l_ani_05, 320, -305, 1355, 1355);
      break;
    case 19:
      image(l_ani_04, 320, -305, 1355, 1355);
      break;
    case 20:
      image(l_ani_03, 320, -305, 1355, 1355);
      break;
    case 21:
      image(l_ani_02, 320, -305, 1355, 1355);
      break;
    case 22:
      image(l_ani_01, 320, -305, 1355, 1355);
      break;
    case 23:
      image(l_ani_00, 320, -305, 1355, 1355);
      break;
  
  }

  // 고양이 애니메이션
  if (!next_condition && !g3_space_pressed && !g3_mouse_pressed && c_anim_changer == 0){
    c_anim_controller.update();
  }
  switch(c_anim_controller.status){
    case 0:
      image(c_ani_00, 520, 50, 1000, 1000);
      break;
    case 1:
      image(c_ani_01, 520, 50, 1000, 1000);
      break;
    case 2:
      image(c_ani_02, 520, 50, 1000, 1000);
      break;
    case 3:
      image(c_ani_03, 520, 50, 1000, 1000);
      break;
    case 4:
      image(c_ani_04, 520, 50, 1000, 1000);
      break;
    case 5:
      image(c_ani_05, 520, 50, 1000, 1000);
      break;
    case 6:
      image(c_ani_06, 520, 50, 1000, 1000);
      break;
    case 7:
      image(c_ani_07, 520, 50, 1000, 1000);
      break;
    case 8:
      image(c_ani_08, 520, 50, 1000, 1000);
      break;
    case 9:
      image(c_ani_09, 520, 50, 1000, 1000);
      break;
    case 10:
      image(c_ani_10, 520, 50, 1000, 1000);
      break;
    case 11:
      image(c_ani_11, 520, 50, 1000, 1000);
      break;
    case 12:
      image(c_ani_12, 520, 50, 1000, 1000);
      break;
    case 13: // 역순으로 다시
      image(c_ani_12, 520, 50, 1000, 1000);
      break;
    case 14:
      image(c_ani_11, 520, 50, 1000, 1000);
      break;
    case 15:
      image(c_ani_10, 520, 50, 1000, 1000);
      break;
    case 16:
      image(c_ani_09, 520, 50, 1000, 1000);
      break;
    case 17:
      image(c_ani_08, 520, 50, 1000, 1000);
      break;
    case 18:
      image(c_ani_07, 520, 50, 1000, 1000);
      break;
    case 19:
      image(c_ani_06, 520, 50, 1000, 1000);
      break;
    case 20:
      image(c_ani_05, 520, 50, 1000, 1000);
      break;
    case 21:
      image(c_ani_04, 520, 50, 1000, 1000);
      break;
    case 22:
      image(c_ani_03, 520, 50, 1000, 1000);
      break;
    case 23:
      image(c_ani_02, 520, 50, 1000, 1000);
      break;
    case 24:
      image(c_ani_01, 520, 50, 1000, 1000);
      break;
    case 25:
      image(c_ani_00, 520, 50, 1000, 1000);
      break;    
  }

  // 배경 장애물
  image(stage3_obstacle, 0, 0);

  // trial 시작
  if (!next_condition && !trial_start && !g3_space_pressed && !g3_mouse_pressed){
    trial_start = true;
    Timer6.reset(); // 타이머 리셋
  }

  // 2. 게임 작동
  if (!next_condition && trial_start && !g3_space_pressed && !g3_mouse_pressed && !Timer3.isTimeout()){
    // 트라이 아이콘 띄우기
    if (c_t1_success) image(c_try_icon_blu, 1583, 7, 60, 70); 
    else image(c_try_icon_red, 1583, 7, 60, 70); 
    if (frameCount % 40 == (0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19)){
      image(c_try_icon_bla, 1654.6, 7, 60, 70); 
    } else image(c_try_icon_bro, 1654.6, 7, 60, 70); 
    image(c_try_icon_bla, 1726.2, 7, 60, 70);

    // 타이머 시작 
    Timer6.update();
    Timer6.display(myFont, std_textSize);

    // 카메라 (기본/눌렸을 때)
    imageX = mouseX - camera_default.width / 2;
    imageY = mouseY - camera_default.height / 2;
    image(camera_default, imageX, imageY);

    // 스페이스바 눌렀을 때 혹은 마우스 클릭했을 때
    if (keyIsPressed | mouseIsPressed){
      if (key === ' ' | mouseIsPressed){
        if (key === ' ') g3_space_pressed = true; // 스위치 ON
        if (mouseIsPressed) g3_mouse_pressed = true; 
    
        // 카메라 효과음
        camera_sound.play();

        // good/bad 판단 - 찍을 당시의 카메라 좌표 필요하므로 저장
        camera_x1 = mouseX - 222.5; // 카메라 사각형의 좌상단 x 좌표
        camera_y1 = mouseY - 422.5; // 카메라 사각형의 좌상단 y 좌표
        camera_x2 = mouseX + 222.5; // 카메라 사각형의 우하단 x 좌표
        camera_y2 = mouseY + 422.5; // 카메라 사각형의 우하단 y 좌표
        // 카메라 에셋 속 핸드폰 이미지의 가로 : 445, 세로 845
        person_x1 = hj_images_X[p_anim_controller.status]+160;  // 사람 사각형의 좌상단 x 좌표
        if (p_anim_controller.status != (24|25)){
          person_y1 = 260;  // 사람 사각형의 좌상단 y 좌표
        } else  person_y1 = 270; 
        person_x2 = person_x1 + 300;  // 사람 사각형의 우하단 x 좌표
        person_y2 = person_y1 + 600;  // 사람 사각형의 우하단 y 
        // 실제 사람 있는 부분 한정, 가로 300 세로 600
      }
    } 
  }
  // 스페이스바/마우스클릭 받으면, good/bad 판단하고 해당 trial 종료
  else if (!next_condition && trial_start && ((g3_space_pressed|g3_mouse_pressed)|Timer6.isTimeout())){
    // 사람이 지나가지 않을 때 찍었는지.
    let no_p_cond = !checkOverlap(camera_x1, camera_y1, camera_x2, camera_y2, 
      person_x1, person_y1, person_x2, person_y2); // 겹치면 true 반환 -> ! 붙임
    // 고양이가 눈 뜨고 있고 + 고양이를 카메라 앵글 안에 포함!되었는지.
    let c_eye_cond = c_answer_key.includes(c_anim_controller.status);
    let c_camera_cond = (camera_x1<950 && camera_x2>1180 && camera_y1<670 && camera_y2>920); 
    // 빛이 밝고 + 빛이 카메라 앵글 안에 잡혔는지
    let l_bright_cond = l_answer_key.includes(l_anim_controller.status);
    let l_camera_cond = checkOverlap(camera_x1, camera_y1, camera_x2, camera_y2, 705, 140, 1270, 960); 

    if (!Timer6.isTimeout()){
      // 적절한 사진인지 판단
      if (no_p_cond && c_eye_cond && c_camera_cond && l_bright_cond && l_camera_cond){
        good();
        trial_start = false;
        c_t2_success = true;
        Timer6.reset(); // 타이머 리셋
        g3_space_pressed = false; // 스위치 OFF
        g3_mouse_pressed = false;
      } // 오답일 때 피드백의 위계:
      // c_camera_cond -> l_camera_cond -> no_p_cond -> l_bright_cond -> c_eye_cond 
      else if (!c_camera_cond){
        bad(3); // 고양이 카메라 앵글에 포함 안 됨
        trial_start = false;
        c_t2_success = false;
        Timer6.reset(); // 타이머 리셋
        g3_space_pressed = false; // 스위치 OFF
        g3_mouse_pressed = false;
      }
      else if (!l_camera_cond){
        bad(4); // 빛이 카메라 앵글에 안 잡힘
        trial_start = false;
        c_t2_success = false;
        Timer6.reset(); // 타이머 리셋
        g3_space_pressed = false; // 스위치 OFF
        g3_mouse_pressed = false;
      } 
      else if (!no_p_cond){
        bad(1); // 사람 찍힘
        trial_start = false;
        c_t2_success = false;
        Timer6.reset(); // 타이머 리셋
        g3_space_pressed = false; // 스위치 OFF
        g3_mouse_pressed = false;
      } 
      else if (!c_eye_cond){
        bad(0); // 고양이 눈 감음
        trial_start = false;
        c_t2_success = false;
        Timer6.reset(); // 타이머 리셋
        g3_space_pressed = false; // 스위치 OFF
        g3_mouse_pressed = false;
      } 
      else if (!l_bright_cond){
        bad(2); // 빛 안 밝음
        trial_start = false;
        c_t2_success = false;
        Timer6.reset(); // 타이머 리셋
        g3_space_pressed = false; // 스위치 OFF
        g3_mouse_pressed = false;
      } 

    } else {
      bad(5); // 타임아웃으로 배드 
      trial_start = false;
      c_t2_success = false;
      Timer6.reset(); // 타이머 리셋
      g3_space_pressed = false; // 스위치 OFF
      g3_mouse_pressed = false;
    }

  }

  // 다음 스테이지로
  if (next_condition){
    next_condition = false;
    game_stage_controller++; 
    start_time = millis(); // 시작시간 초기화
  }
}
// game_controller = 74일 때 시행
function game3_trial3(){
  // 경과시간 초기화
  elapsed_time = millis()- start_time;  

  // 0. 게임 세팅
  // 배경 화면 띄우기
  background(stage3_bg);
  // 커서 -> 커서 대신 카메라긴 하지만 카메라 불러오기 전까지.
  image(cursor_mo, mouseX, mouseY, cursor_mo_X, cursor_mo_Y);

  // 각 애니메이션 그림 바뀌는 속도 조절
  let p_anim_changer = frameCount % 20 // 속도조절
  let l_anim_changer = frameCount % 10
  let c_anim_changer = frameCount % 15

    // 애니메이션 실행 조건 - 스페이스바나 클릭 입력 전까지
  // 사람 애니메이션 - 오른쪽에서부터 걸어움
  if (!next_condition && !g3_space_pressed && !g3_mouse_pressed && p_anim_changer == 0){
    p_anim_controller.update();
  }
  switch (p_anim_controller.status) {
    case 0:
      image(hj_ani_00, hj_images_X[0], 260, 635, 635);
      break;
    case 1:
      image(hj_ani_01, hj_images_X[1], 260, 635, 635);
      break;
    case 2:
      image(hj_ani_02, hj_images_X[2], 260, 635, 635);
      break;
    case 3:
      image(hj_ani_03, hj_images_X[3], 260, 635, 635);
      break;
    case 4:
      image(hj_ani_04, hj_images_X[4], 260, 635, 635);
      break;
    case 5:
      image(hj_ani_05, hj_images_X[5], 260, 635, 635);
      break;
    case 6:
      image(hj_ani_00, hj_images_X[6], 260, 635, 635);
      break;
    case 7:
      image(hj_ani_01, hj_images_X[7], 260, 635, 635);
      break;
    case 8:
      image(hj_ani_02, hj_images_X[8], 260, 635, 635);
      break;
    case 9:
      image(hj_ani_03, hj_images_X[9], 260, 635, 635);
      break;
    case 10:
      image(hj_ani_04, hj_images_X[10], 260, 635, 635);
      break;
    case 11:
      image(hj_ani_05, hj_images_X[11], 260, 635, 635);
      break;
    case 12:
      image(hj_ani_05, hj_images_X[12], 260, 635, 635);
      break;
    case 13:
      image(hj_ani_b00, hj_images_X[13], 260, 635, 635);
      break;
    case 14:
      image(hj_ani_b01, hj_images_X[14], 260, 635, 635);
      break;
    case 15:
      image(hj_ani_b02, hj_images_X[15], 260, 635, 635);
      break;
    case 16:
      image(hj_ani_b03, hj_images_X[16], 260, 635, 635);
      break;
    case 17:
      image(hj_ani_b04, hj_images_X[17], 260, 635, 635);
      break;
    case 18:
      image(hj_ani_b05, hj_images_X[18], 260, 635, 635);
      break;
    case 19:
      image(hj_ani_b00, hj_images_X[19], 260, 635, 635);
      break;
    case 20:
      image(hj_ani_b01, hj_images_X[20], 260, 635, 635);
      break;
    case 21:
      image(hj_ani_b02, hj_images_X[21], 260, 635, 635);
      break;
    case 22:
      image(hj_ani_b03, hj_images_X[22], 260, 635, 635);
      break;
    case 23:
      image(hj_ani_b04, hj_images_X[23], 260, 635, 635);
      break;
    case 24:
      image(hj_ani_b05, hj_images_X[24], 270, 635, 635);
      break;
    case 25:
      image(hj_ani_b05, hj_images_X[25], 270, 635, 635);
      break;
  }

  // 빛 애니메이션
  if (!next_condition && !g3_space_pressed && !g3_mouse_pressed && l_anim_changer == 0){
    l_anim_controller.update();
  }
  switch (l_anim_controller.status) {
    case 0:
      image(l_ani_00, 320, -305, 1355, 1355);
      break;
    case 1:
      image(l_ani_01, 320, -305, 1355, 1355);
      break;
    case 2:
      image(l_ani_02, 320, -305, 1355, 1355);
      break;
    case 3:
      image(l_ani_03, 320, -305, 1355, 1355);
      break;
    case 4:
      image(l_ani_04, 320, -305, 1355, 1355);
      break;
    case 5:
      image(l_ani_05, 320, -305, 1355, 1355);
      break;
    case 6:
      image(l_ani_06, 320, -305, 1355, 1355);
      break;
    case 7:
      image(l_ani_07, 320, -305, 1355, 1355);
      break;
    case 8:
      image(l_ani_08, 320, -305, 1355, 1355);
      break;
    case 9:
      image(l_ani_09, 320, -305, 1355, 1355);
      break;
    case 10:
      image(l_ani_10, 320, -305, 1355, 1355);
      break;
    case 11:
      image(l_ani_11, 320, -305, 1355, 1355);
      break;
    case 12: // 역순으로 다시
      image(l_ani_11, 320, -305, 1355, 1355);
      break;
    case 13:
      image(l_ani_10, 320, -305, 1355, 1355);
      break;
    case 14:
      image(l_ani_09, 320, -305, 1355, 1355);
      break;
    case 15:
      image(l_ani_08, 320, -305, 1355, 1355);
      break;
    case 16:
      image(l_ani_07, 320, -305, 1355, 1355);
      break;
    case 17:
      image(l_ani_06, 320, -305, 1355, 1355);
      break;
    case 18:
      image(l_ani_05, 320, -305, 1355, 1355);
      break;
    case 19:
      image(l_ani_04, 320, -305, 1355, 1355);
      break;
    case 20:
      image(l_ani_03, 320, -305, 1355, 1355);
      break;
    case 21:
      image(l_ani_02, 320, -305, 1355, 1355);
      break;
    case 22:
      image(l_ani_01, 320, -305, 1355, 1355);
      break;
    case 23:
      image(l_ani_00, 320, -305, 1355, 1355);
      break;
  
  }

  // 고양이 애니메이션
  if (!next_condition && !g3_space_pressed && !g3_mouse_pressed && c_anim_changer == 0){
    c_anim_controller.update();
  }
  switch(c_anim_controller.status){
    case 0:
      image(c_ani_00, 520, 50, 1000, 1000);
      break;
    case 1:
      image(c_ani_01, 520, 50, 1000, 1000);
      break;
    case 2:
      image(c_ani_02, 520, 50, 1000, 1000);
      break;
    case 3:
      image(c_ani_03, 520, 50, 1000, 1000);
      break;
    case 4:
      image(c_ani_04, 520, 50, 1000, 1000);
      break;
    case 5:
      image(c_ani_05, 520, 50, 1000, 1000);
      break;
    case 6:
      image(c_ani_06, 520, 50, 1000, 1000);
      break;
    case 7:
      image(c_ani_07, 520, 50, 1000, 1000);
      break;
    case 8:
      image(c_ani_08, 520, 50, 1000, 1000);
      break;
    case 9:
      image(c_ani_09, 520, 50, 1000, 1000);
      break;
    case 10:
      image(c_ani_10, 520, 50, 1000, 1000);
      break;
    case 11:
      image(c_ani_11, 520, 50, 1000, 1000);
      break;
    case 12:
      image(c_ani_12, 520, 50, 1000, 1000);
      break;
    case 13: // 역순으로 다시
      image(c_ani_12, 520, 50, 1000, 1000);
      break;
    case 14:
      image(c_ani_11, 520, 50, 1000, 1000);
      break;
    case 15:
      image(c_ani_10, 520, 50, 1000, 1000);
      break;
    case 16:
      image(c_ani_09, 520, 50, 1000, 1000);
      break;
    case 17:
      image(c_ani_08, 520, 50, 1000, 1000);
      break;
    case 18:
      image(c_ani_07, 520, 50, 1000, 1000);
      break;
    case 19:
      image(c_ani_06, 520, 50, 1000, 1000);
      break;
    case 20:
      image(c_ani_05, 520, 50, 1000, 1000);
      break;
    case 21:
      image(c_ani_04, 520, 50, 1000, 1000);
      break;
    case 22:
      image(c_ani_03, 520, 50, 1000, 1000);
      break;
    case 23:
      image(c_ani_02, 520, 50, 1000, 1000);
      break;
    case 24:
      image(c_ani_01, 520, 50, 1000, 1000);
      break;
    case 25:
      image(c_ani_00, 520, 50, 1000, 1000);
      break;    
  }

  // 배경 장애물
  image(stage3_obstacle, 0, 0);

  // trial 시작
  if (!next_condition && !trial_start && !g3_space_pressed && !g3_mouse_pressed){
    trial_start = true;
    Timer6.reset(); // 타이머 리셋
  }

  // 2. 게임 작동
  if (!next_condition && trial_start && !g3_space_pressed && !g3_mouse_pressed && !Timer3.isTimeout()){
    // 트라이 아이콘 띄우기
    if (c_t1_success) image(c_try_icon_blu, 1583, 7, 60, 70); 
    else image(c_try_icon_red, 1583, 7, 60, 70); 
    if (c_t2_success) image(c_try_icon_blu, 1654.6, 7, 60, 70); 
    else image(c_try_icon_red, 1654.6, 7, 60, 70); 
    if (frameCount % 40 == (0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19)){
      image(c_try_icon_bla, 1726.2, 7, 60, 70); 
    } else image(c_try_icon_bro, 1726.2, 7, 60, 70); 

    // 타이머 시작 
    Timer6.update();
    Timer6.display(myFont, std_textSize);

    // 카메라 (기본/눌렸을 때)
    imageX = mouseX - camera_default.width / 2;
    imageY = mouseY - camera_default.height / 2;
    image(camera_default, imageX, imageY);

    // 스페이스바 눌렀을 때 혹은 마우스 클릭했을 때
    if (keyIsPressed | mouseIsPressed){
      if (key === ' ' | mouseIsPressed){
        if (key === ' ') g3_space_pressed = true; // 스위치 ON
        if (mouseIsPressed) g3_mouse_pressed = true; 
    
        // 카메라 효과음
        camera_sound.play();

        // good/bad 판단 - 찍을 당시의 카메라 좌표 필요하므로 저장
        camera_x1 = mouseX - 222.5; // 카메라 사각형의 좌상단 x 좌표
        camera_y1 = mouseY - 422.5; // 카메라 사각형의 좌상단 y 좌표
        camera_x2 = mouseX + 222.5; // 카메라 사각형의 우하단 x 좌표
        camera_y2 = mouseY + 422.5; // 카메라 사각형의 우하단 y 좌표
        // 카메라 에셋 속 핸드폰 이미지의 가로 : 445, 세로 845
        person_x1 = hj_images_X[p_anim_controller.status]+160;  // 사람 사각형의 좌상단 x 좌표
        if (p_anim_controller.status != (24|25)){
          person_y1 = 260;  // 사람 사각형의 좌상단 y 좌표
        } else  person_y1 = 270; 
        person_x2 = person_x1 + 300;  // 사람 사각형의 우하단 x 좌표
        person_y2 = person_y1 + 600;  // 사람 사각형의 우하단 y 
        // 실제 사람 있는 부분 한정, 가로 300 세로 600
      }
    } 
  }
  // 스페이스바/마우스클릭 받으면, good/bad 판단하고 해당 trial 종료
  else if (!next_condition && trial_start && ((g3_space_pressed|g3_mouse_pressed)|Timer6.isTimeout())){
    // 사람이 지나가지 않을 때 찍었는지.
    let no_p_cond = !checkOverlap(camera_x1, camera_y1, camera_x2, camera_y2, 
      person_x1, person_y1, person_x2, person_y2); // 겹치면 true 반환 -> ! 붙임
    // 고양이가 눈 뜨고 있고 + 고양이를 카메라 앵글 안에 포함!되었는지.
    let c_eye_cond = c_answer_key.includes(c_anim_controller.status);
    let c_camera_cond = (camera_x1<950 && camera_x2>1180 && camera_y1<670 && camera_y2>920); 
    // 빛이 밝고 + 빛이 카메라 앵글 안에 잡혔는지
    let l_bright_cond = l_answer_key.includes(l_anim_controller.status);
    let l_camera_cond = checkOverlap(camera_x1, camera_y1, camera_x2, camera_y2, 705, 140, 1270, 960); 

    if (!Timer6.isTimeout()){
      // 적절한 사진인지 판단
      if (no_p_cond && c_eye_cond && c_camera_cond && l_bright_cond && l_camera_cond){
        good();
        trial_start = false;
        Timer6.reset(); // 타이머 리셋
        g3_space_pressed = false; // 스위치 OFF
        g3_mouse_pressed = false;
      } // 오답일 때 피드백의 위계:
      // c_camera_cond -> l_camera_cond -> no_p_cond -> l_bright_cond -> c_eye_cond 
      else if (!c_camera_cond){
        bad(3); // 고양이 카메라 앵글에 포함 안 됨
        trial_start = false;
        Timer6.reset(); // 타이머 리셋
        g3_space_pressed = false; // 스위치 OFF
        g3_mouse_pressed = false;
      }
      else if (!l_camera_cond){
        bad(4); // 빛이 카메라 앵글에 안 잡힘
        trial_start = false;
        Timer6.reset(); // 타이머 리셋
        g3_space_pressed = false; // 스위치 OFF
        g3_mouse_pressed = false;
      } 
      else if (!no_p_cond){
        bad(1); // 사람 찍힘
        trial_start = false;
        Timer6.reset(); // 타이머 리셋
        g3_space_pressed = false; // 스위치 OFF
        g3_mouse_pressed = false;
      } 
      else if (!c_eye_cond){
        bad(0); // 고양이 눈 감음
        trial_start = false;
        Timer6.reset(); // 타이머 리셋
        g3_space_pressed = false; // 스위치 OFF
        g3_mouse_pressed = false;
      } 
      else if (!l_bright_cond){
        bad(2); // 빛 안 밝음
        trial_start = false;
        Timer6.reset(); // 타이머 리셋
        g3_space_pressed = false; // 스위치 OFF
        g3_mouse_pressed = false;
      } 

    } else {
      bad(5); // 타임아웃으로 배드 
      trial_start = false;
      Timer6.reset(); // 타이머 리셋
      g3_space_pressed = false; // 스위치 OFF
      g3_mouse_pressed = false;
    }

  }

  // 다음 스테이지로
  if (next_condition){
    next_condition = false;
    game_stage_controller++;
    start_time = millis(); // 시작시간 초기화
  }
}
// game_controller = 71, 73, 75일 때 시행
function game3_showResults(){
  // 경과시간 초기화
  elapsed_time = millis()- start_time;  

  // 찍은 사진 보여줌
  if (isFeedbackShowing && elapsed_time <2000){
    image(stage3_bg, 0, 0);
    switch (p_anim_controller.status) {
      case 0:
        image(hj_ani_00, hj_images_X[0], 260, 635, 635);
        break;
      case 1:
        image(hj_ani_01, hj_images_X[1], 260, 635, 635);
        break;
      case 2:
        image(hj_ani_02, hj_images_X[2], 260, 635, 635);
        break;
      case 3:
        image(hj_ani_03, hj_images_X[3], 260, 635, 635);
        break;
      case 4:
        image(hj_ani_04, hj_images_X[4], 260, 635, 635);
        break;
      case 5:
        image(hj_ani_05, hj_images_X[5], 260, 635, 635);
        break;
      case 6:
        image(hj_ani_00, hj_images_X[6], 260, 635, 635);
        break;
      case 7:
        image(hj_ani_01, hj_images_X[7], 260, 635, 635);
        break;
      case 8:
        image(hj_ani_02, hj_images_X[8], 260, 635, 635);
        break;
      case 9:
        image(hj_ani_03, hj_images_X[9], 260, 635, 635);
        break;
      case 10:
        image(hj_ani_04, hj_images_X[10], 260, 635, 635);
        break;
      case 11:
        image(hj_ani_05, hj_images_X[11], 260, 635, 635);
        break;
      case 12:
        image(hj_ani_05, hj_images_X[12], 260, 635, 635);
        break;
      case 13:
        image(hj_ani_b00, hj_images_X[13], 260, 635, 635);
        break;
      case 14:
        image(hj_ani_b01, hj_images_X[14], 260, 635, 635);
        break;
      case 15:
        image(hj_ani_b02, hj_images_X[15], 260, 635, 635);
        break;
      case 16:
        image(hj_ani_b03, hj_images_X[16], 260, 635, 635);
        break;
      case 17:
        image(hj_ani_b04, hj_images_X[17], 260, 635, 635);
        break;
      case 18:
        image(hj_ani_b05, hj_images_X[18], 260, 635, 635);
        break;
      case 19:
        image(hj_ani_b00, hj_images_X[19], 260, 635, 635);
        break;
      case 20:
        image(hj_ani_b01, hj_images_X[20], 260, 635, 635);
        break;
      case 21:
        image(hj_ani_b02, hj_images_X[21], 260, 635, 635);
        break;
      case 22:
        image(hj_ani_b03, hj_images_X[22], 260, 635, 635);
        break;
      case 23:
        image(hj_ani_b04, hj_images_X[23], 260, 635, 635);
        break;
      case 24:
        image(hj_ani_b05, hj_images_X[24], 270, 635, 635);
        break;
      case 25:
        image(hj_ani_b05, hj_images_X[25], 270, 635, 635);
        break;
    }
    switch (l_anim_controller.status) {
      case 0:
        image(l_ani_00, 320, -305, 1355, 1355);
        break;
      case 1:
        image(l_ani_01, 320, -305, 1355, 1355);
        break;
      case 2:
        image(l_ani_02, 320, -305, 1355, 1355);
        break;
      case 3:
        image(l_ani_03, 320, -305, 1355, 1355);
        break;
      case 4:
        image(l_ani_04, 320, -305, 1355, 1355);
        break;
      case 5:
        image(l_ani_05, 320, -305, 1355, 1355);
        break;
      case 6:
        image(l_ani_06, 320, -305, 1355, 1355);
        break;
      case 7:
        image(l_ani_07, 320, -305, 1355, 1355);
        break;
      case 8:
        image(l_ani_08, 320, -305, 1355, 1355);
        break;
      case 9:
        image(l_ani_09, 320, -305, 1355, 1355);
        break;
      case 10:
        image(l_ani_10, 320, -305, 1355, 1355);
        break;
      case 11:
        image(l_ani_11, 320, -305, 1355, 1355);
        break;
      case 12: // 역순으로 다시
        image(l_ani_11, 320, -305, 1355, 1355);
        break;
      case 13:
        image(l_ani_10, 320, -305, 1355, 1355);
        break;
      case 14:
        image(l_ani_09, 320, -305, 1355, 1355);
        break;
      case 15:
        image(l_ani_08, 320, -305, 1355, 1355);
        break;
      case 16:
        image(l_ani_07, 320, -305, 1355, 1355);
        break;
      case 17:
        image(l_ani_06, 320, -305, 1355, 1355);
        break;
      case 18:
        image(l_ani_05, 320, -305, 1355, 1355);
        break;
      case 19:
        image(l_ani_04, 320, -305, 1355, 1355);
        break;
      case 20:
        image(l_ani_03, 320, -305, 1355, 1355);
        break;
      case 21:
        image(l_ani_02, 320, -305, 1355, 1355);
        break;
      case 22:
        image(l_ani_01, 320, -305, 1355, 1355);
        break;
      case 23:
        image(l_ani_00, 320, -305, 1355, 1355);
        break;
    
    }
    switch(c_anim_controller.status){
      case 0:
        image(c_ani_00, 520, 50, 1000, 1000);
        break;
      case 1:
        image(c_ani_01, 520, 50, 1000, 1000);
        break;
      case 2:
        image(c_ani_02, 520, 50, 1000, 1000);
        break;
      case 3:
        image(c_ani_03, 520, 50, 1000, 1000);
        break;
      case 4:
        image(c_ani_04, 520, 50, 1000, 1000);
        break;
      case 5:
        image(c_ani_05, 520, 50, 1000, 1000);
        break;
      case 6:
        image(c_ani_06, 520, 50, 1000, 1000);
        break;
      case 7:
        image(c_ani_07, 520, 50, 1000, 1000);
        break;
      case 8:
        image(c_ani_08, 520, 50, 1000, 1000);
        break;
      case 9:
        image(c_ani_09, 520, 50, 1000, 1000);
        break;
      case 10:
        image(c_ani_10, 520, 50, 1000, 1000);
        break;
      case 11:
        image(c_ani_11, 520, 50, 1000, 1000);
        break;
      case 12:
        image(c_ani_12, 520, 50, 1000, 1000);
        break;
      case 13: // 역순으로 다시
        image(c_ani_12, 520, 50, 1000, 1000);
        break;
      case 14:
        image(c_ani_11, 520, 50, 1000, 1000);
        break;
      case 15:
        image(c_ani_10, 520, 50, 1000, 1000);
        break;
      case 16:
        image(c_ani_09, 520, 50, 1000, 1000);
        break;
      case 17:
        image(c_ani_08, 520, 50, 1000, 1000);
        break;
      case 18:
        image(c_ani_07, 520, 50, 1000, 1000);
        break;
      case 19:
        image(c_ani_06, 520, 50, 1000, 1000);
        break;
      case 20:
        image(c_ani_05, 520, 50, 1000, 1000);
        break;
      case 21:
        image(c_ani_04, 520, 50, 1000, 1000);
        break;
      case 22:
        image(c_ani_03, 520, 50, 1000, 1000);
        break;
      case 23:
        image(c_ani_02, 520, 50, 1000, 1000);
        break;
      case 24:
        image(c_ani_01, 520, 50, 1000, 1000);
        break;
      case 25:
        image(c_ani_00, 520, 50, 1000, 1000);
        break;    
    }
    image(stage3_obstacle, 0, 0);
    // 눌렸을 때 카메라 이미지
    image(camera_pressed, imageX, imageY); 
    textSize(std_textSize+30);
    text("이렇게 찍혔어요!", 100, 100);
    settingInitialize();
  }

  if (isFeedbackShowing && elapsed_time >= 2000){
    switch (currentFeedback){
      case "GOOD":
        if (!isSoundPlayed) {
          setTimeout(()=>{
            good_sound.play();
          }, 3500);
          isSoundPlayed = true;
        }
        if (!next_condition && (elapsed_time < 4000)) {
          settingInitialize();
          image(textbox_black_op, 200, 580, 1400, 400); // 텍스트 박스 위치
          text("WOW!! 인플루언서도 울고 갈 사진실력...!!!", 320, 700);
        } 
        if (!next_condition && (elapsed_time >= 4000) && (elapsed_time < 6000)) {
          background(0); // 화면을 검정색으로 설정
          fill(255);
          textSize(100);
          textAlign(CENTER, CENTER);
          text("GOOD", width / 2, height / 2);
        } 
        if (!next_condition && elapsed_time >= 6000) {
          isFeedbackShowing = false; // 시간이 지나면 feedback 화면을 제거
          settingInitialize();
          next_condition = true;
          isSoundPlayed = false;
        }
        break;

      case "BAD0": // 고양이 눈 감음
        if (!isSoundPlayed) {
          setTimeout(()=>{
            bad_sound.play();
          }, 3500);
          isSoundPlayed = true;
        }
        if (!next_condition && (elapsed_time < 4000)) {
          settingInitialize();
          image(textbox_black_op, 200, 580, 1400, 400); // 텍스트 박스 위치
          text("고양이가 눈을 감았잖아 ㅡㅡ", 320, 700);
        }  
        if (!next_condition && (elapsed_time >= 4000) && (elapsed_time < 6000)) {
          background(0); // 화면을 검정색으로 설정
          fill(255);
          textSize(100);
          textAlign(CENTER, CENTER);
          text("BAD", width / 2, height / 2);
        } 
        if (!next_condition && elapsed_time >= 6000) {
          isFeedbackShowing = false; // 시간이 지나면 feedback 화면을 제거
          settingInitialize();
          next_condition = true;
          isSoundPlayed = false;
        }
        break;  

      case "BAD1": // 사람 찍힘
        if (!isSoundPlayed) {
          setTimeout(()=>{
            bad_sound.play();
          }, 3500);
          isSoundPlayed = true;
        }
        if (!next_condition && (elapsed_time < 4000)) {
          settingInitialize();
          image(textbox_black_op, 200, 580, 1400, 400); // 텍스트 박스 위치
          text("뒤에 누가 알짱거리는데?", 320, 700);
        }
        if (!next_condition && (elapsed_time >= 4000) && (elapsed_time < 6000)) {
          background(0); // 화면을 검정색으로 설정
          fill(255);
          textSize(100);
          textAlign(CENTER, CENTER);
          text("BAD", width / 2, height / 2);
        }
        if (!next_condition && elapsed_time >= 6000) {
          isFeedbackShowing = false; // 시간이 지나면 feedback 화면을 제거
          settingInitialize();
          next_condition = true;
          isSoundPlayed = false;
        }
        break;

      case "BAD2": // 빛 안 밝음
        if (!isSoundPlayed) {
          setTimeout(()=>{
            bad_sound.play();
          }, 3500);
          isSoundPlayed = true;
        }
        if (!next_condition && (elapsed_time < 4000)) {
          settingInitialize();
          image(textbox_black_op, 200, 580, 1400, 400); // 텍스트 박스 위치
          text("햇살이 너무 약하다~", 320, 700);
        }
        if (!next_condition && (elapsed_time >= 4000) && (elapsed_time < 6000)) {
          background(0); // 화면을 검정색으로 설정
          fill(255);
          textSize(100);
          textAlign(CENTER, CENTER);
          text("BAD", width / 2, height / 2);
        }
        if (!next_condition && elapsed_time >= 6000) {
          isFeedbackShowing = false; // 시간이 지나면 feedback 화면을 제거
          settingInitialize();
          next_condition = true;
          isSoundPlayed = false;
        }
        break;
      
      case "BAD3": // 고양이 카메라 앵글에 포함 안 됨
        if (!isSoundPlayed) {
          setTimeout(()=>{
            bad_sound.play();
          }, 3500);
          isSoundPlayed = true;
        }
        if (!next_condition && (elapsed_time < 4000)) {
          settingInitialize();
          image(textbox_black_op, 200, 580, 1400, 400); // 텍스트 박스 위치
          text("고양이가 제대로 안 찍혔잖아!!", 320, 700);
        }
        if (!next_condition && (elapsed_time >= 4000) && (elapsed_time < 6000)) {
          background(0); // 화면을 검정색으로 설정
          fill(255);
          textSize(100);
          textAlign(CENTER, CENTER);
          text("BAD", width / 2, height / 2);
        }
        if (!next_condition && elapsed_time >= 6000) {
          isFeedbackShowing = false; // 시간이 지나면 feedback 화면을 제거
          settingInitialize();
          next_condition = true;
          isSoundPlayed = false;
        }
        break;

      case "BAD4": // 빛이 카메라 앵글에 안 잡힘
        if (!isSoundPlayed) {
          setTimeout(()=>{
            bad_sound.play();
          }, 3500);
          isSoundPlayed = true;
        }
        if (!next_condition && (elapsed_time < 4000)) {
          settingInitialize();
          image(textbox_black_op, 200, 580, 1400, 400); // 텍스트 박스 위치
          text("빛이... 사진에 안 잡혔네?", 320, 700);
        }
        if (!next_condition && (elapsed_time >= 4000) && (elapsed_time < 6000)) {
          background(0); // 화면을 검정색으로 설정
          fill(255);
          textSize(100);
          textAlign(CENTER, CENTER);
          text("BAD", width / 2, height / 2);
        }
        if (!next_condition && elapsed_time >= 6000) {
          isFeedbackShowing = false; // 시간이 지나면 feedback 화면을 제거
          settingInitialize();
          next_condition = true;
          isSoundPlayed = false;
        }
        break;
    
      case "BAD5": // 타임아웃
        if (!isSoundPlayed) {
          setTimeout(()=>{
            bad_sound.play();
          }, 3500);
          isSoundPlayed = true;
        }
        if (!next_condition && (elapsed_time < 4000)) {
          settingInitialize();
          image(textbox_black_op, 200, 580, 1400, 400); // 텍스트 박스 위치
          text("뒷사람이 기다리고 있다구!!", 320, 700);
        }
        if (!next_condition && (elapsed_time >= 4000) && (elapsed_time < 6000)) {
          background(0); // 화면을 검정색으로 설정
          fill(255);
          textSize(100);
          textAlign(CENTER, CENTER);
          text("BAD", width / 2, height / 2);
        }
        if (!next_condition && elapsed_time >= 6000) {
          isFeedbackShowing = false; // 시간이 지나면 feedback 화면을 제거
          settingInitialize();
          next_condition = true;
          isSoundPlayed = false;
        }
        break;
      }    
  }

  // 3. 다음 stage로
  if (next_condition){
    next_condition = false;
    game_stage_controller++; 
    start_time = millis(); // 시작시간 초기화
  }
}

// game_controller = 76일 때 시행
  function customer_ending(){
  // 경과시간 초기화
  elapsed_time = millis() - start_time;

  if (!next_condition && show_step == 0){
    image(c_cafe_close, 0, 0);

    // 대사 목록
    fullText = [
      "이 망할 카페... 다시는 안 온다.\n허리디스크 걸리면 진짜 고소나 해버려야지."
    ];

    // 대사 한 글자씩 작성
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex+1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length){
          typing = false;
        } 
      }
    } else { // typing이 false
      if (direct_next_condition()){
        if (currentTextIndex < fullText.length -1) {
          currentTextIndex++; // fullText가 다 끝나지 않았을 때 
          charIndex = 0;
          typing = true;
        } else { // fullText가 다 돌았을 떄
          next_show = true;
        }
      } else { // 대사 한 단락 다 타이핑되긴 했는데 아직 다.넥.컨 입력 안 됐을 때
        text(currentText, 350, 700);
      }
    }

    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
  }

  if (!next_condition && show_step == 1){
    image(c_cafe_close_who, 0, 0);

    // 대사 목록
    fullText = [
      "???: 저기... 놓고 간 게 있는 거 같으신데..."
    ];

    // 대사 한 글자씩 작성
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex+1);
      text(currentText, 350, 700);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length){
          typing = false;
        } 
      }
    } else { // typing이 false
      if (direct_next_condition()){
        if (currentTextIndex < fullText.length -1) {
          currentTextIndex++; // fullText가 다 끝나지 않았을 때 
          charIndex = 0;
          typing = true;
        } else { // fullText가 다 돌았을 떄
          next_show = true;
        }
      } else { // 대사 한 단락 다 타이핑되긴 했는데 아직 다.넥.컨 입력 안 됐을 때
        text(currentText, 350, 700);
      }
    }

    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
  }

  if (!next_condition && show_step == 2){
    image(c_prof_grade_bl, 0, 0);

    // 대사 목록
    fullText = [
      " o.jon 카페 체험 성적표를 놓고 가셨네요!",
      "제가 사실 이 카페의 사장입니다 ㅎㅎ",
      "흠... 어디보자...\n오늘 체험을 통해 매겨진 당신의 감성 등급은...",
    ];

    // 대사 한 글자씩 작성
    if (typing) {
      currentText = fullText[currentTextIndex].substring(0, charIndex+1);
      text(currentText, 350, 750);
      if (charIndex < fullText[currentTextIndex].length) {
        charIndex++;
        if (charIndex == fullText[currentTextIndex].length){
          typing = false;
        } 
      }
    } else { // typing이 false
      if (direct_next_condition()){
        if (currentTextIndex < fullText.length -1) {
          currentTextIndex++; // fullText가 다 끝나지 않았을 때 
          charIndex = 0;
          typing = true;
        } else { // fullText가 다 돌았을 떄
          next_show = true;
        }
      } else { // 대사 한 단락 다 타이핑되긴 했는데 아직 다.넥.컨 입력 안 됐을 때
        text(currentText, 350, 750);
      }
    }

    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
  }

  if (!next_condition && show_step == 3){
    // 성적표 뜸
    switch(good_count){
      case 8:
      case 9:
        image(cust_grade_a, 0, 0);
        break;

      case 5:
      case 6:
      case 7:
        image(cust_grade_b, 0, 0);
        break;

      case 3:
      case 4:
        image(cust_grade_c, 0, 0);
        break;

      case 0:
      case 1: 
      case 2:
        image(cust_grade_f, 0, 0);
        break;
    }
    
    // 커서
    image(cursor_default, mouseX, mouseY, cursor_def_X, cursor_def_Y);
    setTimeout(() => {
      next_show = true;
    }, 2000);
  }

  if (!next_condition && show_step == 4){
    fill(0); // 검은 화면
    rect(0, 0, width, height);
    fill(255); // 하얀 글씨
    textSize(70); 
    textAlign(CENTER, CENTER);
    text("다시 시작하려면 새로고침 키를 누르세요", width/2, height/2);
    settingInitialize();
  }

  // show_step 증가 구현방식
  if (next_show){
    next_show = false;
    show_step++;
    typing = true;
    charIndex = 0;
    currentTextIndex = 0;
  }  
}



//**  기타 시스템 함수들 **//

// 게임 초기화하는 함수
function initGame(){
  clear(); // 캔버스 초기화
  // 게임 재부팅에 필요한 변수들 초기화
  game_stage_controller = 997;
  next_condition = false;
  next_show = false;
  show_step = 0;
  typing = true;
  charIndex = 0;
  currentTextIndex = 0;
  start_time = millis();
  clickedIndex = [];
  /// 재부팅 후 기록 - 점검용
  console.log(start_time);
  input_str1 = '';
  input_str2 = '';
  input_str3 = '';
  good_count = 0;
  bad_count = 0;
}
// 세팅 초기화하는 함수
function settingInitialize(){
  fill(0);
  noStroke();
  textSize(std_textSize); // 텍스트 크기: 표준값 50
  textAlign(LEFT, BASELINE);
  noTint();
}
// 게임 초기화 트러거 - r키
function keyPressed(){
  if (key === 'r') { // r키가 눌렸을 때 초기화 스위치 ON
    initGame(); 
  }
}

// good 함수
function good(){
  if (!isFeedbackShowing) {
    isFeedbackShowing = true;
    currentFeedback = "GOOD";
    good_count++;
    next_condition = true;
    return;
  }
}
// bad 함수
function bad(num){
  if (!isFeedbackShowing && (num == 0)) {
    isFeedbackShowing = true;
    currentFeedback = "BAD0";
    bad_count++;
    next_condition = true;
    return;
  }
  else if (!isFeedbackShowing && (num == 1)) {
    isFeedbackShowing = true;
    currentFeedback = "BAD1";
    bad_count++;
    next_condition = true;
    return;
  }
  else if (!isFeedbackShowing && (num == 2)){
    isFeedbackShowing = true;
    currentFeedback = "BAD2";
    bad_count++;
    next_condition = true;
    return;
  }
  else if (!isFeedbackShowing && (num == 3)){
    isFeedbackShowing = true;
    currentFeedback = "BAD3";
    bad_count++;
    next_condition = true;
    return;
  }
  else if (!isFeedbackShowing && (num == 4)){
    isFeedbackShowing = true;
    currentFeedback = "BAD4";
    bad_count++;
    next_condition = true;
    return;
  }
  else if (!isFeedbackShowing && (num == 5)){
    isFeedbackShowing = true;
    currentFeedback = "BAD5";
    bad_count++;
    next_condition = true;
    return;
  }
}

// 두 사각형이 겹치는지 확인하는 함수
function checkOverlap(rect1_x1, rect1_y1, rect1_x2, rect1_y2, rect2_x1, rect2_y1, rect2_x2, rect2_y2) {
  // 첫 번째 사각형의 좌상단 좌표와 우하단 좌표
  let rect1_topLeft_x = rect1_x1;
  let rect1_topLeft_y = rect1_y1;
  let rect1_bottomRight_x = rect1_x2;
  let rect1_bottomRight_y = rect1_y2;
  
  // 두 번째 사각형의 좌상단 좌표와 우하단 좌표
  let rect2_topLeft_x = rect2_x1;
  let rect2_topLeft_y = rect2_y1;
  let rect2_bottomRight_x = rect2_x2;
  let rect2_bottomRight_y = rect2_y2;
  
  // 두 사각형이 서로 겹치는지 확인
  if (rect1_topLeft_x < rect2_bottomRight_x && rect1_bottomRight_x > rect2_topLeft_x &&
    rect1_topLeft_y < rect2_bottomRight_y && rect1_bottomRight_y > rect2_topLeft_y) {
    // 겹치는 부분이 존재
    return true;
  } 
  else {
    // 겹치는 부분이 없음
    return false;
  }
} //오디오 켜지는 것 제어 및 알바생 미니게임 2 마우스 제어
function mousePressed() {
  if (!userStarted) {
    userStarted = true;
    if (!script_bgm_00.isPlaying()) {
      script_bgm_00.loop();
    }
  }
  
  if (gameSuccess || finDefaultClickCount >= 3) return;

  // fin_default 클릭 여부 확인 및 처리
  if (mouseX > 1473 && mouseX < 1473 + 300 && mouseY > 750 && mouseY < 750 + 200) {
    if (showMochaFin) {
      // showMochaFin이 true인 경우 case 18로 이동
      game_stage_controller = 18;
    } else if (goalIn10 >= 10 && goalIn16 >= 1 && goalIn22 >= 1 && !invalidIngredient) {
      isFinDefault = false;
      showFinMo = true;
      showMochaFin = true;
      finMoTimer = frameCount;
    } else {
      game_stage_controller++; // 또는 다음 스테이지로 설정
      start_time = millis(); // 시작시간 초기화
      return; // pt_game2_result로 넘어가므로 함수 종료
    }
  }

  if (selectedIngredient) {
    mouseTrail = [{ x: mouseX, y: mouseY }];
  } else {
    // 선택한 재료가 없다면 배치된 재료 클릭 여부 확인
    for (let i = dpIngredients.length - 1; i >= 0; i--) {
      let ingredient = dpIngredients[i];
      if (mouseX > ingredient.x && mouseX < ingredient.x + ingredient.w && mouseY > ingredient.y && mouseY < ingredient.y + ingredient.h) {
        dpIngredients.splice(i, 1);
        if (ingredient.img === indi2) {
          goalIn10--;
        } else if (ingredient.img === indi5) {
          goalIn16--;
        } else if (ingredient.img === indi3) {
          goalIn22--;
        }
      }
    }
  


    if (mouseX > 74 && mouseX < 194 && mouseY > 74 && mouseY < 193) {
      selectedIngredient = { img: in1, x: mouseX, y: mouseY, w: 120, h: 120, original: false };
    } else if (mouseX > 210 && mouseX < 330 && mouseY > 74 && mouseY < 193) {
      selectedIngredient = { img: in2, x: mouseX, y: mouseY, w: 120, h: 120, original: false };
    } else if (mouseX > 346 && mouseX < 466 && mouseY > 74 && mouseY < 193) {
      selectedIngredient = { img: in3, x: mouseX, y: mouseY, w: 120, h: 120, original: false };
    } else if (mouseX > 482 && mouseX < 602 && mouseY > 74 && mouseY < 193) {
      selectedIngredient = { img: in4, x: mouseX, y: mouseY, w: 120, h: 120, original: false };
    } else if (mouseX > 618 && mouseX < 738 && mouseY > 74 && mouseY < 193) {
      selectedIngredient = { img: in5, x: mouseX, y: mouseY, w: 120, h: 120, original: false };
    } else if (mouseX > 754 && mouseX < 874 && mouseY > 74 && mouseY < 193) {
      selectedIngredient = { img: in6, x: mouseX, y: mouseY, w: 120, h: 120, original: false };
    } else if (mouseX > 890 && mouseX < 1010 && mouseY > 74 && mouseY < 193) {
      selectedIngredient = { img: in7, x: mouseX, y: mouseY, w: 110, h: 110, original: false };
    } else if (mouseX > 1026 && mouseX < 1146 && mouseY > 74 && mouseY < 193) {
      selectedIngredient = { img: in8, x: mouseX, y: mouseY, w: 80, h: 95, original: false };
    } else if (mouseX > 74 && mouseX < 194 && mouseY > 210 && mouseY < 329) {
      selectedIngredient = { img: in9, x: mouseX, y: mouseY, w: 100, h: 100, original: false };
    } else if (mouseX > 210 && mouseX < 330 && mouseY > 210 && mouseY < 329) {
      selectedIngredient = { img: in10, x: mouseX, y: mouseY, w: 70, h: 95, original: false };
    } else if (mouseX > 346 && mouseX < 466 && mouseY > 210 && mouseY < 329) {
      selectedIngredient = { img: in11, x: mouseX, y: mouseY, w: 110, h: 110, original: false };
    } else if (mouseX > 482 && mouseX < 602 && mouseY > 210 && mouseY < 329) {
      selectedIngredient = { img: in12, x: mouseX, y: mouseY, w: 110, h: 110, original: false };
    } else if (mouseX > 618 && mouseX < 738 && mouseY > 210 && mouseY < 329) {
      selectedIngredient = { img: in13, x: mouseX, y: mouseY, w: 110, h: 110, original: false };
    } else if (mouseX > 754 && mouseX < 874 && mouseY > 210 && mouseY < 329) {
      selectedIngredient = { img: in14, x: mouseX, y: mouseY, w: 110, h: 110, original: false };
    } else if (mouseX > 890 && mouseX < 1010 && mouseY > 210 && mouseY < 329) {
      selectedIngredient = { img: in15, x: mouseX, y: mouseY, w: 110, h: 110, original: false };
    } else if (mouseX > 1026 && mouseX < 1146 && mouseY > 210 && mouseY < 329) {
      selectedIngredient = { img: in16, x: mouseX, y: mouseY, w: 105, h: 105, original: false };
    } else if (mouseX > 74 && mouseX < 194 && mouseY > 346 && mouseY < 465) {
      selectedIngredient = { img: in17, x: mouseX, y: mouseY, w: 100, h: 100, original: false };
    } else if (mouseX > 210 && mouseX < 330 && mouseY > 346 && mouseY < 465) {
      selectedIngredient = { img: in18, x: mouseX, y: mouseY, w: 100, h: 120, original: false };
    } else if (mouseX > 346 && mouseX < 466 && mouseY > 346 && mouseY < 465) {
      selectedIngredient = { img: in19, x: mouseX, y: mouseY, w: 100, h: 120, original: false };
    } else if (mouseX > 482 && mouseX < 602 && mouseY > 346 && mouseY < 465) {
      selectedIngredient = { img: in20, x: mouseX, y: mouseY, w: 110, h: 110, original: false };
    } else if (mouseX > 618 && mouseX < 738 && mouseY > 346 && mouseY < 465) {
      selectedIngredient = { img: in21, x: mouseX, y: mouseY, w: 110, h: 110, original: false };
    } else if (mouseX > 754 && mouseX < 874 && mouseY > 346 && mouseY < 465) {
      selectedIngredient = { img: in22, x: mouseX, y: mouseY, w: 110, h: 110, original: false };
    } else if (mouseX > 890 && mouseX < 1010 && mouseY > 346 && mouseY < 465) {
      selectedIngredient = { img: in23, x: mouseX, y: mouseY, w: 100, h: 100, original: false };
    } else if (mouseX > 1026 && mouseX < 1146 && mouseY > 346 && mouseY < 465) {
      selectedIngredient = { img: in24, x: mouseX, y: mouseY, w: 100, h: 100, original: false };
    }

    if (selectedIngredient) {
      mouseTrail = [{ x: mouseX, y: mouseY }];
    }
  }
}
// 마우스 오버 이벤트 핸들러
function mouseMoved() {
  hoverIndex = -1;
  for (let i = 0; i < rects.length; i++) {
    if (mouseX > rects[i].x - 170 && mouseX < rects[i].x - 170 + rects[i].width && mouseY > rects[i].y && mouseY < rects[i].y + rects[i].height) {
      hoverIndex = i;
      break;
    }
  }
}
// 텍스트박스를 누르거나 스페이스바를 치면 다음으로
function direct_next_condition(){
  let textBox_x1 = 100;
  let textBox_x2 = 1700;
  let textBox_y1 = 600;
  let textBox_y2 = 950;

  if (mouseIsPressed){
    if (mouseX > textBox_x1 && mouseX < textBox_x2 && 
      mouseY > textBox_y1 && mouseY < textBox_y2){
      if (!textBoxClicked) {
        textBoxClicked = true;
        mouse_click_sound.play();
        return true;
      }
    }
  } else if (keyIsPressed){
    if (key === ' '){
      if (!textBoxClicked) {
        textBoxClicked = true;
        return true;
      }
    }
  } else {
    textBoxClicked = false;
  }
  return false;
}
// 메모 영역을 누르면 다음으로
function memoOrSpaceClicked() {
  let memoX = width / 2;
  let memoY = height / 2;
  let memoRadius = 650;

  if (mouseIsPressed) {
    if (mouseX > memoX - memoRadius && mouseX < memoX + memoRadius && mouseY > memoY - memoRadius && mouseY < memoY + memoRadius) {
      if (!textBoxClicked) {
        textBoxClicked = true;
        return true;
      }
    }
  } else if (keyIsPressed) {
    if (key === ' ') {
      if (!textBoxClicked) {
        textBoxClicked = true;
        return true;
      }
    }
  } else {
    textBoxClicked = false;
  }
  return false;
}