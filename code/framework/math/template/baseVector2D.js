const BaseVector1D = require('./baseVector1D.js');

module.exports=
    class BaseVector2D
        extends BaseVector1D
    {
        constructor( X, Y )
        {
            super( X );
            this.y = Y;
        }

        get Y()
        {
            return this.y;
        }

        set Y( value )
        {
            this.y = value;
        }
    }