// className으로 설정하지 못하는(mui 스타일  등) 값을 정의하기 위한 constants 모음 
const DASHBOARD_STYLE = {
    MUI: {
        CARD: {
            DEFAULT_STYLE: { height: "100%", padding: "0px", maxHegiht: "100%" },
            GRID_AREA: {
                HEIGHT: "100%",
                BACKGROUND_COLOR: "#d9e1e8",
            },
            PADDING_ZERO: "0px",
        }
    }
};

const POD_INFO_STYLE = {
    MUI: {
        CARD: {
            DEFAULT_STYLE: { height: "100%", padding: "0px", maxHegiht: "100%" },
        }
    }
}; 

export {
    DASHBOARD_STYLE,
    POD_INFO_STYLE
}