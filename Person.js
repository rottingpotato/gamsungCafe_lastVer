class Person {
    constructor(){
        this.status = 0; // 얘 받아서 이미지 띄우기
        this.n;
    }
    update(){
        this.status++;
        if ((this.status) > (13*2)-1){ // 인간 그림 [00~05][00~05]->[05]->[b00->b05][b00->b05]->[b05]. 근데 인덱스 0부터 시작이니 1빼기
            this.status = 0;
        }
    }
}