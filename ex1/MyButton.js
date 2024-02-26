function MyButton(props) {
    // [a, b] = [3, 5, 10];
    const [isClicked, setIsClicked] = React.useState(false);

    // React.reateElement(type, props, child) : 
    // : 원하는 컴포넌트(클래스)로 엘리먼트(인스턴스)를 생성하는 메서드
    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? '잘하셨습니다.' : '여기를 누르세요.'
    );
}
