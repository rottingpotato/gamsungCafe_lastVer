class Timer {
    constructor(duration, diff_display = false) {
        this.duration = duration; // ms 단위 타임셋팅
        this.timer_start = millis();
        this.left_time = duration;
        this.diff_display = diff_display; // 불리언값으로, 옵셔널한 파라미터. 
        // diff_display 자리에 true 넣으면 다른 위치에 디스플레이. 아니면 그냥 디폴트값 false로 설정됨
    }
  
    reset() {
        // 타이머를 리셋
        this.timer_start = millis();
        this.left_time = this.duration;
    }

    update() {
        let elapsed = millis() - this.timer_start;
        this.left_time = max(0, this.duration - elapsed);
    }
  
    display(fontType, fontSize) {
        this.update();
        textFont(fontType);
        textSize(fontSize);
        fill(0);

        if (this.left_time > 0) {
        // 남은 시간을 초 단위로 계산
            let left_seconds = Math.floor(this.left_time / 1000);
            
            if(!this.diff_display){ // 디폴트 위치 -> 살짝 왼쪽으로 옮겨야 함
                //timerBox 그리기
                noStroke();
                fill(180, 180, 180);
                rect(1620, 100, 165, 80, 10, 10, 10, 10);
                // 시간 포맷팅하여 00:XX 형식으로 표시
                let display_time = nf(left_seconds, 2); // nf: 숫자 포맷 수정 함수로 두 자리수 형식 변환
                fill(0);
                text(`TIMER  00:${display_time}`, 1465, 155);        
            } else { // 다른 위치에 그릴 때
                //// 다른 위치에 timerBox 그리기 -> 좌표 수정 필요
                noStroke();
                fill(180, 180, 180);
                rect(1620, 100, 165, 80, 10, 10, 10, 10);
                // 시간 포맷팅하여 00:XX 형식으로 표시
                let display_time = nf(left_seconds, 2); // nf: 숫자 포맷 수정 함수로 두 자리수 형식 변환
                fill(0);
                text(`TIMER  00:${display_time}`, 1465, 155); 
            }
        }
    }

    isTimeout() {
        // 타이머가 0이면 true 반환
        return this.left_time <= 0;
    } 
}
  