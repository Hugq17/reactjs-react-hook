import { useState } from 'react'
import '../pages/useStateTest.css'

const order = [100, 200, 300, 400];
function UseStateTest() {
    // !!! cần đưa initial state có giá trị tính toán vào hàm khởi tạo, thì hãy sử dụng callback
    const [state, setState] = useState(() => {
        const total = order.reduce((total, cur) => total + cur)
        console.log(total)
        return total;
    });
    const handleClick = () => { // khi hàm này được gọi 
        // setState(state + 1) // thì câu lệnh thực hiện, và nó sẽ render lại code
        // setState((prev) => prev + 1) // su dung callback trong setState
        // setState((prev) => prev + 1)
        // setState((prev) => prev + 1)
        var a = [1, 2, 3, 45, 6];
        var b = [...a, 9];  // spread bảo lưu các giá trị cũ
        console.log(b);
    }
    return (
        <>
            <div>{state}</div>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}
export default UseStateTest