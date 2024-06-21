class Cat {
    constructor(){
        this.status = 0; // 얘 받아서 이미지 띄우기
    }
    update(){
        this.status++;
        if ((this.status) > (13*2)-1){ // 고양이 그림 [00~12]->[12->00]. 근데 인덱스 0부터 시작이니 1빼기
            this.status = 0;
        }
    }
}