import {
  type ConditionBuilder,
  duoLayer,
  ifApp,
  ifDevice,
  ifInputSource,
  ifVar,
  layer,
  map,
  mapConsumerKey,
  mapPointingButton,
  type NumberKeyValue,
  rule,
  to$,
  toInputSource,
  toKey,
  toSetVar,
  withMapper,
  writeToProfile,
} from "karabiner.ts";

// Example of how to activate:
// 1. Hold both z and s, until the layer activation notification appears
// 2. (Optional) Let go of one of the two activation keys
// 3. While still holding an activation key:
//    Press 1 to output ⌘
//    Press more mapped keys to output more symbols
function layer_symbol_mode() {
  return duoLayer("z", "s")
    .notification()
    .manipulators([
      withMapper(["⌘", "⌥", "⌃", "⇧", "⇪"])((k, i) => map((i + 1) as NumberKeyValue).toPaste(k)),
      withMapper(["←", "→", "↑", "↓", "␣", "⏎", "⇥", "⎋", "⌫", "⌦", "⇪"])((k) => map(k).toPaste(k)),
    ]);
}

// Example of how to activate:
// 1. Hold both z and e, until the layer activation notification appears
// 2. (Optional) Let go of one of the two activation keys
// 3. While still holding an activation key:
//    Press h to output 😊
//    Press more mapped keys to output more emojis
function layer_emoji_mode() {
  return duoLayer("z", "e")
    .notification()
    .manipulators([
      map("0").toPaste("🍒"),
      map("1").toPaste("🍎"),
      map("2").toPaste("🍊"),
      map("3").toPaste("🍋"),
      map("4").toPaste("🍌"),
      map("5").toPaste("🍉"),
      map("6").toPaste("🍇"),
      map("7").toPaste("🍓"),
      map("8").toPaste("🍑"),
      map("9").toPaste("🍍"),
      map("a").toPaste("😮"),
      map("b").toPaste("🐻"),
      map("c").toPaste("😎"),
      map("d").toPaste("🐱"),
      map("e").toPaste("🐰"),
      map("f").toPaste("🔥"),
      map("g").toPaste("🐶"),
      map("h").toPaste("😊"),
      map("i").toPaste("💡"),
      map("j").toPaste("🤪"),
      map("k").toPaste("🐸"),
      map("l").toPaste("😂"),
      map("m").toPaste("🦊"),
      map("n").toPaste("👎"),
      map("o").toPaste("👌"),
      map("p").toPaste("🐧"),
      map("q").toPaste("❓"),
      map("r").toPaste("😡"),
      map("s").toPaste("😢"),
      map("t").toPaste("😴"),
      map("u").toPaste("🤮"),
      map("v").toPaste("🥦"),
      map("w").toPaste("😞"),
      map("y").toPaste("👍"),
      map("z").toPaste("🤐"),
    ]);
}

// Example of how to activate:
// 1. Hold both z and m, until the layer activation notification appears
// 2. (Optional) Let go of one of the two activation keys
// 3. While still holding an activation key:
//    Press q to output ∑
//    Press more mapped keys to output more symbols
function layer_math_mode() {
  return duoLayer("z", "m")
    .notification()
    .manipulators([
      // Greek Letters
      map("a").toPaste("α"), // Alpha
      map("b").toPaste("β"), // Beta
      map("c").toPaste("χ"), // Chi
      map("d").toPaste("δ"), // Delta
      map("e").toPaste("ε"), // Epsilon
      map("h").toPaste("η"), // Eta
      map("g").toPaste("γ"), // Gamma
      map("i").toPaste("ι"), // Iota
      map("k").toPaste("κ"), // Kappa
      map("l").toPaste("λ"), // Lambda
      map("m").toPaste("μ"), // Mu
      map("n").toPaste("ν"), // Nu
      map("o").toPaste("ο"), // Omicron
      map("w").toPaste("ω"), // Omega
      map("f").toPaste("φ"), // Phi
      map("p").toPaste("π"), // Pi
      map("y").toPaste("ψ"), // Psi
      map("r").toPaste("ρ"), // Rho
      map("s").toPaste("σ"), // Sigma
      map("u").toPaste("τ"), // Tau
      map("t").toPaste("θ"), // Theta
      map("x").toPaste("ξ"), // Xi
      map("z").toPaste("ζ"), // Zeta

      map("q").toPaste("∑"), // Sum
      map("j").toPaste("∫"), // Integral
      map("v").toPaste("√"), // Square root

      map("1").toPaste("¹"), // Superscript 1
      map("2").toPaste("²"), // Superscript 2
      map("3").toPaste("³"), // Superscript 3
      map("4").toPaste("⁴"), // Superscript 4
      map("5").toPaste("⁵"), // Superscript 5
      map("6").toPaste("⁶"), // Superscript 6
      map("7").toPaste("⁷"), // Superscript 7
      map("8").toPaste("⁸"), // Superscript 8
      map("9").toPaste("⁹"), // Superscript 9
      map("0").toPaste("⁰"), // Superscript 0

      map("equal_sign").toPaste("≠"),
      map("slash").toPaste("÷"),
      map("period").toPaste("⋅"),
    ]);
}

