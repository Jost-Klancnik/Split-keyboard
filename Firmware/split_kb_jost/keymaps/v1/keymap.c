#include QMK_KEYBOARD_H
#include "unicode.h"

enum custom_keycodes {
    SI_S = SAFE_RANGE,
    SI_Z,
    SI_C,
};


enum layer_names {
    BASE,
    PROG,
    SI,
    SYS
};

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {

/* =======================
 * BASE
 * ======================= */
[BASE] = LAYOUT(
    KC_ESC,  KC_1,   KC_2,   KC_3,   KC_4,   KC_5,        KC_6,   KC_7,   KC_8,   KC_9,   KC_0,   KC_INS,
    KC_TAB,  KC_Q,   KC_W,   KC_E,   KC_R,   KC_T,        KC_Y,   KC_U,   KC_I,   KC_O,   KC_P,   KC_HOME,
    KC_LSFT, KC_A,   KC_S,   KC_D,   KC_F,   KC_G,        KC_H,   KC_J,   KC_K,   KC_L,   KC_SCLN,KC_END,
    KC_LGUI, KC_Z,   KC_X,   KC_C,   KC_V,   KC_B,        KC_M,   KC_N,   KC_COMM,KC_DOT, KC_SLSH,KC_PGUP,
    KC_LCTL, KC_LALT,KC_LGUI,KC_LEFT,KC_DOWN,KC_UP,       KC_RGHT,KC_RALT,KC_RCTL,_______,_______,KC_PGDN,
                                KC_SPC, MO(PROG),         TG(SI),KC_ENT
),

/*
[BASE] = LAYOUT(
    ESC,   1,   2,   3,   4,   5,        6,   7,   8,   9,   0,   INS,
    TAB,   q,   w,   e,   r,   t,        y,   u,   i,   o,   p,   HOME,
    SHIFT, a,   s,   d,   f,   g,        h,   j,   k,   l,   ;,   END,
    GUI,   z,   x,   c,   v,   b,        m,   n,   ,,   .,   /,   PGUP,
    CTRL,  ALT, GUI, ←,   ↓,   ↑,        →,   ALT, CTRL,_______,_______,PGDN,
                            SPACE, PROG,        SI,  ENTER
),
[BASE_SHIFT] = LAYOUT(
    _______,       !,      @,      #,      $,      %,           ^,      &,      *,      (,      ),_______,
    _______, _______,_______,_______,_______,_______,     _______,_______,_______,_______,_______,_______,
    _______, _______,_______,_______,_______,_______,     _______,_______,_______,_______,      :,_______,
    _______, _______,_______,_______,_______,_______,     _______,_______,      <,      >,      ?,_______,
    _______, _______,_______,_______,_______,_______,     _______,_______,_______,_______,_______,_______,
                            _______, _______,        _______, _______
),

*/

/* =======================
 * PROG – symbols + F-keys
 * ======================= */
[PROG] = LAYOUT(
    KC_F1,   KC_F2,   KC_F3,   KC_F4,   KC_F5,   KC_F6,        KC_F7,   KC_F8,   KC_F9,   KC_F10,  KC_F11,  KC_F12,
    _______, KC_EXLM, KC_QUES, KC_COLN, KC_TILD, _______,      _______, KC_PLUS, KC_MINS, KC_ASTR, KC_EQL,  _______,
    _______, KC_QUOT, KC_DQUO, KC_UNDS, KC_PIPE, _______,      _______, KC_LPRN, KC_RPRN, KC_LCBR, KC_RCBR, _______,
    _______, KC_PERC, KC_HASH, KC_DLR,  KC_BSLS, _______,      _______, KC_LBRC, KC_RBRC, KC_LT,   KC_GT,   _______,
    _______, _______, _______, _______, _______, _______,      _______, _______, _______, _______, _______, _______,
                                _______, _______,              _______, MO(SYS)
),


/*
[PROG] = LAYOUT(
    KC_F1,   KC_F2,  KC_F3,  KC_F4,  KC_F5,  KC_F6,       KC_F7,  KC_F8,  KC_F9,  KC_F10, KC_F11, KC_F12,
    _______,      !,      ?,      :,      ~,_______,     _______,      +,      -,      *,      =,_______,
    _______,      ',      ",      _,      |,_______,     _______,      (,      ),      {,      },_______,
    _______,      %,      #,      $,      \,_______,     _______,      [,      ],      <,      >,_______,
    _______,_______,_______,_______,_______,_______,     _______,_______,_______,_______,_______,_______,
                                _______, _______,        _______, SYS
),
 


*/

/* =======================
 * SI – slovenske črke
 * ======================= */
[SI] = LAYOUT(
    _______, _______, _______, _______, _______, _______,     _______, _______, _______, _______, _______, _______,
    _______, _______, _______, _______, _______, _______,     _______, _______, _______, _______, _______,    SI_S,
    _______, _______, _______, _______, _______, _______,     _______, _______, _______, _______,    SI_C,    SI_Z,
    _______, _______, _______, _______, _______, _______,     _______, _______, _______, _______, _______, _______,
    _______, _______, _______, _______, _______, _______,     _______, _______, _______, _______, _______, _______,
                                _______, _______,             _______, _______
),

/* =======================
 * SYS – media + boot
 * ======================= */
[SYS] = LAYOUT(
    _______, _______, _______, _______, _______, _______,     _______, _______, _______, _______, _______, _______,
    _______, KC_MPRV, KC_MPLY, KC_MNXT, _______, _______,     _______, _______, _______, _______, _______, _______,
    _______, KC_VOLD, KC_MUTE, KC_VOLU, _______, _______,     _______, _______, _______, _______, _______, _______,
    _______, _______, _______, _______, _______, _______,     _______, _______, _______, _______, _______, _______,
    _______, _______, _______, _______, _______, _______,     _______, _______, _______, _______, _______, _______,
                                _______, _______,             _______, _______
)

};

void keyboard_post_init_user(void) {
    set_unicode_input_mode(UNICODE_MODE_LINUX);
}


bool process_record_user(uint16_t keycode, keyrecord_t *record) {
    if (!record->event.pressed) return true;

    bool shifted = get_mods() & MOD_MASK_SHIFT;

    switch (keycode) {
        case SI_S:
            send_unicode_string(shifted ? "Š" : "š");
            return false;
        case SI_Z:
            send_unicode_string(shifted ? "Ž" : "ž");
            return false;
        case SI_C:
            send_unicode_string(shifted ? "Č" : "č");
            return false;
    }
    return true;
}
