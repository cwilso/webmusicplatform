if( ! Array.prototype.contains ){
    /**
     * @access public
     * @param value mixed 検索するオブジェクト
     * @return boolean 対象配列に既にオブジェクトが存在していれば true, そうでなければ false
     * 配列の値の重複チェックなどに使用。
     */
    Array.prototype.contains = function( value ){
        for(var i in this){
            if( this.hasOwnProperty(i) && this[i] === value){
                return true;
            }
        }
        return false;
    };
}