function caps_lock_sends_escape() {
  return rule("Caps Lock sends Escape").manipulators([map("caps_lock").to("escape")]);
}

function escape_also_sends_japanese_eisuu(conditions: ConditionBuilder[]) {
  return rule("Escape with Japanese Eisuu", ...conditions).manipulators([
    map("escape").to([toKey("escape"), toKey("japanese_eisuu")]),
  ]);
}

function cmd_shift_n_opens_new_vivaldi_tab() {
  return rule("Vivaldi New Tab with Focus").manipulators([
    map("n", "⌘⇧").to(
      to$(`#!/bin/bash
osascript -e 'tell application "Vivaldi" to activate'

osascript -e 'tell application "Vivaldi"
if (count of windows) = 0 then make new window
make new tab at end of tabs of front window
end tell'`),
    ),
  ]);
}

function activate_frequent_apps() {
  return rule("Focus Frequent Apps").manipulators([
    map("grave_accent_and_tilde", "⌘").to(
      to$("osascript -e 'tell application \"Finder\" to activate'"),
    ),
    map(1, "⌘").to(to$("osascript -e 'tell application \"Ghostty\" to activate'")),
    map(2, "⌘").to(to$("osascript -e 'tell application \"Vivaldi\" to activate'")),
    // map(3, "⌘").to(to$("osascript -e 'tell application \"Notion\" to activate'")),
  ]);
}

const ifBuiltinMacbookKeyboard: ConditionBuilder = ifDevice({
  vendor_id: 1452,
  product_id: 834,
  is_keyboard: true,
});

function right_option_toggles_en_ja_with_held_down_pass_through(conditions: ConditionBuilder[]) {
  return rule("Builtin MacBook Keyboard: Right Option Language Toggle", ...conditions).manipulators(
    [
      map("right_option", "?any")
        .condition(ifInputSource({ language: "^ja$" }))
        .toIfAlone(toInputSource({ language: "en" }))
        .toIfHeldDown(toKey("right_option"))
        .parameters({ "basic.to_if_held_down_threshold_milliseconds": 100 }),
      map("right_option", "?any")
        .condition(ifInputSource({ language: "^en$" }))
        .toIfAlone(toKey("japanese_kana"))
        .toIfHeldDown(toKey("right_option"))
        .parameters({ "basic.to_if_held_down_threshold_milliseconds": 100 }),
    ],
  );
}

function right_option_plus_right_shift_modifies_fn_one_through_twelve_to_brightness_and_volume_media_keys(
  conditions: ConditionBuilder[],
) {
  return rule(
    "Builtin MacBook Keyboard: Right Option + Right Shift + specific Fn keys send specific Media Keys",
    ...conditions,
  ).manipulators([
    map("f1", ["right_option", "right_shift"]).to("display_brightness_decrement"),
    map("f2", ["right_option", "right_shift"]).to("display_brightness_increment"),
    map("f10", ["right_option", "right_shift"]).to("mute"),
    map("f11", ["right_option", "right_shift"]).to("volume_decrement"),
    map("f12", ["right_option", "right_shift"]).to("volume_increment"),
  ]);
}

const ifYunziiB68KeyboardInBluetoothMode: ConditionBuilder = ifDevice({
  vendor_id: 13652,
  product_id: 64007,
  is_keyboard: true,
});

const ifYunziiB68KeyboardIn24GMode: ConditionBuilder = ifDevice({
  vendor_id: 13652,
  product_id: 64009,
  is_keyboard: true,
});

function right_option_toggles_en_ja(conditions: ConditionBuilder[]) {
  return rule("Right Option (Delete) Language Toggle", ...conditions).manipulators([
    map("right_option", "?any")
      .condition(ifInputSource({ language: "^ja$" }))
      .toIfAlone(toInputSource({ language: "en" })),
    map("right_option", "?any")
      .condition(ifInputSource({ language: "^en$" }))
      .toIfAlone(toKey("japanese_kana")),
  ]);
}

function page_up_and_manipulator_sends_media_key(conditions: ConditionBuilder[]) {
  return layer("page_up", "pgu-layer-var")
    .condition(...conditions)
    .manipulators([
      map("1").to("display_brightness_decrement"),
      map("2").to("display_brightness_increment"),
      map("0").to("mute"),
      map("hyphen").to("volume_decrement"),
      map("equal_sign").to("volume_increment"),
    ]);
}

