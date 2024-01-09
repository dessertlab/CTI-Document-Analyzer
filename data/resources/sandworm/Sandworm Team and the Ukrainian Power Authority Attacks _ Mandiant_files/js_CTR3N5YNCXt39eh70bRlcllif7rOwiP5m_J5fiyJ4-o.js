/* @license GNU-GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function($,Drupal,once){Drupal.behaviors.formtips={attach:function(context,settings){function hideOnClickOutside(element,$description){var outsideClickListener=function(event){var $target=$(event.target);if(!$target.hasClass('formtip')&&!$target.hasClass('formtips-processed'))$description.toggleClass('formtips-show',false);};$(document).on('click',outsideClickListener);}var formtip_settings=settings.formtips;var selectors=formtip_settings.selectors;if($.isArray(selectors))selectors=selectors.join(', ');var $descriptions=$('.form-item .description,.form-item__description,.form-item .filter-guidelines').not(selectors).not('.formtips-processed');$descriptions=$descriptions.filter(function(){return $.trim($(this).text())!=='';});if(formtip_settings.max_width.length)$descriptions.css('max-width',formtip_settings.max_width);$(document).on('keyup',function(e){if(e.which===27)$descriptions.removeClass('formtips-show');});$(once('formtips',$descriptions,context)).each(function(){var $formtip=$('<a class="formtip"></a>');var $description=$(this);var $item=$description.closest('.form-item');var descriptionId=$description.attr('id');if(!descriptionId)return;if(descriptionId.endsWith('-format-guidelines'))fieldId=descriptionId.slice(0,-18)+'-value';else fieldId=descriptionId.substring(0,descriptionId.lastIndexOf("-")-1);var $label=$item.find('[for="'+fieldId+'"]:not(.visually-hidden)');if(!$label.length)$label=$item.find('.fieldset-legend,label,.label,.form-item__label').first();var $fieldset=$item.find('.fieldset-legend');if($fieldset.length&&$item.find('input[type="checkbox"], input[type="radio"]').length)$label=$fieldset;if(!$label.length)return;$description.addClass('formtips-processed');$item.addClass('formtips-item');$description.toggleClass('formtips-show',false);$label.append($formtip);if(formtip_settings.trigger_action==='click'){$formtip.on('click',function(){$description.toggleClass('formtips-show');return false;});hideOnClickOutside($item[0],$description);}else $formtip.hoverIntent({sensitivity:formtip_settings.sensitivity,interval:formtip_settings.interval,over:function(){$description.toggleClass('formtips-show',true);},timeout:formtip_settings.timeout,out:function(){$description.toggleClass('formtips-show',false);}});});}};})(jQuery,Drupal,once);;