import { FieldEmpty } from "./FieldEmpty.js";


class FieldRequire {
    static exec(input) {
        if(!input.value) throw new FieldEmpty(input);
    }

}

export default FieldRequire;