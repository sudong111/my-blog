import {PostParam, ValidationResult} from "@/util/interface";

export function validation(category: string, data: unknown): ValidationResult {
    const errors: ValidationResult["errors"] = {};

    if(category === 'post') {
        const postParam = data as PostParam;

        if (!postParam.title.trim()) errors.title = "제목을 입력해주세요.";
        if (!postParam.user.trim()) errors.user = "사용자명을 입력해주세요.";
        if (!postParam.content.trim() || postParam.content === "<p></p>") errors.content = "내용을 입력해주세요.";
        if (!postParam.category.trim()) errors.category = "카테고리를 선택해주세요.";
        if (!postParam.create_time.trim()) errors.time = "시간 정보가 잘못되었습니다.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
}