const ifRazerBasiliskMouse: ConditionBuilder = ifDevice({
  vendor_id: 5426,
  product_id: 131,
  is_pointing_device: true,
});

const ifEchtPowerVerticalMouse: ConditionBuilder = ifDevice({
  vendor_id: 13652,
  product_id: 64518,
});

function mouse_wheel_sends_option_z(conditions: ConditionBuilder[]) {
  return rule("Mouse Button 3 → Option+Z", ...conditions).manipulators([
    mapPointingButton("button3").to("z", "⌥"),
  ]);
}

function mouse_button_4_sends_enter(conditions: ConditionBuilder[]) {
  return rule("Mouse Button 4 → Enter", ...conditions).manipulators([
    mapPointingButton("button4").to("return_or_enter"),
  ]);
}

const ifSanwaSupplyAirMouse: ConditionBuilder = ifDevice({
  vendor_id: 1444,
  product_id: 24576,
  is_keyboard: true,
  is_pointing_device: true,
});

const inGhostty: ConditionBuilder = ifApp("com.mitchellh.ghostty");

const piActiveVar = "pi-active";
const inPi: ConditionBuilder = ifVar(piActiveVar, true);
const outsidePi: ConditionBuilder = ifVar(piActiveVar, false);

function mouse_button_1_foregrounds_pi(conditions: ConditionBuilder[]) {
  return rule("Mouse button 1 sends F4", ...conditions).manipulators([
    mapPointingButton("button1").to([
      toSetVar(piActiveVar, true),
      //
      toKey("f"),
      toKey("g"),
      toKey("return_or_enter"),
    ]),
  ]);
}

function mouse_button_2_suspends_pi(conditions: ConditionBuilder[]) {
  return rule("Mouse button 2 sends F5", ...conditions).manipulators([
    mapPointingButton("button2").to([
      toSetVar(piActiveVar, false),
      //
      toKey("f5"),
    ]),
  ]);
}

function escape_toggles_microphone(conditions: ConditionBuilder[]) {
  return rule("Escape sends Option+z", ...conditions).manipulators([
    map("escape").to([
      toSetVar(piActiveVar, true),
      //
      toKey("z", "⌥"),
    ]),
  ]);
}

function ac_home_clears_pi_message(conditions: ConditionBuilder[]) {
  return rule("ac_home sends Alt+Ctrl+Shift+d", ...conditions).manipulators([
    mapConsumerKey("ac_home").to([
      toSetVar(piActiveVar, true),
      //
      toKey("d", "⌥⌃⇧"),
    ]),
  ]);
}

function prev_track_cycles_tmux_window(conditions: ConditionBuilder[]) {
  return rule("Prev Track sends F12", ...conditions).manipulators([
    mapConsumerKey("scan_previous_track").to("f12"),
  ]);
}

function prev_track_sends_colon_q_enter(conditions: ConditionBuilder[]) {
  return rule("Prev Track sends :q<CR>", ...conditions).manipulators([
    mapConsumerKey("scan_previous_track").to([
      toSetVar(piActiveVar, false),
      //
      toKey("semicolon", "⇧"),
      toKey("q"),
      toKey("return_or_enter"),
    ]),
  ]);
}

function play_sends_enter(conditions: ConditionBuilder[]) {
  return rule("Play sends Enter", ...conditions).manipulators([
    mapConsumerKey("play_or_pause").to("return_or_enter"),
  ]);
}

function spacebar_cycles_tmux_session(conditions: ConditionBuilder[]) {
  return rule("Spacebar sends f10", ...conditions).manipulators([map("spacebar").to("f10")]);
}

function next_track_interrupts_pi(conditions: ConditionBuilder[]) {
  return rule("Next Track sends F4", ...conditions).manipulators([
    mapConsumerKey("scan_next_track").to([
      toSetVar(piActiveVar, true),
      //
      toKey("f4"),
    ]),
  ]);
}

function vol_down_sends_tab(conditions: ConditionBuilder[]) {
  return rule("Volume Down sends tab", ...conditions).manipulators([
    mapConsumerKey("volume_decrement").toIfHeldDown("escape").toIfAlone("tab"),
  ]);
}

function mute_cycles_pi_thinking(conditions: ConditionBuilder[]) {
  return rule("Mute sends Option+t", ...conditions).manipulators([
    mapConsumerKey("mute").to([
      toSetVar(piActiveVar, true),
      //
      toKey("t", "⌥"),
    ]),
  ]);
}

