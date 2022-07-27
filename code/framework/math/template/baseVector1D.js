module.exports=
    class BaseVector1D
    {
        constructor( X )
        {
            this.x = X;
        }

        get X()
        {
            return this.x;
        }

        set X( value )
        {
            this.x = value;
        }
    }