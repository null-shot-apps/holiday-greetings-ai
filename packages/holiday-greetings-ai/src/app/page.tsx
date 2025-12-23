'use client';

import { useState } from 'react';

const holidays = [
  { name: 'Christmas', emoji: '🎄', color: 'from-red-500 to-green-500' },
  { name: 'Hanukkah', emoji: '🕎', color: 'from-blue-400 to-blue-600' },
  { name: 'Kwanzaa', emoji: '🕯️', color: 'from-red-600 to-green-600' },
  { name: 'New Year', emoji: '🎉', color: 'from-purple-500 to-pink-500' },
  { name: 'Diwali', emoji: '🪔', color: 'from-orange-500 to-yellow-500' },
  { name: 'Eid', emoji: '🌙', color: 'from-emerald-500 to-teal-500' },
];

const tones = ['Warm', 'Funny', 'Professional', 'Poetic', 'Casual'];

export default function HolidayGreetings() {
  const [selectedHoliday, setSelectedHoliday] = useState(holidays[0]);
  const [selectedTone, setSelectedTone] = useState(tones[0]);
  const [recipientName, setRecipientName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateGreeting = () => {
    setIsGenerating(true);
    
    // Simulate AI generation with a delay
    setTimeout(() => {
      const greetings = {
        'Christmas-Warm': `Dear ${recipientName || 'Friend'},\n\nMay your Christmas be filled with warmth, joy, and the love of family and friends. Wishing you peace and happiness this holiday season and throughout the coming year.\n\nWith warm wishes,`,
        'Christmas-Funny': `Hey ${recipientName || 'there'}! 🎅\n\nHope your Christmas is merrier than Santa after he's finished his cookies! May your days be filled with laughter, your belly with good food, and your tree with presents (that you actually want).\n\nHo ho hope you have a blast!`,
        'Christmas-Professional': `Dear ${recipientName || 'Colleague'},\n\nOn behalf of our team, I extend warm wishes for a joyful Christmas season. May this time bring you rest, reflection, and renewed energy for the year ahead.\n\nBest regards,`,
        'Christmas-Poetic': `${recipientName || 'Dear one'},\n\nAs snowflakes dance and carols ring,\nMay Christmas joy to you take wing.\nWith twinkling lights and hearts aglow,\nMay peace and love around you flow.\n\nWarmest wishes,`,
        'Christmas-Casual': `Hey ${recipientName || 'friend'}! 🎄\n\nHope you have an awesome Christmas! Enjoy the time off, eat too much, and have fun with the fam. Catch you in the new year!\n\nCheers!`,
        'Hanukkah-Warm': `Dear ${recipientName || 'Friend'},\n\nMay the lights of the menorah bring warmth and joy to your home during these eight special nights. Wishing you and your loved ones a beautiful Hanukkah filled with miracles and blessings.\n\nWith love,`,
        'Hanukkah-Funny': `${recipientName || 'Friend'}! 🕎\n\nHope your Hanukkah is lit... literally! Eight nights of presents, latkes, and dreidel spinning. May your oil last, your gelt be plentiful, and your latkes be crispy!\n\nHappy spinning!`,
        'Hanukkah-Professional': `Dear ${recipientName || 'Colleague'},\n\nWishing you a meaningful Hanukkah celebration. May the Festival of Lights bring inspiration and joy to you and your family.\n\nWarm regards,`,
        'Hanukkah-Poetic': `${recipientName || 'Dear one'},\n\nEight flames that dance and glow so bright,\nBringing hope through winter's night.\nMay miracles and blessings flow,\nAs candles cast their gentle glow.\n\nL'chaim,`,
        'Hanukkah-Casual': `Hey ${recipientName || 'there'}! 🕎\n\nHappy Hanukkah! Hope you get some good gelt and eat lots of latkes. Enjoy the eight nights!\n\nMazel tov!`,
        'Kwanzaa-Warm': `Dear ${recipientName || 'Friend'},\n\nMay the seven principles of Kwanzaa guide you toward unity, purpose, and prosperity. Wishing you a meaningful celebration filled with community, culture, and joy.\n\nIn unity,`,
        'Kwanzaa-Funny': `${recipientName || 'Friend'}! 🕯️\n\nHappy Kwanzaa! May your week be filled with good vibes, great food, and even better company. Here's to celebrating heritage, culture, and seven days of awesome!\n\nHabari gani!`,
        'Kwanzaa-Professional': `Dear ${recipientName || 'Colleague'},\n\nWishing you a joyful Kwanzaa celebration. May the principles of this meaningful holiday inspire and guide you in the year ahead.\n\nRespectfully,`,
        'Kwanzaa-Poetic': `${recipientName || 'Dear one'},\n\nSeven candles, seven days,\nCelebrating ancient ways.\nUnity and faith combined,\nPurpose, creativity aligned.\n\nWith respect,`,
        'Kwanzaa-Casual': `Hey ${recipientName || 'friend'}! 🕯️\n\nHappy Kwanzaa! Hope you have an amazing celebration with family and friends. Enjoy the festivities!\n\nPeace!`,
        'New Year-Warm': `Dear ${recipientName || 'Friend'},\n\nAs we bid farewell to the old year and welcome the new, I wish you joy, health, and prosperity. May the coming year bring you closer to your dreams and fill your days with happiness.\n\nCheers to new beginnings,`,
        'New Year-Funny': `${recipientName || 'Party animal'}! 🎉\n\nNew year, new you... or same you, just with a fresh calendar! Either way, hope your year is filled with good times, bad jokes, and resolutions you'll definitely keep (for at least a week).\n\nHappy New Year!`,
        'New Year-Professional': `Dear ${recipientName || 'Colleague'},\n\nWishing you a prosperous and successful New Year. May the coming months bring new opportunities and continued growth.\n\nBest wishes,`,
        'New Year-Poetic': `${recipientName || 'Dear one'},\n\nAs midnight strikes and bells do chime,\nWe step into a brand new time.\nMay hope and joy your path illuminate,\nAnd every day be truly great.\n\nHappy New Year,`,
        'New Year-Casual': `Hey ${recipientName || 'friend'}! 🎉\n\nHappy New Year! Hope it's a good one. Let's make some memories!\n\nCheers!`,
        'Diwali-Warm': `Dear ${recipientName || 'Friend'},\n\nMay the festival of lights illuminate your life with joy, prosperity, and good health. Wishing you and your family a beautiful Diwali filled with love and happiness.\n\nWith warm wishes,`,
        'Diwali-Funny': `${recipientName || 'Friend'}! 🪔\n\nHappy Diwali! May your life be as bright as the diyas, as sweet as the mithai, and as colorful as the rangoli. And may your fireworks be louder than your neighbor's!\n\nShine on!`,
        'Diwali-Professional': `Dear ${recipientName || 'Colleague'},\n\nWishing you a joyous Diwali celebration. May the festival of lights bring prosperity and success to you and your loved ones.\n\nWarm regards,`,
        'Diwali-Poetic': `${recipientName || 'Dear one'},\n\nA thousand lamps that brightly gleam,\nFulfilling every hope and dream.\nMay light triumph over dark,\nAnd joy ignite within your heart.\n\nHappy Diwali,`,
        'Diwali-Casual': `Hey ${recipientName || 'there'}! 🪔\n\nHappy Diwali! Hope you have an amazing celebration with lots of lights, sweets, and good times!\n\nEnjoy!`,
        'Eid-Warm': `Dear ${recipientName || 'Friend'},\n\nEid Mubarak! May this blessed occasion bring peace, happiness, and prosperity to you and your loved ones. Wishing you a joyful celebration filled with love and gratitude.\n\nWith blessings,`,
        'Eid-Funny': `${recipientName || 'Friend'}! 🌙\n\nEid Mubarak! Hope your Eid is filled with delicious food, great company, and enough biryani to last a lifetime. May your celebrations be as sweet as the dates!\n\nEnjoy the feast!`,
        'Eid-Professional': `Dear ${recipientName || 'Colleague'},\n\nEid Mubarak! Wishing you a blessed celebration and a peaceful time with family and friends.\n\nBest regards,`,
        'Eid-Poetic': `${recipientName || 'Dear one'},\n\nAs crescent moon adorns the sky,\nAnd prayers and blessings multiply,\nMay peace and joy your heart embrace,\nAnd Allah's light illuminate your face.\n\nEid Mubarak,`,
        'Eid-Casual': `Hey ${recipientName || 'friend'}! 🌙\n\nEid Mubarak! Hope you have an awesome celebration. Enjoy the food and festivities!\n\nPeace!`,
      };

      const key = `${selectedHoliday.name}-${selectedTone}`;
      setGreeting(greetings[key] || 'Happy Holidays!');
      setIsGenerating(false);
    }, 1000);
  };

  return (
    <div className="min-h-[100dvh] w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            ✨ Festive Greeting Generator
          </h1>
          <p className="text-xl text-purple-200">
            Create personalized holiday greetings with AI magic
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Holiday Selection */}
          <div className="mb-8">
            <label className="block text-white text-lg font-semibold mb-4">
              Choose a Holiday
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {holidays.map((holiday) => (
                <button
                  key={holiday.name}
                  onClick={() => setSelectedHoliday(holiday)}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    selectedHoliday.name === holiday.name
                      ? `bg-gradient-to-r ${holiday.color} text-white scale-105 shadow-lg`
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <div className="text-3xl mb-2">{holiday.emoji}</div>
                  <div className="font-medium">{holiday.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Tone Selection */}
          <div className="mb-8">
            <label className="block text-white text-lg font-semibold mb-4">
              Select Tone
            </label>
            <div className="flex flex-wrap gap-3">
              {tones.map((tone) => (
                <button
                  key={tone}
                  onClick={() => setSelectedTone(tone)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedTone === tone
                      ? 'bg-white text-purple-900 scale-105 shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          {/* Recipient Name */}
          <div className="mb-8">
            <label className="block text-white text-lg font-semibold mb-4">
              Recipient Name (Optional)
            </label>
            <input
              type="text"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="Enter name..."
              className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={generateGreeting}
            disabled={isGenerating}
            className={`w-full py-5 rounded-xl font-bold text-lg transition-all duration-300 ${
              isGenerating
                ? 'bg-gray-500 cursor-not-allowed'
                : `bg-gradient-to-r ${selectedHoliday.color} hover:scale-105 shadow-lg hover:shadow-xl`
            } text-white`}
          >
            {isGenerating ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Generating...
              </span>
            ) : (
              `Generate ${selectedHoliday.emoji} Greeting`
            )}
          </button>

          {/* Generated Greeting */}
          {greeting && (
            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Your Greeting</h3>
                <button
                  onClick={() => navigator.clipboard.writeText(greeting)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                >
                  📋 Copy
                </button>
              </div>
              <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                {greeting}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-purple-200">
          <p>Spread joy and warmth this holiday season! 🎁</p>
        </div>
      </div>
    </div>
  );
}

