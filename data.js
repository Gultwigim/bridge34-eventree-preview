/* ────────────────────────────────────────────────────────────────
   Bridge34 이벤트 카탈로그 — 이벤트 데이터 소스
   여기만 편집하면 카탈로그에 반영됨. (나중에 DB/어드민으로 승급 가능)
   handoff = 「참여하기」 클릭 시 이동할 기존 도구 딥링크.
   checkin=true 면 데일리 체크인 이벤트(로그인 없이 localStorage 연속기록).
   reward_via = 실제 리워드가 지급되는 도구(여기서 다계정 방어됨).
──────────────────────────────────────────────────────────────── */
const EVENTS = [
  {
    id: 'daily-checkin-jul',
    cat: '데일리 체크인', type: 'checkin', emoji: '🔥',
    title: '7일 연속 출석 챌린지',
    desc: '매일 출석 체크하고 7일 채우면 쿠폰! 리워드는 쿠포니에서 번호인증 후 지급.',
    reward: '스타벅스 기프티콘', reward_via: '쿠포니',
    status: 'live', dday: 'D-5', meta: '980명 참여',
    checkin: true, goal_days: 7,
    handoff: 'https://t.me/couponybot?start=checkin_jul',
  },
  {
    id: 'coupon-starbucks',
    cat: '쿠폰 이벤트', type: 'coupon', emoji: '🎟️',
    title: '스타벅스 쿠폰 선착순 증정',
    desc: '간단 미션 완료하고 아메리카노 기프티콘 받아가세요. 선착순 소진시 마감.',
    reward: '아메리카노 기프티콘', reward_via: '쿠포니',
    status: 'live', dday: 'D-3', meta: '2,140명 참여',
    handoff: 'https://t.me/couponybot?start=starbucks',
  },
  {
    id: 'event-seminar',
    cat: '출석·이벤트', type: 'event', emoji: '🎫',
    title: '세미나 사전등록 이벤트',
    desc: '사전등록하면 입장 확정 + 웰컴기프트. 이벤트리에서 실시간 입장확인.',
    reward: '웰컴 기프트', reward_via: '이벤트리',
    status: 'live', dday: 'D-9', meta: '420명 등록',
    handoff: 'https://eventree.live',
  },
  {
    id: 'pot-airdrop-2',
    cat: '토큰 분배', type: 'pot', emoji: '🪙',
    title: 'POT 토큰 에어드랍 라운드 2',
    desc: '온보딩 미션 완료 후 지갑 연결하면 토큰 분배. 반응게임 보너스 있음.',
    reward: 'POT 토큰', reward_via: 'POT',
    status: 'live', dday: 'D-2', meta: '1,510명 참여',
    handoff: '#',
  },
  {
    id: 'game-quiz',
    cat: '게임 이벤트', type: 'game', emoji: '🎮',
    title: '실시간 퀴즈 배틀 (현장)',
    desc: '행사장에서 QR 스캔 후 입장. 우승자 상품 증정. 최대 2,500명 동시.',
    reward: '현장 경품', reward_via: '게임',
    status: 'live', dday: '상시', meta: '현장 전용',
    handoff: 'https://game.bridge34.com',
  },
  {
    id: 'coupon-burger',
    cat: '쿠폰 이벤트', type: 'coupon', emoji: '🍔',
    title: '버거세트 1+1 쿠폰',
    desc: '번호 인증 후 즉시 발급. 제휴 매장에서 사용 가능.',
    reward: '버거세트 1+1', reward_via: '쿠포니',
    status: 'soon', dday: '7/10 오픈', meta: '오픈예정',
    handoff: '#',
  },
  {
    id: 'coupon-lucky',
    cat: '쿠폰 이벤트', type: 'coupon', emoji: '💎',
    title: '주간 럭키드로우 (종료)',
    desc: '매주 추첨으로 경품 증정. 이번 회차는 종료되었습니다.',
    reward: '주간 경품', reward_via: '쿠포니',
    status: 'ended', dday: '종료', meta: '3,200명 참여',
    handoff: '#',
  },
];
