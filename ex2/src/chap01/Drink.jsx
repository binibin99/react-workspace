
// 상위 컴포넌트
function Drink(props) {
    return (
        <div>
            {/* 하위 컴포넌트 */}
            <h3>{/* javascript scope */`이 음료의 이름은 ${props.name}입니다`}</h3>
            <p>{`이 음료의 가격은 ${props.price}입니다.`}</p>
        </div>
    );
}

export default Drink;