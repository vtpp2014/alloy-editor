YUI.add('button-strong', function(Y) {
    'use strict';

    var Lang = Y.Lang;

    /**
     * The ButtonStrong class provides functionality for applying "strong" (bold) style to a text selection.
     *
     * @class ButtonStrong
     */
    var Strong = Y.Base.create('strong', Y.Plugin.Base, [Y.ButtonBase], {
        TPL_CONTENT: '<i class="alloy-editor-icon-bold"></i>'
    }, {
        NAME: 'strong',

        NS: 'strong',

        ATTRS: {
            /**
             * Specifies the element (style) which this button handles.
             *
             * @attribute element
             * @default 'strong'
             * @type String
             */
            element: {
                validator: Lang.isString,
                value: 'strong'
            }
        }
    });

    Y.ButtonStrong = Strong;

}, '', {
    requires: ['button-base']
});