function al_keyboard_layout_launches_pi_side_agent(conditions: ConditionBuilder[]) {
  return rule("al_keyboard_layout sends /unsafe-agent", ...conditions).manipulators([
    mapConsumerKey("al_keyboard_layout")
      .to([toSetVar(piActiveVar, true)])
      //
      .toTypeSequence("/unsafe-agent")
      .to("spacebar"),
  ]);
}

function vol_up_sends_at_symbol(conditions: ConditionBuilder[]) {
  return rule("Volume Up sends @", ...conditions).manipulators([
    mapConsumerKey("volume_increment").to([
      toSetVar(piActiveVar, true),
      //
      toKey("2", "⇧"),
    ]),
  ]);
}

function vol_up_sends_sss(conditions: ConditionBuilder[]) {
  return rule("Volume Up sends sss", ...conditions).manipulators([
    mapConsumerKey("volume_increment").to([
      toSetVar(piActiveVar, false),
      //
      toKey("s"),
      toKey("s"),
      toKey("s"),
      toKey("return_or_enter"),
    ]),
  ]);
}

writeToProfile(
  "Default profile",
  [
    // ==================================================================================
    // Settings for all keyboards
    // ==================================================================================

    layer_symbol_mode(),
    layer_emoji_mode(),
    layer_math_mode(),

    caps_lock_sends_escape(),
    cmd_shift_n_opens_new_vivaldi_tab(),
    activate_frequent_apps(),

    // ==================================================================================
    // Settings for specific keyboards
    // ==================================================================================

    escape_also_sends_japanese_eisuu([ifBuiltinMacbookKeyboard]),
    right_option_toggles_en_ja_with_held_down_pass_through([ifBuiltinMacbookKeyboard]),
    right_option_plus_right_shift_modifies_fn_one_through_twelve_to_brightness_and_volume_media_keys(
      [ifBuiltinMacbookKeyboard],
    ),

    escape_also_sends_japanese_eisuu([ifYunziiB68KeyboardIn24GMode]),
    right_option_toggles_en_ja([ifYunziiB68KeyboardIn24GMode]),
    page_up_and_manipulator_sends_media_key([ifYunziiB68KeyboardIn24GMode]),

    escape_also_sends_japanese_eisuu([ifYunziiB68KeyboardInBluetoothMode]),
    right_option_toggles_en_ja([ifYunziiB68KeyboardInBluetoothMode]),
    page_up_and_manipulator_sends_media_key([ifYunziiB68KeyboardInBluetoothMode]),

    // ==================================================================================
    // Settings for specific mice
    // ==================================================================================

    mouse_wheel_sends_option_z([ifRazerBasiliskMouse]),
    mouse_button_4_sends_enter([ifRazerBasiliskMouse]),

    mouse_wheel_sends_option_z([ifEchtPowerVerticalMouse]),
    mouse_button_4_sends_enter([ifEchtPowerVerticalMouse]),

    // (fg)                                                 (suspend)
    mouse_button_1_foregrounds_pi([ifSanwaSupplyAirMouse, inGhostty]),
    mouse_button_2_suspends_pi([ifSanwaSupplyAirMouse, inGhostty]),

    //                           (short: toggle mic)
    //                            (long: clear msg)
    escape_toggles_microphone([ifSanwaSupplyAirMouse, inGhostty]),
    ac_home_clears_pi_message([ifSanwaSupplyAirMouse, inGhostty]),

    // (tmux win / :q)            (short=play:     enter)            (interrupt)
    //                            (long=spacebar:  tmux sess)
    prev_track_cycles_tmux_window([ifSanwaSupplyAirMouse, inGhostty, inPi]),
    prev_track_sends_colon_q_enter([ifSanwaSupplyAirMouse, inGhostty, outsidePi]),
    play_sends_enter([ifSanwaSupplyAirMouse, inGhostty]),
    spacebar_cycles_tmux_session([ifSanwaSupplyAirMouse, inGhostty]),
    next_track_interrupts_pi([ifSanwaSupplyAirMouse, inGhostty]),

    // (tab)                      (short=mute:   thinking)            (@ / sss)
    //                            (long=keylay:  side-agent)
    vol_down_sends_tab([ifSanwaSupplyAirMouse, inGhostty, inPi]),
    mute_cycles_pi_thinking([ifSanwaSupplyAirMouse, inGhostty]),
    al_keyboard_layout_launches_pi_side_agent([ifSanwaSupplyAirMouse, inGhostty, inPi]),
    vol_up_sends_at_symbol([ifSanwaSupplyAirMouse, inGhostty, inPi]),
    vol_up_sends_sss([ifSanwaSupplyAirMouse, inGhostty, outsidePi]),
  ],
  {
    "duo_layer.delay_milliseconds": 150,
    "duo_layer.delay_by_default": true,
  },
);
