import {
  ConditionBuilder,
  NumberKeyValue,
  ifDevice,
  ifInputSource,
  layer,
  duoLayer,
  map,
  rule,
  to$,
  toInputSource,
  toKey,
  withMapper,
  writeToProfile,
} from "karabiner.ts";

// Example of how to activate:
// 1. Hold both z and s
// 2. Let go of one of the two activation keys
// 3. While still holding an activation key: Press 1 to output ⌘
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
// 1. Hold both z and e
// 2. Let go of one of the two activation keys
// 3. While still holding an activation key: Press h to output 😊
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
// 1. Hold both z and m
// 2. Let go of one of the two activation keys
// 3. While still holding an activation key: Press q to output ∑
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
      to$("osascript -e 'tell application \"WezTerm\" to activate'"),
    ),
    map(2, "⌘").to(
      to$("osascript -e 'tell application \"Vivaldi\" to activate'"),
    ),
    map(3, "⌘").to(
      to$("osascript -e 'tell application \"Notion\" to activate'"),
    ),
    map(4, "⌘").to(to$("osascript -e 'tell application \"Jan\" to activate'")),
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

function yunzii_b68_bluetooth_Del_toggles_en_ja() {
  return rule(
    "YUNZII B68 BT: Right Option (Del) Language Toggle",
    ifYunziiB68InBluetoothMode,
  ).manipulators([
    map("right_option", "?any")
      .condition(ifInputSource({ language: "^ja$" }))
      .toIfAlone(toInputSource({ language: "en" })),
    map("right_option", "?any")
      .condition(ifInputSource({ language: "^en$" }))
      .toIfAlone(toKey("japanese_kana")),
  ]);
}

function yunzii_b68_bluetooth_PgUp_sends_media_keys() {
  return layer("page_up", "yunzii-media")
    .condition(ifYunziiB68InBluetoothMode)
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

    yunzii_b68_bluetooth_Del_toggles_en_ja(),
    yunzii_b68_bluetooth_PgUp_sends_media_keys(),
  ],
  {
    "duo_layer.delay_milliseconds": 150,
    "duo_layer.delay_by_default": true,
  },
);
