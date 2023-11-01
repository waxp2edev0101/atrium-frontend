import type Phaser from 'phaser'

export const createCharacterAnims = (
  anims: Phaser.Animations.AnimationManager
) => {
  const animsFrameRate = 15

  anims.create({
    frameRate: animsFrameRate * 0.6,
    frames: anims.generateFrameNames('nancy', {
      end: 5,
      start: 0,
    }),
    key: 'nancy_idle_right',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate * 0.6,
    frames: anims.generateFrameNames('nancy', {
      end: 11,
      start: 6,
    }),
    key: 'nancy_idle_up',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate * 0.6,
    frames: anims.generateFrameNames('nancy', {
      end: 17,
      start: 12,
    }),
    key: 'nancy_idle_left',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate * 0.6,
    frames: anims.generateFrameNames('nancy', {
      end: 23,
      start: 18,
    }),
    key: 'nancy_idle_down',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('nancy', {
      end: 29,
      start: 24,
    }),
    key: 'nancy_run_right',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('nancy', {
      end: 35,
      start: 30,
    }),
    key: 'nancy_run_up',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('nancy', {
      end: 41,
      start: 36,
    }),
    key: 'nancy_run_left',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('nancy', {
      end: 47,
      start: 42,
    }),
    key: 'nancy_run_down',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('nancy', {
      end: 48,
      start: 48,
    }),
    key: 'nancy_sit_down',
    repeat: 0,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('nancy', {
      end: 49,
      start: 49,
    }),
    key: 'nancy_sit_left',
    repeat: 0,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('nancy', {
      end: 50,
      start: 50,
    }),
    key: 'nancy_sit_right',
    repeat: 0,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('nancy', {
      end: 51,
      start: 51,
    }),
    key: 'nancy_sit_up',
    repeat: 0,
  })

  anims.create({
    frameRate: animsFrameRate * 0.6,
    frames: anims.generateFrameNames('lucy', {
      end: 5,
      start: 0,
    }),
    key: 'lucy_idle_right',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate * 0.6,
    frames: anims.generateFrameNames('lucy', {
      end: 11,
      start: 6,
    }),
    key: 'lucy_idle_up',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate * 0.6,
    frames: anims.generateFrameNames('lucy', {
      end: 17,
      start: 12,
    }),
    key: 'lucy_idle_left',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate * 0.6,
    frames: anims.generateFrameNames('lucy', {
      end: 23,
      start: 18,
    }),
    key: 'lucy_idle_down',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('lucy', {
      end: 29,
      start: 24,
    }),
    key: 'lucy_run_right',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('lucy', {
      end: 35,
      start: 30,
    }),
    key: 'lucy_run_up',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('lucy', {
      end: 41,
      start: 36,
    }),
    key: 'lucy_run_left',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('lucy', {
      end: 47,
      start: 42,
    }),
    key: 'lucy_run_down',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('lucy', {
      end: 48,
      start: 48,
    }),
    key: 'lucy_sit_down',
    repeat: 0,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('lucy', {
      end: 49,
      start: 49,
    }),
    key: 'lucy_sit_left',
    repeat: 0,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('lucy', {
      end: 50,
      start: 50,
    }),
    key: 'lucy_sit_right',
    repeat: 0,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('lucy', {
      end: 51,
      start: 51,
    }),
    key: 'lucy_sit_up',
    repeat: 0,
  })

  anims.create({
    frameRate: animsFrameRate * 0.6,
    frames: anims.generateFrameNames('ash', {
      end: 5,
      start: 0,
    }),
    key: 'ash_idle_right',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate * 0.6,
    frames: anims.generateFrameNames('ash', {
      end: 11,
      start: 6,
    }),
    key: 'ash_idle_up',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate * 0.6,
    frames: anims.generateFrameNames('ash', {
      end: 17,
      start: 12,
    }),
    key: 'ash_idle_left',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate * 0.6,
    frames: anims.generateFrameNames('ash', {
      end: 23,
      start: 18,
    }),
    key: 'ash_idle_down',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('ash', {
      end: 29,
      start: 24,
    }),
    key: 'ash_run_right',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('ash', {
      end: 35,
      start: 30,
    }),
    key: 'ash_run_up',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('ash', {
      end: 41,
      start: 36,
    }),
    key: 'ash_run_left',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('ash', {
      end: 47,
      start: 42,
    }),
    key: 'ash_run_down',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('ash', {
      end: 48,
      start: 48,
    }),
    key: 'ash_sit_down',
    repeat: 0,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('ash', {
      end: 49,
      start: 49,
    }),
    key: 'ash_sit_left',
    repeat: 0,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('ash', {
      end: 50,
      start: 50,
    }),
    key: 'ash_sit_right',
    repeat: 0,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('ash', {
      end: 51,
      start: 51,
    }),
    key: 'ash_sit_up',
    repeat: 0,
  })

  anims.create({
    frameRate: animsFrameRate * 0.6,
    frames: anims.generateFrameNames('adam', {
      end: 5,
      start: 0,
    }),
    key: 'adam_idle_right',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate * 0.6,
    frames: anims.generateFrameNames('adam', {
      end: 11,
      start: 6,
    }),
    key: 'adam_idle_up',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate * 0.6,
    frames: anims.generateFrameNames('adam', {
      end: 17,
      start: 12,
    }),
    key: 'adam_idle_left',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate * 0.6,
    frames: anims.generateFrameNames('adam', {
      end: 23,
      start: 18,
    }),
    key: 'adam_idle_down',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('adam', {
      end: 29,
      start: 24,
    }),
    key: 'adam_run_right',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('adam', {
      end: 35,
      start: 30,
    }),
    key: 'adam_run_up',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('adam', {
      end: 41,
      start: 36,
    }),
    key: 'adam_run_left',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('adam', {
      end: 47,
      start: 42,
    }),
    key: 'adam_run_down',
    repeat: -1,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('adam', {
      end: 48,
      start: 48,
    }),
    key: 'adam_sit_down',
    repeat: 0,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('adam', {
      end: 49,
      start: 49,
    }),
    key: 'adam_sit_left',
    repeat: 0,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('adam', {
      end: 50,
      start: 50,
    }),
    key: 'adam_sit_right',
    repeat: 0,
  })

  anims.create({
    frameRate: animsFrameRate,
    frames: anims.generateFrameNames('adam', {
      end: 51,
      start: 51,
    }),
    key: 'adam_sit_up',
    repeat: 0,
  })
}
