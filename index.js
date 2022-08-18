superbowlWin = (record) => {
    const result = record.find( record => record.result === "W" );
// Ternary Expression
    return !!result ? result.year : undefined;
}



