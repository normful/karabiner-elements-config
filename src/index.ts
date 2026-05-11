import {
  ConditionBuilder,
  NumberKeyValue,
  ifDevice,
  ifInputSource,
  layer,
  duoLayer,
  map,
  mapPointingButton,
  rule,
  to$,
  toInputSource,
  toKey,
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
      withMapper(["⌘", "⌥", "⌃", "⇧", "⇪"])((k, i) =>
        map((i + 1) as NumberKeyValue).toPaste(k),
      ),
      withMapper(["←", "→", "↑", "↓", "␣", "⏎", "⇥", "⎋", "⌫", "⌦", "⇪"])((k) =>
        map(k).toPaste(k),
      ),
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

function escape_also_sends_japanese_eisuu() {
  return rule("Escape with Japanese Eisuu").manipulators([
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
    map(1, "⌘").to(
      to$("osascript -e 'tell application \"Ghostty\" to activate'"),
    ),
    map(2, "⌘").to(
      to$("osascript -e 'tell application \"Vivaldi\" to activate'"),
    ),
    map(3, "⌘").to(
      to$("osascript -e 'tell application \"Notion\" to activate'"),
    ),
  ]);
}

const ifBuiltinMacbookKeyboard: ConditionBuilder = ifDevice({
  vendor_id: 1452,
  product_id: 834,
  is_keyboard: true,
});

function macbook_keyboard_RightOption_toggles_ja_en() {
  return rule(
    "Builtin MacBook Keyboard: Right Option Language Toggle",
    ifBuiltinMacbookKeyboard,
  ).manipulators([
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
  ]);
}

function macbook_keyboard_RightOption_and_RightShift_media_keys() {
  return rule(
    "Builtin MacBook Keyboard: Right Option + Right Shift + specific Fn keys send specific Media Keys",
    ifBuiltinMacbookKeyboard,
  ).manipulators([
    map("f1", ["right_option", "right_shift"]).to(
      "display_brightness_decrement",
    ),
    map("f2", ["right_option", "right_shift"]).to(
      "display_brightness_increment",
    ),
    map("f10", ["right_option", "right_shift"]).to("mute"),
    map("f11", ["right_option", "right_shift"]).to("volume_decrement"),
    map("f12", ["right_option", "right_shift"]).to("volume_increment"),
  ]);
}

const ifYunziiB68InBluetoothMode: ConditionBuilder = ifDevice({
  vendor_id: 13652,
  product_id: 64007,
  is_keyboard: true,
});

const ifYunziiB68In24GMode: ConditionBuilder = ifDevice({
  vendor_id: 13652,
  product_id: 64009,
  is_keyboard: true,
});

function right_option_toggles_en_ja(condition: ConditionBuilder) {
  return rule("Right Option (Delete) Language Toggle", condition).manipulators([
    map("right_option", "?any")
      .condition(ifInputSource({ language: "^ja$" }))
      .toIfAlone(toInputSource({ language: "en" })),
    map("right_option", "?any")
      .condition(ifInputSource({ language: "^en$" }))
      .toIfAlone(toKey("japanese_kana")),
  ]);
}

const ifRazerBasiliskMouse: ConditionBuilder = ifDevice({
  vendor_id: 5426,
  product_id: 131,
  is_pointing_device: true,
});

function mouse_button3_sends_option_z_to_toggle_mic(condition: ConditionBuilder) {
  return rule("Mouse Button 3 → Option+Z", condition).manipulators([
    mapPointingButton("button3").to("z", "⌥"),
  ]);
}

function page_up_and_manipulator_sends_media_key(condition: ConditionBuilder) {
  return layer("page_up", "pgu-layer-var")
    .condition(condition)
    .manipulators([
      map("1").to("display_brightness_decrement"),
      map("2").to("display_brightness_increment"),
      map("0").to("mute"),
      map("hyphen").to("volume_decrement"),
      map("equal_sign").to("volume_increment"),
    ]);
}

writeToProfile(
  "Default profile",
  [
    layer_symbol_mode(),
    layer_emoji_mode(),
    layer_math_mode(),

    escape_also_sends_japanese_eisuu(),
    cmd_shift_n_opens_new_vivaldi_tab(),
    activate_frequent_apps(),

    macbook_keyboard_RightOption_toggles_ja_en(),
    macbook_keyboard_RightOption_and_RightShift_media_keys(),

    right_option_toggles_en_ja(ifYunziiB68In24GMode),
    right_option_toggles_en_ja(ifYunziiB68InBluetoothMode),

    page_up_and_manipulator_sends_media_key(ifYunziiB68In24GMode),
    page_up_and_manipulator_sends_media_key(ifYunziiB68InBluetoothMode),

    mouse_button3_sends_option_z_to_toggle_mic(ifRazerBasiliskMouse),
  ],
  {
    "duo_layer.delay_milliseconds": 150,
    "duo_layer.delay_by_default": true,
  },
);
